import React, { useState } from 'react';
import profileImg from '../assets/profilhitamputih.jpeg';
import CaduceusScrollyHero from '../components/CaduceusScrollyHero';
import ScoutRiskCards from '../components/ScoutRiskCards';
import Navbar from '../components/Navbar';
import { translations } from '../locales/translations';
import { scrollToSection } from '../utils/scrollHelper';

export default function Home({ onNavigate, lang = 'id', onLanguageChange }) {
  // State for interactive FAQ accordion
  const [openFaq, setOpenFaq] = useState(0);

  const t = translations[lang] || translations.id;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  const navigateTo = (page, actionPayload = null) => {
    if (onNavigate) {
      onNavigate(page, actionPayload);
    } else {
      if (page === 'Home') window.location.href = '/';
      else if (page === 'Materi') window.location.href = '/Materi';
    }
  };

  const handleSkillModuleClick = (idx) => {
    if (idx === 0) navigateTo('Materi', { modal: 'konsep' });
    else if (idx === 1) navigateTo('Materi', { modal: 'peralatan' });
    else if (idx === 2) navigateTo('Materi', { modal: 'cedera', topicId: 'henti-jantung' });
    else navigateTo('Materi', { modal: 'cedera', topicId: 'luka-lecet' });
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#EDEDED] font-sans selection:bg-white selection:text-black">
      {/* ========================================================= */}
      {/* 1. STICKY TOP NAVBAR */}
      {/* ========================================================= */}
      <Navbar
        currentPage="Home"
        onNavigate={navigateTo}
        lang={lang}
        onLanguageChange={onLanguageChange}
      />

      <main className="relative z-10">
        {/* ========================================================= */}
        {/* 2. HERO SCROLLYTELLING */}
        {/* ========================================================= */}
        <CaduceusScrollyHero
          lang={lang}
          translations={translations}
          onNavigate={navigateTo}
        />

        {/* ========================================================= */}
        {/* 3. MARQUEE / TICKER BANNER */}
        {/* ========================================================= */}
        <section className="w-full border-y border-[#262626] bg-[#0E0E0E] py-4 overflow-hidden">
          <div className="flex items-center justify-center">
            <div className="animate-marquee flex items-center gap-6 sm:gap-8 whitespace-nowrap">
              {[...t.marquee, ...t.marquee, ...t.marquee].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 sm:gap-8">
                  <span className="text-xs sm:text-[13px] font-bold tracking-[0.12em] text-[#8A8A8A] uppercase">
                    {item}
                  </span>
                  <span className="text-xs text-[#444748]">•</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. PROFIL & LANDASAN RISET */}
        {/* ========================================================= */}
        <section id="profil-peneliti" className="max-w-[1200px] mx-auto px-4 sm:px-6 py-20">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
              {t.bento.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
              {t.bento.sectionTitle}
            </h2>
          </div>

          {/* 2x2 Grid Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Card 1: Latar Belakang Peneliti */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card1.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3.5 mb-5">
                  <img
                    src={profileImg}
                    alt="Made Candra Susanta"
                    className="w-12 h-12 rounded-xl object-cover object-[center_28%] border border-[#262626] filter grayscale contrast-110 shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {t.bento.card1.title}
                    </h3>
                    <p className="text-xs text-[#A3A3A3] mt-0.5">
                      {t.bento.card1.authorRole || 'Made Candra Susanta'} — {t.bento.card1.education}
                    </p>
                  </div>
                </div>

                {/* Afiliasi Kepramukaan (Clean Left Border Callout instead of Nested Box with Pulsing Dot) */}
                {t.bento.card1.organization && (
                  <div className="mb-5 pl-3.5 border-l-2 border-[#10B981] py-0.5">
                    <div className="text-xs font-semibold text-white">
                      {t.bento.card1.organization}
                    </div>
                    <div className="text-xs text-[#8A8A8A] mt-0.5">
                      {t.bento.card1.period}
                    </div>
                  </div>
                )}

                <p className="text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  {t.bento.card1.body}
                </p>
              </div>

              {/* Clean Footer Process Row */}
              <div className="border-t border-[#262626] pt-4 text-xs text-[#8A8A8A] flex flex-wrap items-center gap-1.5">
                <span className="text-white font-semibold mr-1">{t.bento.card1.methodLabel}</span>
                {t.bento.card1.methodSteps.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[#EDEDED]">{step}</span>
                    {idx < t.bento.card1.methodSteps.length - 1 && (
                      <span className="text-[#10B981] px-0.5">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Card 2: Fokus Kompetensi & Modul yang Diteliti */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card2.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-5">
                  {t.bento.card2.title}
                </h3>

                {/* Modul & Lingkup Materi (Clickable to Materi Modals) */}
                <div className="divide-y divide-[#222222] border-y border-[#222222] mb-6">
                  {t.bento.card2.skills.map((skill, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSkillModuleClick(idx)}
                      className="w-full text-left py-3.5 px-2 hover:bg-[#1A1A1A] flex items-center justify-between gap-3 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-xs font-mono font-bold text-[#10B981] shrink-0">
                          0{idx + 1}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#10B981] transition-colors leading-tight truncate">
                            {skill.name}
                          </p>
                          <p className="text-[11px] text-[#8A8A8A] mt-0.5">{skill.category || 'Materi Inti'}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#8A8A8A] group-hover:text-white shrink-0 flex items-center gap-1 transition-colors">
                        <span>{skill.status || 'Buka'}</span>
                        <span>→</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-[#8A8A8A]">
                {t.bento.card2.footer}
              </div>
            </div>
          </div>

          {/* DOKUMENTASI KEGIATAN PRAMUKA BERPOTENSI CEDERA */}
          <ScoutRiskCards lang={lang} onNavigate={onNavigate} />

          {/* Row 2 Grid: Prinsip Kerja & Komitmen Peneliti */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {/* Card 3: Prinsip & Integritas */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card3.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-5">
                  {t.bento.card3.title}
                </h3>

                <div className="space-y-4 mb-6">
                  {t.bento.card3.habits.map((habit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-[#10B981] shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-xs sm:text-[13px] leading-relaxed text-[#A3A3A3]">
                        <strong className="text-white font-semibold">{habit.bold}</strong> — {habit.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#262626] pt-4 text-xs text-[#8A8A8A]">
                <span>{t.bento.card3.footerLabel}</span>
                <span className="font-medium text-[#EDEDED]">
                  {t.bento.card3.footerBadge}
                </span>
              </div>
            </div>

            {/* Card 4: Komitmen Peneliti (Clean without Giant Watermark Quote) */}
            <div className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#333333] transition-colors">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#8A8A8A] uppercase">
                    {t.bento.card4.tag}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg font-medium text-[#EDEDED] leading-relaxed mt-2 mb-6 pl-4 border-l-2 border-[#10B981]">
                  {t.bento.card4.quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#262626]">
                <img
                  src={profileImg}
                  alt="Made Candra Susanta"
                  className="w-10 h-10 rounded-full object-cover object-[center_28%] border border-[#333333] filter grayscale contrast-110"
                />
                <div>
                  <div className="text-sm font-bold text-white">{t.bento.card4.author}</div>
                  <div className="text-xs text-[#8A8A8A]">{t.bento.card4.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. PILAR FILOSOFIS (3 PRINSIP FUNDAMENTAL - KONSISTEN TANPA SAAS PRICING CARD) */}
        {/* ========================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 border-t border-[#222222]">
          <div className="mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
              {t.pillars.eyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-white tracking-[-0.02em]">
              {t.pillars.sectionTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            {/* Pilar 1 */}
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
                onClick={() => navigateTo('Materi', { modal: 'konsep' })}
                className="w-full bg-[#1c1b1b] hover:bg-[#262626] border border-[#262626] text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {t.pillars.pilar1.btn}
              </button>
            </div>

            {/* Pilar 2: Konsisten Dark Card dengan Aksen Emerald Halus */}
            <div className="bg-[#141414] border border-[#10B981]/35 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#10B981]/60 transition-colors">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-3">
                  {t.pillars.pilar2.tag}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{t.pillars.pilar2.title}</h3>
                <p className="text-sm text-[#8A8A8A] leading-relaxed mb-6">
                  {t.pillars.pilar2.desc}
                </p>

                <div className="space-y-3 mb-8">
                  {t.pillars.pilar2.checks.map((check, idx) => (
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
                onClick={() => navigateTo('Materi')}
                className="w-full bg-white hover:bg-[#E5E5E5] text-[#0A0A0A] text-xs sm:text-sm font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {t.pillars.pilar2.btn}
              </button>
            </div>

            {/* Pilar 3 */}
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
                onClick={() => navigateTo('Materi', { modal: 'cedera', topicId: 'luka-lecet' })}
                className="w-full bg-[#1c1b1b] hover:bg-[#262626] border border-[#262626] text-white text-xs sm:text-sm font-medium py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                {t.pillars.pilar3.btn}
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FAQ ACCORDION (TANYA JAWAB & TRANSPARANSI RISET) */}
        {/* ========================================================= */}
        <section id="faq-riset" className="max-w-[860px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-wider text-[#10B981] uppercase block mb-2">
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
        {/* 7. CTA INITIATION SECTION */}
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
      {/* 8. FOOTER */}
      {/* ========================================================= */}
      <footer className="relative z-20 w-full border-t border-[#262626] bg-[#0E0E0E] py-8 mt-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A8A8A]">
          <div>
            {t.footer.copy}
          </div>
          <div className="flex items-center gap-6 font-medium">
            <button
              type="button"
              onClick={() => scrollToSection('profil-peneliti')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'id' ? 'Profil Peneliti' : 'Researcher Profile'}
            </button>
            <button
              type="button"
              onClick={() => navigateTo('Materi')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.links.materi}
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('faq-riset')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'id' ? 'Tanya Jawab' : 'FAQ'}
            </button>
            <a href="mailto:candra.susanta@gmail.com" className="hover:text-white transition-colors">
              {t.footer.links.email}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
