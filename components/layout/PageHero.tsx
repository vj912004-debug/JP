import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FlipText } from "@/components/ui/flip-text";

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
    <section className="relative isolate overflow-hidden pb-14 pt-10 sm:pt-14">
      <Container className="relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            <span className="h-px w-8 origin-left animate-line-grow bg-brand/50" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-h2-mobile font-semibold tracking-tight text-ink sm:text-h2">
            <FlipText className="block" duration={2.4}>
              {title}
            </FlipText>
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-muted">{subtitle}</p>
          </Reveal>
        )}
        {children && <Reveal delay={0.18}>{children}</Reveal>}
      </Container>
    </section>
  );
}
