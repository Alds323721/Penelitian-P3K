import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { translations } from '../locales/translations';

export default function Materi({ onNavigate, lang = 'id', onLanguageChange }) {
  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState(0); // 0 is open by default like the mockup

  const currentTranslations = translations[lang] || translations.id;
  const t = currentTranslations.materiPage;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const navigateTo = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      if (page === 'Home') window.location.href = '/';
      else if (page === 'Materi') window.location.href = '/Materi';
    }
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#EDEDED] font-sans selection:bg-white selection:text-black">
      {/* ========================================================= */}
      {/* 1. STICKY TOP NAVBAR (MOBILE & IPAD RESPONSIVE) */}
      {/* ========================================================= */}
      <Navbar
        currentPage="Materi"
        onNavigate={navigateTo}
        lang={lang}
        onLanguageChange={onLanguageChange}
        extraActions={
          <a
            href="#unduh-zip"
            className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] text-xs font-medium text-[#EDEDED] transition-colors"
            title={t.nav.downloadZip}
          >
            <svg
              className="w-3.5 h-3.5 text-[#EDEDED] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            <span className="hidden md:inline">{t.nav.downloadZip}</span>
            <span className="hidden sm:inline md:hidden">{t.nav.downloadZipShort}</span>
          </a>
        }
      />

      <main>
        {/* ========================================================= */}
        {/* 2. HERO SECTION */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content (7 Cols Desktop) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/25 px-3 py-1 rounded-full text-xs font-semibold text-[#10B981] w-fit mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                <span className="tracking-wide">
                  {t.hero.eyebrow}
                </span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white leading-[1.12] tracking-[-0.03em] mb-6">
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#8A8A8A] leading-relaxed mb-8 max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <a
                  href="#proyek-utama"
                  className="bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md group"
                >
                  <span>{t.hero.ctaPrimary}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={() => navigateTo('Home')}
                  className="bg-[#141414] hover:bg-[#1E1E1E] text-[#EDEDED] border border-[#262626] hover:border-[#383838] font-medium text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-[#8A8A8A]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4.5h18M6 9.5h12M9 14.5h6M11 19.5h2"
                    />
                  </svg>
                  <span>{t.hero.ctaSecondary}</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#8A8A8A]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span className="text-[#EDEDED]">{t.hero.badges.noPaywall}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span className="text-[#EDEDED]">{t.hero.badges.clinical}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span className="text-[#EDEDED]">{t.hero.badges.printReady}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Ikhtisar Modul Penelitian P3K (5 Cols Desktop) */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 shadow-2xl relative">
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1c1b1b] border border-[#262626] flex items-center justify-center text-[#10B981]">
                      <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] tracking-wider text-[#8A8A8A] uppercase font-mono">
                        {t.hero.ecgCard.systemLabel}
                      </div>
                      <div className="text-xs sm:text-[13px] font-bold text-white">
                        {t.hero.ecgCard.repoTitle}
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    {t.hero.ecgCard.activeBadge}
                  </span>
                </div>

                {/* Modules Summary Box */}
                <div className="bg-[#0e0e0e] border border-[#262626] rounded-xl p-3 sm:p-3.5 space-y-2.5 mb-4">
                  {(t.hero.ecgCard.modules || [
                    { no: '01', title: 'Triase & Alur Tanggap Darurat', desc: 'Klasifikasi cepat & prioritas evakuasi lapangan' },
                    { no: '02', title: 'Standardisasi Kotak P3K', desc: 'Manajemen obat & instrumen darurat luar ruangan' },
                    { no: '03', title: 'Resusitasi Jantung Paru (RJP)', desc: 'Kompresi dada & golden period Bantuan Hidup Dasar' },
                    { no: '04', title: 'Manajemen Fraktur & Trauma', desc: 'Teknik pembidaian & imobilisasi cedera' },
                  ]).map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-[#161616] border border-[#222222] rounded-lg p-2.5">
                      <span className="text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-1.5 py-0.5 rounded shrink-0">
                        {mod.no}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-semibold text-white leading-tight">{mod.title}</div>
                        <div className="text-[11px] text-[#8A8A8A] leading-tight mt-0.5">{mod.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Below Modules Meta Info */}
                <div className="grid grid-cols-2 gap-3 bg-[#1c1b1b] border border-[#262626] rounded-xl p-3.5">
                  <div>
                    <div className="text-[10px] text-[#8A8A8A] uppercase font-medium">{t.hero.ecgCard.accessStatusLabel}</div>
                    <div className="text-xs sm:text-[13px] font-bold text-white mt-0.5">{t.hero.ecgCard.accessStatusValue}</div>
                    <div className="text-[10px] text-[#8A8A8A]">{t.hero.ecgCard.accessStatusSub}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#8A8A8A] uppercase font-medium">{t.hero.ecgCard.verifiedLabel}</div>
                    <div className="text-xs sm:text-[13px] font-bold text-white mt-0.5">{t.hero.ecgCard.verifiedValue}</div>
                    <div className="text-[10px] text-[#10B981] font-semibold">{t.hero.ecgCard.verifiedUpdate}</div>
                  </div>
                </div>

                {/* Card Footer Clean Attribution */}
                <div className="flex items-center justify-between text-[11px] text-[#8A8A8A] mt-3.5 px-1">
                  <span>{t.hero.ecgCard.officialRepo}</span>
                  <span className="text-[#10B981] font-medium">STIKES Buleleng</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. MARQUEE / TICKER BANNER */}
        {/* ========================================================= */}
        <section className="w-full border-y border-[#262626] bg-[#0E0E0E] py-4 overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
              {[...t.marquee, ...t.marquee, ...t.marquee].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.12em] text-[#8A8A8A] uppercase">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. KONSEP PERTOLONGAN PERTAMA PADA KECELAKAAN (P3K) */}
        {/* ========================================================= */}
        <section id="proyek-utama" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-2">
                {t.bento.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
                {t.bento.sectionTitle}
              </h2>
            </div>
            <p className="text-xs text-[#8A8A8A] max-w-md leading-relaxed md:text-right">
              {t.bento.sectionDesc}
            </p>
          </div>

          {/* 2 Comprehensive Theoretical Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: 1. Pengertian Pertolongan Pertama Pada Kecelakaan */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#383838] transition-all duration-300 shadow-xl relative overflow-hidden group">
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10B981]/10 transition-colors"></div>

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-1 rounded">
                    {t.bento.card1.tag}
                  </span>
                  <span className="text-xs font-mono text-[#8A8A8A] flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span>{t.bento.card1.source}</span>
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug tracking-[-0.01em]">
                  {t.bento.card1.title}
                </h3>

                {/* Content Block 1: Definisi Pokok P3K */}
                <div className="bg-[#1c1b1b] border border-[#262626] rounded-xl p-4 sm:p-5 mb-4 relative">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                    <span>Definisi & Esensi P3K</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed text-justify">
                    {t.bento.card1.p1}
                  </p>
                </div>

                {/* Content Block 2: Batasan Tindakan Awal & Bukan Pengganti Medis */}
                <div className="bg-[#181818] border border-[#262626] rounded-xl p-4 sm:p-5 mb-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#EDEDED] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span>{t.bento.card1.p2Label}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed mb-3.5 text-justify">
                    {t.bento.card1.p2}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.bento.card1.p2Actions.map((act, idx) => (
                      <span
                        key={idx}
                        className="bg-[#201f1f] border border-[#2c2c2c] text-[#c4c7c8] text-[11px] px-2.5 py-1 rounded-md font-medium"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content Block 3: Relevansi dalam Kegiatan Pramuka */}
                <div className="bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#EDEDED] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span>{t.bento.card1.p3Label}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed mb-3.5 text-justify">
                    {t.bento.card1.p3}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.bento.card1.p3Badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="bg-[#1c1b1b] border border-[#262626] text-[#10B981] text-[11px] px-2.5 py-1 rounded-md font-mono"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Footer Meta */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-[#262626] text-[#8A8A8A]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.bento.card1.footerMeta}</span>
                </span>
                <span className="font-mono text-[11px] text-[#EDEDED] bg-[#1c1b1b] border border-[#262626] px-2.5 py-0.5 rounded">
                  {t.bento.card1.footerBadge}
                </span>
              </div>
            </div>

            {/* Card 2: 2. Tujuan dan Manfaat P3K */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#383838] transition-all duration-300 shadow-xl relative overflow-hidden group">
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#10B981]/10 transition-colors"></div>

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-1 rounded">
                    {t.bento.card2.tag}
                  </span>
                  <span className="text-xs font-mono text-[#8A8A8A] flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span>{t.bento.card2.source}</span>
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug tracking-[-0.01em]">
                  {t.bento.card2.title}
                </h3>

                {/* Subtitle / Intro */}
                <p className="text-xs sm:text-sm text-[#8A8A8A] mb-5 leading-relaxed">
                  {t.bento.card2.intro}
                </p>

                {/* 5 Tujuan List (A - E) */}
                <div className="space-y-2.5 mb-5">
                  {t.bento.card2.goals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1c1b1b] border border-[#262626] rounded-xl p-3 sm:p-3.5 flex items-start gap-3 hover:border-[#383838] transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                        {goal.letter}
                      </div>
                      <p className="text-xs sm:text-[13px] text-[#EDEDED] font-medium leading-relaxed">
                        {goal.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Manfaat P3K Highlight Box */}
                <div className="bg-[#181818] border border-[#262626] rounded-xl p-4 sm:p-5 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#10B981] font-semibold mb-2 flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                    <span>{t.bento.card2.benefitsLabel}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#D4D4D4] leading-relaxed mb-3.5 text-justify">
                    {t.bento.card2.benefits}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {t.bento.card2.benefitPills.map((pill, idx) => (
                      <span
                        key={idx}
                        className="bg-[#201f1f] border border-[#2c2c2c] text-[#c4c7c8] text-[11px] px-2.5 py-1 rounded-md font-medium"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Footer Meta */}
              <div className="flex items-center justify-between text-xs pt-4 border-t border-[#262626] text-[#8A8A8A]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.bento.card2.footerMeta}</span>
                </span>
                <span className="font-mono text-[11px] text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded">
                  {t.bento.card2.footerBadge}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. STATS SUMMARY (3 COLUMNS) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10 border-t border-[#262626]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {t.stats.map((st, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight mb-2">
                  {st.val}
                </div>
                <div className="text-sm font-semibold text-[#EDEDED] mb-2">
                  {st.title}
                </div>
                <p className="text-xs text-[#8A8A8A] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. TINGKATAN MATERI PEMBELAJARAN (3 CARDS) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-2">
                {t.levels.eyebrow}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
                {t.levels.sectionTitle}
              </h2>
            </div>
            <p className="text-xs text-[#8A8A8A] max-w-md leading-relaxed md:text-right">
              {t.levels.sectionDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Level 01 */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.levels.level1.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8A8A]">{t.levels.level1.level}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {t.levels.level1.title}
                </h3>

                <p className="text-xs text-[#8A8A8A] leading-relaxed mb-6">
                  {t.levels.level1.target}
                </p>

                <div className="space-y-3 mb-8">
                  {t.levels.level1.checks.map((chk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#EDEDED]">
                      <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] text-white text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.levels.level1.btn}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

            {/* Level 02: FEATURED INVERTED WHITE CARD */}
            <div className="bg-[#FFFFFF] text-[#0A0A0A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative ring-1 ring-white/20">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-[#0A0A0A] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <span>★</span>
                    <span>{t.levels.level2.tag}</span>
                  </span>
                  <span className="text-[11px] font-mono font-bold text-[#525252]">{t.levels.level2.level}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 leading-snug">
                  {t.levels.level2.title}
                </h3>

                <p className="text-xs text-[#525252] leading-relaxed mb-6">
                  {t.levels.level2.target}
                </p>

                <div className="space-y-3 mb-8">
                  {t.levels.level2.checks.map((chk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#1c1b1b] font-medium">
                      <svg className="w-4 h-4 text-[#0A0A0A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <span>{t.levels.level2.btn}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </button>
            </div>

            {/* Level 03 */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.levels.level3.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8A8A]">{t.levels.level3.level}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {t.levels.level3.title}
                </h3>

                <p className="text-xs text-[#8A8A8A] leading-relaxed mb-6">
                  {t.levels.level3.target}
                </p>

                <div className="space-y-3 mb-8">
                  {t.levels.level3.checks.map((chk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-[#EDEDED]">
                      <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{chk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] text-white text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.levels.level3.btn}</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FAQ ACCORDION (TANYA JAWAB PENGGUNAAN MATERI) */}
        {/* ========================================================= */}
        <section className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-2">
              {t.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
              {t.faq.title}
            </h2>
            <p className="text-sm text-[#8A8A8A]">
              {t.faq.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {t.faq.items.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#141414] border border-[#262626] rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-[#1A1A1A] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#EDEDED]">
                      {item.q}
                    </span>
                    <span className="w-6 h-6 flex items-center justify-center shrink-0 text-[#8A8A8A]">
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#8A8A8A] leading-relaxed border-t border-[#1C1C1C] pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. MASUKAN RISET CTA BANNER */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
                <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                  {t.cta.tag}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-2 leading-tight">
                {t.cta.title}
              </h2>
              <p className="text-sm text-[#8A8A8A] leading-relaxed">
                {t.cta.desc}
              </p>
            </div>

            <a
              href="mailto:candra.susanta@gmail.com"
              className="bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-sm px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shrink-0 whitespace-nowrap group"
            >
              <span>{t.cta.btn}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* 9. FOOTER */}
      {/* ========================================================= */}
      <footer className="w-full border-t border-[#262626] bg-[#0E0E0E] py-8 mt-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A]">
          <div>
            {t.footer.copy}
          </div>
          <div className="flex items-center gap-6 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
              <span>{t.footer.license}</span>
            </span>
            <span>{t.footer.archive}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
