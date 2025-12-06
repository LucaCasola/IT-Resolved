// src/app/services/microsoft-365/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

// UI component from shadcn/ui
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const metadata: Metadata = {
  title: "Microsoft 365 Services | IT Resolved",
  description: `Professional Microsoft 365 setup, migration, and support services. Expert configuration of Office apps, Teams, OneDrive, and email migration for businesses. Get your team connected and productive.`,
};

export default function Microsoft365() {
  return (
    <main>
      <div className="col">
        <h1>Microsoft 365 Services</h1>
        <p className="page-description">
          Looking to setup or migrate to a Microsoft 365 Business account? I can assist with configuration, data transfer, 
          troubleshooting, and getting all of your employees connected to help you get the most out of these applications.
        </p>
      </div>
      <section className="col responsive-width gap-y-3">
        <h2>Microsoft 365 For Business</h2>
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <Image 
            src="/images/microsoft-365-group.jpg" 
            alt="Picture of Microsoft 365 apps icons" 
            fill
            sizes="..."
          />
        </AspectRatio>
        <p className="text-balance text-center">
          Microsoft 365 Business is a powerful suite of productivity tools that includes applications like Word, Excel, PowerPoint, Outlook, Teams, and OneDrive. 
          It offers cloud-based services that help with collaboration, communication, and efficient workflow management.
        </p>
      </section>
    </main>
  );
}
