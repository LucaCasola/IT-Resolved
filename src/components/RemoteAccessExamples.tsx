// src/app/components/SiteExamplesCarousel.tsx

import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio";

const softwares: { 
  title: string; 
  description: string; 
  imageName: string; 
  imageAlt: string 
}[] = [
  {
    title: "ScreenConnect",
    description: "A robust remote access software known for its high performance and extensive feature set.",
    imageName: "ScreenConnect-Logo.png",
    imageAlt: "ScreenConnect Logo",
  },
  {
    title: "TeamViewer",
    description: `A popular remote access software that provides a wide range of features including file transfer, remote printing, 
      and multi-platform support. It is known for its ease of use and robust security measures, making it a preferred choice for businesses of all sizes.`,
    imageName: "TeamViewer-Logo.png",
    imageAlt: "TeamViewer Logo",
  },
  {
    title: "Chrome Remote Desktop",
    description: `A free software provided by Google that allows users to remotely access another computer through the Chrome 
      browser. While it has less features and security, it is entirely free and easy to use for basic remote access needs.`,
    imageName: "Chrome-Remote-Desktop-Logo.png",
    imageAlt: "Chrome Remote Desktop Logo",
  },
]

export default function RemoteAccessExamples() {
  return (
    <section className="col responsive-width gap-y-3">
        <h2>Different Remote Access Solutions</h2>
          {softwares.map((software) => (
            <div key={software.title} className="col">
              <h3>{software.title}</h3>
              <div className="grid grid-cols-2 gap-x-12 items-center justify-items-center">
                <AspectRatio ratio={1 / 1}>
                  <Image 
                    src={`/images/remote-access/${software.imageName}`} 
                    alt={software.imageAlt} 
                    fill
                    sizes="..."
                  />
                </AspectRatio>
                <p className="text-balance text-center">{software.description}</p>
              </div>
            </div>
          ))}
      </section>
  );
}
