import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";
import caduceusChrome from "../assets/caduceus-chrome.png";
import aryaHeroImg from "../assets/arya-pratama.jpg";

export default function CaduceusScrollyHero({ lang = "id", translations, onNavigate }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Deteksi layar desktop (>= 768px) vs mobile (< 768px) untuk arah gerak split
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1. Tangkap posisi scroll relatif terhadap kontainer 360vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Berikan redaman pegas (spring physics) agar pergerakan terasa organik
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0008,
  });

  // --------------------------------------------------------------------------
  // Koreografi Gerak (Scroll-Driven Choreography)
  // --------------------------------------------------------------------------

  // A. Judul Display Hero (Desktop: Split Kiri & Kanan; Mobile: Meluncur ke Atas & Bawah)
  const titleLeftX = useTransform(smoothProgress, [0, 0.2], ["0%", "-110%"]);
  const titleRightX = useTransform(smoothProgress, [0, 0.2], ["0%", "110%"]);
  const titleMobileTopY = useTransform(smoothProgress, [0, 0.2], ["0px", "-80px"]);
  const titleMobileBottomY = useTransform(smoothProgress, [0, 0.2], ["0px", "80px"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.16], [1, 0]);

  // B. Simbol Caduceus Krom 3D (0.00 -> 1.00)
  const caduceusScale = useTransform(smoothProgress, [0, 0.22, 0.65, 1], [1, 0.84, 0.84, 0.76]);
  const caduceusX = useTransform(smoothProgress, [0, 0.22, 0.65, 1], ["0%", "-2%", "-2%", "0%"]);
  const caduceusY = useTransform(smoothProgress, [0, 0.22, 0.65, 1], ["0%", "0%", "0%", "2%"]);
  const caduceusRotateZ = useTransform(smoothProgress, [0, 0.5, 1], [0, -2, 2]);

  // C. Manifesto Riset 3D Tilt (Posisi Sisi Kiri: 0.20 -> 0.58 - Gambar 1)
  const manifestoOpacity = useTransform(smoothProgress, [0.20, 0.28, 0.52, 0.58], [0, 1, 1, 0]);
  const manifestoRotateX = useTransform(smoothProgress, [0.20, 0.28, 0.58], [24, 0, -20]);
  const manifestoY = useTransform(smoothProgress, [0.20, 0.28, 0.58], [30, 0, -30]);
  const manifestoScale = useTransform(smoothProgress, [0.20, 0.28, 0.58], [0.95, 1, 0.96]);

  // D. Telemetri Metrik Kuantitatif (Posisi Sisi Kiri: 0.60 -> 0.94 - Gambar 2)
  const metricsOpacity = useTransform(smoothProgress, [0.60, 0.68, 0.88, 0.94], [0, 1, 1, 0]);
  const metricsY = useTransform(smoothProgress, [0.60, 0.68, 0.94], [30, 0, -30]);

  // E. Foto Arya Pratama di Sisi Kanan (Aktif dari Gambar 1, 2, hingga 3)
  const photoOpacity = useTransform(smoothProgress, [0.14, 0.22, 0.96, 1], [0, 1, 1, 0]);
  const photoY = useTransform(smoothProgress, [0.14, 0.24], [30, 0]);
  const photoScale = useTransform(smoothProgress, [0.14, 0.24], [0.95, 1]);

  // F. Specular Chrome Radial Glow
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.25, 0.9]);
  const glowOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.25, 0.40, 0.15]);

  // Teks lokalisasi
  const t = translations?.[lang]?.scrollyHero || translations?.[lang] || {
    heroTag: "REPOSITORI RISET & PROTOKOL GAWAT DARURAT",
    heroTitleLeft: "TANGGAP\nDARURAT",
    heroTitleRight: "PRESISI\nP3K",
    heroSubtitle: "Arya Pratama • Standarisasi K3 & Triase",
    manifestoTag: "[ PROTOCOL PHILOSOPHY // 01 ]",
    manifesto:
      "Protokol medis gawat darurat yang dibangun atas landasan evidence-based medicine. Mentranslasikan kekacauan insiden lapangan menjadi algoritma triase yang terukur, deterministik, dan dapat diaudit secara klinis.",
    latencyLabel: "LATENCY: 0.0s",
    standardLabel: "STANDARD: PERMENAKER NO. 15",
    m1Value: "6+ THN",
    m1Label: "Pengalaman Lapangan",
    m2Value: "99.4%",
    m2Label: "Akurasi Protokol START",
    m3Value: "2.500+",
    m3Label: "Praktisi Terlatih",
    scrollHint: "GULIR UNTUK MEMBEDAH PROTOKOL",
  };

  const ctaPrimaryText = translations?.[lang]?.hero?.ctaPrimary || "Jelajahi Materi";
  const ctaSecondaryText = translations?.[lang]?.hero?.ctaSecondary || "Unduh CV (PDF)";

  return (
    <section
      ref={containerRef}
      className="relative h-[360vh] bg-[#0A0A0A] w-full selection:bg-[#353534] selection:text-[#FFFFFF]"
    >
      {/* Layar Sticky Viewport Terkunci */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center perspective-container">
        
        {/* Specular Chrome Radial Ambient Glow */}
        <motion.div
          style={{
            scale: shouldReduceMotion ? 1 : glowScale,
            opacity: glowOpacity,
          }}
          className="pointer-events-none absolute h-[320px] w-[320px] sm:h-[460px] sm:w-[460px] md:h-[540px] md:w-[540px] lg:h-[640px] lg:w-[640px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,rgba(186,215,255,0.08)_38%,rgba(10,10,10,0)_72%)] blur-[70px] sm:blur-[90px]"
        />

        {/* Cincin Garis Taktis Halus di Belakang Caduceus */}
        <div className="pointer-events-none absolute h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px] rounded-full border border-[#262626]/60 opacity-40" />
        <div className="pointer-events-none absolute h-[180px] w-[180px] sm:h-[240px] sm:w-[240px] md:h-[300px] md:w-[300px] lg:h-[360px] lg:w-[360px] rounded-full border border-[#1C1C1C] opacity-50" />

        {/* ========================================================= */}
        {/* 1. HERO TYPOGRAPHY: SPLIT KIRI & KANAN (Scroll 0.00 -> 0.20) */}
        {/* Mobile: Teks Atas & Bawah membingkai Logo secara presisi dan dekat */}
        {/* Tablet & Desktop: Teks Kiri & Kanan di samping Logo */}
        {/* ========================================================= */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-10 lg:px-16 xl:px-24 h-[296px] sm:h-[350px] md:h-auto flex flex-col md:flex-row justify-between items-center">
          {/* Sisi Atas Mobile / Kiri Desktop (TANGGAP DARURAT - Di Atas Logo) */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : (isDesktop ? titleLeftX : 0),
              y: shouldReduceMotion ? 0 : (isDesktop ? 0 : titleMobileTopY),
              opacity: heroOpacity,
            }}
            className="text-center md:text-left max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md pointer-events-auto"
          >
            <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-1 sm:mb-2 md:mb-3">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-[#8A8A8A]">
                {t.heroTag}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#FFFFFF] uppercase leading-[0.9] font-sans">
              {t.heroTitleLeft.split("\n").map((line, idx) => (
                <span key={idx} className="block">{line}</span>
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

          {/* Sisi Bawah Mobile / Kanan Desktop (PRESISI P3K - Di Bawah Logo) */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : (isDesktop ? titleRightX : 0),
              y: shouldReduceMotion ? 0 : (isDesktop ? 0 : titleMobileBottomY),
              opacity: heroOpacity,
            }}
            className="text-center md:text-right max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md pointer-events-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black tracking-[-0.03em] text-[#FFFFFF] uppercase leading-[0.9] font-sans">
              {t.heroTitleRight.split("\n").map((line, idx) => (
                <span key={idx} className="block">{line}</span>
              ))}
            </h1>
            <p className="mt-1.5 sm:mt-3 md:mt-4 font-mono text-[10px] sm:text-[11px] md:text-xs text-[#8A8A8A] uppercase tracking-wider">
              {t.heroSubtitle}
            </p>
            <div className="mt-4 sm:mt-6 hidden md:flex items-center justify-end gap-3">
              <a
                href="#cv"
                className="bg-[#141414] hover:bg-[#1E1E1E] text-[#EDEDED] border border-[#262626] hover:border-[#383838] font-medium text-xs px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all"
              >
                <svg className="w-3.5 h-3.5 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>{ctaSecondaryText}</span>
              </a>
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
          }}
          className="relative z-10 flex items-center justify-center pointer-events-none select-none"
        >
          <div className="relative">
            <img
              src={caduceusChrome}
              alt="Simbol Caduceus Medis Krom"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)] filter brightness-105 contrast-110"
              loading="eager"
            />
            {/* Specular Glint Refleksi Tepi Atas */}
            <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 3. MANIFESTO CARD (SISI KIRI - GAMBAR 1) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: manifestoOpacity,
            rotateX: shouldReduceMotion ? 0 : manifestoRotateX,
            y: shouldReduceMotion ? 0 : manifestoY,
            scale: shouldReduceMotion ? 1 : manifestoScale,
          }}
          className="preserve-3d absolute left-3 sm:left-6 md:left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-[56%] sm:w-[52%] md:w-[46%] md:max-w-[340px] lg:w-full lg:max-w-lg xl:max-w-xl text-left pointer-events-none"
        >
          <div className="rounded-xl sm:rounded-2xl border border-[#262626] bg-[#0E0E0E]/92 backdrop-blur-xl p-3.5 sm:p-5 md:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-auto">
            <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 mb-2 sm:mb-4 rounded-full border border-[#262626] bg-[#161616]">
              <span className="font-mono text-[8px] sm:text-[10px] md:text-xs tracking-widest uppercase text-[#8A8A8A]">
                {t.manifestoTag}
              </span>
            </div>
            <p className="text-[10.5px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-mono leading-relaxed text-[#EDEDED] font-normal tracking-tight">
              "{t.manifesto}"
            </p>
            <div className="mt-2.5 sm:mt-4 lg:mt-5 flex flex-wrap items-center gap-1.5 sm:gap-2.5 lg:gap-3 text-[8px] sm:text-[10px] md:text-xs font-mono text-[#8A8A8A]">
              <span>{t.latencyLabel}</span>
              <span>•</span>
              <span>{t.standardLabel}</span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 4. TELEMETRI METRIK CARD (SISI KIRI - GAMBAR 2) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: metricsOpacity,
            y: shouldReduceMotion ? 0 : metricsY,
          }}
          className="absolute left-3 sm:left-6 md:left-8 lg:left-16 xl:left-24 top-1/2 -translate-y-1/2 z-30 w-[56%] sm:w-[52%] md:w-[46%] md:max-w-[340px] lg:w-full lg:max-w-lg xl:max-w-xl text-left pointer-events-none"
        >
          <div className="rounded-xl sm:rounded-2xl border border-[#262626] bg-[#0E0E0E]/92 backdrop-blur-xl p-3.5 sm:p-5 md:p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] pointer-events-auto">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-5 lg:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest text-[#8A8A8A]">
                METRIK AUDIT KLINIS
              </span>
            </div>

            {/* Mobile Vertical List (< sm) vs Tablet/Desktop Horizontal Columns (sm+) */}
            <div className="flex flex-col sm:grid sm:grid-cols-3 gap-2.5 sm:gap-3 md:gap-3 lg:gap-6">
              {/* Metrik 01 */}
              <div>
                <div className="font-mono text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white tabular-nums">
                  {t.m1Value}
                </div>
                <div className="mt-0.5 sm:mt-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider text-[#8A8A8A] leading-tight">
                  {t.m1Label}
                </div>
              </div>

              {/* Divider / Metrik 02 */}
              <div className="border-t sm:border-t-0 sm:border-l border-[#262626] pt-1.5 sm:pt-0 sm:pl-3 md:pl-3 lg:pl-6">
                <div className="font-mono text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white tabular-nums">
                  {t.m2Value}
                </div>
                <div className="mt-0.5 sm:mt-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider text-[#8A8A8A] leading-tight">
                  {t.m2Label}
                </div>
              </div>

              {/* Divider / Metrik 03 */}
              <div className="border-t sm:border-t-0 sm:border-l border-[#262626] pt-1.5 sm:pt-0 sm:pl-3 md:pl-3 lg:pl-6">
                <div className="font-mono text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white tabular-nums">
                  {t.m3Value}
                </div>
                <div className="mt-0.5 sm:mt-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs uppercase tracking-wider text-[#8A8A8A] leading-tight">
                  {t.m3Label}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* 5. FOTO ARYA PRATAMA (SISI KANAN - GAMBAR 1, 2, & 3) */}
        {/* ========================================================= */}
        <motion.div
          style={{
            opacity: photoOpacity,
            y: shouldReduceMotion ? 0 : photoY,
            scale: shouldReduceMotion ? 1 : photoScale,
          }}
          className="absolute right-2 sm:right-6 md:right-8 lg:right-16 xl:right-24 top-1/2 -translate-y-1/2 z-25 flex items-center justify-end w-[40%] sm:w-[44%] md:w-[42%] md:max-w-[290px] lg:w-full lg:max-w-[420px] xl:max-w-[450px] pointer-events-none select-none"
        >
          <div className="relative w-full flex justify-end">
            {/* Ambient specular highlight glow behind Arya */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,rgba(10,10,10,0)_70%)] blur-xl sm:blur-2xl" />

            {/* Standalone Grayscale Portrait */}
            <img
              src={aryaHeroImg}
              alt="Arya Pratama - Peneliti & Praktisi Tanggap Darurat P3K"
              className="relative z-10 w-full h-auto max-h-[280px] sm:max-h-[380px] md:max-h-[440px] lg:max-h-[540px] xl:max-h-[580px] object-cover object-top filter grayscale contrast-115 brightness-95"
              style={{
                maskImage: 'linear-gradient(to bottom, black 68%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 68%, transparent 100%)',
              }}
              loading="eager"
            />

            {/* Tactical Name Pill Badge */}
            <div className="absolute bottom-2 sm:bottom-4 md:bottom-5 lg:bottom-6 left-1 sm:left-2 md:left-3 lg:left-4 z-20 px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border border-[#262626] bg-[#0E0E0E]/90 backdrop-blur-md flex items-center gap-1.5 sm:gap-2 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-[#EDEDED] uppercase tracking-wider whitespace-nowrap">
                Arya Pratama • Peneliti P3K
              </span>
            </div>
          </div>
        </motion.div>

        {/* Indikator Arah Scroll Halus (Bawah) */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute bottom-4 sm:bottom-6 z-10 flex flex-col items-center gap-1 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest text-[#636565] uppercase"
        >
          <span>{t.scrollHint}</span>
          <div className="w-[1px] h-4 sm:h-6 bg-gradient-to-b from-[#636565] to-transparent animate-pulse" />
        </motion.div>
      </div>

      {/* Transisi Gradien Halus Menuju Konten Bawah */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-[#131313]" />
    </section>
  );
}
