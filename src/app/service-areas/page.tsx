// src/app/service-areas/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas | IT Resolved",
  description: "Discover the service areas covered by IT Resolved for IT support and web development.",
};

export default function ServiceAreas() {
  return (
    <main>
      <div className="col">
        <h1>Service Areas</h1>
        <p className="page-description">
          I provide services for businesses in the Greater Toronto Area.
        </p>
      </div>
    </main>
  );
}
