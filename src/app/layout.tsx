import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT Resolved",
  description: "Your go-to IT solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex py-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold px-4">IT Resolved</h1>
          </div>

          <div className="flex-[2] flex justify-center">
            <div className="bg-accent rounded-md px-5">
              <NavigationMenu>
                <NavigationMenuList className="gap-8">
                  <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/contact">Contact</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link className="hover:[text-shadow:_1px_0_0_currentColor]" href="/about">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="flex-1"></div>
        </header>

        <main>{children}</main>

        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        </footer>
      </body>
    </html>
  );
}
