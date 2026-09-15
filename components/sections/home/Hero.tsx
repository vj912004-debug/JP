"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Upload, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Magnetic } from "@/components/ui/Magnetic";
import { SparkField } from "@/components/motion/SparkField";
import { company } from "@/data/company";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 160]);
  const contentY = useTransform(scrollY, [0, 500], [0, 70]);
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0.15]);
  const [spot, setSpot] = useState({ x: 28, y: 42 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) {
      setReady(true);
      return;
    }
    try {
      if (sessionStorage.getItem("jp-preloaded") === "1") {
        setReady(true);
        return;
      }
    } catch {
      /* continue */
    }
    const onReady = () => setReady(true);
    window.addEventListener("jp:ready", onReady);
    const t = window.setTimeout(onReady, 1800);
    return () => {
      window.removeEventListener("jp:ready", onReady);
      window.clearTimeout(t);
    };
  }, [reduceMotion]);

  return (
    <section
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-dark-950"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpot({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <motion.div style={{ y: reduceMotion ? 0 : bgY }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: reduceMotion ? 1.08 : 1.16 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }
          }
        >
          <ImagePlaceholder
            category="hero"
            label="CNC profile cutting in the Jagdamba Procut processing bay"
            className="h-full w-full"
            priority
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/75 to-dark-950/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/88 via-dark-950/35 to-transparent" />
      <SparkField className="opacity-50" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-screen transition-opacity duration-500"
        style={{
          background: `radial-gradient(520px circle at ${spot.x}% ${spot.y}%, rgba(249,115,22,0.18), transparent 58%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-1/4 h-px overflow-hidden opacity-40">
        <div className="h-full w-full origin-left animate-line-grow bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative w-full will-change-transform"
      >
        <Container className="relative z-20 w-full pb-28 pt-40 sm:pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="mb-6 flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease }}
                style={{ transformOrigin: "left" }}
                className="h-px w-10 bg-orange-500"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
                {company.sinceLabel}
              </span>
            </motion.div>

            <h1 className="font-display text-hero-mobile font-extrabold tracking-tight text-white sm:text-hero">
              {["JAGDAMBA PROCUT", "PVT. LTD."].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: "110%" }}
                    animate={ready ? { y: 0 } : { y: "110%" }}
                    transition={{ duration: 0.8, delay: 0.05 + i * 0.1, ease }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, delay: 0.22, ease }}
              className="mt-6 max-w-xl text-balance font-display text-2xl font-semibold text-white/90 sm:text-3xl"
            >
              {company.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
              className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/60"
            >
              Steel Plates &middot; CNC Profile Cutting &middot; Laser Cutting &middot; CNC
              Drilling &middot; Ultrasonic Testing &mdash; complete steel processing under one
              roof in Vadodara, Gujarat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.6, delay: 0.42, ease }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <Magnetic className="inline-flex">
                <Button href="/quote" size="lg" showArrow className="shine-hover">
                  Request a Quote
                </Button>
              </Magnetic>
              <Magnetic strength={8} className="inline-flex">
                <Button href="/stock-enquiry" variant="outline-light" size="lg">
                  Check Material Availability
                </Button>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={ready ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6"
            >
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
              >
                <MessageCircle size={15} className="text-orange-500" />
                Send Requirement on WhatsApp
              </a>
              <Link
                href="/quote#upload"
                className="flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
              >
                <Upload size={15} className="text-orange-500" />
                Upload Drawing
              </Link>
              <a
                href={`tel:+91${company.phones.office[0]}`}
                className="flex items-center gap-2 text-sm font-medium text-white/55 transition-colors hover:text-white"
              >
                <Phone size={15} className="text-orange-500" />
                Contact Sales Team
              </a>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.a
        href="#stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:bottom-8 sm:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
