import { useEffect, useState } from "react";

import { BREAKPOINTS } from "@/config/media-queries";

type Breakpoint = "sm" | "md" | "lg";

const WINDOW_OK = typeof window !== "undefined" && window !== null && "matchMedia" in window;
const matchBreakpoint = (breakpoint: Breakpoint): boolean | undefined => window.matchMedia(`(min-width: ${BREAKPOINTS[breakpoint]})`).matches;

export function useBreakpoint(breakpoint: Breakpoint): boolean | undefined {
  const [matches, setMatches] = useState<boolean | undefined>();

  useEffect(() => {
    const handleResize = () => {
      if (WINDOW_OK) {
        setMatches(matchBreakpoint(breakpoint));
      }
    };

    if (WINDOW_OK) handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return matches;
}
