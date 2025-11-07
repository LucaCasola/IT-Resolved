// src/app/contact/page.tsx

import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with IT Resolved",
};

export default function Contact() {
  return (
    <main>
      <ContactForm variant="contained" />
    </main>
  );
}
