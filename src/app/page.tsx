// src/app/page.tsx

import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";
import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";

export const metadata: Metadata = {
  title: "IT Resolved Homepage",
  description: "Welcome to IT Resolved, your trusted IT solutions provider.",
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center font-sans pb-20 gap-16 pt-20">
      <SiteExamplesCarousel />
      <ContactForm />
    </div>
  );
}
