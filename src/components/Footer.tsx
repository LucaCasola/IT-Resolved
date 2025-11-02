// src/components/Footer.tsx

"use client";

import Link from "next/link"
import { cn } from '@/lib/utils';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';  // Icons

export default function NavBarDesktop({className}: {className?: string}) {
  return (
    <footer className={cn(className, "bg-primary-foreground flex justify-center")}>
      <div className="grid grid-cols-2 md:grid-cols-3 justify-self-center-safe md:justify-items-center gap-y-6 gap-x-20 md:gap-12 lg:gap-32 my-8 mx-4 md:mx-10">
        <section className="space-y-2 ">
          <h4>Services</h4>
          <p>Office Support</p>
          <p><Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/services/website-development">Website Development</Link></p>
          <p>Microsoft 365 Configuration</p>
          <p>Remote Access Configuration</p>
        </section>

        <section className="space-y-2 min-content">
          <h4>Areas</h4>
          <p>Toronto</p>
          <p>Vaughan</p>
          <p>Mississauga</p>
          <p>Markham</p>
          <p>Richmond Hill</p>
        </section>

        <section className="col-span-2 md:col-span-1 space-y-3">
          <div className="row">
            <MapPin size={20} />
            <p>Vaughan, ON, L6A2A1, Canada</p>
          </div>
          <div className="row">
            <Clock size={20} />
            <p>Mon - Fri &nbsp; | &nbsp; 9 a.m - 5 p.m</p>
          </div>
          <div className="row">
            <Phone size={20} />
            <p>(416) 523-5696</p>
          </div>
          <div className="row">
            <Mail size={20} />
            <p>contact@itresolved.com</p>
          </div>
        </section>
      </div>
    </footer>
  )
}