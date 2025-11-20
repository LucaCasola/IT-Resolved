// src/app/services/remote-access/page.tsx

import type { Metadata } from "next";

import RemoteAccessExamples from "@/components/RemoteAccessExamples";

export const metadata: Metadata = {
  title: "Remote Access Setup Services | IT Resolved",
  description: "Information about Remote Access setup services offered by IT Resolved",
};

export default function RemoteAccess() {
  return (
    <main>
      <div className="col">
        <h1>Remote Access</h1>
        <p className="page-description">
          Interested in setting up remote access for your work computers? I can install and configure a 
          remote access solution to ensure your employees can work efficiently from home.
        </p>
      </div>
      <RemoteAccessExamples />
    </main>
  );
}
