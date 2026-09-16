"use client";

import Link from "next/link";
import { ArrowRight, Leaf, Landmark, Flame, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { FlipText } from "@/components/ui/flip-text";
import { company } from "@/data/company";
import { steelMakes } from "@/data/products";
import { motion } from "framer-motion";

const missionCards = [
  {
    title: "Sustainable Stock",
    body: "Holding mill-tested plate so projects start without waiting on mills.",
    category: "steel-stock",
    icon: Landmark,
  },
  {
    title: "Precise Processing",
    body: "CNC profile cutting and laser cutting from drawing or DXF.",
    category: "cnc-profile-cutting",
    icon: Flame,
  },
  {
    title: "Trusted Delivery",
    body: "Inspection, UT, loading and transport handled under one roof.",
    category: "dispatch",
    icon: Users,
  },
];

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="rounded-[28px] bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <SectionHeading
                kicker="Our Mission"
                title={
                  <FlipText duration={2.6} delay={0.1}>
                    We're Building Stronger, Cleaner, Faster Cuts.
                  </FlipText>
                }
                subtitle={company.description}
              />
              <Reveal delay={0.16}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button href="/products" showArrow>
                    Explore Products
                  </Button>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <RevealStagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {missionCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.article
                    key={card.title}
                    variants={staggerItem}
                    className="group overflow-hidden rounded-[22px] bg-surface"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <ImagePlaceholder category={card.category} label={card.title} className="h-full w-full" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 backdrop-blur">
                          <Icon size={15} />
                        </span>
                        <h3 className="mt-3 font-display text-lg font-semibold leading-snug">{card.title}</h3>
                        <p className="mt-1 text-[12px] leading-relaxed text-white/80">{card.body}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </RevealStagger>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-subtle">
            <Leaf size={12} className="text-brand" />
            Trusted by mill sources
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-semibold text-ink-subtle">
            {steelMakes.slice(0, 5).map((make) => (
              <span key={make.name}>{make.name.replace(" Steel", "")}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
