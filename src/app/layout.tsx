// src/app/layout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Custom components
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
  title: "IT Resolved | Business IT Solutions",
  description: "Your go-to IT solutions for local businesses",
  icons: {
    icon: [
      { 
        media: '(prefers-color-scheme: light)',
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      { 
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.ico',
        type: 'image/x-icon',
      },
    ],
    apple: '/apple-icon.png', 
  },
  manifest: "/manifest.ts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="IT Resolved" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <NavController className="bg-secondary-foreground" />

        {children}

        <Footer className="bg-secondary-foreground" />
      </body>
    </html>
  );
}
