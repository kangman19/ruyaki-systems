import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Ruyaki Systems | Software Development, Digital Solutions, Web Design in Nairobi, Kenya",
    template: "%s | Ruyaki Systems",
  },
  description:
    "Ruyaki Systems builds custom web apps, platforms, and software solutions for growing businesses in Kenya. Let's turn your idea into production-ready software.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: SITE.url,
    siteName: SITE.name,
    title: "Ruyaki Systems | Software Development, Digital Solutions, Web Design in Nairobi, Kenya",
    description:
      "Ruyaki Systems builds custom web apps, platforms, and software solutions for growing businesses in Kenya. Let's turn your idea into production-ready software.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ruyaki Systems - Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruyaki Systems | Software Development, Digital Solutions, Web Design in Nairobi, Kenya",
    description:
      "Ruyaki Systems builds custom web apps, platforms, and software solutions for growing businesses in Kenya. Let's turn your idea into production-ready software.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    areaServed: "KE",
    serviceType: [
      "Web Application Development",
      "Software Development",
      "Custom Web Design",
      "API Integration",
      "System Architecture",
      "Product Development",
    ],
    description:
      "Software development and web application design agency in Nairobi, Kenya. We build custom solutions for growing businesses.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas">
        <Navigation />
        {children}
        <Footer />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
