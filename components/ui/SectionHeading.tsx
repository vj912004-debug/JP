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
              light ? "text-orange-400" : "text-orange-600"
            )}
          >
            {index && <span className="tabular-nums">{index}</span>}
            {index && kicker && (
              <span
                className={cn(
                  "h-px w-8",
                  light ? "bg-orange-400/60" : "bg-orange-600/60"
                )}
              />
            )}
            {kicker && <span>{kicker}</span>}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "font-display text-h2-mobile font-extrabold tracking-tight sm:text-h2 text-balance",
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
              light ? "text-white/70" : "text-ink-secondary"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
