import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DataTable, CheckItem } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { stockRange } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/products/steel-plates",
  title: "Steel Plates — 3 mm to 300 mm Ready Stock",
  description:
    "Ready stock steel plates from 3 mm to 300 mm thickness, standard widths and lengths, supplied as full plates, cut plates or profile-cut parts with Mill Test Certificate support.",
});

const advantages = [
  "Approx. 2,500 MT ready stock",
  "Thickness range from 3 mm to 300 mm",
  "Special grades available",
  "Material with Mill Test Certificate / TC",
  "Fast availability for regular and urgent requirements",
];

export default function SteelPlatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Steel Plates"
        title="Ready Stock Steel Plates for Industrial Requirements"
        subtitle="3 mm to 300 mm thickness across standard and special grades, supplied as full plates, cut plates or profile-cut parts."
      >
        <div className="mt-8 flex gap-3">
          <Button href="/stock-enquiry" showArrow>Check Availability</Button>
          <Button href="/grades" variant="outline-light">View Grades &amp; Data</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading kicker="Ready Stock Advantage" title="Stock built for fast turnaround" />
              <ul className="mt-8 flex flex-col gap-3.5">
                {advantages.map((a) => (
                  <CheckItem key={a}>{a}</CheckItem>
                ))}
              </ul>
            </div>
            <Reveal direction="right">
              <div className="aspect-[4/5] overflow-hidden rounded-block">
                <ImagePlaceholder category="steel-stock" label="Ready stock — thickness marked plates" className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Standard Stock Range" title="Available sizes and supply form" />
          <div className="mt-10">
            <DataTable columns={["Parameter", "Details"]} rows={stockRange.map((r) => [r.label, r.value])} />
          </div>
        </Container>
      </section>
    </>
  );
}
