import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="font-sans pb-20 gap-16 pt-20">
      <main className="flex flex-col items-center justify-center">
        <ContactForm variant="contained" />
      </main>
    </div>
  );
}
