"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { company, stats } from "@/data/company";

const years = new Date().getFullYear() - company.since;

const items = [
  { value: years, suffix: "+", label: "Years in steel" },
  { value: stats[0].value, suffix: stats[0].suffix, label: "Ready stock" },
  { value: stats[2].value, suffix: "+", label: "CNC machines" },
  { value: 100, suffix: "%", label: "In-house processing" },
];

export function TrustStats() {
  return (
    <section id="stats" className="relative z-10 -mt-2 pb-6 sm:pb-8">
      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-[22px] border border-hairline-light bg-white px-5 py-6 shadow-subtle sm:px-6 sm:py-7"
            >
              <p className="font-display text-3xl font-semibold tabular-nums text-ink sm:text-4xl">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-ink-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
