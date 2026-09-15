import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DataTable } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import {
  qualitySupport,
  traceabilityWorkflow,
  utReferenceStandards,
  tpiSupport,
} from "@/data/quality";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/quality",
  title: "Quality, Inspection & Traceability",
  description:
    "Mill Test Certificate support, heat and plate number traceability, ultrasonic thickness verification, UT testing support and TPI coordination with SGS / TUV / BV.",
});

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Quality & UT"
        title="Documented Material Support for Industrial Buyers"
        subtitle="From material receipt through final dispatch, every stage carries verification — grade, heat number, dimensions and, where required, ultrasonic testing."
      >
        <div className="mt-8">
          <Button href="/contact" showArrow>Discuss Inspection Requirements</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading kicker="Inspection & Documentation Support" title="Quality assurance, stage by stage" />
              <div className="mt-8 flex flex-col gap-3">
                {qualitySupport.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-orange-600" />
                    <span className="text-[14.5px] text-ink-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Reveal direction="right">
              <div className="aspect-[4/5] overflow-hidden rounded-block">
                <ImagePlaceholder category="ut-testing" label="Ultrasonic thickness gauge — quality inspection" className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Traceability Workflow" title="Where material is checked" />
          <div className="mt-10">
            <DataTable
              columns={["Stage", "Support"]}
              rows={traceabilityWorkflow.map((s) => [s.stage, s.support])}
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading kicker="Ultrasonic Testing" title="UT reference standards" />
              <div className="mt-8 flex flex-col gap-5">
                {utReferenceStandards.map((std) => (
                  <div key={std.standard} className="rounded-card border border-hairline-light bg-white p-5">
                    <h3 className="font-display text-base font-bold text-ink-primary">{std.standard}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{std.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-relaxed text-ink-subtle">
                Common project requirements are S1/E1 and S2/E2 or S2/E3. Other
                customer-specified requirements may be considered depending on material and
                specification. Exact UT level, documentation and testing scope are governed by
                the applicable MTC / TC and the customer&apos;s purchase order.
              </p>
            </div>

            <div>
              <SectionHeading kicker="Third-Party Inspection" title="TPI coordination" />
              <ul className="mt-8 flex flex-col gap-4">
                {tpiSupport.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-card border border-hairline-light bg-white p-4 text-[14.5px] leading-relaxed text-ink-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
