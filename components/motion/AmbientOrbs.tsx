export function AmbientOrbs({ variant = "dark" }: { variant?: "dark" | "blue" | "light" }) {
  const tones =
    variant === "blue"
      ? {
          a: "bg-orange-500/20",
          b: "bg-blue-400/15",
          c: "bg-orange-400/10",
        }
      : variant === "light"
        ? {
            a: "bg-orange-400/20",
            b: "bg-blue-500/12",
            c: "bg-blue-300/16",
          }
        : {
            a: "bg-orange-600/25",
            b: "bg-blue-600/20",
            c: "bg-orange-400/12",
          };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute -left-24 top-8 h-64 w-64 rounded-full blur-3xl animate-pulse-glow ${tones.a}`} />
      <div
        className={`absolute -right-16 bottom-0 h-72 w-72 rounded-full blur-3xl animate-float ${tones.b}`}
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className={`absolute left-1/3 top-1/2 h-40 w-40 rounded-full blur-3xl animate-pulse-glow ${tones.c}`}
        style={{ animationDelay: "0.6s" }}
      />
    </div>
  );
}
