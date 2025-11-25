// src/components/HeroBanner.tsx

"use client"

import Image from "next/image"

// UI component from shadcn/ui
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { ChevronDownIcon } from "lucide-react";  // Icon

export default function HeroBanner() {
  return (
    <section className="relative md:h-screen max-h-300">
      <div className="absolute z-8 inset-0 bg-gray-700 opacity-40"></div>
      <div className="absolute inset-0 z-9 col justify-center">
        <h2 className="text-white m-0! font-bold italic text-3xl md:text-4xl lg:text-4xl xl:text-6xl">Your IT Issues Resolved</h2>
        <ChevronDownIcon 
          className="size-0 md:size-12 lg:size-12 xl:size-18 hover:transition-transform duration-300 hover:translate-y-3" 
          aria-hidden="true" 
          color="white" 
          strokeWidth={2.4}
          onClick={() => {
            var element = document.getElementById("scrollto");
            if (element) {
              element.scrollIntoView({block: "start", behavior: 'smooth'});
            }
          }}
        />
      </div>
      <AspectRatio ratio={16 / 7} className="md:h-screen max-h-300">
        <Image
          src="/images/hero-banner.jpg"
          alt="IT Resolved Hero Image"
          className="object-cover md:h-screen max-h-300"
          fill
          sizes="..."
        />
      </AspectRatio>
    </section>
  )
}