import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SpecList } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { dispatchStrength, dispatchFlow, transportContacts } from "@/data/quality";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/transport",
  title: "Transport & Logistics",
  description:
    "Safe loading, fast coordination and timely delivery — heavy-duty trailers, tempos and pickup vehicles, backed by 5 Nos. 20 Ton EOT cranes for loading support.",
});

export default function TransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Transport & Logistics"
        title="Safe Loading, Fast Coordination, Timely Delivery"
        subtitle="Heavy-duty trailers, tempos and pickup vehicles, coordinated for both regular and urgent dispatches."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Plan a Delivery</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading kicker="Dispatch Strength" title="What keeps material moving" />
              <div className="mt-8 flex flex-col gap-3">
                {dispatchStrength.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-600" />
                    <span className="text-[14.5px] text-ink-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Reveal direction="right">
              <div className="aspect-[4/5] overflow-hidden rounded-block">
                <ImagePlaceholder category="transport" label="Trailer loading — dispatch yard" className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Dispatch Flow" title="From supply to delivery" />
          <div className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-4">
            {dispatchFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-hairline-blue bg-white px-4 py-2 text-sm font-semibold text-blue-900">
                  {step}
                </span>
                {i < dispatchFlow.length - 1 && <span className="text-hairline-medium">&rarr;</span>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 rounded-block border border-hairline-light bg-white p-8 sm:grid-cols-2 sm:p-10">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink">Transport Contacts</h3>
              <div className="mt-4">
                <SpecList items={transportContacts} />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <p className="text-sm leading-relaxed text-ink-muted">
                For vehicle arrangement, loading schedules or urgent dispatch support, reach
                out directly — our accounts and inquiry lines are staffed separately for
                faster response.
              </p>
              <Button href="/contact" variant="outline" className="w-fit">
                Contact Transport Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
