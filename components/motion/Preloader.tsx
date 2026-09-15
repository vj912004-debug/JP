"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const PRELOAD_MS = 1300;

function markReady() {
  try {
    sessionStorage.setItem("jp-preloaded", "1");
  } catch {
    /* private mode */
  }
  window.dispatchEvent(new Event("jp:ready"));
}

export function Preloader() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let skipped = Boolean(reduceMotion);
    if (!skipped) {
      try {
        skipped = sessionStorage.getItem("jp-preloaded") === "1";
      } catch {
        skipped = false;
      }
    }

    if (skipped) {
      setVisible(false);
      markReady();
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setVisible(false);
      markReady();
      document.body.style.overflow = previous;
    }, PRELOAD_MS);

    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = previous;
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-dark-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <motion.span
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid h-16 w-16 place-items-center rounded-xs bg-orange-600 font-display text-2xl font-extrabold text-white"
          >
            JP
          </motion.span>
          <div className="h-px w-40 overflow-hidden bg-white/15">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full w-full bg-gradient-to-r from-orange-500 to-blue-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
