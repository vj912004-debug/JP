import type { MetadataRoute } from "next";
import { services } from "@/data/services";

const base = "https://www.jagdambaprocut.com";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/products/steel-plates",
  "/products/steel-makes",
  "/products/material-categories",
  "/services",
  "/machinery",
  "/infrastructure",
  "/quality",
  "/grades",
  "/industries",
  "/transport",
  "/gallery",
  "/downloads",
  "/stock-enquiry",
  "/quote",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((s) => `/services/${s.slug}`);
  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-09-14"),
  }));
}
