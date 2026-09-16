import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as Icons from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SpecList, CheckItem, Badge } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { services, getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    ...pageMeta({
      path: `/services/${params.slug}`,
      title: service.name,
      description: service.intro,
    }),
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Wrench;
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero eyebrow="Services" title={service.heading} subtitle={service.intro}>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/quote" showArrow>Request a Quote</Button>
          <Button href="/contact" variant="outline-light">Talk to Our Team</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="aspect-[16/10] overflow-hidden rounded-block">
                  <ImagePlaceholder category={service.imageCategory} label={`${service.name} in progress`} className="h-full w-full" />
                </div>
              </Reveal>

              <div className="mt-10">
                <span className="grid h-11 w-11 place-items-center rounded-xs bg-blue-50 text-blue-900">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <h2 className="mt-5 font-display text-h3-mobile font-bold text-ink-primary sm:text-h3">
                  Capabilities
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.capabilities.map((cap) => (
                    <Badge key={cap} variant="blue">{cap}</Badge>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="font-display text-h3-mobile font-bold text-ink-primary sm:text-h3">
                  Applications
                </h2>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {service.applications.map((app) => (
                    <CheckItem key={app}>{app}</CheckItem>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-card border border-hairline-light bg-surface-secondary p-6 sm:p-7">
                <h3 className="font-display text-base font-bold uppercase tracking-[0.04em] text-ink-primary">
                  Technical Specification
                </h3>
                <div className="mt-4">
                  <SpecList items={service.specs} />
                </div>
              </div>

              <div className="mt-6 rounded-card border border-hairline-light bg-white p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Other services
                </h3>
                <ul className="mt-4 flex flex-col divide-y divide-hairline-light">
                  {otherServices.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="flex items-center justify-between py-3 text-sm font-medium text-ink-muted hover:text-brand"
                      >
                        {s.name}
                        <ArrowUpRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-16">
        <Container>
          <SectionHeading
            kicker="Next Step"
            title="Send your drawing or specification"
            subtitle="Share the grade, thickness and quantity you need and our team will confirm capability, pricing and lead time."
          />
          <Reveal delay={0.1}>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/quote" showArrow>Request a Quote</Button>
              <Button href="/stock-enquiry" variant="outline">Check Stock</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
