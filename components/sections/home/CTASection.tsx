"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-grad-mesh opacity-80 animate-gradient-shift"
        style={{ backgroundSize: "180% 180%" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-40" />
      <AmbientOrbs variant="blue" />

      <Container className="relative text-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
            Have a steel requirement?
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance font-display text-h2-mobile font-extrabold text-white sm:text-h2">
            Send your drawing. We&apos;ll get back with a quote.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-white/65">
            Share your grade, thickness and cutting requirement — by RFQ form, drawing upload
            or WhatsApp — and our team will confirm availability and pricing.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Magnetic className="inline-flex">
              <Button href="/quote" size="lg" showArrow className="shine-hover">
                Request a Quote
              </Button>
            </Magnetic>
            <Magnetic strength={8} className="inline-flex">
              <Button href="/contact" variant="outline-light" size="lg">
                Talk to Sales
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
