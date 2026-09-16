"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealStagger, staggerItem } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const products = [
  {
    title: "Steel Plates, Ready Stock",
    href: "/products/steel-plates",
    desc: "3 mm to 300 mm across carbon, structural, boiler and alloy grades.",
    category: "steel-stock",
    kicker: "Plate supply",
  },
  {
    title: "CNC & Laser Processing",
    href: "/services",
    desc: "Profile cutting, laser cutting and drilling from drawing or DXF.",
    category: "cnc-profile-cutting",
    kicker: "Processing",
  },
  {
    title: "Quality, UT & Delivery",
    href: "/quality",
    desc: "Thickness checks, ultrasonic testing, loading and dispatch under one roof.",
    category: "ut-testing",
    kicker: "Assurance",
  },
];

export function ProductsShowcase() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                Our capabilities
              </p>
              <div className="hidden items-center gap-2 sm:flex">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline-light bg-white text-ink-muted">
                  <ChevronLeft size={16} />
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline-light bg-white text-ink">
                  <ChevronRight size={16} />
                </span>
              </div>
            </div>
            <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {products.map((p) => (
                <motion.div key={p.title} variants={staggerItem}>
                  <Link href={p.href} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[22px]">
                      <ImagePlaceholder category={p.category} label={p.title} className="h-full w-full" />
                    </div>
                    <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand">
                      {p.kicker}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-semibold text-ink group-hover:text-brand">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                      Learn More
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </RevealStagger>
          </div>

          <Reveal delay={0.12} className="lg:pt-10">
            <h2 className="font-display text-h3-mobile font-semibold tracking-tight text-ink sm:text-h3">
              Real Stock. Real Cuts. A Better Order.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Discover how we turn mill plate into cut components that protect your schedule — and
              your fabrication floor.
            </p>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-brand"
            >
              View All Capabilities
              <ArrowRight size={14} />
            </Link>

            <div className="mt-8 rounded-[24px] bg-lime p-6 sm:p-7">
              <h3 className="font-display text-xl font-semibold text-ink">Stay Ready. Stay Informed.</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Send grade, size and DXF — our Vadodara team replies with stock and processing options.
              </p>
              <form
                className="mt-5 flex items-center rounded-full bg-white p-1"
                onSubmit={(e) => {
                  e.preventDefault();
                  const next = email.trim()
                    ? `/quote?email=${encodeURIComponent(email.trim())}`
                    : "/quote";
                  router.push(next);
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-ink-subtle"
                />
                <button
                  type="submit"
                  className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["JP", "MS", "UT"].map((id) => (
                    <span
                      key={id}
                      className="grid h-7 w-7 place-items-center rounded-full border-2 border-lime bg-white text-[9px] font-bold text-brand"
                    >
                      {id}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-ink/70">Join buyers who already source from Jagdamba.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
