import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Preloader } from "@/components/motion/Preloader";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
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

export const viewport = {
  themeColor: "#f6f7f2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="site-shell min-h-full bg-surface font-sans text-ink antialiased">
        <JsonLd />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <ScrollProgress />
        <div className="flex min-h-full flex-col">
          <Navbar />
          <main id="main" className="relative flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
