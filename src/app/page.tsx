// src/app/page.tsx

import type { Metadata } from "next";

import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "IT Resolved Homepage",
  description: "Welcome to IT Resolved, your trusted IT solutions provider.",
};

export default function Home() {
  return (
    <div className="font-sans pb-20 gap-16 pt-20">
      <main className="flex flex-col items-center justify-center">
        <ContactForm />
      </main>
    </div>
  );
}
