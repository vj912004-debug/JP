"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600"
      style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
    />
  );
}
