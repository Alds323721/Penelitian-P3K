import React, { useState } from 'react';
import aryaHeroImg from '../assets/arya-pratama.jpg';
import LanguageDropdown from '../components/LanguageDropdown';
import { translations } from '../locales/translations';

export default function Home({ onNavigate, lang = 'id', onLanguageChange }) {
  // State for interactive segmented nav
  const [activeTab, setActiveTab] = useState('Home');

  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState(0); // 0 is open by default like the mockup

  const t = translations[lang] || translations.id;

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
      {/* 1. STICKY TOP NAVBAR */}
      {/* ========================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#131313]/85 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand Left */}
          <div
            onClick={() => navigateTo('Home')}
            className="flex items-center gap-2 shrink-0 cursor-pointer hover:opacity-85 transition-opacity"
          >
            <svg
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
            <span className="text-xs sm:text-[13px] font-semibold tracking-wider text-white">
              {t.nav.profile}
            </span>
          </div>

          {/* Segmented Center Control (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center bg-[#1c1b1b] border border-[#262626] rounded-full p-1">
            <button
              onClick={() => navigateTo('Home')}
              className={`px-4 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'Home'
                  ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939]'
                  : 'text-[#8A8A8A] hover:text-[#EDEDED]'
              }`}
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => navigateTo('Materi')}
              className={`px-4 py-1 text-xs font-medium rounded-full transition-all cursor-pointer ${
                activeTab === 'Materi'
                  ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939]'
                  : 'text-[#8A8A8A] hover:text-[#EDEDED]'
              }`}
            >
              {t.nav.materi}
            </button>
          </div>

          {/* Language Switcher Dropdown Right (Replaces old collab pill, AP, and user icon) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <LanguageDropdown
              currentLang={lang}
              onLanguageChange={onLanguageChange}
            />
          </div>
        </div>
      </header>

      <main>
        {/* ========================================================= */}
        {/* 2. HERO SECTION */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content (7 Cols Desktop) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-3.5 h-3.5 text-[#8A8A8A]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
                <span className="text-xs sm:text-[13px] font-medium text-[#8A8A8A] tracking-normal">
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
                <button
                  type="button"
                  onClick={() => navigateTo('Materi')}
                  className="bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
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
                </button>

                <a
                  href="#cv"
                  className="bg-[#141414] hover:bg-[#1E1E1E] text-[#EDEDED] border border-[#262626] hover:border-[#383838] font-medium text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all"
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
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  <span>{t.hero.ctaSecondary}</span>
                </a>
              </div>

              {/* Compliance & Alignment Badges */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#8A8A8A]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.hero.badges.aha}</span>
                </div>
                <span className="text-[#353534]">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.hero.badges.kemenaker}</span>
                </div>
                <span className="text-[#353534]">•</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                  <span>{t.hero.badges.cc}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card / 3D Model Viewport (5 Cols Desktop) */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-4 sm:p-5 shadow-2xl relative">
                {/* Visual Viewport Box */}
                <div className="relative rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626] aspect-square flex items-center justify-center group">
                  <img
                    src={aryaHeroImg}
                    alt="Arya Pratama - Foto Model Peneliti P3K"
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Top Shadow Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* 3D Viewport Pill Overlay */}
                  <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#141414]/90 backdrop-blur-md border border-[#333333] px-3.5 py-1.5 rounded-full text-[11px] font-medium text-[#EDEDED] shadow-lg whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-[#8E9192]"></span>
                    <span>{t.hero.viewportLabel}</span>
                  </div>
                </div>

                {/* Field Metrics Panel */}
                <div className="mt-4 bg-[#1c1b1b] border border-[#262626] rounded-xl p-4 flex flex-col gap-3">
                  {/* Metric Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold tracking-wider text-[#8A8A8A] uppercase">
                      {t.hero.metricsHeader}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full border border-[#10B981]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                      {t.hero.activeAudit}
                    </span>
                  </div>

                  {/* Primary Focus Sub-Card */}
                  <div className="bg-[#141414] border border-[#262626] rounded-lg p-3">
                    <div className="text-[11px] text-[#8A8A8A] mb-0.5">{t.hero.focusLabel}</div>
                    <div className="text-sm font-bold text-white">{t.hero.focusValue}</div>
                  </div>

                  {/* Accuracy Stats Row */}
                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <div className="text-xs sm:text-[13px] font-semibold text-[#EDEDED]">
                        {t.hero.accuracyLabel}
                      </div>
                      <div className="text-[11px] text-[#8A8A8A]">{t.hero.accuracySub}</div>
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-tight">
                      {t.hero.accuracyValue}
                    </div>
                  </div>
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
            {/* Desktop Full Row / Mobile Scrolling Strip */}
            <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
              {[...t.marquee, ...t.marquee, ...t.marquee].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-8">
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.12em] text-[#8A8A8A] uppercase">
                    {item}
                  </span>
                  <span className="text-[9px] text-[#444748]">✦</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. ARSITEKTUR RISET & PROFIL (BENTO GRID) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-2">
              {t.bento.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
              {t.bento.sectionTitle}
            </h2>
          </div>

          {/* 2x2 Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1: 01 / IDENTITY & ETHOS */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card1.tag}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#8A8A8A]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">
                  {t.bento.card1.title}
                </h3>

                <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                  {t.bento.card1.body}
                </p>

                {/* Pill Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {t.bento.card1.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="bg-[#1c1b1b] border border-[#262626] text-[#EDEDED] text-xs px-3 py-1.5 rounded-full font-medium"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Process Box */}
              <div className="bg-[#0e0e0e] border border-[#262626] rounded-xl p-3.5 text-xs text-[#8A8A8A] flex flex-wrap items-center gap-2">
                <span className="text-white font-medium">{t.bento.card1.methodLabel}</span>
                {t.bento.card1.methodSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[#10B981] font-medium">{step}</span>
                    {idx < t.bento.card1.methodSteps.length - 1 && (
                      <span className="text-[#10B981]">➔</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Card 2: 02 / COMPETENCIES */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card2.tag}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#8A8A8A]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-6">
                  {t.bento.card2.title}
                </h3>

                {/* Competency Bars */}
                <div className="space-y-4 mb-6">
                  {t.bento.card2.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-xs font-medium mb-1.5">
                        <span className="text-[#EDEDED]">{skill.name}</span>
                        <span className="text-[#8A8A8A] tabular-nums font-semibold">
                          {skill.value}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-[#201f1f] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-500"
                          style={{ width: skill.value }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-[#8A8A8A] border-t border-[#262626] pt-3">
                {t.bento.card2.footer}
              </div>
            </div>

            {/* Card 3: 03 / CORE HABITS */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card3.tag}
                  </span>
                  <svg
                    className="w-4 h-4 text-[#8A8A8A]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-5">
                  {t.bento.card3.title}
                </h3>

                {/* Habit Checklist */}
                <div className="space-y-4 mb-6">
                  {t.bento.card3.habits.map((habit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center shrink-0 mt-0.5 border border-[#10B981]/30">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#EDEDED]">
                        <strong className="text-white font-semibold">{habit.bold}</strong> — {habit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="flex items-center justify-between border-t border-[#262626] pt-3">
                <span className="text-xs text-[#8A8A8A]">{t.bento.card3.footerLabel}</span>
                <span className="text-xs font-semibold text-white bg-[#1c1b1b] border border-[#333333] px-3 py-1 rounded-full">
                  {t.bento.card3.footerBadge}
                </span>
              </div>
            </div>

            {/* Card 4: 04 / CREED */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card4.tag}
                  </span>
                </div>

                {/* Big Quote */}
                <blockquote className="text-base sm:text-lg md:text-xl font-semibold text-[#EDEDED] leading-snug italic mt-4 mb-6 relative z-10">
                  {t.bento.card4.quote}
                </blockquote>
              </div>

              {/* Author Attribution */}
              <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-[#262626]">
                <div className="w-9 h-9 rounded-full bg-[#1c1b1b] border border-[#333333] flex items-center justify-center text-xs font-bold text-white">
                  AP
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.bento.card4.author}</div>
                  <div className="text-xs text-[#8A8A8A]">{t.bento.card4.role}</div>
                </div>
              </div>

              {/* Giant Watermark Quotation Mark */}
              <div className="absolute right-4 bottom-2 text-8xl md:text-9xl font-serif text-white/[0.04] select-none pointer-events-none leading-none">
                ”
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. STATS SUMMARY (3 COLUMNS) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {stat.header}
                  </span>
                  {idx === 0 && (
                    <svg className="w-4 h-4 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  )}
                  {idx === 1 && (
                    <svg className="w-4 h-4 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                    </svg>
                  )}
                  {idx === 2 && (
                    <svg className="w-4 h-4 text-[#8A8A8A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  )}
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-bold text-white tabular-nums tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8A8A8A]">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. PILAR FILOSOFIS (3 PRINSIP FUNDAMENTAL) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-2">
              {t.pillars.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
              {t.pillars.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Pilar 1: Presisi Prosedural (Dark) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-3">
                  {t.pillars.pilar1.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{t.pillars.pilar1.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                  {t.pillars.pilar1.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {t.pillars.pilar1.checks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#EDEDED]">
                      <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#1c1b1b] hover:bg-[#262626] border border-[#262626] text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {t.pillars.pilar1.btn}
              </button>
            </div>

            {/* Pilar 2: FEATURED INVERTED WHITE CARD */}
            <div className="bg-[#FFFFFF] text-[#0A0A0A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-2xl relative ring-1 ring-white/20">
              <div>
                <div className="inline-block bg-[#0A0A0A] text-white text-[11px] font-semibold px-3 py-1 rounded-full mb-3">
                  {t.pillars.pilar2.tag}
                </div>
                <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{t.pillars.pilar2.title}</h3>
                <p className="text-sm text-[#525252] leading-relaxed mb-6">
                  {t.pillars.pilar2.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {t.pillars.pilar2.checks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#1c1b1b] font-medium">
                      <svg className="w-4 h-4 text-[#0A0A0A] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigateTo('Materi')}
                className="w-full bg-[#0A0A0A] hover:bg-[#222222] text-white text-xs sm:text-sm font-semibold py-3 px-4 rounded-lg transition-colors shadow-md cursor-pointer"
              >
                {t.pillars.pilar2.btn}
              </button>
            </div>

            {/* Pilar 3: Pembaharuan Berkelanjutan (Dark) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase block mb-3">
                  {t.pillars.pilar3.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{t.pillars.pilar3.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                  {t.pillars.pilar3.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {t.pillars.pilar3.checks.map((check, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-[#EDEDED]">
                      <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{check}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-[#1c1b1b] hover:bg-[#262626] border border-[#262626] text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {t.pillars.pilar3.btn}
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FAQ ACCORDION (TANYA JAWAB & TRANSPARANSI RISET) */}
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
        {/* 8. CTA INITIATION SECTION */}
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
              href="mailto:contact@aryapratama.id"
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
            <a href="#linkedin" className="hover:text-white transition-colors">
              {t.footer.links.linkedin}
            </a>
            <a href="mailto:contact@aryapratama.id" className="hover:text-white transition-colors">
              {t.footer.links.email}
            </a>
            <a href="#researchgate" className="hover:text-white transition-colors">
              {t.footer.links.researchgate}
            </a>
            <button
              type="button"
              onClick={() => navigateTo('Materi')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.links.materi}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
