import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/gallery",
  title: "Gallery",
  description:
    "Factory, steel plate yard, CNC and laser cutting, cranes and handling, finished components and dispatch — a visual look at the Jagdamba Procut facility.",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside the Facility"
        subtitle="Factory shed, plate yard, cutting machines, crane handling and finished components — filter by category or open any image."
      />
      <section className="py-20 sm:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </>
  );
}
