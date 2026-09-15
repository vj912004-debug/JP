"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs, testimonials } from "@/data/content";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const item = testimonials[index];

  useEffect(() => {
    if (reduceMotion || paused) return;
    const t = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, [reduceMotion, paused]);

  return (
    <section className="bg-surface-secondary py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="09"
          kicker="What buyers tell us"
          title="The order should feel simple, even when the plate is not"
        />

        <div
          className="relative mx-auto mt-12 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mb-6 text-orange-500/70" size={28} strokeWidth={1.5} />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.quote}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-h4-mobile font-semibold leading-snug text-ink-primary sm:text-h4"
            >
              {item.quote}
            </motion.blockquote>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p
              key={item.role}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-sm font-medium text-ink-muted"
            >
              {item.role}
              <span className="text-ink-subtle"> · {item.place}</span>
            </motion.p>
          </AnimatePresence>

          <div className="mt-8 flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.role}
                type="button"
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-10 bg-orange-600" : "w-4 bg-hairline-medium hover:bg-blue-800/40"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading kicker="FAQ" title="Questions we answer before the PO" />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-hairline-light overflow-hidden rounded-card border border-hairline-light bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                >
                  <span className="font-display text-[15px] font-bold text-ink-primary sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-orange-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-ink-secondary sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
