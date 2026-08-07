import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import ContactSection from "@/components/cta/ContactSection";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Contact Astral Labs | Web Development Consultation in Nairobi",
  description:
    "Start your software project. Tell us about your business and we'll tell you exactly what we'd build. Free consultation with the founder within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <ContactSection />
    </main>
  );
}
