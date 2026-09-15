import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { steelMakes } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/products/steel-makes",
  title: "Steel Makes — Jindal, SAIL, JSW, Tata Steel, AM/NS India",
  description:
    "Steel plate sourced from Jindal Steel, SAIL, JSW Steel, Tata Steel and AM/NS India (ArcelorMittal Nippon Steel), plus imported / China-origin material subject to availability.",
});

export default function SteelMakesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Steel Makes"
        title="Sourced from India's Leading Steel Mills"
        subtitle="Primary domestic makes plus imported material, subject to grade, size, thickness and stock availability."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Request a Quote</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Make Availability" title="Choose your preferred mill source" />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steelMakes.map((make, i) => (
              <Reveal key={make.name} delay={i * 0.06}>
                <div className="group h-full rounded-card border border-hairline-light bg-white p-6 transition-all duration-300 ease-engineered hover:-translate-y-1 hover:border-blue-800/40 hover:shadow-card-hover">
                  <span className="grid h-11 w-11 place-items-center rounded-xs bg-blue-50 font-display text-sm font-bold text-blue-900">
                    {make.name.slice(0, 2).toUpperCase()}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-primary">{make.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{make.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
