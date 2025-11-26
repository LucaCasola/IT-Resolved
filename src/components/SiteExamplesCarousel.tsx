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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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
      "Ecommerce website for personalized leather sports accessories. Official partner of the NHL, CFL, and Hockey Canada.",
    descriptionBullets: [
      "Built with Shopify",
      "Utilizes Shopify Liquid code for customizations",
      "Currently maintaining and updating the site",
    ],
    imageFolder: "Leather-Treaty-Sports",
    imageAlt: "Screenshot of Leather Treaty Sports website",
  },
  {
    title: "Queen Nest Hotel",
    link: "queennesthotel.com",
    linkText: "queennesthotel.com",
    description:
      "Hotel website offering affordable comfort in the heart of Toronto.",
    descriptionBullets: [
      "Built with GoDaddy's Website Builder",
      "Worked with client to design and implement their vision",
      "Integrated with booking system for easy reservations",
    ],
    imageFolder: "Queen-Nest-Hotel",
    imageAlt: "Screenshot of Queen Nest Hotel website",
  },
  {
    title: "IT Resolved",
    link: "github.com/LucaCasola/IT-Resolved",
    linkText: "code repo",
    description:
      `The site you are currently on! Coded from scratch without a website builder, which allows for greater customization and control.`,
    descriptionBullets: [
      "Built with Next.js and Tailwind CSS",
      "UI components are from shadcn/ui",
      "Responsive design across all devices",
      "Uses Git for version control",
      "Hosted on Cloudflare",
    ],
    imageFolder: "",
    imageAlt: "",
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
                  { website.title === "IT Resolved" ? (
                  <CardContent className="flex-4">
                    <div className="grid grid-cols-3 gap-x-2">
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Next.js</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Tailwind CSS</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></line></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>shadcn/ui</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>React</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#FFF" d="m115.679 69.288-15.591-8.94-2.689-1.163-63.781.436v32.381h82.061z"/><path fill="#F38020" d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"/><path fill="#FAAE40" d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"/></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Cloudflare</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#181616"><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"/></g></svg>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Git</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                     </CardContent>
                  ) : (
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
                  )}

                  {/* Card Footer (website link) */}
                  <CardFooter className="justify-around">
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
        <CarouselPrevious className="visible lg:invisible"/>
        <CarouselNext className="visible lg:invisible"/>
      </Carousel>
    </div>
  );
}
