import { cn } from "@/lib/utils";

export function Logo({
  inverted = false,
  compact = false,
  className,
}: {
  inverted?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex max-w-full min-w-0 items-center gap-2.5", className)}>
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand text-white shadow-subtle"
        aria-hidden
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            d="M9 2.2c.3 2.4 1.7 4.2 4.2 5.2C11.4 8.2 9.8 10 9 12.6 8.2 10 6.6 8.2 4.8 7.4 7.3 6.4 8.7 4.6 9 2.2Z"
            fill="currentColor"
          />
          <path d="M9 12.4v3.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "truncate font-display text-[17px] font-semibold tracking-tight sm:text-[19px]",
            inverted ? "text-white" : "text-ink"
          )}
        >
          Jagdamba
        </span>
        {!compact && (
          <span className="mt-1 truncate text-[10px] font-medium uppercase tracking-[0.16em] text-ink-muted">
            Procut · Vadodara
          </span>
        )}
      </span>
    </span>
  );
}
