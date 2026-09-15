import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";
import { SparkField } from "@/components/motion/SparkField";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-dark-950 pt-[var(--nav-height)]">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid-animated opacity-50" />
      <AmbientOrbs />
      <SparkField />
      <Container className="relative text-center">
        <p className="font-display text-8xl font-extrabold tracking-tight text-white/10">404</p>
        <h1 className="-mt-8 font-display text-h3-mobile font-bold text-white sm:text-h3">
          This page isn&apos;t part of our current layout
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/55">
          The page you&apos;re looking for may have moved. Try the homepage, or head straight
          to a quote request.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" showArrow>Back to Home</Button>
          <Button href="/quote" variant="outline-light">Request a Quote</Button>
        </div>
      </Container>
    </section>
  );
}
