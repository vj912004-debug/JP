"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const sources: Record<string, string> = {
  hero: "/images/hero.jpg",
  factory: "/images/factory.jpg",
  "steel-yard": "/images/steel-yard.jpg",
  "steel-stock": "/images/steel-stock.jpg",
  "cnc-profile-cutting": "/images/cnc-profile-cutting.jpg",
  "laser-cutting": "/images/laser-cutting.jpg",
  "cnc-drilling": "/images/cnc-drilling.jpg",
  "heavy-plate-cutting": "/images/heavy-plate-cutting.jpg",
  "crane-handling": "/images/crane-handling.jpg",
  hydra: "/images/hydra.jpg",
  forklift: "/images/forklift.jpg",
  transport: "/images/transport.jpg",
  components: "/images/components.jpg",
  "components-rings": "/images/components-rings.jpg",
  "components-parts": "/images/components-parts.jpg",
  inspection: "/images/inspection.jpg",
  "thickness-measurement": "/images/thickness-measurement.jpg",
  "ut-testing": "/images/ut-testing.jpg",
  quality: "/images/quality.jpg",
  machinery: "/images/machinery.jpg",
  dispatch: "/images/dispatch.jpg",
};

type Props = {
  category: string;
  label?: string;
  filename?: string;
  className?: string;
  dark?: boolean;
  compact?: boolean;
  priority?: boolean;
  sizes?: string;
};

export function ImagePlaceholder({
  category,
  label,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw",
}: Props) {
  const src = sources[category] ?? `/images/${category}.jpg`;
  const alt = label || category.replace(/-/g, " ");

  return (
    <div className={cn("relative isolate h-full w-full overflow-hidden bg-dark-900", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
