// src/app/components/SiteExamplesCarousel.tsx

import Image from "next/image"

// UI components from shadcn/ui
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Maximize, ChevronRightIcon } from 'lucide-react';  // Icons

const websites: { 
  title: string; 
  link: string; 
  linkText: string; 
  description: string; 
  descriptionBullets: string[]; 
  imageFolder: string; 
  imageAlt: string 
}[] = [
  {
    title: "Leather Treaty Sports",
    link: "leathertreatysports.com",
    linkText: "leathertreatysports.com",
    description:
      "Ecommerce website for personalized leather sports accessories.",
    descriptionBullets: [
      "Built with Shopify's Website Builder",
      "Utilizes Shopify Liquid for customizations",
      "Currently maintaining and updating the site",
    ],
    imageFolder: "Leather-Treaty-Sports",
    imageAlt: "Screenshot of Leather Treaty Sports Website",
  },
  {
    title: "Queen Nest Hotel",
    link: "queennesthotel.com",
    linkText: "queennesthotel.com",
    description:
      "Hotel website offering affordable comfort in the heart of Toronto.",
    descriptionBullets: [
      "Built with GoDaddy's Website Builder",
      "Worked with client to design and launch the site",
    ],
    imageFolder: "Queen-Nest-Hotel",
    imageAlt: "Screenshot of Queen Nest Hotel Website",
  },
  {
    title: "IT Resolved",
    link: "github.com/LucaCasola/IT-Resolved",
    linkText: "repo",
    description:
      `Business IT Solutions website.`,
    descriptionBullets: [
      "Built with Next.js and Tailwind CSS",
      "UI components are from Shadcn UI",
      "Responsive design across all devices",
      "Hosted on CloudFlare",
    ],
    imageFolder: "IT-Resolved",
    imageAlt: "Screenshot of It Resolved Website",
    },
]

export default function SiteExamplesCarousel() {
  return (
    <div className="w-full px-12 flex flex-col items-center justify-center">
      <Carousel className="w-full max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl">
        <h2>Featured Portfolio</h2>

        <CarouselContent>
          {websites.map((website) => (
            <CarouselItem key={website.title} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-primary-foreground h-full flex flex-col gap-6">
                  {/* Card Header (title & description) */}
                  <CardHeader className="flex-5 col">
                    <CardTitle className="row">
                      <h3>{website.title}</h3>
                    </CardTitle>
                    <CardDescription>
                      <p className="whitespace-pre-wrap mb-2 text-base text-balance text-center">{website.description}</p>
                      <ul className="list-disc pl-5">
                        {website.descriptionBullets.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    </CardDescription>
                  </CardHeader>
                  {/* Card Content (image) */}
                  <CardContent className="relative flex-4 flex items-center justify-center">
                    <Dialog >
                      <DialogTrigger asChild className="absolute z-9 top-0 right-0 mr-6">
                        <Button variant="outline"><Maximize /></Button>
                      </DialogTrigger>
                      <DialogContent className="w-full px-1.5 pb-1.5">
                        <DialogHeader>
                          <DialogTitle className="sr-only">Expand {website.title} image</DialogTitle>
                          <DialogDescription className="sr-only">
                            Full-length screenshot of {website.title} website.
                          </DialogDescription>
                        </DialogHeader>
                          { website.title == "IT Resolved" ? (
                            <AspectRatio ratio={4 / 3} className="w-full rounded-md bg-muted">
                              <Image 
                                src={`/images/websites/${website.imageFolder}/4-3.jpg`} 
                                alt={website.imageAlt} 
                                fill 
                                sizes="..."
                              />
                            </AspectRatio>
                          ) : (
                            <ScrollArea className="h-120 md:h-[80vh] md:max-h-180 lg:max-h-260 ">
                              <AspectRatio ratio={4 / 9} className="w-full rounded-md bg-muted">
                                <Image 
                                  src={`/images/websites/${website.imageFolder}/4-9.jpg`}
                                  alt={website.imageAlt}
                                  fill
                                  sizes="..."
                                />
                              </AspectRatio>
                            </ScrollArea>
                          )}
                      </DialogContent>
                    </Dialog>
                    <AspectRatio ratio={4 / 3} className="w-full rounded-md bg-muted border-3 border-white">
                      <Image 
                        src={`/images/websites/${website.imageFolder}/4-3.jpg`} 
                        alt={website.imageAlt}
                        fill
                        sizes="..."
                      />
                    </AspectRatio>
                  </CardContent>
                  {/* Card Footer (website link) */}
                  <CardFooter className="flex-1 justify-around mt-auto">
                    <CardAction>
                      <a href={`https://${website.link}`} target="_blank" rel="external">
                        <Button variant="outline" className="group">
                          <p>Visit {website.linkText}</p>
                          <ChevronRightIcon size={16} className="hover:transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true"/>
                        </Button>
                      </a>
                    </CardAction>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
