// src/components/Footer.tsx

"use client";

import Link from "next/link"
import { cn } from '@/lib/utils';
import { MapPin, Clock, Phone, PhoneCall, Mail, MailOpen } from 'lucide-react';  // Icons
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function NavBarDesktop({className}: {className?: string}) {
  return (
    <footer className={cn(className, "flex justify-center")}>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-self-center-safe justify-items-center gap-y-10 gap-x-10 mx:gap-y-0 md:gap-x-2 lg:gap-24 xl:gap-32 my-8 mx-4 md:mx-10">
        <section className="footer-section">
          <h4>Services</h4>
          <p><Link href="/services/office-support">Office Support</Link></p>
          <p><Link href="/services/website-development">Website Development</Link></p>
          <p><Link href="/services/microsoft-365">Microsoft 365 Configuration</Link></p>
          <p><Link href="/services/remote-access">Remote Access Configuration</Link></p>
        </section>

        <section className="footer-section">
          <h4>Areas</h4>
          <p>Toronto</p>
          <p>Vaughan</p>
          <p>Mississauga</p>
          <p>Markham</p>
          <p>Richmond Hill</p>
        </section>

        <section className="footer-section col-span-2 md:col-span-1">
          <div className="row">
            <MapPin size={20} />
            <p>Vaughan, ON, L6A2A1, Canada</p>
          </div>
          <div className="row">
            <Clock size={20} />
            <p>Mon - Fri &nbsp; | &nbsp; 9 a.m - 5 p.m</p>
          </div>
          <Tooltip>
            <TooltipTrigger className="row group" onClick={() => window.open("tel:416-523-5696")}>
              <Phone size={20} className="block group-hover:hidden" />
              <PhoneCall size={20} className="hidden group-hover:block" />
              <p className="button-link">(416) 523-5696</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to open phone dialer</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger className="row group" onClick={() => window.open("mailto:contact@itresolved.com")}>
              <Mail size={20} className="block group-hover:hidden" />
              <MailOpen size={20} className="hidden group-hover:block" />
              <p className="button-link">contact@itresolved.com</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to open email</p>
            </TooltipContent>
          </Tooltip>
        </section>
      </div>
    </footer>
  )
}