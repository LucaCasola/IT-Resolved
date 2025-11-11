// src/components/FAQ.tsx

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs: { question: string; answer: String; }[] = [
  {
    question: "How do we get in touch when we need support?",
    answer: `You can contact me by phone (416) 523-5696 or email support@itresolved.ca. I'll quickly respond to help keep your IT services running smoothly.`
  },
  {
    question: "When I phone, will I speak directly to a technician who can help?",
    answer: `Yes! When you call IT Resolved, you'll speak directly with me, Luca, the owner and lead technician. I handle all support requests personally to ensure you receive expert assistance tailored to your needs.`
  },
  {
    question: "Do you offer different levels of support?",
    answer: `Yes! I offer flexible support options including:
  ● Pay-as-you-go support: where you pay an hourly rate for a specific task, like fixing a printer or setting up a new computer.
  ● Contracted support: where we agree on a set number of hours per month at a discounted rate. Ideal for ongoing maintenance and support.
  ● Project-based support: for one-time projects like network setup or system upgrades, with a fixed price quote.`
  },
  {
    question: "What exactly do you support in your contracted support plan?",
    answer: `The standard contracted support plan includes support for desktops, laptops, mobile devices, printers, software applications, Microsoft 365 accounts, and general IT troubleshooting. If you have specialized equipment or software, we can discuss including support for those as well!`
  },
  {
    question: "Do you supply hardware as well as support?",
    answer: `While I don't sell hardware directly, I can recommend reliable equipment based on my experience and replace any faulty computer parts for aging systems as needed.`
  },
]

export default function FAQ() {
  return (
    <section className="bg-primary-foreground col py-12">
      <h2>Frequently Asked Questions</h2>
      <Accordion
        type="single"
        collapsible
        className="w-9/10 md:w-3/5 max-w-7xl flex flex-col gap-y-4"
      >
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index}
            value={`item-${index}`}
            className={`shadow rounded-xl pl-4 ${index % 2 === 0 ? 'bg-white/80' : 'bg-white/80'}`}
          >
            <AccordionTrigger className="justify-start">
              <h3>{faq.question}</h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <pre className="px-4 text-base text-wrap">{faq.answer}</pre>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
