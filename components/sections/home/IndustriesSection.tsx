"use client";

import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading index="06" kicker="Industries We Serve" title="Where our steel goes to work" />

        <RevealStagger className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((ind) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[ind.icon] ?? Icons.Factory;
            return (
              <motion.div
                key={ind.name}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[4/5] overflow-hidden rounded-card border border-hairline-light bg-white shadow-none hover:shadow-card-hover"
              >
                <Link href={`/industries#${ind.slug}`} className="absolute inset-0 z-10">
                  <span className="sr-only">{ind.name}</span>
                </Link>
                <div className="absolute inset-0 bg-surface-muted" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent transition-transform duration-500 ease-engineered group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col justify-between p-4">
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="text-brand transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <span className="block h-0.5 w-6 origin-left scale-x-0 bg-lime transition-transform duration-300 group-hover:scale-x-100" />
                    <h3 className="mt-2.5 text-[13.5px] font-semibold leading-snug text-ink">
                      {ind.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </RevealStagger>
      </Container>
    </section>
  );
}
