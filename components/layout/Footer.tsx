import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { footerColumns } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { FooterFade } from "@/components/layout/FooterFade";
import { AmbientOrbs } from "@/components/motion/AmbientOrbs";
import { mapsUrl } from "@/lib/enquiry";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-950 pt-20 pb-28 sm:pb-8">
      <div className="pointer-events-none absolute inset-0 bg-technical-grid opacity-60" />
      <AmbientOrbs />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

      <Container className="relative">
        <FooterFade>
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xs bg-orange-600 font-display text-lg font-extrabold text-white shadow-orange-glow">
                JP
              </span>
              <span className="font-display text-lg font-bold text-white">
                JAGDAMBA PROCUT PVT. LTD.
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              {company.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm text-white/70">
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 transition-colors hover:text-orange-400">
                <Mail size={15} className="shrink-0 text-orange-500" />
                {company.email}
              </a>
              <a
                href={`tel:+91${company.phones.office[0]}`}
                className="flex items-center gap-2.5 transition-colors hover:text-orange-400"
              >
                <Phone size={15} className="shrink-0 text-orange-500" />
                +91 {company.phones.office[0]} / {company.phones.office[1]}
              </a>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 transition-colors hover:text-orange-400"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-orange-500" />
                {company.address.full}
              </a>
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-[0.08em] text-white">
                {col.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/55 transition-colors hover:text-orange-400"
                    >
                      <span className="link-underline">{link.label}</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Jagdamba Procut Pvt. Ltd. All rights reserved.</p>
          <p className="text-white/30">{company.sinceLabel}</p>
        </div>
        </FooterFade>
      </Container>
    </footer>
  );
}
