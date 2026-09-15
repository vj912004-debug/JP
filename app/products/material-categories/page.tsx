import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { materialCategories } from "@/data/products";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/products/material-categories",
  title: "Material Categories — Carbon, Structural, Alloy & Wear-Resistant Plate",
  description:
    "Carbon steel, structural, boiler & pressure vessel, alloy, wear-resistant and special grade steel plates, ready stock and processed to drawing.",
});

export default function MaterialCategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Material Categories"
        title="Grade Categories Across Every Application"
        subtitle="From general fabrication to boiler-quality and wear-resistant plate — matched to your engineering requirement."
      >
        <div className="mt-8">
          <Button href="/grades" showArrow>View Full Grade Data</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading kicker="Categories" title="Seven categories, one stockyard" />
          <div className="mt-10 divide-y divide-hairline-light rounded-card border border-hairline-light bg-white">
            {materialCategories.map((cat, i) => (
              <Reveal key={cat.name} delay={i * 0.04}>
                <div className="flex flex-col gap-2 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink-primary">{cat.name}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{cat.note}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-hairline-blue bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-900 sm:text-right">
                    {cat.grades}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
