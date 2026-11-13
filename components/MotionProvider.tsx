"use client";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { startMotionTier, useMotionTier } from "@/lib/motion";

/** Starts device detection once and tells Framer Motion to stand down when the tier is "off". */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const tier = useMotionTier();
  useEffect(() => { startMotionTier(); }, []);
  return (
    <MotionConfig reducedMotion={tier === "off" ? "always" : "user"}>
      {children}
    </MotionConfig>
  );
}
