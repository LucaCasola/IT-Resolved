// src/app/services/office-support/page.tsx

import type { Metadata } from "next";

// UI components from shadcn/ui
import HoverIcons from "@/components/HoverIcons";

export const metadata: Metadata = {
  title: "Office Support Services | IT Resolved",
  description: `Comprehensive office IT support services in the GTA. Software installation, troubleshooting,  printer setup, data migration, and general IT assistance for small businesses and offices.`,
};

export default function OfficeSupport() {
  return (
    <main>
      <div className="col">
        <h1>Office Support</h1>
        <p className="page-description">
          Looking for general office support? I can help with that! Whether you need assistance with software 
          installation, troubleshooting, connecting that pesky printer, or migrating your data, I'm here to help.
        </p>
      </div>
      <HoverIcons />
    </main>
  );
}
