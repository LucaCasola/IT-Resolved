// src/app/services/website-development/page.tsx

import type { Metadata } from "next";

import SiteExamplesCarousel from "@/components/SiteExamplesCarousel";

export const metadata: Metadata = {
  title: "Website Development",
  description: "Information about Website Development services offered by IT Resolved",
};
      //<div className="flex flex-col items-center justify-center">
export default function WebsiteDevelopment() {
  return (
    <div className="font-sans py-12 md:py-20">
      <h1 className="text-center mb-14 md:mb-6">Website Development</h1>
      <SiteExamplesCarousel />
    </div>
  );
}
