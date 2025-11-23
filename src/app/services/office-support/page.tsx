// src/app/services/office-support/page.tsx

import type { Metadata } from "next";

import HoverIcons from "@/components/HoverIcons";

export const metadata: Metadata = {
  title: "Office Support Services | IT Resolved",
  description: "Information about Office Support services offered by IT Resolved",
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
