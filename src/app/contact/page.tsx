// src/app/contact/page.tsx

import type { Metadata } from "next";

// Custom component
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | IT Resolved",
  description: `Ready to get started? Get in touch for reliable IT support, website development, and business 
    technology solutions. Free consultations available. Professional IT services in the Greater Toronto Area.`,
};

export default function Contact() {
  return (
    <main>
      <div className="col">
        <h1>Contact</h1>
        <p className="page-description">
          Ready to get started? Reach out today for IT support, web development, or a free consultation.
          I'm here to help your business succeed with reliable tech solutions.
        </p>
      </div>
      <ContactForm variant="contained" />
    </main>
  );
}
