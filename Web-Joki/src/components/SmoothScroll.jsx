import { useEffect } from "react";
import Lenis from "lenis";
import { setGlobalLenis } from "../utils/scrollHelper";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Deteksi jika touch device atau user mengaktifkan prefers-reduced-motion
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pada touch device (iOS/Android) & reduced motion, gunakan native 120Hz/60Hz compositor scroll
    // untuk mencegah stuttering, benturan gestur, atau touch lag
    if (isTouch || prefersReducedMotion) {
      setGlobalLenis(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.0,
    });

    setGlobalLenis(lenis);

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      setGlobalLenis(null);
    };
  }, []);

  return children;
}
