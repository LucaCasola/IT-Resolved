// src/app/services/microsoft-365/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export const metadata: Metadata = {
  title: "Microsoft 365 Services | IT Resolved",
  description: "Information about Microsoft 365 services offered by IT Resolved",
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
        <AspectRatio ratio={16 / 9} className="overflow-hidden">
          <Image 
            src="/images/microsoft-365-group.jpg" 
            alt="Picture of Microsoft 365 apps icons" 
            fill
            sizes="..."
          />
        </AspectRatio>
      </section>
    </main>
  );
}
