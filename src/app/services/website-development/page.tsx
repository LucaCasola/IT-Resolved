// src/app/services/website-development/page.tsx

import type { Metadata } from "next";

// components
import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";

export const metadata: Metadata = {
  title: "Web Development Services | IT Resolved",
  description: `Professional website development services in the GTA. Custom responsive websites built with modern technologies that convert visitors into customers. SEO-optimized and mobile-friendly designs.`,
};
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
