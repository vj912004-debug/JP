"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, ImageReveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SpecList } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";
import { capacitySpecs } from "@/data/company";

export function InfrastructureSection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"],
  });
  const yMain = useTransform(scrollYProgress, [0, 1], [36, -36]);
  const ySide = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section className="relative overflow-hidden bg-dark-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid-animated opacity-50" />
      <AmbientOrbs />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              index="05"
              kicker="Infrastructure & Capacity"
              title="Built for scale, engineered for precision"
              subtitle="A 75,000 sq. ft. facility built to support both bulk steel requirements and customized profile-cut components, with quick turnaround and dependable service."
              light
            />
            <Reveal delay={0.15}>
              <div className="mt-9">
                <SpecList items={capacitySpecs.slice(0, 6)} light />
              </div>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-9">
                <Button href="/infrastructure" variant="outline-light" showArrow>
                  Explore Infrastructure
                </Button>
              </div>
            </Reveal>
          </div>

          <div ref={galleryRef} className="grid grid-cols-2 gap-4">
            <motion.div
              style={{ y: reduceMotion ? 0 : yMain }}
              className="col-span-2 overflow-hidden rounded-block"
            >
              <ImageReveal from="right" className="aspect-[16/10] overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-engineered hover:scale-[1.04]">
                  <ImagePlaceholder
                    category="factory"
                    label="75,000 sq. ft. facility — aerial / wide shot"
                    className="h-full w-full"
                  />
                </div>
              </ImageReveal>
            </motion.div>
            <motion.div style={{ y: reduceMotion ? 0 : ySide }} className="overflow-hidden rounded-block">
              <ImageReveal from="bottom" className="aspect-square overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-engineered hover:scale-[1.04]">
                  <ImagePlaceholder category="cnc-profile-cutting" label="CNC bay" className="h-full w-full" compact />
                </div>
              </ImageReveal>
            </motion.div>
            <motion.div style={{ y: reduceMotion ? 0 : ySide }} className="overflow-hidden rounded-block">
              <ImageReveal from="left" className="aspect-square overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 ease-engineered hover:scale-[1.04]">
                  <ImagePlaceholder category="crane-handling" label="20T EOT crane" className="h-full w-full" compact />
                </div>
              </ImageReveal>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
