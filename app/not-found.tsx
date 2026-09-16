import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-[var(--nav-height)]">
      <Container className="relative text-center">
        <p className="font-display text-8xl font-semibold tracking-tight text-brand/15">404</p>
        <h1 className="-mt-8 font-display text-h3-mobile font-semibold text-ink sm:text-h3">
          This page isn&apos;t part of our current layout
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
          The page you&apos;re looking for may have moved. Try the homepage, or head straight
          to a quote request.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/" showArrow>Back to Home</Button>
          <Button href="/quote" variant="outline">Request a Quote</Button>
        </div>
      </Container>
    </section>
  );
}
