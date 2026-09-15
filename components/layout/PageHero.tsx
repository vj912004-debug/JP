import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-blue-950 pb-16 pt-[calc(var(--nav-height)+64px)] sm:pt-[calc(var(--nav-height)+88px)]">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-40" />
      <AmbientOrbs />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <Container className="relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-orange-400">
            <span className="h-px w-8 origin-left animate-line-grow bg-orange-400/60" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-h2-mobile font-extrabold tracking-tight text-white sm:text-h2">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/65">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </Container>
    </section>
  );
}
