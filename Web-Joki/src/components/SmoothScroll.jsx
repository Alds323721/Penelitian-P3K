import { useEffect } from "react";
import Lenis from "lenis";
import { setGlobalLenis } from "../utils/scrollHelper";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Hormati user yang mengaktifkan prefers-reduced-motion untuk aksesibilitas
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setGlobalLenis(null);
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      syncTouch: false, // Menjaga scrolling sentuh native pada smartphone/tablet tanpa lag atau benturan gesture
    });

    setGlobalLenis(lenis);

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Resize observer untuk menyesuaikan kalkulasi scroll saat konten berubah dinamis
    const handleResize = () => lenis.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      setGlobalLenis(null);
    };
  }, []);

  return children;
}
