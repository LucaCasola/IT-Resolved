"use client"

import Link from "next/link"

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
import { Phone, Menu, ChevronDownIcon } from 'lucide-react';
import { cn } from "@/lib/utils";


export default function NavBarMobile({className}: {className?: string}) {
  return (
    <div  className={cn(className, "flex flex-row p-6 items-center bg-primary-foreground")}>
      <Sheet>
        <SheetTrigger><Menu size={48}/></SheetTrigger>
        <SheetHeader>
          <SheetTitle className="hidden">Nav menu</SheetTitle>
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
                  <ChevronDownIcon className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" size={16}/>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-3 pl-10">
                    <li>
                        <Link className="hover:[text-shadow:_1px_0_0_currentColor] text-sm" href="/">Office Support</Link>
                    </li>
                    <li>
                        <Link className="hover:[text-shadow:_1px_0_0_currentColor] text-sm" href="/">Website </Link>
                    </li>
                    <li>
                        <Link className="hover:[text-shadow:_1px_0_0_currentColor] text-sm" href="/">Microsoft 365</Link>
                    </li>
                    <li>
                        <Link className="hover:[text-shadow:_1px_0_0_currentColor] text-sm" href="/">Remote Access</Link>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              {/* Service Areas */}
              <Collapsible>
                <CollapsibleTrigger className={`${navigationMenuTriggerStyle()} navbar-heading w-full text-center`}>
                  Service Areas
                  <ChevronDownIcon className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180" aria-hidden="true" size={16}/>
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

          <Button variant="outline" className="mx-10" onClick={() => window.open("tel:416-523-5696")}>
            <div className="row">
              <Phone size={24} fill="black"/>
              <p className="text-lg">(416) 523-5696</p>
            </div>
          </Button>
        </SheetContent>
      </Sheet>

      {/* Home Page & Logo */}
      <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">
        <h1 className="text-3xl font-bold whitespace-nowrap">IT Resolved</h1>
      </Link>
    </div>
  )
}