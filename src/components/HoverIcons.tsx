// src/components/DeviceSupportIcons.tsx

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

// Icon props for TS types & icon imports
import { LucideProps, Printer, MailCheck, RefreshCcw, CloudUpload } from "lucide-react"

const services: { 
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>; 
  title: string; 
  description: string; 
}[] = [
  {
    icon: Printer,
    title: "Device Support",
    description: "On-site and remote support for printers, scanners, and other office devices.",
  },
  {
    icon: MailCheck,
    title: "Email Help",
    description: "Assistance with email setup and troubleshooting send and receive issues.",
  },
  {
    icon: RefreshCcw,
    title: "System Updates",
    description: "Preform system updates to keep your computer up-to-date and secure.",
  },
  {
    icon: CloudUpload,
    title: "File Backup",
    description: "Backup your important files to a cloud storage solution like OneDrive, or to an external hard drive.",
  },
]

export default function HoverIcons() {
  const strokeWidth = 1.5;
  const size = 100;

  return (
    <section className="responsive-width">
      <div className="grid gap-y-4 grid-cols-2 md:grid-cols-4 justify-items-center">
        {services.map((service) => (
          <HoverCard key={service.title}>
            <HoverCardTrigger asChild>
              <div className="gap-y-0! col w-40 md:w-30 lg:w-40 py-3 justify-evenly bg-accent border-3 rounded-4xl hover:shadow-xl group">
                <service.icon size={size} strokeWidth={strokeWidth}/>
                <h3 className="text-center group-hover:underline">{service.title}</h3>
              </div>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <p className="text-center">
                {service.description}
              </p>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </section>
  )
}
