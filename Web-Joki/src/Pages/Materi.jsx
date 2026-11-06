import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { translations } from '../locales/translations';
import { materiData } from '../data/materiData';
import { scrollToSection } from '../utils/scrollHelper';
import {
  KonsepPrinsipModal,
  PeralatanP3KModal,
  KatalogCederaModal,
} from '../components/MateriModals';

export default function Materi({
  onNavigate,
  lang = 'id',
  onLanguageChange,
  initialAction = null,
  onClearInitialAction,
}) {
  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  // State for Progressive Disclosure Modals / Drawers
  const [activeModal, setActiveModal] = useState(null); // 'konsep' | 'peralatan' | 'cedera' | null
  const [selectedTopicId, setSelectedTopicId] = useState('luka-lecet');
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('all');

  useEffect(() => {
    if (!initialAction) return;
    if (initialAction.topicId) {
      setSelectedTopicId(initialAction.topicId);
    }
    if (initialAction.modal) {
      setActiveModal(initialAction.modal);
    }
    if (onClearInitialAction) {
      onClearInitialAction();
    }
  }, [initialAction, onClearInitialAction]);

  const currentTranslations = translations[lang] || translations.id;
  const t = currentTranslations.materiPage;
  const currentMateri = materiData[lang] || materiData.id;

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

  const openCederaTopic = (topicId = 'luka-lecet') => {
    setSelectedTopicId(topicId);
    setActiveModal('cedera');
  };

  const handleHeroModuleClick = (no) => {
    if (no === '01') setActiveModal('konsep');
    else if (no === '02') setActiveModal('peralatan');
    else if (no === '03') openCederaTopic('henti-jantung');
    else openCederaTopic('luka-lecet');
  };

  const level1TopicMap = ['luka-lecet', 'luka-memar', 'mimisan', 'gigitan-hewan'];
  const level2TopicMap = ['luka-sayat-robek', 'luka-bakar', 'keseleo', 'pingsan', 'heat-exhaustion'];
  const level3TopicMap = ['perdarahan', 'patah-tulang', 'cedera-kepala', 'gigitan-hewan', 'henti-jantung'];

  const filteredCatalogCards = currentMateri.katalogCedera.filter((item) => {
    if (selectedCategoryTab === 'all') return true;
    return item.levelKeparahan === selectedCategoryTab;
  });

  return (
    <div className="min-h-screen bg-[#131313] text-[#EDEDED] font-sans selection:bg-white selection:text-black">
      {/* ========================================================= */}
      {/* 1. STICKY TOP NAVBAR */}
      {/* ========================================================= */}
      <Navbar
        currentPage="Materi"
        onNavigate={navigateTo}
        lang={lang}
        onLanguageChange={onLanguageChange}
      />

      <main>
        {/* ========================================================= */}
        {/* 2. HERO SECTION */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content (7 Cols Desktop) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Clean Eyebrow Label */}
              <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-4">
                {t.hero.eyebrow}
              </span>

              {/* H1 Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-[46px] font-bold text-white leading-[1.12] tracking-[-0.03em] mb-6">
                {t.hero.title}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed mb-8 max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
                <button
                  type="button"
                  onClick={() => scrollToSection('proyek-utama')}
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

                <button
                  type="button"
                  onClick={() => openCederaTopic('luka-lecet')}
                  className="bg-[#141414] hover:bg-[#1E1E1E] text-[#EDEDED] border border-[#262626] hover:border-[#383838] font-medium text-sm px-5 py-3 rounded-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 text-[#10B981]"
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

              {/* Clean Highlights */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A3A3A3]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.hero.badges.noPaywall}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.hero.badges.clinical}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#10B981] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t.hero.badges.printReady}</span>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Ikhtisar Modul Penelitian P3K (Flattened Structure - No 4-Layer Nested Boxes) */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 shadow-xl">
                {/* Header of Card */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-[11px] font-semibold tracking-wider text-[#10B981] uppercase">
                      {t.hero.ecgCard.systemLabel}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                      {t.hero.ecgCard.repoTitle}
                    </div>
                  </div>

                  <span className="text-[11px] font-medium text-[#A3A3A3] bg-[#1c1b1b] px-2.5 py-1 rounded-md border border-[#262626]">
                    {t.hero.ecgCard.activeBadge}
                  </span>
                </div>

                {/* Modules List (Clean Divider List instead of Box-inside-Box-inside-Box) */}
                <div className="divide-y divide-[#222222] border-y border-[#222222] mb-4">
                  {(t.hero.ecgCard.modules || []).map((mod, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleHeroModuleClick(mod.no)}
                      className="w-full text-left flex items-start justify-between gap-3 py-3 px-1.5 hover:bg-[#1A1A1A] transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <span className="text-xs font-mono font-bold text-[#10B981] mt-0.5 shrink-0">
                          {mod.no}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#10B981] transition-colors leading-tight">
                            {mod.title}
                          </div>
                          <div className="text-[11px] text-[#8A8A8A] leading-snug mt-0.5">
                            {mod.desc}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-[#8A8A8A] group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0 self-center">
                        →
                      </span>
                    </button>
                  ))}
                </div>

                {/* Below Modules Meta Info (Clean 2-Col without Nested Box) */}
                <div className="grid grid-cols-2 gap-4 pb-3.5 border-b border-[#222222]">
                  <div>
                    <div className="text-[10px] text-[#8A8A8A] uppercase font-medium">{t.hero.ecgCard.accessStatusLabel}</div>
                    <div className="text-xs sm:text-[13px] font-bold text-white mt-0.5">{t.hero.ecgCard.accessStatusValue}</div>
                    <div className="text-[11px] text-[#8A8A8A]">{t.hero.ecgCard.accessStatusSub}</div>
                  </div>
                  <div className="border-l border-[#222222] pl-4">
                    <div className="text-[10px] text-[#8A8A8A] uppercase font-medium">{t.hero.ecgCard.verifiedLabel}</div>
                    <div className="text-xs sm:text-[13px] font-bold text-white mt-0.5">{t.hero.ecgCard.verifiedValue}</div>
                    <div className="text-[11px] text-[#10B981] font-medium">{t.hero.ecgCard.verifiedUpdate}</div>
                  </div>
                </div>

                {/* Card Footer Clean Attribution */}
                <div className="flex items-center justify-between text-[11px] text-[#8A8A8A] mt-3">
                  <span>{t.hero.ecgCard.officialRepo}</span>
                  <span className="text-[#EDEDED] font-medium">STIKES Buleleng</span>
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
              <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
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

          {/* Grid: 7 Cols Left (Card 1) & 5 Cols Right (Card 2 & Card 3) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
            {/* Card 1: Konsep Dasar & 7 Prinsip Penanganan P3K - 7 Cols */}
            <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                {/* Meta Header & Citation Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card1.tag}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {(t.bento.card1.badges || ['Lubis et al., 2024', 'Budi et al., 2024']).map(
                      (badge, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded"
                        >
                          {badge}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-snug tracking-[-0.01em]">
                  {t.bento.card1.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  {t.bento.card1.desc}
                </p>

                {/* 4 Principle Blocks (2x2) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {(t.bento.card1.principles || []).map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveModal('konsep')}
                      className="bg-[#1A1A1A] hover:bg-[#222222] border border-[#262626] hover:border-[#383838] rounded-xl p-3.5 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2 text-xs font-bold text-white mb-1">
                        <span className="text-xs font-mono font-bold text-[#10B981] shrink-0">
                          {item.no}.
                        </span>
                        <span>{item.title}</span>
                      </div>
                      <p className="text-[11px] text-[#8A8A8A] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action & File Meta */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#262626]">
                <span className="text-xs text-[#8A8A8A]">
                  {t.bento.card1.fileMeta}
                </span>

                <button
                  type="button"
                  onClick={() => setActiveModal('konsep')}
                  className="bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-xs px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
                >
                  <span>{t.bento.card1.btn}</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Stack: Card 2 & Card 3 (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              {/* Card 2: Standarisasi Peralatan & Kotak P3K */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#333333] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                      {t.bento.card2.tag}
                    </span>
                    <span className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2 py-0.5 rounded">
                      {t.bento.card2.regulation}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {t.bento.card2.title}
                  </h3>

                  <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">
                    {t.bento.card2.desc}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {t.bento.card2.pills.map((pill, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveModal('peralatan')}
                        className="bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] hover:border-[#3a3a3a] text-[#EDEDED] text-[11px] px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer"
                      >
                        {pill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-[#262626]">
                  <span className="text-[#8A8A8A]">{t.bento.card2.footerLabel}</span>
                  <button
                    type="button"
                    onClick={() => setActiveModal('peralatan')}
                    className="text-white hover:text-[#10B981] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{t.bento.card2.downloadBtn || t.bento.card2.btn}</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Card 3: Protokol Kritis: Henti Jantung (RJP) & Tersedak */}
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#333333] transition-colors">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                      {t.bento.card3.tag}
                    </span>
                    <span className="text-[11px] font-medium text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2 py-0.5 rounded">
                      {t.bento.card3.regulation}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {t.bento.card3.title}
                  </h3>

                  <p className="text-xs text-[#A3A3A3] leading-relaxed mb-4">
                    {t.bento.card3.desc}
                  </p>

                  {/* Two Metric Stat Boxes (Clickable) */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div
                      onClick={() => openCederaTopic('henti-jantung')}
                      className="bg-[#1A1A1A] hover:bg-[#242424] border border-[#262626] rounded-xl p-3 cursor-pointer transition-colors"
                    >
                      <div className="text-lg sm:text-xl font-bold text-white tracking-tight tabular-nums">
                        {t.bento.card3.box1.val}
                      </div>
                      <div className="text-[11px] text-[#8A8A8A] mt-0.5">
                        {t.bento.card3.box1.sub}
                      </div>
                    </div>
                    <div
                      onClick={() => openCederaTopic('tersedak')}
                      className="bg-[#1A1A1A] hover:bg-[#242424] border border-[#262626] rounded-xl p-3 cursor-pointer transition-colors"
                    >
                      <div className="text-lg sm:text-xl font-bold text-white tracking-tight tabular-nums">
                        {t.bento.card3.box2.val}
                      </div>
                      <div className="text-[11px] text-[#8A8A8A] mt-0.5">
                        {t.bento.card3.box2.sub}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-3 border-t border-[#262626]">
                  <span className="text-[#8A8A8A]">{t.bento.card3.footerLabel}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openCederaTopic('tersedak')}
                      className="text-xs text-[#c4c7c8] hover:text-white bg-[#1c1b1b] border border-[#2e2e2e] px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      {lang === 'id' ? 'SOP Tersedak' : 'Choking SOP'}
                    </button>
                    <button
                      type="button"
                      onClick={() => openCederaTopic('henti-jantung')}
                      className="flex items-center gap-1.5 text-white bg-[#1c1b1b] hover:bg-[#252525] border border-[#333333] px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      <span>{t.bento.card3.btn}</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full-Width Card 4: Katalog Penanganan Cedera Lapangan */}
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 hover:border-[#333333] transition-colors">
            <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
              {/* Left Details */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card4.tag}
                  </span>
                  {t.bento.card4.badges.map((b, idx) => (
                    <span key={idx} className="bg-[#1c1b1b] border border-[#262626] text-[11px] font-medium text-[#10B981] px-2.5 py-0.5 rounded">
                      {b}
                    </span>
                  ))}
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug tracking-[-0.01em]">
                  {t.bento.card2.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-5 max-w-3xl">
                  {t.bento.card4.desc}
                </p>

                {/* 3 Horizontal Categories */}
                {t.bento.card4.categories && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {t.bento.card4.categories.map((cat, idx) => {
                      const defaultTopicByCat =
                        idx === 0 ? 'luka-lecet' : idx === 1 ? 'patah-tulang' : 'luka-bakar';
                      return (
                        <div
                          key={idx}
                          onClick={() => openCederaTopic(defaultTopicByCat)}
                          className="bg-[#1A1A1A] hover:bg-[#232323] border border-[#262626] hover:border-[#3a3a3a] rounded-xl p-3.5 transition-colors cursor-pointer"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-xs font-bold text-white">{cat.name}</span>
                            <span className="text-[11px] font-medium text-[#10B981] shrink-0">
                              {cat.count}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#8A8A8A] leading-relaxed">{cat.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Box: Paket Modul Lengkap */}
              <div className="border-t lg:border-t-0 lg:border-l border-[#262626] pt-5 lg:pt-0 lg:pl-6 flex flex-col justify-between lg:w-72 shrink-0">
                <div>
                  <div className="text-[11px] text-[#10B981] font-semibold tracking-wider uppercase mb-1">
                    {t.bento.card4.package.tag}
                  </div>
                  <div className="text-base font-bold text-white mb-1.5">
                    {t.bento.card4.package.title}
                  </div>
                  <div className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
                    {t.bento.card4.package.desc}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openCederaTopic('luka-lecet')}
                  className="w-full bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md group cursor-pointer"
                >
                  <span>{t.bento.card4.package.btn}</span>
                  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Interactive Quick-Access Grid of All 14 Injury Topics */}
            <div className="mt-6 pt-6 border-t border-[#222222]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {lang === 'id'
                    ? 'Daftar Lengkap 14 Topik Penanganan Cedera & Darurat:'
                    : 'Complete List of 14 Injury & Emergency Care Topics:'}
                </span>

                <div className="flex items-center gap-1.5 text-[11px]">
                  {[
                    { id: 'all', label: lang === 'id' ? 'Semua' : 'All' },
                    { id: 'ringan', label: lang === 'id' ? 'Level 1 (Ringan)' : 'Level 1 (Minor)' },
                    { id: 'sedang', label: lang === 'id' ? 'Level 2 (Sedang)' : 'Level 2 (Moderate)' },
                    { id: 'kritis', label: lang === 'id' ? 'Level 3 (Kritis)' : 'Level 3 (Critical)' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setSelectedCategoryTab(tab.id)}
                      className={`px-2.5 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                        selectedCategoryTab === tab.id
                          ? 'bg-white text-black font-semibold'
                          : 'bg-[#1c1b1b] text-[#8A8A8A] hover:text-white border border-[#262626]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {filteredCatalogCards.map((topic) => {
                  const dotColor =
                    topic.levelKeparahan === 'kritis'
                      ? '#EF4444'
                      : topic.levelKeparahan === 'sedang'
                      ? '#F59E0B'
                      : '#10B981';
                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onClick={() => openCederaTopic(topic.id)}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-[#181818] hover:bg-[#222222] border border-[#262626] hover:border-[#3a3a3a] text-left transition-all group cursor-pointer"
                    >
                      <img
                        src={topic.gambarIlustrasi}
                        alt={topic.judul}
                        className="w-11 h-11 rounded-lg object-cover bg-[#0e0e0e] border border-[#2a2a2a] shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: dotColor }}
                          ></span>
                          <span className="text-[10px] text-[#8A8A8A] truncate">
                            {topic.kategoriBento}
                          </span>
                        </div>
                        <div className="text-xs font-semibold text-white group-hover:text-[#10B981] transition-colors truncate mt-0.5">
                          {topic.judul}
                        </div>
                      </div>
                    </button>
                  );
                })}
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
        {/* 6. TINGKATAN MATERI PEMBELAJARAN (3 CARDS - KONSISTEN TRIASE KLINIS) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
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
            {/* Level 01: Ringan (Emerald) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#10B981]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#10B981] uppercase">
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

                <div className="space-y-2 mb-8">
                  {t.levels.level1.checks.map((chk, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openCederaTopic(level1TopicMap[idx] || 'luka-lecet')}
                      className="w-full text-left flex items-center justify-between gap-2.5 text-xs text-[#EDEDED] hover:text-[#10B981] bg-[#1a1a1a] hover:bg-[#222222] border border-[#242424] rounded-lg px-3 py-2 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
                        <span>{chk}</span>
                      </div>
                      <span className="text-xs text-[#8A8A8A]">→</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCederaTopic(t.levels.level1.topicId || 'luka-lecet')}
                className="w-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] text-white text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.levels.level1.btn}</span>
                <span>→</span>
              </button>
            </div>

            {/* Level 02: Sedang (Amber - Konsisten Tanpa Kartu Putih SaaS & Tanpa Bintang) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#F59E0B]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#F59E0B] uppercase">
                    {t.levels.level2.tag}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8A8A]">{t.levels.level2.level}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                  {t.levels.level2.title}
                </h3>

                <p className="text-xs text-[#8A8A8A] leading-relaxed mb-6">
                  {t.levels.level2.target}
                </p>

                <div className="space-y-2 mb-8">
                  {t.levels.level2.checks.map((chk, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openCederaTopic(level2TopicMap[idx] || 'luka-sayat-robek')}
                      className="w-full text-left flex items-center justify-between gap-2.5 text-xs text-[#EDEDED] hover:text-[#F59E0B] bg-[#1a1a1a] hover:bg-[#222222] border border-[#242424] rounded-lg px-3 py-2 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shrink-0" />
                        <span>{chk}</span>
                      </div>
                      <span className="text-xs text-[#8A8A8A]">→</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCederaTopic(t.levels.level2.topicId || 'luka-sayat-robek')}
                className="w-full bg-[#1c1b1b] hover:bg-[#252525] border border-[#262626] text-white text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t.levels.level2.btn}</span>
                <span>→</span>
              </button>
            </div>

            {/* Level 03: Kritis / Mengancam Jiwa (Red) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#EF4444]/40 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold tracking-wider text-[#EF4444] uppercase">
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

                <div className="space-y-2 mb-8">
                  {t.levels.level3.checks.map((chk, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => openCederaTopic(level3TopicMap[idx] || 'henti-jantung')}
                      className="w-full text-left flex items-center justify-between gap-2.5 text-xs text-[#EDEDED] hover:text-[#EF4444] bg-[#1a1a1a] hover:bg-[#222222] border border-[#242424] rounded-lg px-3 py-2 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                        <span>{chk}</span>
                      </div>
                      <span className="text-xs text-[#8A8A8A]">→</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => openCederaTopic(t.levels.level3.topicId || 'henti-jantung')}
                className="w-full bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] text-xs font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
              >
                <span>{t.levels.level3.btn}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FAQ ACCORDION (TANYA JAWAB PENGGUNAAN MATERI) */}
        {/* ========================================================= */}
        <section className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
              {t.faq.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-[-0.02em] mb-3">
              {t.faq.title}
            </h2>
            <p className="text-sm text-[#8A8A8A]">{t.faq.subtitle}</p>
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
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#A3A3A3] leading-relaxed border-t border-[#1C1C1C] pt-3">
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
          <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
                {t.cta.tag}
              </span>
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
          <div>{t.footer.copy}</div>
          <div className="flex flex-wrap items-center gap-6 font-medium">
            <button
              type="button"
              onClick={() => navigateTo('Home')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('proyek-utama')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.archive}
            </button>
            <span>{t.footer.license}</span>
          </div>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* 10. PROGRESSIVE DISCLOSURE MODALS / DRAWERS */}
      {/* ========================================================= */}
      <KonsepPrinsipModal
        isOpen={activeModal === 'konsep'}
        onClose={() => setActiveModal(null)}
        data={currentMateri.konsepDanPrinsip}
        lang={lang}
      />

      <PeralatanP3KModal
        isOpen={activeModal === 'peralatan'}
        onClose={() => setActiveModal(null)}
        data={currentMateri.peralatanP3K}
        lang={lang}
      />

      <KatalogCederaModal
        isOpen={activeModal === 'cedera'}
        onClose={() => setActiveModal(null)}
        items={currentMateri.katalogCedera}
        initialTopicId={selectedTopicId}
        lang={lang}
      />
    </div>
  );
}
