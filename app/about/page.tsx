import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import AboutContent from "@/components/about/AboutContent";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "About Ruyaki Systems | Custom Software Development Nairobi",
  description:
    "Learn about Ruyaki Systems, a software development agency in Nairobi building high-performance web apps and systems for growing businesses across Kenya.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-canvas px-6">
      <AboutContent />
    </main>
  );
}
