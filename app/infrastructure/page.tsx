import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SpecList } from "@/components/ui/Primitives";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { capacitySpecs, stats } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/infrastructure",
  title: "Infrastructure & Capacity",
  description:
    "A 75,000 sq. ft. facility with covered processing, open steel plate storage, 5 Nos. 20 Ton EOT cranes and 8 CNC profile cutting machines in Vadodara, Gujarat.",
});

const uses = [
  "Steel Processing",
  "CNC Cutting",
  "Laser Cutting",
  "Drilling",
  "Material Handling",
  "Inspection",
  "Finished Material Handling",
];

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="Built for Today. Ready for Tomorrow."
        subtitle="Strong stock, strong machines, strong delivery support — infrastructure that handles both bulk steel requirements and customized profile-cut components."
      >
        <div className="mt-8">
          <Button href="/machinery" showArrow>See Machinery</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-orange-600 pl-4">
                <div className="font-display text-3xl font-extrabold tabular-nums text-blue-950 sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1.5 text-xs font-medium leading-snug text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading kicker="Facility Overview" title="A single site for stock, cutting and dispatch" />
              <div className="mt-8 rounded-card border border-hairline-light bg-white p-6">
                <SpecList items={capacitySpecs} />
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {uses.map((u) => (
                  <span key={u} className="rounded-full border border-hairline-blue bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-900">
                    {u}
                  </span>
                ))}
              </div>
            </div>
            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="group col-span-2 aspect-[16/9] overflow-hidden rounded-block">
                  <div className="h-full w-full transition-transform duration-700 ease-engineered group-hover:scale-[1.04]">
                    <ImagePlaceholder category="steel-yard" label="Open steel plate storage yard" className="h-full w-full" />
                  </div>
                </div>
                <div className="group aspect-square overflow-hidden rounded-block">
                  <div className="h-full w-full transition-transform duration-700 ease-engineered group-hover:scale-[1.04]">
                    <ImagePlaceholder category="factory" label="Covered processing shed" className="h-full w-full" compact />
                  </div>
                </div>
                <div className="group aspect-square overflow-hidden rounded-block">
                  <div className="h-full w-full transition-transform duration-700 ease-engineered group-hover:scale-[1.04]">
                    <ImagePlaceholder category="crane-handling" label="EOT crane" className="h-full w-full" compact />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
