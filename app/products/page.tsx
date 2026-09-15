import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { DataTable } from "@/components/ui/Primitives";
import { stockRange } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/products",
  title: "Products — Steel Plates, Steel Makes & Material Categories",
  description:
    "Ready stock steel plates from 3 mm to 300 mm, sourced from Jindal, SAIL, JSW, Tata Steel and AM/NS India, across carbon, structural, boiler and wear-resistant grades.",
});

const productLinks = [
  {
    title: "Steel Plates",
    href: "/products/steel-plates",
    desc: "3 mm to 300 mm ready stock, full plates or profile-cut parts, with Mill Test Certificate support.",
    category: "steel-stock",
  },
  {
    title: "Steel Makes",
    href: "/products/steel-makes",
    desc: "Jindal Steel, SAIL, JSW Steel, Tata Steel, AM/NS India, and imported / China-origin material.",
    category: "steel-yard",
  },
  {
    title: "Material Categories",
    href: "/products/material-categories",
    desc: "Carbon, structural, boiler & pressure vessel, alloy, wear-resistant and special grade plate.",
    category: "components",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Steel plate stock, ready to process"
        subtitle="Approx. 2,500 MT of ready steel stock across a 3 mm to 300 mm thickness range, from leading domestic mills and select imported sources."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {productLinks.map((p) => (
              <Reveal key={p.title}>
                <Link href={p.href} className="group block h-full">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card">
                    <div className="h-full w-full transition-transform duration-500 ease-engineered group-hover:scale-[1.045]">
                      <ImagePlaceholder category={p.category} label={p.title} className="h-full w-full" />
                    </div>
                    <span className="absolute right-4 top-4 grid h-9 w-9 -translate-x-2 place-items-center rounded-full bg-white/90 text-blue-950 opacity-0 transition-all duration-300 ease-engineered group-hover:translate-x-0 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink-primary group-hover:text-blue-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Ready Stock Summary" title="Standard stock range" />
          <div className="mt-10">
            <DataTable
              columns={["Parameter", "Details"]}
              rows={stockRange.map((r) => [r.label, r.value])}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
