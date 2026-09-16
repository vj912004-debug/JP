import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  speed = "normal",
  pauseOnHover = true,
}: {
  items: readonly string[];
  className?: string;
  speed?: "normal" | "fast";
  pauseOnHover?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div
      aria-hidden
      className={cn(
        "group relative overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-track]:[animation-play-state:paused]",
        className
      )}
    >
      <div
        className={cn(
          "marquee-track flex w-max items-center",
          speed === "fast" ? "animate-marquee-fast" : "animate-marquee"
        )}
      >
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-6 flex shrink-0 items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-subtle"
          >
            <span className="text-brand">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
