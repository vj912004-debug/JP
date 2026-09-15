import { cn } from "@/lib/utils";

export function Badge({
  children,
  variant = "orange",
  className,
}: {
  children: React.ReactNode;
  variant?: "orange" | "blue" | "light";
  className?: string;
}) {
  const styles = {
    orange: "bg-orange-100 text-orange-800 border-hairline-orange",
    blue: "bg-blue-50 text-blue-900 border-hairline-blue",
    light: "bg-white/10 text-white border-white/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em]",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-card border border-hairline-light bg-white p-6 shadow-subtle transition-all duration-300 ease-engineered",
        hover && "shine-hover card-lift hover:border-blue-800/40 hover:shadow-card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SpecList({
  items,
  light = false,
}: {
  items: readonly { label: string; value: string }[];
  light?: boolean;
}) {
  return (
    <dl className={cn("divide-y", light ? "divide-white/10" : "divide-hairline-light")}>
      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <dt className={cn("text-sm font-medium", light ? "text-white/55" : "text-ink-muted")}>
            {item.label}
          </dt>
          <dd className={cn("text-[15px] font-semibold sm:text-right", light ? "text-white" : "text-ink-primary")}>
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: (string | React.ReactNode)[][];
}) {
  return (
    <div className="overflow-x-auto rounded-card border border-hairline-light">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-blue-950">
            {columns.map((col) => (
              <th
                key={col}
                className="px-5 py-3.5 font-display text-xs font-bold uppercase tracking-[0.06em] text-white"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-hairline-light last:border-0",
                i % 2 === 1 && "bg-surface-secondary/60"
              )}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-5 py-3.5 align-top text-ink-secondary">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-secondary">
      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
      {children}
    </li>
  );
}
