// src/components/nav/NavController.tsx

'use client';

import { useState, useEffect } from 'react';

// Custom components
import NavMenuMobile from '@/components/nav/NavMenuMobile';
import NavMenuDesktop from '@/components/nav/NavMenuDesktop';

export default function NavController({className}: {className?: string}) {
  const [isMobile, setIsMobile] = useState(false);
  const breakpoint = 1024; // breakpoint for mobile vs desktop in pixels

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <NavMenuMobile className={className} /> : <NavMenuDesktop className={className} />}
    </>
  );
}