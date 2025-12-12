// src/components/nav/NavMenuDesktop.tsx

"use client"

import Link from "next/link"
import Image from "next/image"

// UI components from shadcn/ui
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"

import { Phone } from 'lucide-react';  // Icons

// Custom components
import Logo from "@/components/Logo";

export default function NavBarDesktop({className}: {className?: string}) {
   const isSticky : Boolean = true
  
   return (
    <header className={cn(`flex justify-center items-center py-4 ${isSticky && "navbar-sticky"}`, className)}>
      <div className="flex justify-center items-center">
        <NavigationMenu className="pr-10" viewport={false}>
          <NavigationMenuList className="gap-4 flex-wrap">
            {/* Home Page & Logo */}
            <NavigationMenuItem className="xl:mr-20 xl:-ml-20">
              <NavigationMenuLink asChild>
                <Link className="no-hover p-1" href="/">
                  <Logo />
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`${navigationMenuTriggerStyle()} navbar-heading`}>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10 p-0">
                <ul className="grid w-64 gap-1 px-2 py-1 z-10 bg-secondary-foreground/50">
                  <li className="p-1">
                    <NavigationMenuLink asChild className="hover:bg-transparent!">
                      <Link href="/services/office-support" className="navbar-dropdown-links">Office Support</Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="p-1">
                    <NavigationMenuLink asChild className="hover:bg-transparent!">
                      <Link href="/services/website-development" className="navbar-dropdown-links">Website Development</Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="p-1">
                    <NavigationMenuLink asChild className="hover:bg-transparent!">
                      <Link href="/services/microsoft-365" className="navbar-dropdown-links">Microsoft 365 Configuration</Link>
                    </NavigationMenuLink>
                  </li>
                  <li className="p-1">
                    <NavigationMenuLink asChild className="hover:bg-transparent!">
                      <Link href="/services/remote-access" className="navbar-dropdown-links">Remote Access Configuration</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Service Areas */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading`}>
                <Link href="/service-areas">Service Areas</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading`}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading`}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" onClick={() => window.open("tel:416-523-5696")}>
          <div className="row">
            <Phone size={24} fill="black"/>
            <p className="text-lg">(416) 523-5696</p>
          </div>
        </Button>
      </div>
    </header>
  )
}