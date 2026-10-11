import { useState, useEffect } from "react";

export function useDeviceDetect() {
  const [deviceState, setDeviceState] = useState(() => {
    if (typeof window === "undefined") {
      return {
        isTouch: false,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      };
    }

    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const width = window.innerWidth;

    return {
      isTouch: hasTouch,
      isMobile: width < 768,
      isTablet: width >= 768 && width <= 1024,
      isDesktop: width > 1024,
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const width = window.innerWidth;

      setDeviceState({
        isTouch: hasTouch,
        isMobile: width < 768,
        isTablet: width >= 768 && width <= 1024,
        isDesktop: width > 1024,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceState;
}
