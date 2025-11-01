'use client';

import { useState, useEffect } from 'react';
import NavBarMobile from '@/components/nav/NavBarMobile';
import NavBarDesktop from '@/components/nav/NavBarDesktop';

export default function NavController() {
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
      {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
    </>
  );
}