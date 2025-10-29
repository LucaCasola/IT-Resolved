import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { MapPin, Clock, Phone, Mail } from 'lucide-react';

import NavBar from "@/components/NavBar";

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
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1'
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="IT Resolved" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header><NavBar /></header>

        <main>{children}</main>

        <hr />

        <footer className="flex justify-center gap-32 py-12">
          <section className="flex flex-col gap-2">
            <h4>Services</h4>
            <p>Office Support</p>
            <p>Website Development</p>
            <p>Microsoft 365 Configuration</p>
            <p>Remote Access Configuration</p>
          </section>

          <section className="flex flex-col gap-2">
            <h4>Locations</h4>
            <p>Toronto</p>
            <p>Vaughan</p>
            <p>Mississauga</p>
            <p>Markham</p>
          </section>

          <section className="flex flex-col gap-3">
            <div className="row">
              <MapPin size={20} />
              <p>Vaughan, ON, L6A2A1, Canada</p>
            </div>
            <div className="row">
              <Clock size={20} />
              <p>Mon - Fri   9 a.m - 5 p.m</p>
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
        </footer>
      </body>
    </html>
  );
}
