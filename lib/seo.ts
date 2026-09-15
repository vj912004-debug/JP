import type { Metadata } from "next";

export const SITE_URL = "https://www.jagdambaprocut.com";

export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Jagdamba Procut`,
      description,
      url,
    },
  };
}
