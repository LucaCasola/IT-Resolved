// src/app/page.tsx

import type { Metadata } from "next";

import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";

export const metadata: Metadata = {
  title: "IT Resolved Homepage",
  description: "Welcome to IT Resolved, your trusted IT solutions provider.",
};

export default function Home() {
  return (
    <main className="mt-0">
      <HeroBanner />
      <SiteExamplesCarousel />
      <ContactForm />
    </main>
  );
}
