"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const products = [
  {
    title: "Steel Plates",
    href: "/products/steel-plates",
    desc: "3 mm to 300 mm ready stock across carbon, structural, boiler and alloy grades.",
    category: "steel-stock",
  },
  {
    title: "Steel Makes",
    href: "/products/steel-makes",
    desc: "Jindal, SAIL, JSW, Tata Steel, AM/NS India, plus imported material.",
    category: "steel-yard",
  },
  {
    title: "Material Categories",
    href: "/products/material-categories",
    desc: "Carbon, structural, pressure vessel, alloy, wear-resistant and special grades.",
    category: "components",
  },
];

export function ProductsShowcase() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading index="04" kicker="Products" title="Steel plate, ready to move" className="max-w-xl" />
          <Reveal>
            <Link
              href="/products"
              className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-orange-600"
            >
              View all products
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <motion.div key={p.title} variants={staggerItem}>
              <Link href={p.href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                  <motion.div
                    whileHover={{ scale: 1.045 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full"
                  >
                    <ImagePlaceholder category={p.category} label={p.title} className="h-full w-full" />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-950/70 to-transparent" />
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-blue-950 opacity-0 transition-all duration-300 ease-engineered group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-ink-primary transition-colors group-hover:text-blue-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              </Link>
            </motion.div>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}
