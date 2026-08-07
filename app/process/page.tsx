import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import JourneySection from "@/components/journey/JourneySection";
import ProcessClosingSection from "@/components/process/ProcessClosingSection";

export const dynamic = "force-static";

export const metadata: Metadata = buildMetadata({
  title: "Our Process | Custom Web Development From Concept to Launch",
  description:
    "Transparent, collaborative development process. From discovery to deployment, you know exactly what's happening and what you get. Five friendly steps to production-ready software.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-canvas pt-16">
      <JourneySection />
      <ProcessClosingSection />
    </main>
  );
}
