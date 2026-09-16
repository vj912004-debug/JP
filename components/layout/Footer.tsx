import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { Container } from "@/components/ui/Container";
import { FooterFade } from "@/components/layout/FooterFade";
import { Logo } from "@/components/ui/Logo";
import { mapsUrl } from "@/lib/enquiry";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Our Mission", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Request a Quote", href: "/quote" },
      { label: "Stock Enquiry", href: "/stock-enquiry" },
      { label: "Partner With Us", href: "/contact" },
      { label: "Downloads", href: "/downloads" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Quality & UT", href: "/quality" },
      { label: "Contact Us", href: "/contact" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Transport", href: "/transport" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline-light bg-white pt-16 pb-28 sm:pb-8">
      <Container className="relative">
        <FooterFade>
          <div className="grid grid-cols-1 gap-12 pb-14 sm:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Logo />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
                Together, we cut and supply steel that keeps engineering projects on schedule in
                Gujarat and beyond.
              </p>
              <div className="mt-6 flex flex-col gap-3 text-sm text-ink-muted">
                <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-brand">
                  <Mail size={15} className="shrink-0 text-brand" />
                  {company.email}
                </a>
                <a
                  href={`tel:+91${company.phones.office[0]}`}
                  className="flex items-center gap-2.5 hover:text-brand"
                >
                  <Phone size={15} className="shrink-0 text-brand" />
                  +91 {company.phones.office[0]} / {company.phones.office[1]}
                </a>
                <a
                  href={mapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 hover:text-brand"
                >
                  <MapPin size={15} className="mt-0.5 shrink-0 text-brand" />
                  {company.address.full}
                </a>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-display text-sm font-semibold text-ink">{col.title}</h4>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm text-ink-muted hover:text-brand">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-hairline-light py-7 text-xs text-ink-muted sm:flex-row">
            <p>© {new Date().getFullYear()} Jagdamba Procut Pvt. Ltd. All rights reserved.</p>
            <p>{company.sinceLabel}</p>
          </div>
        </FooterFade>
      </Container>
    </footer>
  );
}
