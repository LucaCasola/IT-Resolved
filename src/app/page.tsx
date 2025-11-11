// src/app/page.tsx

import type { Metadata } from "next";

// components import
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Tailored IT Solutions | IT Resolved",
  description: "Professional IT solutions, on-site tech support, and website development to help your business grow.",
};

export default function Home() {
  return (
    <main className="mt-0">
      <HeroBanner />
      <div className="col">
        <h1>IT Resolved Home</h1>
        <p className="page-description">
          Welcome to IT Resolved, your trusted partner for in-office tech support,
          and website development. I help businesses streamline operations, stay secure, and
          build an online presence.
        </p>
      </div>
      <SiteExamplesCarousel />
      <FAQ />
      <ContactForm />
    </main>
  );
}
