import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg" | "sm";

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-btn font-sans font-semibold transition-all duration-300 ease-engineered focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "shine-hover bg-orange-600 text-white hover:bg-orange-700 hover:-translate-y-0.5 hover:shadow-orange-glow active:translate-y-0",
  secondary:
    "bg-blue-900 text-white hover:bg-blue-950 hover:-translate-y-0.5 hover:shadow-card-hover active:translate-y-0",
  outline:
    "bg-transparent text-blue-900 border border-blue-900/30 hover:border-blue-900 hover:bg-blue-50 hover:-translate-y-0.5",
  "outline-light":
    "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "bg-transparent text-ink-secondary hover:text-blue-900",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-[15px] px-5 py-3",
  lg: "text-base px-7 py-4",
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  type = "button",
  target,
  disabled = false,
}: {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
  type?: "button" | "submit";
  target?: string;
  disabled?: boolean;
}) {
  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    "group",
    disabled && "pointer-events-none opacity-60",
    className
  );

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-300 ease-engineered group-hover:translate-x-1.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  );
}
