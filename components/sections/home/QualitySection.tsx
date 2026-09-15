"use client";

import { CheckCircle2, ClipboardCheck, Headphones, Package, ScanLine, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, ImageReveal, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { qualitySupport, traceabilityWorkflow } from "@/data/quality";

const stageIcons = [Package, ClipboardCheck, ScanLine, Truck, Headphones];

export function QualitySection() {
  return (
    <section className="bg-surface-secondary py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              index="07"
              kicker="Quality Assurance"
              title="Documented material support, at every stage"
            />
            <RevealStagger className="mt-8 flex flex-col gap-3">
              {qualitySupport.slice(0, 6).map((item) => (
                <motion.div key={item} variants={staggerItem} className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-600" />
                  <span className="text-[14.5px] text-ink-secondary">{item}</span>
                </motion.div>
              ))}
            </RevealStagger>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button href="/quality" variant="outline" showArrow>
                  Quality &amp; Traceability
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ImageReveal from="right" className="overflow-hidden rounded-block">
              <div className="aspect-[16/9]">
                <ImagePlaceholder
                  category="ut-testing"
                  label="Ultrasonic thickness gauge in use — quality inspection"
                  className="h-full w-full"
                />
              </div>
            </ImageReveal>

            <div className="relative mt-8">
              <div className="absolute left-[22px] right-[22px] top-5 hidden h-px bg-hairline-medium sm:block" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
                className="absolute left-[22px] right-[22px] top-5 hidden h-px bg-orange-500 sm:block"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-2">
                {traceabilityWorkflow.map((stage, i) => {
                  const Icon = stageIcons[i] ?? CheckCircle2;
                  return (
                    <motion.div
                      key={stage.stage}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="relative rounded-card border border-hairline-light bg-white p-4"
                    >
                      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full border border-orange-200 bg-orange-50 text-orange-700">
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      <span className="mt-3 block font-mono text-xs text-orange-600">0{i + 1}</span>
                      <h4 className="mt-1.5 text-[13px] font-bold text-ink-primary">{stage.stage}</h4>
                      <p className="mt-1 text-[12px] leading-snug text-ink-muted">{stage.support}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
