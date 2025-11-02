"use client"

import Link from "next/link"

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
import { cn } from "@/lib/utils";


export default function NavBarDesktop({className}: {className?: string}) {
  return (
    <header className={cn("flex justify-center items-center py-4 px-1 bg-primary-foreground", className)}>
      <div className="flex justify-center items-center">
        <NavigationMenu className="pr-10" viewport={false}>
          <NavigationMenuList className="gap-4 flex-wrap">
            {/* Home Page & Logo */}
            <NavigationMenuItem className="mr-24">
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">
                  <h1 className="text-2xl  font-bold">IT Resolved</h1>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem className="block">
              <NavigationMenuTrigger className="navbar-heading">Services</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="grid w-72 gap-2 px-4 py-1 z-10">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Office Support</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/services/website-development">Website Development</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Microsoft 365 Configuration</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Remote Access Configuration</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Service Areas */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="navbar-heading">Service Areas</NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                <ul className="grid w-36 gap-2 px-4 py-1 text-lg">
                  <li>
                    <p>Toronto</p>
                  </li>
                  <li>
                    <p>Vaughan</p>
                  </li>
                  <li>
                    <p>Mississauga</p>
                  </li>
                  <li>
                    <p>Markham</p>
                  </li>
                  <li>
                    <p>Richmond Hill</p>
                  </li>
                </ul>
              </NavigationMenuContent>
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