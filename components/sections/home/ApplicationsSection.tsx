"use client";

import { useRef } from "react";
import * as Icons from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { oneRoofFlow } from "@/data/quality";
import { applications } from "@/data/industries";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";

const applicationImages = [
  "components",
  "components-rings",
  "components-parts",
  "steel-stock",
  "heavy-plate-cutting",
  "cnc-profile-cutting",
  "laser-cutting",
  "crane-handling",
  "factory",
  "ut-testing",
  "dispatch",
  "transport",
] as const;

function FlowNode({
  step,
  index,
}: {
  step: (typeof oneRoofFlow)[number];
  index: number;
}) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[step.icon] ?? Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center"
    >
      <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-brand/20 bg-white">
        <span className="absolute inset-0 rounded-full bg-lime/40 animate-pulse-ring" />
        <Icon size={18} strokeWidth={1.75} className="relative text-brand" />
      </span>
      <div>
        <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-brand">
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-1 max-w-[140px] text-[13px] font-medium leading-snug text-ink-secondary lg:mx-auto">
          {step.label}
        </p>
      </div>
    </motion.div>
  );
}

function OneRoofFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 55%"],
  });
  const lineX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative py-2">
      <div className="absolute left-6 top-6 hidden h-px bg-hairline-light lg:left-0 lg:right-0 lg:top-6 lg:block" />
      <motion.div
        style={{ scaleX: lineX, transformOrigin: "left" }}
        className="absolute left-0 right-0 top-6 hidden h-px bg-brand lg:block"
      />
      <div className="absolute left-[23px] top-2 bottom-2 w-px bg-hairline-light lg:hidden" />
      <motion.div
        style={{ scaleY: lineY, transformOrigin: "top" }}
        className="absolute left-[23px] top-2 bottom-2 w-px bg-brand lg:hidden"
      />
      <div className="relative grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-9 lg:gap-x-2 lg:gap-y-0">
        {oneRoofFlow.map((step, i) => (
          <FlowNode key={step.label} step={step} index={i} />
        ))}
      </div>
    </div>
  );
}

export function ApplicationsSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <AmbientOrbs variant="light" />
      <Container className="relative">
        <SectionHeading
          index="08"
          kicker="Applications & Projects"
          title="From steel plate to finished profile — everything under one roof"
        />

        <div className="mt-14">
          <OneRoofFlow />
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {applications.map((app, i) => (
            <Reveal key={app} delay={i * 0.04}>
              <div className="group relative aspect-square overflow-hidden rounded-card">
                <div className="h-full w-full transition-transform duration-500 ease-engineered group-hover:scale-[1.045]">
                  <ImagePlaceholder
                    category={applicationImages[i % applicationImages.length]}
                    label={app}
                    className="h-full w-full"
                    compact
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-950/90 to-transparent p-3 pt-8">
                  <span className="text-[12.5px] font-semibold text-white">{app}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
