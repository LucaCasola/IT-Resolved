// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// components
import NavController from "@/components/nav/NavController";
import Footer from "@/components/Footer";

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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/x-icon" href="/images/icon.ico" sizes="48x48"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
        <NavController className="bg-secondary-foreground" />

        {children}

        <Footer className="bg-secondary-foreground" />
      </body>
    </html>
  );
}
