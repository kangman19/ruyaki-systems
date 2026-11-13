/**
 * Runs inline in <head> BEFORE first paint so weak devices never flash the
 * heavy version. Server-safe (no "use client") because layout.tsx is a server
 * component. Keep the logic in sync with staticSignals() in lib/motion.ts.
 */
export const MOTION_BOOT_SCRIPT = `(function(){try{
var n=navigator,c=n.connection||{},d=document.documentElement,t="full";
if(matchMedia("(prefers-reduced-motion: reduce)").matches)t="off";
else if(c.saveData||/(^|-)2g$/.test(c.effectiveType||"")||(n.deviceMemory&&n.deviceMemory<=4)||(n.hardwareConcurrency&&n.hardwareConcurrency<=2))t="lite";
d.setAttribute("data-motion",t);
}catch(e){}})();`;
