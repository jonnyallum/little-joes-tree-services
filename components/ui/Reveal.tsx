"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Scroll-reveal with optional flavour (rise + fade, with optional scale/blur).
 * Honours prefers-reduced-motion (renders static). Smooth, high-end, no gimmicks.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 18,
  scale = false,
  blur = false,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
  y?: number;
  scale?: boolean;
  blur?: boolean;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y, scale: scale ? 0.94 : 1, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
