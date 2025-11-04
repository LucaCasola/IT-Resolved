// src/app/components/SiteExamplesCarousel.tsx

import Image from "next/image"
import { Maximize, ChevronRightIcon } from 'lucide-react';  // Icons

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
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

const websites: { title: string; link: string; description: string; descriptionBullets: string[]; imageAlt: string }[] = [
  {
    title: "Leather Treaty Sports",
    link: "leathertreatysports.com",
    description:
      "Ecommerce website for personalized leather sports accessories.",
    descriptionBullets: [
      "Built with Shopify's Website Builder",
      "Utilizes Shopify Liquid for customizations",
      "Currently maintaining and updating the site",
    ],
    imageAlt: "Screenshot of Leather Treaty Sports Website",
  },
  {
    title: "Queen Nest Hotel",
    link: "queennesthotel.com",
    description:
      "Hotel website offering affordable comfort in the heart of Toronto.",
    descriptionBullets: [
      "Built with GoDaddy's Website Builder",
      "Worked with client to design and launch the site",
    ],
    imageAlt: "Screenshot of Queen Nest Hotel Website",
  },
  {
    title: "IT Resolved",
    link: "github.com/LucaCasola/IT-Resolved",
    description:
      `Business IT Solutions Tailored for You.`,
    descriptionBullets: [
      "Built with Next.js and Tailwind CSS",
      "UI components are from Shadcn UI",
      "Responsive design across all devices",
      "Hosted on CloudFlare",
    ],
    imageAlt: "Screenshot of It Resolved Website",
    },
]

export default function SiteExamplesCarousel() {
  return (
    <div className="w-full px-12 flex flex-col items-center justify-center">
      <Carousel className="w-full max-w-md md:max-w-2xl lg:max-w-5xl">
        <h2 className="m-0 text-center md:ml-6 md:text-left mb-1">My Work</h2>

        <CarouselContent>
          {websites.map((website) => (
            <CarouselItem key={website.title} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="bg-primary-foreground h-full flex flex-col gap-6">
                  {/* Card Header (title & description) */}
                  <CardHeader className="flex-5 flex flex-col">
                    <CardTitle>{website.title}</CardTitle>
                    <CardDescription>
                      <p className="whitespace-pre-wrap mb-1">{website.description}</p>
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
                        </DialogHeader>
                          { website.title == "IT Resolved" ? (
                            <AspectRatio ratio={4 / 3} className="w-full rounded-md bg-muted">
                              <Image src={`/images/websites/IT Resolved/4-3.jpg`} alt={website.imageAlt} fill/>
                            </AspectRatio>
                          ) : (
                            <ScrollArea className="h-120 md:h-[80vh] md:max-h-180 lg:max-h-260 ">
                              <AspectRatio ratio={4 / 9} className="w-full rounded-md bg-muted">
                                <Image src={`/images/websites/${website.title}/4-9.jpg`} alt={website.imageAlt} fill/>
                              </AspectRatio>
                            </ScrollArea>
                          )}
                      </DialogContent>
                    </Dialog>
                    <AspectRatio ratio={4 / 3} className="w-full rounded-md bg-muted border-3 border-white">
                      <Image src={`/images/websites/${website.title}/4-3.jpg`} alt={website.imageAlt} fill/>
                    </AspectRatio>
                  </CardContent>
                  {/* Card Footer (website link) */}
                  <CardFooter className="flex-1 justify-around mt-auto">
                    <CardAction>
                      <a href={`https://${website.link}`} target="_blank" rel="external">
                        <Button variant="outline" className="group">
                            { website.title === "It Resolved" ? (
                              <p>Visit repo</p>
                            ) : (
                              <p>Visit {website.link}</p>
                            )}
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
