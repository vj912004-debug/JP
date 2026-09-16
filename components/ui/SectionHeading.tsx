import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: {
  index?: string;
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {(index || kicker) && (
        <Reveal>
          <div
            className={cn(
              "mb-4 flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.14em]",
              align === "center" && "justify-center",
              light ? "text-lime" : "text-brand"
            )}
          >
            {index && <span className="tabular-nums">{index}</span>}
            {index && kicker && (
              <span className={cn("h-px w-8", light ? "bg-lime/70" : "bg-brand/50")} />
            )}
            {kicker && <span>{kicker}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "text-balance font-display text-h2-mobile font-semibold tracking-tight sm:text-h2",
            light ? "text-white" : "text-ink-primary"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              light ? "text-white/75" : "text-ink-secondary"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
