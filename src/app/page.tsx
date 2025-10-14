import Image from "next/image";

import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="font-sans pb-20 gap-16 pt-20">
      <main className="flex flex-col items-center justify-center">
        <ContactForm className="bg-primary-foreground" />
      </main>
    </div>
  );
}
