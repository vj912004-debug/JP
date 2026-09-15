"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Phone } from "lucide-react";
import { primaryNav } from "@/data/navigation";
import { company } from "@/data/company";
import { Button } from "@/components/ui/Button";

export function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

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
          className="fixed inset-0 z-[60] overflow-hidden bg-dark-950 lg:hidden"
        >
          <div className="pointer-events-none absolute inset-0 bg-technical-grid-animated opacity-40" />
          <div className="relative flex h-[76px] items-center justify-between px-5">
            <span className="font-display text-[15px] font-bold text-white">
              JAGDAMBA PROCUT PVT. LTD.
            </span>
            <button
              aria-label="Close menu"
              onClick={onClose}
              className="grid h-10 w-10 place-items-center rounded-xs border border-white/20 text-white"
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
            <div className="flex flex-col divide-y divide-white/10 border-b border-white/10">
              {primaryNav.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: 16 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="flex items-center justify-between py-4">
                    <Link
                      href={item.href}
                      onClick={() => !item.children && onClose()}
                      className="font-display text-lg font-semibold text-white"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        aria-label={`Toggle ${item.label}`}
                        onClick={() =>
                          setExpanded(expanded === item.label ? null : item.label)
                        }
                        className="grid h-9 w-9 place-items-center text-white/70"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <AnimatePresence>
                    {item.children && expanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-1 pb-4 pl-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="rounded-xs px-3 py-2 text-[15px] text-white/70 hover:bg-white/5 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              className="mt-6 flex flex-col gap-3"
            >
              <Button href="/quote" variant="primary" size="lg" onClick={onClose} className="w-full">
                Request a Quote
              </Button>
              <Button
                href="/stock-enquiry"
                variant="outline-light"
                size="lg"
                onClick={onClose}
                className="w-full"
              >
                Stock Enquiry
              </Button>
              <a
                href={`tel:+91${company.people[0].phones[0]}`}
                className="mt-2 flex items-center justify-center gap-2 text-sm font-medium text-white/60"
              >
                <Phone size={14} />
                Call {company.people[0].name}: +91 {company.people[0].phones[0]}
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
