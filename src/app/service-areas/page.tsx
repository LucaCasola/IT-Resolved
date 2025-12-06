// src/app/service-areas/page.tsx

import type { Metadata } from "next";

// Custom component
import ServiceAreasMap from "@/components/ServiceAreasMap";

export const metadata: Metadata = {
  title: "Service Areas | IT Resolved",
  description: `IT Resolved serves the Greater Toronto Area including Toronto, Vaughan, Mississauga, Brampton, Markham, and Richmond Hill. Professional IT support and web development services across the GTA.`,
};

export default function ServiceAreas() {
  return (
    <main className="gap-y-2! md:gap-y-6!">
      <div className="col">
        <h1>Service Areas</h1>
        <p className="page-description">
          I provide services for businesses in the Greater Toronto Area which includes Toronto, 
          Vaughan, Mississauga, Brampton, Markham, Richmond Hill, and surrounding regions. 
        </p>
      </div>
      <ServiceAreasMap />
    </main>
  );
}
