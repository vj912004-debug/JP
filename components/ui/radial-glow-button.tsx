"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface RadialGlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  href?: string;
}

export function RadialGlowButton({
  children = "Get Extension",
  className,
  href,
  type = "button",
  ...props
}: RadialGlowButtonProps) {
  const isFull = Boolean(className?.includes("w-full"));
  const classes = cn("rg-button", className);
  const inner = (
    <>
      <span className="rg-shine">
        <span />
      </span>
      <span className="rg-bg" />
      <span className="rg-label">{children}</span>
    </>
  );

  return (
    <div className={cn("relative inline-block", isFull && "block w-full")}>
      {href ? (
        <Link href={href} className={classes} onClick={props.onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}>
          {inner}
        </Link>
      ) : (
        <button className={classes} type={type} {...props}>
          {inner}
        </button>
      )}
    </div>
  );
}

export default RadialGlowButton;
