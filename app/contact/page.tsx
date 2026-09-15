import type { Metadata } from "next";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal, ImageReveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { mapsUrl } from "@/lib/enquiry";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/contact",
  title: "Contact",
  description:
    "Reach Jagdamba Procut Pvt. Ltd. in Vadodara, Gujarat — office, inquiry, accounts and WhatsApp lines, or send your requirement directly.",
});

const contactLines = [
  { label: "Office", value: company.phones.office.join(" / "), href: `tel:+91${company.phones.office[0]}` },
  { label: "Inquiry", value: company.phones.inquiry.join(" / "), href: `tel:+91${company.phones.inquiry[0]}` },
  { label: "Accounts", value: company.phones.accounts.join(" / "), href: `tel:+91${company.phones.accounts[0]}` },
  { label: "Land Line", value: company.phones.landline.join(" / "), href: `tel:+91${company.phones.landline[0]}` },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Our Team"
        subtitle="Ready to support your steel, profile cutting and laser cutting requirements."
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex flex-col gap-3">
                  {company.people.map((person) => (
                    <div key={person.name} className="rounded-card border border-hairline-light bg-white p-5">
                      <p className="font-display text-base font-bold text-ink-primary">
                        {person.name} <span className="font-sans text-sm font-medium text-ink-muted">— {person.role}</span>
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
                        {person.phones.map((phone) => (
                          <a key={phone} href={`tel:+91${phone}`} className="flex items-center gap-1.5 text-sm text-blue-900 hover:text-orange-600">
                            <Phone size={13} />
                            +91 {phone}
                          </a>
                        ))}
                        {person.whatsapp && (
                          <a
                            href={`https://wa.me/${company.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-[#25D366]"
                          >
                            <MessageCircle size={13} />
                            WhatsApp
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 rounded-card border border-hairline-light bg-white p-5">
                  <div className="flex flex-col gap-3.5">
                    {contactLines.map((line) => (
                      <a key={line.label} href={line.href} className="flex items-center justify-between text-sm">
                        <span className="text-ink-muted">{line.label}</span>
                        <span className="font-semibold text-ink-primary">{line.value}</span>
                      </a>
                    ))}
                    <a href={`mailto:${company.email}`} className="flex items-center gap-2 border-t border-hairline-light pt-3.5 text-sm font-semibold text-blue-900">
                      <Mail size={14} />
                      {company.email}
                    </a>
                    <a href={mapsUrl()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-ink-secondary hover:text-orange-600">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-blue-900" />
                      {company.address.full}
                    </a>
                  </div>
                </div>
              </Reveal>

              <ImageReveal from="bottom" className="mt-6 overflow-hidden rounded-card border border-hairline-light">
                <div className="aspect-video">
                  <iframe
                    title="Jagdamba Procut location map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(company.address.mapQuery)}&output=embed`}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </ImageReveal>
            </div>

            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
