import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, ScaleReveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { documents } from "@/data/gallery";
import { DocumentAction } from "@/components/downloads/DocumentAction";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/downloads",
  title: "Downloads & Certifications",
  description:
    "Company profile, product brochure, ISO 9001:2015, MSME/Udyam and GST registration — vendor registration documents for Jagdamba Procut Pvt. Ltd.",
});

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Downloads & Certifications"
        title="Vendor Registration Documents"
        subtitle="ISO, MSME/Udyam and GST documents are available for vendor onboarding, supplier evaluation and statutory verification."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[doc.icon] ?? Icons.FileText;
              return (
                <ScaleReveal key={doc.name} delay={(i % 3) * 0.06}>
                  <div className="flex h-full flex-col justify-between rounded-card border border-hairline-light bg-white p-6">
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xs bg-blue-50 text-blue-900">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-ink-primary">{doc.name}</h3>
                      {"ref" in doc && doc.ref && (
                        <p className="mt-1 text-xs text-ink-muted">{doc.ref}</p>
                      )}
                    </div>
                    <DocumentAction name={doc.name} status={doc.status} />
                  </div>
                </ScaleReveal>
              );
            })}
          </div>

          <div className="mt-14 rounded-card border border-hairline-orange bg-orange-100/40 p-6 sm:p-7">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.05em] text-orange-800">
              Registration Reference
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-ink-muted">ISO 9001:2015</p>
                <p className="mt-1 text-sm font-semibold text-ink-primary">
                  Valid until {company.registrations.isoValidUntil}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-ink-muted">MSME / Udyam</p>
                <p className="mt-1 text-sm font-semibold text-ink-primary">{company.registrations.udyam}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-ink-muted">GST</p>
                <p className="mt-1 text-sm font-semibold text-ink-primary">GSTIN {company.registrations.gst}</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-ink-muted">
              Request any listed document on WhatsApp and our team will share the current PDF.
              ISO validity is subject to the surveillance conditions stated on the certificate.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-16">
        <Container>
          <SectionHeading kicker="Company Profile" title="Need something not listed here?" />
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-secondary">
              Write to <a href={`mailto:${company.email}`} className="font-semibold text-blue-900 underline">{company.email}</a> and
              we&apos;ll share the specific document or certificate your vendor onboarding
              process requires.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
