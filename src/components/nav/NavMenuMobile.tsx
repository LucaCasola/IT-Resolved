"use client"

import Link from "next/link"
import Image from "next/image"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import { Button } from "../ui/button"
import { Phone, Menu, ChevronDownIcon } from 'lucide-react';  // Icons
import { cn } from "@/lib/utils";


export default function NavBarMobile({className}: {className?: string}) {
  return (
    <header className={cn(className, "flex items-center px-6 py-4 justify-around")}>
      <Sheet>
        <SheetTrigger className="absolute left-4"><Menu size={48}/></SheetTrigger>
        <SheetHeader className="sr-only">
          <SheetTitle>Nav menu</SheetTitle>
          <SheetDescription>Mobile navigation menu</SheetDescription>
        </SheetHeader>
        <SheetContent className="w-50 md:w-90 h-screen justify-between pt-10 pb-6 bg-primary-foreground" side={"left"}>
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex flex-col items-start gap-6 pl-6">
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading w-full max-w-[200px] text-center`}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services */}
              <Collapsible>
                <CollapsibleTrigger className={`${navigationMenuTriggerStyle()} navbar-heading w-full text-center`}>
                  Services
                  <ChevronDownIcon className="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" size={16}/>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-3 pl-10">
                    <li>
                        <Link className="text-sm" href="/services/office-support">Office Support</Link>
                    </li>
                    <li>
                        <Link className="text-sm" href="/services/website-development">Website Development</Link>
                    </li>
                    <li>
                        <Link className="text-sm" href="/services/microsoft-365">Microsoft 365</Link>
                    </li>
                    <li>
                        <Link className="text-sm" href="/services/remote-access">Remote Access</Link>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              {/* Service Areas */}
              <Collapsible>
                <CollapsibleTrigger className={`${navigationMenuTriggerStyle()} navbar-heading w-full text-center`}>
                  Service Areas
                  <ChevronDownIcon className="relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" size={16}/>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-3 pl-10">
                    <li>
                      <p className="text-sm">Toronto</p>
                    </li>
                    <li>
                      <p className="text-sm">Vaughan</p>
                    </li>
                    <li>
                      <p className="text-sm">Mississauga</p>
                    </li>
                    <li>
                      <p className="text-sm">Markham</p>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              {/* About */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading w-full max-w-[200px] text-center`}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-heading w-full max-w-[200px] text-center`}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" className="mx-auto" onClick={() => window.open("tel:416-523-5696")}>
            <div className="row">
              <Phone size={24} fill="black"/>
              <p className="text-lg">(416) 523-5696</p>
            </div>
          </Button>
        </SheetContent>
      </Sheet>

      {/* Home Page & Logo */}
      <Link className="row" href="/">
        <Image src="/images/logo.png" alt="IT Resolved Logo" width={45} height={45} className="inline-block mr-2"/>
        <span className="text-3xl font-bold whitespace-nowrap">IT Resolved</span>
      </Link>
    </header>
  )
}