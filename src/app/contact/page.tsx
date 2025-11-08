// src/app/contact/page.tsx

import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | IT Resolved",
  description: "Get in touch with us at IT Resolved",
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
