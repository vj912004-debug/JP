import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/services",
  title: "Services — Cutting, Drilling, Testing & Handling",
  description:
    "CNC profile cutting, laser cutting, CNC drilling, heavy plate cutting, UT testing, thickness measurement, inspection & traceability and handling & delivery — under one roof.",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Complete Steel Processing Solutions"
        subtitle="Material, cutting, testing and delivery — coordinated at a single facility so your order moves without handoffs between vendors."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Wrench;
              return (
                <Reveal key={service.slug} delay={(i % 4) * 0.06}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col justify-between rounded-card border border-hairline-light bg-white p-6 transition-all duration-300 ease-engineered hover:-translate-y-1 hover:border-blue-800/40 hover:shadow-card-hover"
                  >
                    <div>
                      <span className="grid h-11 w-11 place-items-center rounded-xs bg-blue-50 text-blue-900 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                        <Icon size={20} strokeWidth={1.75} />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold text-ink-primary">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{service.short}</p>
                    </div>
                    <span className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-blue-900 group-hover:text-orange-600">
                      Learn more
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
