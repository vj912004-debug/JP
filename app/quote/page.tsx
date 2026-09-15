import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { CheckItem } from "@/components/ui/Primitives";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/quote",
  title: "Request a Quote",
  description:
    "Submit your material, cutting and delivery requirement — including drawing or DXF upload — and receive a quotation from Jagdamba Procut Pvt. Ltd.",
});

const whatWeNeed = [
  "Grade, thickness, width, length and quantity",
  "Cutting, laser cutting or drilling requirement, if any",
  "Required UT level, if applicable",
  "Delivery location",
  "Drawing or DXF file, if the job is custom-cut",
];

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Get a Quotation for Material, Cutting & Delivery"
        subtitle="The more detail you share, the faster we can confirm pricing and lead time. Upload a drawing or DXF if your job needs custom cutting."
      />

      <section className="py-20 sm:py-24" id="upload">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <EnquiryForm variant="quote" />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-card border border-hairline-light bg-surface-secondary p-6">
                <h3 className="font-display text-base font-bold text-ink-primary">
                  What to include
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {whatWeNeed.map((item) => (
                    <CheckItem key={item}>{item}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
