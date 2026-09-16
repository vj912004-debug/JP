"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RadialGlowButton } from "@/components/ui/radial-glow-button";
import { FlipText } from "@/components/ui/flip-text";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { company, stats } from "@/data/company";

const ease = [0.22, 1, 0.36, 1] as const;

const highlights = [
  {
    title: "CNC Profile Cutting",
    body: "Eight machines, up to 350 mm plate.",
    category: "cnc-profile-cutting",
  },
  {
    title: "Laser Cutting",
    body: "Clean edges on 1–40 mm plate.",
    category: "laser-cutting",
  },
  {
    title: "Ready Steel Stock",
    body: `${stats[0].value}${stats[0].suffix} on the floor in Vadodara.`,
    category: "steel-stock",
  },
];

export function Hero() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");

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
    <section className="relative overflow-hidden pb-4 pt-3 sm:pb-6 sm:pt-5">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-subtle lg:min-h-[620px]">
          <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
            <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-16">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease }}
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand"
              >
                <Leaf size={13} />
                Since {company.since} · Vadodara, Gujarat
              </motion.p>
              <h1 className="mt-5 max-w-xl font-display text-hero-mobile font-semibold tracking-tight text-ink sm:text-hero">
                <FlipText className="block" duration={2.4} delay={0.1}>
                  Precision in Steel,
                </FlipText>
                <FlipText className="mt-2 block" duration={2.4} delay={0.35}>
                  Strength in Every Cut.
                </FlipText>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted"
              >
                We unite mill-sourced plate, CNC profile cutting, laser cutting and ultrasonic
                testing under one roof — so fabricators get the right steel, cut right, on time.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={ready ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3, ease }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <RadialGlowButton href="/quote">Get a Quote</RadialGlowButton>
                <form
                  className="flex min-w-[240px] flex-1 items-center rounded-full border border-hairline-light bg-surface p-1.5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const next = email.trim()
                      ? `/quote?email=${encodeURIComponent(email.trim())}`
                      : "/quote";
                    router.push(next);
                  }}
                >
                  <label htmlFor="hero-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink outline-none placeholder:text-ink-subtle"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-lime-dark"
                  >
                    Join Us →
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : {}}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="mt-6 flex items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {["JP", "MS", "UT"].map((initials) => (
                    <span
                      key={initials}
                      className="grid h-8 w-8 place-items-center rounded-full border-2 border-white bg-blue-50 text-[10px] font-bold text-brand"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-ink-muted">
                  <span className="font-semibold text-ink">Join {stats[0].value}{stats[0].suffix}</span>{" "}
                  of ready stock working for engineering teams.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.04 }}
              animate={ready ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="relative min-h-[340px] lg:min-h-full"
            >
              <div className="absolute inset-0">
                <ImagePlaceholder
                  category="factory"
                  label="Jagdamba Procut processing yard, Vadodara"
                  className="h-full w-full"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent lg:w-40" />
              </div>

              <Link
                href="/gallery"
                className="absolute left-5 top-1/2 z-10 hidden -translate-y-1/2 items-center gap-3 text-white lg:flex"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 text-ink shadow-card">
                  <Play size={16} fill="currentColor" />
                </span>
                <span className="text-sm font-semibold drop-shadow">Watch Our Story</span>
              </Link>

              <div className="absolute inset-x-4 bottom-4 z-10 flex flex-col gap-2 sm:inset-x-auto sm:right-5 sm:top-1/2 sm:bottom-auto sm:w-[230px] sm:-translate-y-1/2">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 p-2.5 shadow-card backdrop-blur-md"
                  >
                    <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                      <ImagePlaceholder category={item.category} label={item.title} compact />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-[11px] leading-snug text-ink-muted">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
