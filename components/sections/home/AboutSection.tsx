"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, ImageReveal, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";

const coreServices = [
  "Steel Plate Supply",
  "CNC Profile Cutting",
  "Laser Cutting",
  "CNC Drilling",
  "Ultrasonic Testing",
  "Thickness Verification",
  "Material Inspection & Traceability",
  "Loading, Transportation & Delivery",
];

export function AboutSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              index="02"
              kicker="About Jagdamba Procut"
              title="Your Complete Steel Solution Partner"
              subtitle={company.description}
            />

            <RevealStagger as="ul" className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2" stagger={0.06}>
              {coreServices.map((item) => (
                <motion.li
                  key={item}
                  variants={staggerItem}
                  className="flex list-none items-center gap-2.5 text-sm font-medium text-ink-secondary"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                  {item}
                </motion.li>
              ))}
            </RevealStagger>

            <Reveal delay={0.22}>
              <div className="mt-9 flex flex-wrap items-center gap-2.5">
                {company.philosophy.map((step, i) => (
                  <span key={step} className="flex items-center gap-2.5">
                    <span className="rounded-full border border-hairline-blue bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-900">
                      {step}
                    </span>
                    {i < company.philosophy.length - 1 && (
                      <span className="text-hairline-medium">+</span>
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9">
                <Button href="/about" variant="outline" showArrow>
                  More About Us
                </Button>
              </div>
            </Reveal>
          </div>

          <ImageReveal className="relative overflow-hidden rounded-block">
            <div className="aspect-[4/5]">
              <ImagePlaceholder
                category="factory"
                label="Covered processing shed — plate stock and CNC bay"
                className="h-full w-full"
              />
            </div>
            <div className="absolute bottom-4 left-4 w-44 rounded-card border border-white/15 bg-white/95 p-4 shadow-card-hover backdrop-blur-sm sm:w-52 sm:p-5">
              <p className="font-display text-2xl font-extrabold text-blue-900">
                {company.sinceLabel.match(/\d{4}/)?.[0]}
              </p>
              <p className="mt-1 text-xs font-medium text-ink-muted">
                Serving the engineering industry
              </p>
            </div>
          </ImageReveal>
        </div>
      </Container>
    </section>
  );
}
