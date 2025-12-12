// src/app/about/page.tsx

import type { Metadata } from "next";

// Custom component
import ImageWithText from "@/components/ImageWithText";

export const metadata: Metadata = {
  title: "About | IT Resolved",
  description: `Meet Luca, owner of IT Resolved. Honours Bachelor of Technology in Software Development with experience providing IT support and web development services to Toronto area businesses.`,
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
        alt="A really cool guy dressed in stylish clothes"
        bodyText="Hi, I'm Luca, the owner and lead technician at IT Resolved. With an Honours Bachelor of Technology in Software 
          Development and over 7 years of experience, my passion lies in helping people take full advantage of technology."
        variant="circle" 
      />
    </main>
  );
}
