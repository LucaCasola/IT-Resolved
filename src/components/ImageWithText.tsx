// src/components/ImageWithText.tsx

import Image from "next/image"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function ImageWithText() {
  return (
    <section className="col responsive-width gap-y-3">
      <h2>About Me</h2>
      <div className="grid grid-cols-2 gap-x-12 items-center justify-items-center">
        <div className="w-3/4 md:w-full col-span-2 md:col-span-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src="/images/really-cool-guy.jpg"
              alt="A really cool guy dressed in stylish clothes"
              className="rounded-full"
              fill
              sizes="..."
            />
          </AspectRatio>
        </div>
        <pre className="text-sm md:text-base lg:text-2xl text-balance text-center md:text-start col-span-2 md:col-span-1 pt-4 md:pt-0">
Hi, I'm Luca, the owner and lead technician at IT Resolved. With an Honours Bachelor of Technology in Software Development and over 7 years of experience, my passion lies in helping people streamline their work and take full advantage of technology.
        </pre>
      </div>
    </section>
  )
}
