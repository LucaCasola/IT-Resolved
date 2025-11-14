// src/app/about/page.tsx

import type { Metadata } from "next";

// components import
import ImageWithText from "@/components/ImageWithText";

export const metadata: Metadata = {
  title: "About | IT Resolved",
  description: `Discover who we are at IT Resolved, a local team providing dependable IT 
    support and modern website development to help your business grow with confidence.`,
};

export default function About() {
  return (
    <main>
      <div className="col">
        <h1>About</h1>
        <p className="page-description">
          At IT Resolved, I am dedicated to delivering top-notch IT solutions and
          website development services tailored to meet the unique needs of local businesses.
        </p>
      </div>
      <ImageWithText 
        imgPath="/images/really-cool-guy.jpg" 
        bodyText="Hi, I'm Luca, the owner and lead technician at IT Resolved. With an Honours Bachelor of Technology in Software 
          Development and over 7 years of experience, my passion lies in helping people take full advantage of technology."
        variant="circle" />
    </main>
  );
}
