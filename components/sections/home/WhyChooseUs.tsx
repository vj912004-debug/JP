"use client";

import * as Icons from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import { stats, whyChooseUs, company } from "@/data/company";
import { cn } from "@/lib/utils";

const featured = new Set([0, 4]);

const whyCounters = [
  { value: new Date().getFullYear() - company.since, suffix: "+", label: "Years in steel" },
  { value: stats[0].value, suffix: stats[0].suffix, label: stats[0].label },
  { value: stats[2].value, suffix: "", label: stats[2].label },
  { value: stats[1].value, suffix: "", label: stats[1].label },
];

export function WhyChooseUs() {
  return (
    <section className="bg-surface-secondary py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          kicker="Why Choose Us"
          title="Capability that shows up in every order"
          align="left"
        />

        <RevealStagger className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {whyCounters.map((item) => (
            <motion.div
              key={item.label}
              variants={staggerItem}
              className="rounded-card border border-hairline-light bg-white px-5 py-5"
            >
              <p className="font-display text-stat-mobile font-extrabold tabular-nums text-blue-950 sm:text-4xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-ink-muted">{item.label}</p>
            </motion.div>
          ))}
        </RevealStagger>

        <RevealStagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.CheckCircle2;
            const big = featured.has(i);
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-card border p-6 transition-shadow duration-300 ease-engineered shine-hover hover:z-10",
                  big
                    ? "bg-blue-950 border-blue-900 sm:col-span-2 hover:shadow-blue-glow"
                    : "bg-white border-hairline-light hover:border-blue-800/40 hover:shadow-card-hover"
                )}
              >
                {big && (
                  <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-50" />
                )}
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition-opacity duration-500",
                    big ? "bg-orange-500/30 opacity-70 group-hover:opacity-100" : "bg-blue-500/10 opacity-0 group-hover:opacity-100"
                  )}
                />
                <div className="relative">
                  <span
                    className={cn(
                      "grid h-11 w-11 place-items-center rounded-xs transition-transform duration-300 group-hover:scale-110",
                      big ? "bg-orange-600" : "bg-blue-50"
                    )}
                  >
                    <Icon size={20} strokeWidth={1.75} className={big ? "text-white" : "text-blue-900"} />
                  </span>
                  <h3
                    className={cn(
                      "mt-5 font-display text-lg font-bold",
                      big ? "text-white" : "text-ink-primary"
                    )}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2.5 text-[14.5px] leading-relaxed",
                      big ? "text-white/60" : "text-ink-muted"
                    )}
                  >
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
