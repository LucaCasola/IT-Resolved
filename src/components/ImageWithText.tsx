// src/components/ImageWithText.tsx

import Image from "next/image"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const imageVariants = cva(
  "",
  {
    variants: {
      variant: {
        square: "",
        circle: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "circle",
    },
  }
)

export default function ImageWithText({imgPath, alt, bodyText, variant} :  {imgPath: string, alt?: string, bodyText: string} & VariantProps<typeof imageVariants>
) {
  return (
    <section className="col responsive-width gap-y-3">
      <h2>About Me</h2>
      <div className="grid grid-cols-2 gap-x-12 items-center justify-items-center">
        <div className="w-3/4 md:w-full col-span-2 md:col-span-1">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={imgPath}
              alt={`${alt}`}
              className={cn(imageVariants({ variant }))}
              fill
              sizes="..."
            />
          </AspectRatio>
        </div>
        <p className="text-sm md:text-base lg:text-xl text-balance text-center md:text-start col-span-2 md:col-span-1 pt-4 md:pt-0">
          {bodyText}
        </p>
      </div>
    </section>
  )
}
