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

export function scrollToSection(sectionId, offset = -72) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(sectionId);
  if (!el) return;

  if (globalLenis) {
    globalLenis.scrollTo(el, { offset });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
