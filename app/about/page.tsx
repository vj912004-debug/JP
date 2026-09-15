import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealStagger } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { CheckItem } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { company, whyChooseUs } from "@/data/company";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/about",
  title: "About Us",
  description:
    "Jagdamba Procut Pvt. Ltd. — a professionally managed steel stockholding, processing and supply company in Vadodara, Gujarat, serving the engineering industry since 2001.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Jagdamba Procut"
        title="Your Complete Steel Solution Partner"
        subtitle={company.description}
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading kicker="Our Philosophy" title="What every order runs on" />
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-2.5">
                  {company.philosophy.map((step) => (
                    <span
                      key={step}
                      className="rounded-full border border-hairline-blue bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-900"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ink-secondary">
                  Founded in {company.since}, {company.name} combines steel plate supply with
                  in-house CNC profile cutting, laser cutting and CNC drilling &mdash; so
                  engineering and fabrication buyers can source material and get it processed
                  without coordinating across multiple vendors.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="/quote" showArrow>Request a Quote</Button>
                  <Button href="/infrastructure" variant="outline">See Infrastructure</Button>
                </div>
              </Reveal>
            </div>

            <Reveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-block">
                  <ImagePlaceholder category="factory" label="Jagdamba Procut facility" className="h-full w-full" />
                </div>
                <div className="aspect-square overflow-hidden rounded-block">
                  <ImagePlaceholder category="steel-stock" label="Ready plate stock" className="h-full w-full" compact />
                </div>
                <div className="aspect-square overflow-hidden rounded-block">
                  <ImagePlaceholder category="components" label="Profile-cut components" className="h-full w-full" compact />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Why Customers Choose Us" title="Reasons buyers keep coming back" />
          <RevealStagger as="ul" className="mt-10 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <CheckItem key={item.title}>
                <span className="font-semibold text-ink-primary">{item.title}.</span> {item.body}
              </CheckItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 rounded-block bg-dark-950 p-8 sm:grid-cols-3 sm:p-12">
            {[
              { label: "ISO 9001:2015", value: company.registrations.iso.split("—")[1]?.trim() ?? company.registrations.iso },
              { label: "MSME / Udyam", value: company.registrations.udyam },
              { label: "GST Registered", value: `GSTIN ${company.registrations.gst}` },
            ].map((reg) => (
              <Reveal key={reg.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-orange-400">{reg.label}</p>
                <p className="mt-2 font-display text-lg font-bold text-white">{reg.value}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-center text-xs leading-relaxed text-ink-subtle">
            {company.registeredAsNote}
          </p>
        </Container>
      </section>
    </>
  );
}
