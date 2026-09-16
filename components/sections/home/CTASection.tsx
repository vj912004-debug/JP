"use client";

import { Container } from "@/components/ui/Container";
import { RadialGlowButton } from "@/components/ui/radial-glow-button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { Mail, Phone, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="grid overflow-hidden rounded-[28px] bg-white lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col justify-between bg-lime p-8 sm:p-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/70">
                  Get involved
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
                  Let&apos;s work together
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink/70">
                  Send grade, size and DXF — our Vadodara team responds with stock and processing
                  options.
                </p>
              </div>
              <div className="mt-8">
                <RadialGlowButton href="/quote">Request a Quote</RadialGlowButton>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="p-8 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">Contact</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Talk to our team</h3>
              <div className="mt-6 space-y-4 text-sm text-ink-muted">
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 hover:text-ink">
                  <Mail size={16} className="text-brand" />
                  {company.email}
                </a>
                <a
                  href={`tel:+91${company.people[0].phones[0]}`}
                  className="flex items-center gap-3 hover:text-ink"
                >
                  <Phone size={16} className="text-brand" />
                  +91 {company.people[0].phones[0]}
                </a>
                <p className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                  {company.address.full}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
