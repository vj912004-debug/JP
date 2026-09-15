"use client";

import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { Marquee } from "@/components/motion/Marquee";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";
import { motion } from "framer-motion";
import { stats } from "@/data/company";
import { steelMakes } from "@/data/products";

const capabilityStrip = [
  "CNC Profile Cutting",
  "Laser Cutting",
  "CNC Drilling",
  "Ultrasonic Testing",
  "Hydra Loading & Unloading",
  "Transport Facility",
  ...steelMakes.map((make) => make.name),
];

export function TrustStats() {
  return (
    <section id="stats" className="relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-blue-950 py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-60" />
      <AmbientOrbs />
      <Container className="relative">
        <RevealStagger className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              whileHover={{ x: 4 }}
              className="border-l-2 border-orange-600/70 pl-5"
            >
              <div className="font-display text-stat-mobile font-extrabold tabular-nums text-white sm:text-stat">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium leading-snug text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>

      <div className="relative mt-12 border-t border-white/10 pt-6">
        <Marquee items={capabilityStrip} />
      </div>
    </section>
  );
}
