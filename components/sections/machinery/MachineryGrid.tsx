"use client";

import * as Icons from "lucide-react";
import { machineryList } from "@/data/machinery";
import { Reveal, ImageReveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

function parseCount(count: string) {
  const match = count.match(/^(\d+)\s*(.*)$/);
  if (!match) return null;
  return { value: Number(match[1]), rest: match[2] };
}

export function MachineryGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {machineryList.map((m, i) => {
        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[m.icon] ?? Icons.Wrench;
        const parsed = parseCount(m.count);
        return (
          <Reveal key={m.name} delay={(i % 3) * 0.06}>
            <div className="h-full overflow-hidden rounded-card border border-hairline-light bg-white">
              <ImageReveal from={i % 2 === 0 ? "right" : "bottom"} className="aspect-[4/3] overflow-hidden">
                <ImagePlaceholder category={m.imageCategory} className="h-full w-full" compact />
              </ImageReveal>
              <div className="p-5">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xs bg-blue-50 text-blue-900">
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.06em] text-orange-600">
                    {parsed ? (
                      <>
                        <AnimatedCounter value={parsed.value} />
                        {parsed.rest ? ` ${parsed.rest}` : ""}
                      </>
                    ) : (
                      m.count
                    )}
                  </span>
                </div>
                <h3 className="mt-3.5 font-display text-base font-bold text-ink-primary">{m.name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{m.spec}</p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
