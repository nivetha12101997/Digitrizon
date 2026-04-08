"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import this
import { AnimatePresence } from "framer-motion";
import SplashScreen from "./SplashScreen";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Check if we are on the home page
  const isHome = pathname === "/";
  
  // If it's home, start with loading; otherwise, skip it
  const [isLoading, setIsLoading] = useState(isHome);

  // If the user navigates away and back, this effect ensures 
  // the splash doesn't trigger again unless you want it to.
  useEffect(() => {
    if (!isHome) {
      setIsLoading(false);
    }
  }, [isHome]);

  return (
    <AnimatePresence mode="wait">
      {(isLoading && isHome) ? (
        <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />
      ) : (
        <main key="main">
          {children}
        </main>
      )}
    </AnimatePresence>
  );
}