// src/app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import "./globals.css";

// UI components
import { Toaster } from "@/components/ui/sonner"

// Custom components
import NavController from "@/components/nav/NavController";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nohemi = localFont({
  variable: "--font-nohemi",
  src: [
    {
      path: '../../public/fonts/Nohemi/Nohemi-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Nohemi/Nohemi-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
})

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
      <body className={`${geistSans.variable} ${nohemi.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <NavController className="bg-secondary-foreground" />

        {children}

        <Footer className="bg-secondary-foreground" />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
