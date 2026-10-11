import LanguageDropdown from './LanguageDropdown';
import { translations } from '../locales/translations';

export default function Navbar({
  currentPage = 'Home',
  onNavigate,
  lang = 'id',
  onLanguageChange,
  extraActions = null,
}) {
  const currentTranslations = translations[lang] || translations.id;
  const navT = currentTranslations.nav;

  const handleNav = (target) => {
    if (target === currentPage) {
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    if (onNavigate) {
      onNavigate(target);
    } else {
      if (typeof window !== 'undefined') {
        window.location.href = target === 'Home' ? '/' : '/Materi';
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#131313]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Left */}
        <div
          onClick={() => handleNav('Home')}
          className="flex items-center gap-1.5 sm:gap-2 shrink-0 cursor-pointer hover:opacity-85 transition-opacity py-1 select-none"
        >
          <svg
            className="w-4 h-4 text-white shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
          </svg>
          {/* Label adaptif: Ringkas di HP sempit, penuh di iPad & Desktop */}
          <span className="text-xs sm:text-[13px] font-semibold tracking-wider text-white hidden md:inline">
            {navT.profile}
          </span>
          <span className="text-xs font-semibold tracking-wider text-white hidden sm:inline md:hidden">
            ARYA PRATAMA
          </span>
          <span className="text-[11px] xs:text-xs font-semibold tracking-wider text-white sm:hidden">
            ARYA P.
          </span>
        </div>

        {/* Segmented Center Navigation (Terlihat dan responsif di Mobile, iPad, dan Desktop) */}
        <nav
          aria-label="Navigasi Halaman"
          className="flex items-center bg-[#1c1b1b] border border-[#262626] rounded-full p-0.5 sm:p-1 shadow-inner shrink-0"
        >
          <button
            type="button"
            onClick={() => handleNav('Home')}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-[13px] font-medium rounded-full transition-all cursor-pointer ${
              currentPage === 'Home'
                ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939] font-semibold'
                : 'text-[#8A8A8A] hover:text-[#EDEDED]'
            }`}
          >
            {navT.home}
          </button>
          <button
            type="button"
            onClick={() => handleNav('Materi')}
            className={`px-3 sm:px-4 py-1 text-xs sm:text-[13px] font-medium rounded-full transition-all cursor-pointer ${
              currentPage === 'Materi'
                ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939] font-semibold'
                : 'text-[#8A8A8A] hover:text-[#EDEDED]'
            }`}
          >
            {navT.materi}
          </button>
        </nav>

        {/* Right Header Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {extraActions}
          <LanguageDropdown
            currentLang={lang}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>
    </header>
  );
}
