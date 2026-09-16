"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone } from "lucide-react";
import { headerNav } from "@/data/navigation";
import { company } from "@/data/company";
import { RadialGlowButton } from "@/components/ui/radial-glow-button";
import { Logo } from "@/components/ui/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] overflow-hidden bg-surface lg:hidden"
        >
          <div className="relative flex h-[76px] items-center justify-between border-b border-hairline-light px-5">
            <Logo compact />
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-full border border-hairline-light bg-white text-ink"
            >
              <X size={20} />
            </button>
          </div>

          <motion.nav
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.045 } } }}
            className="relative z-10 flex h-[calc(100%-76px)] flex-col overflow-y-auto px-5 pb-8"
          >
            <div className="flex flex-col divide-y divide-hairline-light border-b border-hairline-light">
              {headerNav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease } },
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 font-display text-2xl font-semibold tracking-tight text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <RadialGlowButton href="/quote" onClick={onClose} className="w-full">
                Get a Quote
              </RadialGlowButton>
              <a
                href={`tel:+91${company.people[0].phones[0]}`}
                className="inline-flex items-center justify-center gap-2 text-sm text-ink-muted"
              >
                <Phone size={14} className="text-brand" />
                +91 {company.people[0].phones[0]}
              </a>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
