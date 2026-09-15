import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { company } from "@/data/company";
import { pageMeta } from "@/lib/seo";
import { mapsUrl } from "@/lib/enquiry";

export const metadata: Metadata = pageMeta({
  path: "/stock-enquiry",
  title: "Stock Enquiry",
  description:
    "Check availability of steel plate by grade, thickness, width, length, make and quantity — share your requirement and our team will confirm.",
});

export default function StockEnquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Stock Enquiry"
        title="Check Material Availability"
        subtitle="Share the grade, size and quantity you need. We'll confirm availability against current stock — no internal quantities are published on the website."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-8">
              <EnquiryForm variant="stock" />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-card border border-hairline-light bg-surface-secondary p-6">
                <h3 className="font-display text-base font-bold text-ink-primary">
                  Prefer to call or WhatsApp?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  Our team can confirm availability directly over phone or WhatsApp.
                </p>
                <dl className="mt-5 divide-y divide-hairline-light">
                  <div className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-sm text-ink-muted">Office</dt>
                    <dd>
                      <a href={`tel:+91${company.phones.office[0]}`} className="text-[15px] font-semibold text-blue-900 hover:text-orange-600">
                        +91 {company.phones.office[0]}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-sm text-ink-muted">Inquiry</dt>
                    <dd>
                      <a href={`tel:+91${company.phones.inquiry[0]}`} className="text-[15px] font-semibold text-blue-900 hover:text-orange-600">
                        +91 {company.phones.inquiry[0]}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-sm text-ink-muted">WhatsApp</dt>
                    <dd>
                      <a
                        href={`https://wa.me/${company.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-semibold text-[#25D366]"
                      >
                        {company.whatsappDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3.5">
                    <dt className="text-sm text-ink-muted">Email</dt>
                    <dd>
                      <a href={`mailto:${company.email}`} className="text-[15px] font-semibold text-blue-900 hover:text-orange-600">
                        {company.email}
                      </a>
                    </dd>
                  </div>
                </dl>
                <a
                  href={mapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-blue-900 hover:text-orange-600"
                >
                  Open factory location
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
