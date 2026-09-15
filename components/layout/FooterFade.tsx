"use client";

import { Reveal } from "@/components/ui/Reveal";

export function FooterFade({ children }: { children: React.ReactNode }) {
  return (
    <Reveal direction="up" duration={0.7}>
      {children}
    </Reveal>
  );
}
