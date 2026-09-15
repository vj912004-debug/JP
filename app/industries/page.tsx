import type { Metadata } from "next";
import * as Icons from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Button } from "@/components/ui/Button";
import { industries, applications } from "@/data/industries";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/industries",
  title: "Industries We Serve",
  description:
    "Pressure vessel & boiler, heavy engineering, power & energy, oil & gas, cement & mining, structural, material handling and OEM manufacturing — steel plate and profile-cut parts for every sector.",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Where Our Stock, Cutting and Processing Support Adds Value"
        subtitle="Ready stock and drawing-based cutting for industries that can't compromise on material quality or delivery."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Talk About Your Project</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
            {industries.map((ind, i) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[ind.icon] ?? Icons.Factory;
              return (
                <Reveal key={ind.name} delay={(i % 4) * 0.05}>
                  <div id={ind.slug} className="group relative aspect-[4/5] scroll-mt-28 overflow-hidden rounded-card bg-blue-950 transition-transform duration-300 ease-engineered hover:-translate-y-2 hover:shadow-card-hover">
                    <div className="absolute inset-0 bg-technical-grid opacity-40" />
                    <div className="relative flex h-full flex-col justify-between p-4">
                      <Icon size={22} strokeWidth={1.6} className="text-orange-400" />
                      <div>
                        <h3 className="text-[13.5px] font-semibold leading-snug text-white">{ind.name}</h3>
                        <p className="mt-1.5 text-[11.5px] leading-snug text-white/50">{ind.note}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Common Applications" title="What we cut, for what it's used" />
          <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {applications.map((app) => (
              <div key={app} className="relative aspect-square overflow-hidden rounded-card">
                <ImagePlaceholder category="components" className="h-full w-full" compact />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-950/85 to-transparent p-3 pt-6">
                  <span className="text-[12px] font-semibold text-white">{app}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
