"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered = galleryItems.filter((item) => active === "All" || item.category === active);

  const openAt = (id: string) => {
    const idx = filtered.findIndex((f) => f.id === id);
    setLightboxIndex(idx);
  };

  const step = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    const next = (lightboxIndex + dir + filtered.length) % filtered.length;
    setLightboxIndex(next);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter gallery by category">
        {(["All", ...galleryCategories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => {
              setActive(cat);
              setLightboxIndex(null);
            }}
            className={cn(
              "rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-all",
              active === cat
                ? "border-blue-900 bg-blue-900 text-white shadow-blue-glow"
                : "border-hairline-medium bg-white text-ink-secondary hover:-translate-y-0.5 hover:border-blue-800/40 hover:shadow-subtle"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence>
          {filtered.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12%)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openAt(item.id)}
              className="group relative aspect-square overflow-hidden rounded-card text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-orange-600"
            >
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="h-full w-full">
                <ImagePlaceholder category={item.imageCategory} className="h-full w-full" compact />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-blue-950 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand size={14} />
              </span>
              <span className="absolute inset-x-0 bottom-0 p-3 text-[12.5px] font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.title}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-dark-950/95 p-5"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="gallery-lightbox-title"
          >
            <button
              ref={closeRef}
              aria-label="Close gallery"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white"
            >
              <X size={20} />
            </button>
            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white sm:left-8"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white sm:right-8"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-card"
            >
              <ImagePlaceholder category={current.imageCategory} label={current.title} className="h-full w-full" />
              <p id="gallery-lightbox-title" className="sr-only">
                {current.title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
