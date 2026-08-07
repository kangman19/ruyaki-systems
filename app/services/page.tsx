import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ServicesContent from "@/components/services/ServicesContent";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Web Development & Software Services in Nairobi | Ruyaki Systems",
  description:
    "Custom web apps, API integration, booking systems, and digital solutions for businesses in Kenya. We build secure, fast, and Google-visible systems using Next.js, TypeScript, Flutter, and Firebase.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-canvas pt-16 overflow-hidden">
      <ServicesContent />
    </main>
  );
}
