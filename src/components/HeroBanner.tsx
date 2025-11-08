// src/components/HeroBanner.tsx

import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function HeroBanner() {
  return (
    <section className="relative">
      <div className="absolute z-8 inset-0 bg-gray-700 opacity-40"></div>
      <div className="absolute z-9 inset-0 flex items-center justify-center">
        <h1 className="text-white">Your IT Issues Resolved</h1>
      </div>
      <AspectRatio ratio={16 / 7}>
        <Image
          src="/images/it-resolved-hero.jpg"
          alt="IT Resolved Hero Image"
          className="object-cover"
          fill
          sizes="..."
        />
      </AspectRatio>
    </section>
  )
}
