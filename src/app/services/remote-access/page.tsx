// src/app/services/remote-access/page.tsx

import type { Metadata } from "next";

// Custom component
import RemoteAccessExamples from "@/components/RemoteAccessExamples";

export const metadata: Metadata = {
  title: "Remote Access Setup Services | IT Resolved",
  description: `Secure remote access setup for businesses. TeamViewer, ScreenConnect, and more. Enable your team to work efficiently from anywhere.`,
};

export default function RemoteAccess() {
  return (
    <main>
      <div className="col">
        <h1>Remote Access</h1>
        <p className="page-description">
          Interested in setting up remote access for your work computers? I can install and configure a 
          remote access solution to ensure your employees can work efficiently from anywhere.
        </p>
      </div>
      <RemoteAccessExamples />
    </main>
  );
}
