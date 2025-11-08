// src/app/about/page.tsx

import type { Metadata } from "next";

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
    </main>
  );
}
