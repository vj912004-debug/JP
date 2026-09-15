import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataTable } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { MachineryGrid } from "@/components/sections/machinery/MachineryGrid";
import { capacityTable, valueAddedSupport } from "@/data/machinery";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/machinery",
  title: "Machinery — CNC Profile Cutting, Laser Cutting & CNC Drilling",
  description:
    "8 CNC profile cutting machines, a high-power laser cutting system, CNC drilling and 5 Nos. 20 Ton EOT cranes — the machinery behind Jagdamba Procut's processing capability.",
});

export default function MachineryPage() {
  return (
    <>
      <PageHero
        eyebrow="Machinery"
        title="Precision Cutting Solutions for Heavy and Customized Profiles"
        subtitle="Eight CNC profile cutting machines, a high-power laser system, CNC drilling and heavy-duty crane support — built for bigger possibilities."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Request a Quote</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <MachineryGrid />
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Capacity Overview" title="Machine capacity chart" />
          <div className="mt-10">
            <DataTable
              columns={["Process / Facility", "Capacity / Quantity", "Remarks"]}
              rows={capacityTable.map((r) => [r.process, r.capacity, r.remarks])}
            />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-3 rounded-card border border-hairline-light bg-white p-7 sm:grid-cols-2">
            <h3 className="font-display text-base font-bold text-ink-primary sm:col-span-2">
              Value-Added Support
            </h3>
            {valueAddedSupport.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-ink-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-600" />
                {item}
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-xs leading-relaxed text-ink-subtle">
            Machine capacity and achievable thickness vary with process, material grade,
            drawing complexity and production planning. Final confirmation is provided at
            quotation stage.
          </p>
        </Container>
      </section>
    </>
  );
}
