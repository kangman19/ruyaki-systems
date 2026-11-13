import { useSyncExternalStore } from "react";

/**
 * Motion tiers
 *  - "full": every animation, native refresh rate
 *  - "lite": entrance/transition animations only. No infinite loops, blur
 *            blobs, backdrop blur, cursor effects or scroll-linked effects.
 *  - "off":  user asked for reduced motion. Nothing moves.
 */
export type MotionTier = "full" | "lite" | "off";

const RANK: Record<MotionTier, number> = { full: 2, lite: 1, off: 0 };
const worst = (a: MotionTier, b: MotionTier): MotionTier => (RANK[a] <= RANK[b] ? a : b);

// GPUs too weak for blur/compositing-heavy effects (old Adreno/Mali, software rendering).
const WEAK_GPU =
  /SwiftShader|llvmpipe|Software|PowerVR|Adreno[^\d]*[3-5]\d\d\b|Adreno[^\d]*6[0-4]\d\b|Mali-(T|4|G3|G5|G7[0-2]\b)/i;

type NavigatorExt = Navigator & {
  deviceMemory?: number;
  connection?: { saveData?: boolean; effectiveType?: string; addEventListener?: (t: string, cb: () => void) => void };
  getBattery?: () => Promise<{ level: number; charging: boolean; addEventListener: (t: string, cb: () => void) => void }>;
};

function gpuRenderer(): string {
  try {
    const gl = document.createElement("canvas").getContext("webgl");
    const ext = gl?.getExtension("WEBGL_debug_renderer_info");
    const name = gl && ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : "";
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return name;
  } catch {
    return "";
  }
}

/** Synchronous signals: OS preference, data saver, RAM, cores, GPU. */
function staticSignals(): MotionTier {
  const n = navigator as NavigatorExt;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return "off";
  const c = n.connection;
  if (c?.saveData || /(^|-)2g$/.test(c?.effectiveType ?? "")) return "lite";
  if (n.deviceMemory && n.deviceMemory <= 4) return "lite";
  if (n.hardwareConcurrency && n.hardwareConcurrency <= 2) return "lite";
  if (WEAK_GPU.test(gpuRenderer())) return "lite";
  return "full";
}

// ─── Tiny external store so any component can subscribe ──────────────────────
let current: MotionTier | null = null;
const listeners = new Set<() => void>();

function readInitial(): MotionTier {
  const attr = document.documentElement.getAttribute("data-motion");
  return attr === "off" || attr === "lite" || attr === "full" ? attr : "full";
}

/** Current tier (safe to call inside effects; reads the pre-paint value if detection hasn't finished). */
export function getMotionTier(): MotionTier {
  if (typeof document === "undefined") return "full";
  return (current ??= readInitial());
}

function setTier(next: MotionTier) {
  // Only ever downgrade, so the UI never flaps between tiers.
  const merged = worst(getMotionTier(), next);
  if (merged === current && document.documentElement.getAttribute("data-motion") === merged) return;
  current = merged;
  document.documentElement.setAttribute("data-motion", merged);
  listeners.forEach((l) => l());
}

/** Median frame time (ms) over `ms` of requestAnimationFrame. Returns 0 if the tab was hidden. */
function sampleFrameTime(ms: number): Promise<number> {
  return new Promise((resolve) => {
    const deltas: number[] = [];
    let last = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (document.hidden) return resolve(0);
      if (last) deltas.push(now - last);
      last = now;
      if (now - start < ms) requestAnimationFrame(tick);
      else {
        deltas.sort((a, b) => a - b);
        resolve(deltas.length > 5 ? deltas[Math.floor(deltas.length / 2)] : 0);
      }
    };
    requestAnimationFrame(tick);
  });
}

const SLOW_FRAME_MS = 24; // sustained < ~42fps
let started = false;

/** Call once on the client. Applies static signals, then benchmarks and keeps watching. */
export function startMotionTier() {
  if (started || typeof window === "undefined") return;
  started = true;

  setTier(staticSignals());

  // Live changes: user toggles reduced motion / data saver mid-session.
  const mq = matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", () => mq.matches && setTier("off"));
  (navigator as NavigatorExt).connection?.addEventListener?.("change", () => setTier(staticSignals()));

  // Low battery and not charging -> lite.
  (navigator as NavigatorExt).getBattery?.().then((b) => {
    const check = () => b.level <= 0.2 && !b.charging && setTier("lite");
    check();
    b.addEventListener("levelchange", check);
    b.addEventListener("chargingchange", check);
  }).catch(() => {});

  // Runtime benchmark + continuous watch (catches Low Power Mode on iOS and thermal throttling).
  let slowStreak = 0;
  const watch = async (round: number) => {
    if (getMotionTier() !== "full" || round > 24) return;
    const ft = await sampleFrameTime(round === 0 ? 800 : 1000);
    if (ft > SLOW_FRAME_MS) slowStreak++;
    else if (ft > 0) slowStreak = 0;
    // First benchmark is decisive; later ones need 2 slow windows in a row.
    if (slowStreak >= (round === 0 ? 1 : 2)) return setTier("lite");
    setTimeout(() => watch(round + 1), 5000);
  };
  // Wait until the page is idle so the benchmark isn't measuring our own hydration.
  const kick = () => setTimeout(() => watch(0), 1200);
  document.readyState === "complete" ? kick() : window.addEventListener("load", kick, { once: true });
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** Reactive tier for components. Server and first hydration render "full". */
export function useMotionTier(): MotionTier {
  return useSyncExternalStore(subscribe, getMotionTier, () => "full");
}

/** True only for mouse/trackpad devices. Tablets and phones return false even at wide widths. */
export function useFinePointer(): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = matchMedia("(hover: hover) and (pointer: fine)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => matchMedia("(hover: hover) and (pointer: fine)").matches,
    () => false
  );
}
