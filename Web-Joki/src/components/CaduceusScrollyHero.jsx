import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import caduceusChrome from "../assets/caduceus-chrome.png";
import profileImg from "../assets/profilhitamputih.jpeg";
import { useDeviceDetect } from "../hooks/useDeviceDetect";
import { scrollToSection } from "../utils/scrollHelper";

export default function CaduceusScrollyHero({ lang = "id", translations, onNavigate }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { isTouch, isDesktop } = useDeviceDetect();

  // 1. Tangkap posisi scroll relatif terhadap kontainer 360vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Berikan redaman pegas (spring physics) adaptif
  const springConfig = useMemo(() => {
    return isTouch
      ? { stiffness: 120, damping: 30, restDelta: 0.001 }
      : { stiffness: 90, damping: 26, restDelta: 0.0008 };
  }, [isTouch]);

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // --------------------------------------------------------------------------
  // Koreografi Gerak (Scroll-Driven Choreography)
  // --------------------------------------------------------------------------

  // A. Judul Display Hero (Desktop: Split Kiri & Kanan; Mobile: Meluncur ke Atas & Bawah secara proporsional)
  const titleLeftX = useTransform(smoothProgress, [0, 0.2], ["0%", "-110%"]);
  const titleRightX = useTransform(smoothProgress, [0, 0.2], ["0%", "110%"]);
  const titleMobileTopY = useTransform(smoothProgress, [0, 0.2], ["0px", "-50px"]);
  const titleMobileBottomY = useTransform(smoothProgress, [0, 0.2], ["0px", "50px"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.16], [1, 0]);

  // B. Simbol Caduceus Krom 3D (0.00 -> 1.00)
  const caduceusScale = useTransform(smoothProgress, [0, 0.22, 0.65, 1], [1, 0.84, 0.84, 0.76]);
  const caduceusX = useTransform(smoothProgress, [0, 0.22, 0.65, 1], ["0%", "-2%", "-2%", "0%"]);
  const caduceusY = useTransform(smoothProgress, [0, 0.22, 0.65, 1], ["0%", "0%", "0%", "2%"]);
  const caduceusRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, -2, 2]);

  // C. Kartu Judul Penelitian (Posisi Sisi Kiri: 0.20 -> 0.58)
  const manifestoOpacity = useTransform(smoothProgress, [0.20, 0.28, 0.52, 0.58], [0, 1, 1, 0]);
  const manifestoRotateX = useTransform(smoothProgress, [0.20, 0.28, 0.58], [24, 0, -20]);
  const manifestoY = useTransform(smoothProgress, [0.20, 0.28, 0.58], [30, 0, -30]);
  const manifestoScale = useTransform(smoothProgress, [0.20, 0.28, 0.58], [0.95, 1, 0.96]);

  // D. Kartu Identitas & Afiliasi (Posisi Sisi Kiri: 0.60 -> 0.94)
  const metricsOpacity = useTransform(smoothProgress, [0.60, 0.68, 0.88, 0.94], [0, 1, 1, 0]);
  const metricsY = useTransform(smoothProgress, [0.60, 0.68, 0.94], [30, 0, -30]);

  // E. Foto Made Candra Susanta di Sisi Kanan
  const photoOpacity = useTransform(smoothProgress, [0.14, 0.22, 0.96, 1], [0, 1, 1, 0]);
  const photoY = useTransform(smoothProgress, [0.14, 0.24], [30, 0]);
  const photoScale = useTransform(smoothProgress, [0.14, 0.24], [0.95, 1]);

  // F. Specular Chrome Radial Glow
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.25, 0.9]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.22, 0.35, 0.12]);

  // Teks lokalisasi
  const t = translations?.[lang]?.scrollyHero || translations?.[lang] || {
    heroTag: "MEDIA PEMBELAJARAN & PROTOKOL GAWAT DARURAT P3K",
    heroTitleLeft: "PENELITIAN\nSCOUT SIGAP",
    heroTitleRight: "P3K",
    heroSubtitle: "Made Candra Susanta • Mahasiswa S1 Keperawatan STIKES Buleleng",
    manifestoTag: "JUDUL PENELITIAN",
    manifesto:
      "Pengaruh Edukasi P3K Berbasis Website dan Simulasi Terhadap Pengetahuan dan Keterampilan Anggota Pramuka Dalam Penanganan Kecelakaan di SMA Negeri 4 Singaraja",
    latencyLabel: "",
    standardLabel: "Pedoman Pertolongan Pertama & Kesiapsiagaan Pramuka",
    m1Value: "S1",
    m1Label: "Mahasiswa Keperawatan",
    m2Value: "2022–2023",
    m2Label: "Pradana Ken Arok Ken Dedes - Alumni Pradana",
    m3Value: "STIKES",
    m3Label: "Buleleng",
    scrollHint: "GULIR KE BAWAH",
  };

  const ctaPrimaryText = translations?.[lang]?.hero?.ctaPrimary || "Jelajahi Materi";
  const ctaSecondaryText = translations?.[lang]?.hero?.ctaSecondary || "Lihat Profil Peneliti";

  return (
    <section
      ref={containerRef}
      style={{ contain: "layout style" }}
      className="relative h-[360vh] bg-[#0A0A0A] w-full selection:bg-[#353534] selection:text-[#FFFFFF]"
    >
      {/* Layar Sticky Viewport Terkunci */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-container">
        {/* Specular Chrome Radial Ambient Glow */}
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : glowScale,
            opacity: glowOpacity,
            willChange: "transform, opacity",
          }}
          className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[460px] sm:w-[460px] md:h-[540px] md:w-[540px] lg:h-[640px] lg:w-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(186,215,255,0.05)_38%,rgba(10,10,10,0)_72%)] blur-[70px] sm:blur-[90px]"
        />

        {/* ========================================================= */}
        {/* 1. HERO TYPOGRAPHY: SPLIT KIRI & KANAN (Scroll 0.00 -> 0.20) */}
        {/* ========================================================= */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 h-[296px] sm:h-[350px] md:h-auto flex flex-col md:flex-row justify-between items-center">
          {/* Sisi Atas Mobile / Kiri Desktop */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : (isDesktop ? titleLeftX : 0),
              y: shouldReduceMotion ? 0 : (isDesktop ? 0 : titleMobileTopY),
              opacity: heroOpacity,
              willChange: "transform, opacity",
            }}
            className="text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl pointer-events-auto"
          >
            <div className="flex items-center justify-center md:justify-start mb-1 sm:mb-2 md:mb-3">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#10B981]">
                {t.heroTag}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-[-0.03em] text-[#FFFFFF] uppercase leading-[0.95] font-sans">
              {t.heroTitleLeft.split("\n").map((line, idx) => (
                <span key={idx} className="block whitespace-nowrap">{line}</span>
              ))}
            </h1>
            <div className="mt-4 sm:mt-6 hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate && onNavigate("Materi")}
                className="bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>{ctaPrimaryText}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Sisi Bawah Mobile / Kanan Desktop */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : (isDesktop ? titleRightX : 0),
              y: shouldReduceMotion ? 0 : (isDesktop ? 0 : titleMobileBottomY),
              opacity: heroOpacity,
              willChange: "transform, opacity",
            }}
            className="text-center md:text-right max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md pointer-events-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#FFFFFF] uppercase leading-[0.9] font-sans">
              {t.heroTitleRight.split("\n").map((line, idx) => (
                <span key={idx} className="block whitespace-nowrap">{line}</span>
              ))}
            </h1>
            <p className="mt-1.5 sm:mt-3 md:mt-4 text-[10px] sm:text-[11px] md:text-xs font-medium text-[#A3A3A3] tracking-wide">
              {t.heroSubtitle}
            </p>
            <div className="mt-4 sm:mt-6 hidden md:flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => scrollToSection("profil-peneliti")}
                className="bg-[#141414] hover:bg-[#1E1E1E] text-[#EDEDED] border border-[#262626] hover:border-[#383838] font-medium text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>{ctaSecondaryText}</span>
                <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 2. SIMBOL CADUCEUS PERAK KROM 3D (Tengah Ambient) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : caduceusScale,
            y: shouldReduceMotion ? 0 : caduceusY,
            x: shouldReduceMotion ? 0 : caduceusX,
            rotateZ: shouldReduceMotion ? 0 : caduceusRotateZ,
            willChange: "transform",
          }}
          className="relative z-10 flex items-center justify-center pointer-events-none select-none"
        >
          <div className="relative" style={{ transform: "translateZ(0)" }}>
            <img
              src={caduceusChrome}
              alt="Simbol Medis Krom"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] filter brightness-105 contrast-110"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 3. KARTU JUDUL PENELITIAN (SISI KIRI - TAHAP 1) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: manifestoOpacity,
            rotateX: shouldReduceMotion ? 0 : manifestoRotateX,
            y: shouldReduceMotion ? 0 : manifestoY,
            scale: shouldReduceMotion ? 1 : manifestoScale,
            willChange: "transform, opacity",
          }}
          className="preserve-3d absolute left-3 sm:left-6 md:left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-[56%] sm:w-[52%] md:w-[46%] md:max-w-[340px] lg:w-full lg:max-w-lg xl:max-w-xl text-left pointer-events-none"
        >
          <div className="rounded-xl sm:rounded-2xl border border-[#262626] bg-[#121212]/95 backdrop-blur-xl p-3.5 sm:p-5 md:p-6 lg:p-8 shadow-2xl pointer-events-auto">
            <div className="mb-2 sm:mb-3">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-wider uppercase text-[#10B981]">
                {t.manifestoTag}
              </span>
            </div>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-sans font-semibold leading-snug text-white">
              {t.manifesto}
            </p>
            {t.standardLabel && (
              <div className="mt-3 sm:mt-4 pt-3 border-t border-[#262626] text-[9px] sm:text-[11px] md:text-xs text-[#8A8A8A]">
                <span>{t.standardLabel}</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 4. KARTU IDENTITAS & AFILIASI PENELITI (SISI KIRI - TAHAP 2) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: metricsOpacity,
            y: shouldReduceMotion ? 0 : metricsY,
            willChange: "transform, opacity",
          }}
          className="absolute left-3 sm:left-6 md:left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-[56%] sm:w-[52%] md:w-[46%] md:max-w-[340px] lg:w-full lg:max-w-lg xl:max-w-xl text-left pointer-events-none"
        >
          <div className="rounded-xl sm:rounded-2xl border border-[#262626] bg-[#121212]/95 backdrop-blur-xl p-3.5 sm:p-5 md:p-6 lg:p-8 shadow-2xl pointer-events-auto">
            <div className="mb-3 sm:mb-5">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[#10B981]">
                {lang === "en" ? "RESEARCHER CREDENTIALS" : "IDENTITAS & AFILIASI PENELITI"}
              </span>
            </div>

            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3 lg:gap-6">
              <div>
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {t.m1Value}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#8A8A8A] leading-snug">
                  {t.m1Label}
                </div>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-[#262626] pt-1.5 sm:pt-0 sm:pl-3 md:pl-3 lg:pl-6">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white tabular-nums">
                  {t.m2Value}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#8A8A8A] leading-snug">
                  {t.m2Label}
                </div>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-[#262626] pt-1.5 sm:pt-0 sm:pl-3 md:pl-3 lg:pl-6">
                <div className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {t.m3Value}
                </div>
                <div className="mt-0.5 sm:mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#8A8A8A] leading-snug">
                  {t.m3Label}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 5. FOTO MADE CANDRA SUSANTA (SISI KANAN) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: photoOpacity,
            y: shouldReduceMotion ? 0 : photoY,
            scale: shouldReduceMotion ? 1 : photoScale,
            willChange: "transform, opacity",
          }}
          className="absolute right-2 sm:right-6 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-25 flex items-center justify-end w-[40%] sm:w-[44%] md:w-[42%] md:max-w-[290px] lg:w-full lg:max-w-[420px] xl:max-w-[450px] pointer-events-none select-none"
        >
          <div className="relative w-full flex justify-end" style={{ transform: "translateZ(0)" }}>
            <img
              src={profileImg}
              alt="Made Candra Susanta - Mahasiswa S1 Keperawatan & Riset Edukasi P3K"
              className="relative z-10 w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[440px] lg:max-h-[540px] xl:max-h-[580px] object-cover object-[center_15%] filter grayscale contrast-110 brightness-95"
              style={{
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                transform: 'translateZ(0)',
              }}
              loading="eager"
            />

            <div className="absolute bottom-2 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1 sm:left-2 md:left-3 lg:left-4 z-20 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-[#262626] bg-[#121212]/90 backdrop-blur-md shadow-lg">
              <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-[#EDEDED] whitespace-nowrap">
                Made Candra Susanta • S1 Keperawatan STIKES Buleleng
              </span>
            </div>
          </div>
        </motion.div>

        {/* Indikator Arah Scroll Halus (Bawah) */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-4 sm:bottom-6 z-10 flex flex-col items-center gap-1.5 text-[9px] sm:text-[10px] tracking-widest text-[#737373] uppercase font-medium"
        >
          <span>{t.scrollHint}</span>
          <div className="w-[1px] h-4 sm:h-5 bg-gradient-to-b from-[#737373] to-transparent" />
        </motion.div>
      </div>

      {/* Transisi Gradien Halus Menuju Konten Bawah */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#131313]" />
    </section>
  );
}
