import { company } from "@/data/company";
import { SITE_URL } from "@/lib/seo";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    legalName: company.name,
    url: SITE_URL,
    email: company.email,
    telephone: `+91${company.phones.office[0]}`,
    foundingDate: String(company.since),
    description: company.description,
    slogan: company.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.line1,
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    areaServed: "IN",
    sameAs: [`https://wa.me/${company.whatsapp}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
