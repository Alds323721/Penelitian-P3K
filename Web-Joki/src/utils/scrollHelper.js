let globalLenis = null;

export function setGlobalLenis(instance) {
  globalLenis = instance;
}

export function getGlobalLenis() {
  return globalLenis;
}

export function resetScroll(immediate = true) {
  if (globalLenis) {
    globalLenis.scrollTo(0, { immediate });
  } else if (typeof window !== "undefined") {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: immediate ? "auto" : "smooth",
    });
  }
}
