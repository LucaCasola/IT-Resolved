// src/app/page.tsx

import type { Metadata } from "next";

// components
import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "IT Resolved | Business IT Solutions & Web Development",
  description: `Streamline your business operations with professional IT support and web development services. Expert  
    on-site support helping businesses in the Greater Toronto Area stay secure, efficient, and up to date.`
};

export default function Home() {
  return (
    <main className="mt-0">
      <HeroBanner />
      <div id="scrollto" className="col scroll-mt-28">
        <h1>IT Resolved Home</h1>
        <p className="page-description">
          Welcome to IT Resolved, your trusted partner for in-office tech support
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
