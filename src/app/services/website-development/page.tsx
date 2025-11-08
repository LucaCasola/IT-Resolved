// src/app/services/website-development/page.tsx

import type { Metadata } from "next";

import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";

export const metadata: Metadata = {
  title: "Web Development Services | IT Resolved",
  description: "Information about Website Development services offered by IT Resolved",
};
      //<div className="flex flex-col items-center justify-center">
export default function WebsiteDevelopment() {
  return (
    <main>
      <div className="col">
        <h1>Website Development</h1>
        <p className="page-description">
          Bring your ideas to life with custom website design and development. 
          We build responsive, fast, and SEO-friendly websites that reflect your brand 
          and drive results; from simple business pages to complex web platforms.
        </p>
      </div>
      <SiteExamplesCarousel />
    </main>
  );
}
