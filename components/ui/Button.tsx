"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/ui/animated-button";

type Variant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type Size = "md" | "lg" | "sm";

const variants: Record<Variant, string> = {
  primary:
    "btn btn-primary btn-shine btn-pulse rounded-full border-transparent bg-lime text-ink [--shine:rgba(20,38,26,.55)]",
  secondary:
    "btn btn-navy btn-shine rounded-full border-transparent bg-brand text-white [--shine:rgba(255,255,255,.7)]",
  outline: "btn btn-outline rounded-full bg-white text-ink [--shine:rgba(47,122,62,.55)]",
  "outline-light":
    "btn btn-ghost-light btn-shine rounded-full bg-white text-ink [--shine:rgba(47,122,62,.55)]",
  ghost:
    "btn border-0 bg-transparent px-0 text-ink-muted shadow-none hover:text-navy [--shine:transparent]",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-3 py-2 text-[11px]",
  md: "",
  lg: "min-h-12 px-7 py-4 text-sm",
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
    variants[variant],
    sizes[size],
    "group",
    disabled && "pointer-events-none opacity-60",
    className
  );

  const content = (
    <span className="relative z-10 inline-flex items-center justify-center gap-2 font-semibold">
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-300 ease-engineered group-hover:translate-x-1.5"
        />
      )}
    </span>
  );

  if (href) {
    return (
      <AnimatedButton as={Link} href={href} className={classes} target={target} onClick={onClick}>
        {content}
      </AnimatedButton>
    );
  }

  return (
    <AnimatedButton type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </AnimatedButton>
  );
}
