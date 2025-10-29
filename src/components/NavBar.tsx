"use client"

import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Button } from "./ui/button"

import { Phone } from 'lucide-react';


export default function NavBar() {
  return (
    <div  className="py-4 bg-primary-foreground">
      <div className="flex justify-center items-center">

        <NavigationMenu className="pr-16">
          <NavigationMenuList className="gap-8">
            {/* Home Page & Logo */}
            <NavigationMenuItem className="pr-32">
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">
                  <h1 className="text-2xl font-bold">IT Resolved</h1>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Services</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Service Areas */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Service Areas</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Contact */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button variant="outline" className="" onClick={() => window.open("tel:416-523-5696")}>
          <div className="row">
            <Phone size={24} fill="black"/>
            <p className="text-lg">(416) 523-5696</p>
          </div>
        </Button>
      </div>
    </div>
  )
}