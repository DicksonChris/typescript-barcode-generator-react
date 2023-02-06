import { useState, useEffect } from "react"
import { getViewportWidth } from "../utils/getViewportWidth"

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getViewportWidth());

  useEffect(() => {
    const handleResize = () => setBreakpoint(getViewportWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};