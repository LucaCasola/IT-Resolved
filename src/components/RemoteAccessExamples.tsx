// src/app/components/RemoteAccessExamples.tsx

import Image from "next/image"

// UI component from shadcn/ui
import { AspectRatio } from "@/components/ui/aspect-ratio";

const softwares: { 
  title: string; 
  imageName: string; 
  imageAlt: string 
}[] = [
  {
    title: "ScreenConnect",
    imageName: "ScreenConnect-logo.png",
    imageAlt: "ScreenConnect Logo",
  },
  {
    title: "TeamViewer",
    imageName: "TeamViewer-logo.png",
    imageAlt: "TeamViewer Logo",
  },
  {
    title: "Chrome Remote Desktop",
    imageName: "Chrome-Remote-Desktop-logo.png",
    imageAlt: "Chrome Remote Desktop Logo",
  },
]

export default function RemoteAccessExamples() {
  return (
    <section className="col responsive-width gap-y-3">
      <h2>Remote Access Solutions</h2>
      <div className="grid grid-cols-3 gap-16">
        {softwares.map((software) => (
          <div key={software.title} className="col text-center">
            <div className="size-32 md:size-42">
              <AspectRatio ratio={1 / 1}>
                <Image 
                  src={`/images/remote-access/${software.imageName}`} 
                  alt={software.imageAlt} 
                  fill
                  sizes="..."
                />
              </AspectRatio>
            </div>
            <h3>{software.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
