// src/app/components/SiteExamplesCarousel.tsx

import Image from "next/image"

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

const websites: { title: string; link: string; description: string; descriptionBullets: string[]; image: string; imageAlt: string; imageRatio: number; }[] = [
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
    image: "/images/websites/leather-treaty-sports.jpg",
    imageAlt: "Screenshot of Leather Treaty Sports Website",
    imageRatio: 16 / 9,
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
    image: "/images/websites/queen-nest-hotel.jpg",
    imageAlt: "Screenshot of Queen Nest Hotel Website",
    imageRatio: 16 / 9,
  },
  {
    title: "It Resolved (this site!)",
    link: "",
    description:
      `Business IT Solutions Tailored for You.`,
    descriptionBullets: [
      "Built with Next.js and Tailwind CSS",
      "UI components are from Shadcn UI",
      "Responsive design across all devices",
      "Hosted on CloudFlare",
    ],
    image: "/images/websites/it-resolved.jpg",
    imageAlt: "Screenshot of It Resolved Website",
    imageRatio: 3 / 4,
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
                <Card className="bg-primary-foreground h-full flex flex-col">
                  <CardHeader>
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
                  <CardContent className="flex-1 flex items-center justify-center p-6">
                    <AspectRatio ratio={website.imageRatio} className="w-full rounded-md bg-muted">
                     <Image src={website.image} alt={website.imageAlt} fill/>
                    </AspectRatio>
                  </CardContent>
                  <CardFooter className="justify-around mt-auto">
                    {website.title != "It Resolved (this site!)" && (
                      <CardAction>
                        <Button variant="link"><a href={`https://${website.link}`}>Visit {website.link}</a></Button>
                      </CardAction>
                    )}
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
