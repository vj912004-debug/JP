import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Preloader } from "@/components/motion/Preloader";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jagdamba Procut Pvt. Ltd. | Steel Plate Supplier & CNC Profile Cutting, Vadodara",
    template: "%s | Jagdamba Procut",
  },
  description:
    "Jagdamba Procut Pvt. Ltd. is a Vadodara, Gujarat steel stockholding and processing company offering steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing under one roof.",
  keywords: [
    "steel plate supplier Vadodara",
    "steel plate supplier Gujarat",
    "CNC profile cutting Vadodara",
    "laser cutting Vadodara",
    "heavy plate cutting",
    "CNC drilling",
    "boiler quality plate supplier",
    "SA516 Grade 70 plate supplier",
    "S355J2+N plate supplier",
    "IS 2062 E350 plate supplier",
    "ultrasonic tested steel plates",
  ],
  openGraph: {
    type: "website",
    siteName: "Jagdamba Procut Pvt. Ltd.",
    title: "Jagdamba Procut Pvt. Ltd. | Precision in Steel. Strength in Every Cut.",
    description:
      "Steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing — complete steel processing under one roof in Vadodara, Gujarat.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagdamba Procut Pvt. Ltd. | Precision in Steel. Strength in Every Cut.",
    description:
      "Steel plates, CNC profile cutting, laser cutting, CNC drilling and ultrasonic testing under one roof in Vadodara, Gujarat.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body className="bg-surface-primary font-sans text-ink-primary antialiased">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <ScrollProgress />
        <Navbar />
        <main id="main" className="relative">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
