// src/components/Logo.tsx

import Image from "next/image"

export default function Logo() {
  return (
    <div className="row">
      <Image src="/nav-icon-light.png" alt="IT Resolved Logo" width={45} height={45} className="mr-2"/>
      <div className="flex flex-col ">
        <p className="text-2xl leading-none font-bold">IT</p>
        <p className="text-2xl leading-none font-bold">Resolved</p>
      </div>
    </div>
  )
}
