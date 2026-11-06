import React, { useState, useEffect, useMemo } from 'react';

export function KonsepPrinsipModal({ isOpen, onClose, data, lang = 'id' }) {
  const [zoomedImg, setZoomedImg] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImg) setZoomedImg(null);
        else onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, zoomedImg, onClose]);

  if (!isOpen || !data) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-[#2a2a2a] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#262626] bg-[#161616] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded-full">
                {lang === 'id' ? 'MODUL KONSEP & PRINSIP DASAR' : 'CORE CONCEPTS & PRINCIPLES'}
              </span>
              {data.sitasiBadges.map((sitasi, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono text-[#c4c7c8] bg-[#1c1b1b] border border-[#2e2e2e] px-2 py-0.5 rounded"
                >
                  {sitasi}
                </span>
              ))}
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white leading-snug">
              {data.judulModal}
            </h2>
            <p className="text-xs text-[#8A8A8A] mt-1">{data.subjudulModal}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#1c1b1b] hover:bg-[#2a2a2a] border border-[#333333] text-xs font-semibold text-[#EDEDED] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>✕</span>
            <span className="hidden sm:inline">{lang === 'id' ? 'Tutup' : 'Close'}</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          data-lenis-prevent
          className="p-4 sm:p-6 overflow-y-auto space-y-8 text-[#EDEDED]"
        >
          {/* 1. Pengertian P3K */}
          <section className="bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3">
              {data.pengertianJudul}
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
              {data.pengertianParagraf.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </section>

          {/* 2. Galeri 6 Foto Kegiatan Pramuka */}
          <section>
            <div className="flex items-center justify-between gap-2 mb-3">
              <h3 className="text-sm sm:text-base font-bold text-white">
                {data.galeriJudul}
              </h3>
              <span className="text-[11px] text-[#8A8A8A]">
                {lang === 'id' ? 'Klik foto untuk memperbesar' : 'Click photo to enlarge'}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {data.galeriLapangan.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setZoomedImg(item)}
                  className="group relative rounded-xl overflow-hidden border border-[#262626] bg-[#181818] aspect-[16/10] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent flex items-end p-2.5">
                    <span className="text-[11px] font-medium text-white leading-tight">
                      {item.caption}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Tujuan dan Manfaat P3K */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-base font-bold text-white">
                  {data.tujuanManfaat.judul}
                </h3>
                <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2 py-0.5 rounded">
                  Lubis et al., 2024
                </span>
              </div>
              <p className="text-xs text-[#8A8A8A] mb-3.5">
                {data.tujuanManfaat.pengantarTujuan}
              </p>
              <div className="space-y-2.5">
                {data.tujuanManfaat.tujuanList.map((tujuan, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-[#1c1b1b] border border-[#262626] rounded-lg p-2.5 text-xs text-[#EDEDED]"
                  >
                    <span className="text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-1.5 py-0.5 rounded shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="leading-relaxed">{tujuan}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">
                    {lang === 'id' ? 'Manfaat Kompetensi P3K' : 'Benefits of First Aid Competence'}
                  </span>
                  <span className="text-[10px] font-mono text-[#c4c7c8] bg-[#1c1b1b] border border-[#2e2e2e] px-2 py-0.5 rounded">
                    Setyaningsih et al., 2024
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                  {data.tujuanManfaat.manfaatParagraf}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#262626] flex items-center justify-between text-[11px] text-[#8A8A8A]">
                <span>{lang === 'id' ? 'Fokus Kesiapsiagaan' : 'Preparedness Focus'}</span>
                <span className="text-white font-semibold">
                  {lang === 'id' ? 'Pelajar & Organisasi Pramuka' : 'Students & Scout Organizations'}
                </span>
              </div>
            </div>
          </section>

          {/* 4. 7 Prinsip Dasar Penanganan Kecelakaan */}
          <section className="bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-bold text-white">
                {data.prinsipDasarJudul}
              </h3>
              <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded">
                7 Prinsip • Lubis, Hasibuan & Raudhatul (2024)
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#8A8A8A] leading-relaxed mb-4">
              {data.prinsipDasarPengantar}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.prinsipDasar.map((item) => (
                <div
                  key={item.no}
                  className={`rounded-xl p-3.5 border transition-colors ${
                    item.isHighlight
                      ? 'bg-[#1c1b1b] border-[#10B981]/40'
                      : 'bg-[#141414] border-[#262626]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-1.5 py-0.5 rounded">
                        {item.no}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white">
                        {item.judul}
                      </h4>
                    </div>
                    {item.isHighlight && (
                      <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded">
                        {lang === 'id' ? 'Prioritas Utama' : 'Key Priority'}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#c4c7c8] leading-relaxed">
                    {item.deskripsi}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Lightbox Zoom Image */}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomedImg(null)}
        >
          <div className="max-w-3xl w-full flex flex-col items-center">
            <img
              src={zoomedImg.src}
              alt={zoomedImg.caption}
              className="max-h-[80vh] w-auto rounded-xl border border-[#333333] shadow-2xl"
            />
            <p className="text-xs sm:text-sm text-white mt-3 font-medium">
              {zoomedImg.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function PeralatanP3KModal({ isOpen, onClose, data, lang = 'id' }) {
  const [search, setSearch] = useState('');
  const [filterHighlight, setFilterHighlight] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const filteredItems = useMemo(() => {
    if (!data) return [];
    return data.items.filter((item) => {
      const matchQuery =
        item.namaAlat.toLowerCase().includes(search.toLowerCase()) ||
        item.fungsi.toLowerCase().includes(search.toLowerCase());
      const matchHighlight = filterHighlight ? item.isTagPreview : true;
      return matchQuery && matchHighlight;
    });
  }, [data, search, filterHighlight]);

  if (!isOpen || !data) return null;

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-[#2a2a2a] rounded-2xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#262626] bg-[#161616] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-2.5 py-0.5 rounded-full">
                {lang === 'id' ? 'STANDARISASI 18 ALAT P3K' : '18 STANDARD FIRST AID ITEMS'}
              </span>
              <span className="text-[10px] font-mono text-[#c4c7c8] bg-[#1c1b1b] border border-[#2e2e2e] px-2 py-0.5 rounded">
                {lang === 'id' ? 'Inventaris Medis Pramuka' : 'Scout Medical Inventory'}
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white leading-snug">
              {data.judulModal}
            </h2>
            <p className="text-xs text-[#8A8A8A] mt-1">{data.subjudulModal}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#1c1b1b] hover:bg-[#2a2a2a] border border-[#333333] text-xs font-semibold text-[#EDEDED] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>✕</span>
            <span className="hidden sm:inline">{lang === 'id' ? 'Tutup' : 'Close'}</span>
          </button>
        </div>

        {/* Content */}
        <div
          data-lenis-prevent
          className="p-4 sm:p-6 overflow-y-auto space-y-6 text-[#EDEDED]"
        >
          {/* Top Overview Box with Image */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5 items-center">
            <div className="md:col-span-5 rounded-xl overflow-hidden border border-[#262626] bg-[#0e0e0e] flex items-center justify-center p-3">
              <img
                src={data.gambarKotak}
                alt={data.judulModal}
                className="max-h-52 w-auto object-contain rounded-lg"
              />
            </div>
            <div className="md:col-span-7 space-y-3">
              <div className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                {lang === 'id'
                  ? 'Fungsi & Ketersediaan Kotak P3K Lapangan'
                  : 'Function & Availability of Field First Aid Kits'}
              </div>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                {data.deskripsiKotak}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="text-[11px] bg-[#1c1b1b] border border-[#262626] px-2.5 py-1 rounded text-[#EDEDED]">
                  ✓ {lang === 'id' ? '18 Jenis Peralatan Standar' : '18 Standard Equipment Types'}
                </span>
                <span className="text-[11px] bg-[#1c1b1b] border border-[#262626] px-2.5 py-1 rounded text-[#EDEDED]">
                  ✓ {lang === 'id' ? 'Sekolah & Kegiatan Luar Ruangan' : 'School & Outdoor Activities'}
                </span>
              </div>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={data.searchPlaceholder}
                className="w-full bg-[#161616] border border-[#2a2a2a] focus:border-[#10B981] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#8A8A8A] outline-none transition-colors"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8A8A8A] hover:text-white cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setFilterHighlight(false)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                  !filterHighlight
                    ? 'bg-white text-black border-white'
                    : 'bg-[#161616] text-[#8A8A8A] border-[#262626] hover:text-white'
                }`}
              >
                {lang === 'id' ? `Semua (${data.items.length})` : `All (${data.items.length})`}
              </button>
              <button
                type="button"
                onClick={() => setFilterHighlight(true)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors cursor-pointer ${
                  filterHighlight
                    ? 'bg-[#10B981] text-black border-[#10B981]'
                    : 'bg-[#161616] text-[#8A8A8A] border-[#262626] hover:text-white'
                }`}
              >
                {lang === 'id' ? 'Alat Utama (7)' : 'Core Highlight (7)'}
              </button>
            </div>
          </div>

          {/* Table of 18 Equipment Items */}
          <div className="border border-[#262626] rounded-xl overflow-hidden bg-[#141414]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1c1b1b] border-b border-[#262626] text-[11px] font-mono uppercase text-[#8A8A8A]">
                    <th className="py-3 px-4 w-14">{data.kolomNo}</th>
                    <th className="py-3 px-4 w-64">{data.kolomNama}</th>
                    <th className="py-3 px-4">{data.kolomFungsi}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222222] text-xs sm:text-sm">
                  {filteredItems.map((item) => (
                    <tr
                      key={item.no}
                      className="hover:bg-[#1a1a1a] transition-colors"
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-[#10B981]">
                        {String(item.no).padStart(2, '0')}.
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-white">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span>{item.namaAlat}</span>
                          {item.isTagPreview && (
                            <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-1.5 py-0.5 rounded">
                              {lang === 'id' ? 'Utama' : 'Core'}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-[#c4c7c8] leading-relaxed">
                        {item.fungsi}
                      </td>
                    </tr>
                  ))}
                  {filteredItems.length === 0 && (
                    <tr>
                      <td colSpan={3} className="py-8 text-center text-xs text-[#8A8A8A]">
                        {lang === 'id'
                          ? 'Tidak ada peralatan yang cocok dengan kata kunci pencarian.'
                          : 'No equipment matches your search query.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function KatalogCederaModal({
  isOpen,
  onClose,
  items = [],
  initialTopicId = 'luka-lecet',
  lang = 'id',
}) {
  const [activeId, setActiveId] = useState(initialTopicId || 'luka-lecet');
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    if (initialTopicId) {
      setActiveId(initialTopicId);
    }
  }, [initialTopicId]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (zoomedImage) setZoomedImage(null);
        else onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, zoomedImage, onClose]);

  const filteredTopics = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        item.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.kategoriBento.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLevel =
        levelFilter === 'all' ? true : item.levelKeparahan === levelFilter;
      return matchesSearch && matchesLevel;
    });
  }, [items, searchQuery, levelFilter]);

  const activeTopic = useMemo(() => {
    return items.find((t) => t.id === activeId) || items[0];
  }, [items, activeId]);

  const currentIndex = items.findIndex((t) => t.id === activeTopic?.id);
  const prevTopic = currentIndex > 0 ? items[currentIndex - 1] : null;
  const nextTopic =
    currentIndex >= 0 && currentIndex < items.length - 1
      ? items[currentIndex + 1]
      : null;

  if (!isOpen || !activeTopic) return null;

  const getSeverityBadgeStyle = (level) => {
    if (level === 'kritis') {
      return 'text-[#EF4444] bg-[#EF4444]/10 border-[#EF4444]/30';
    }
    if (level === 'sedang') {
      return 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30';
    }
    return 'text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30';
  };

  const getSeverityDotColor = (level) => {
    if (level === 'kritis') return '#EF4444';
    if (level === 'sedang') return '#F59E0B';
    return '#10B981';
  };

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#121212] border border-[#2a2a2a] rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header matching Section 4 Wireframe */}
        <div className="p-4 sm:px-6 sm:py-4 border-b border-[#262626] bg-[#161616] flex items-start justify-between gap-4 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-[#1c1b1b] border border-[#333333] px-2.5 py-0.5 rounded">
                {activeTopic.kategoriBento}
              </span>
              <span
                className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${getSeverityBadgeStyle(
                  activeTopic.levelKeparahan
                )}`}
              >
                {activeTopic.levelLabel}
              </span>
              <span className="text-[11px] font-mono text-[#8A8A8A]">
                {lang === 'id' ? 'Referensi:' : 'Reference:'}{' '}
                <strong className="text-[#EDEDED]">{activeTopic.referensi}</strong>
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white leading-tight">
              {activeTopic.judul}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-[#1c1b1b] hover:bg-[#2a2a2a] border border-[#333333] text-xs font-semibold text-[#EDEDED] flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>✕</span>
            <span>{lang === 'id' ? 'Tutup' : 'Close'}</span>
          </button>
        </div>

        {/* Body: Left Navigation Sidebar + Right Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-0 overflow-hidden">
          {/* Sidebar Navigasi */}
          <aside className="lg:w-72 border-b lg:border-b-0 lg:border-r border-[#262626] bg-[#141414] flex flex-col shrink-0">
            {/* Search & Severity Filter */}
            <div className="p-3 border-b border-[#222222] space-y-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'id' ? 'Cari topik cedera...' : 'Search injury topic...'
                }
                className="w-full bg-[#1c1b1b] border border-[#2a2a2a] focus:border-[#10B981] rounded-lg px-3 py-1.5 text-xs text-white placeholder-[#8A8A8A] outline-none"
              />
              <div className="flex items-center gap-1 text-[10px] font-semibold">
                {[
                  { id: 'all', label: lang === 'id' ? 'Semua' : 'All' },
                  { id: 'ringan', label: lang === 'id' ? 'Ringan' : 'Minor' },
                  { id: 'sedang', label: lang === 'id' ? 'Sedang' : 'Moderate' },
                  { id: 'kritis', label: lang === 'id' ? 'Kritis' : 'Critical' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setLevelFilter(tab.id)}
                    className={`flex-1 py-1 rounded transition-colors cursor-pointer ${
                      levelFilter === tab.id
                        ? 'bg-[#2a2a2a] text-white border border-[#3a3a3a]'
                        : 'text-[#8A8A8A] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Topic List (Horizontal scroll on mobile, vertical scroll on desktop) */}
            <div
              data-lenis-prevent
              className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto p-2 gap-1.5 lg:flex-1"
            >
              {filteredTopics.map((item) => {
                const isSelected = item.id === activeTopic.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs transition-all shrink-0 lg:shrink cursor-pointer ${
                      isSelected
                        ? 'bg-white text-[#0A0A0A] font-bold shadow-md'
                        : 'text-[#c4c7c8] hover:bg-[#1c1b1b] hover:text-white'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{
                        backgroundColor: getSeverityDotColor(item.levelKeparahan),
                      }}
                    ></span>
                    <span className="truncate">{item.judul}</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Main Detail Panel */}
          <div
            data-lenis-prevent
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6"
          >
            {/* Top Box: Image Illustration from .docx + Definition */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5 items-center">
              <div
                onClick={() =>
                  setZoomedImage({
                    src: activeTopic.gambarIlustrasi,
                    title: activeTopic.judul,
                  })
                }
                className="md:col-span-5 bg-[#0e0e0e] border border-[#262626] rounded-xl p-3 flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
              >
                <img
                  src={activeTopic.gambarIlustrasi}
                  alt={activeTopic.judul}
                  className="max-h-56 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-[11px] text-[#8A8A8A] mt-2">
                  {lang === 'id'
                    ? 'Klik ilustrasi untuk memperbesar'
                    : 'Click illustration to enlarge'}
                </span>
              </div>

              <div className="md:col-span-7 space-y-3">
                <div className="text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                  {lang === 'id'
                    ? 'Definisi Klinis & Konteks Kepramukaan'
                    : 'Clinical Definition & Scouting Context'}
                </div>
                <p className="text-xs sm:text-sm text-[#EDEDED] leading-relaxed">
                  {activeTopic.definisi}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-[#8A8A8A]">
                  <span className="bg-[#1c1b1b] border border-[#262626] px-2.5 py-1 rounded">
                    {lang === 'id' ? 'Sumber:' : 'Source:'} {activeTopic.referensi}
                  </span>
                  <span className="bg-[#1c1b1b] border border-[#262626] px-2.5 py-1 rounded">
                    {activeTopic.kategoriBento}
                  </span>
                </div>
              </div>
            </div>

            {/* 2-Column Grid: (!) TANDA & GEJALA and (+) LANGKAH PERTOLONGAN */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              {/* Left Box: (!) TANDA & GEJALA */}
              <div className="md:col-span-5 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F59E0B] uppercase tracking-wider mb-3.5 pb-2.5 border-b border-[#262626]">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#F59E0B]/15 text-[#F59E0B] font-mono text-xs">
                    !
                  </span>
                  <span>
                    {lang === 'id' ? 'TANDA & GEJALA KLINIS' : 'CLINICAL SIGNS & SYMPTOMS'}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {activeTopic.tandaGejala.map((gejala, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c4c7c8] leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-2 shrink-0"></span>
                      <span>{gejala}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Box: (+) LANGKAH PERTOLONGAN PERTAMA */}
              <div className="md:col-span-7 bg-[#161616] border border-[#262626] rounded-xl p-4 sm:p-5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#10B981] uppercase tracking-wider mb-3.5 pb-2.5 border-b border-[#262626]">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#10B981]/15 text-[#10B981] font-mono text-xs">
                    +
                  </span>
                  <span>
                    {lang === 'id'
                      ? 'LANGKAH-LANGKAH PERTOLONGAN PERTAMA'
                      : 'FIRST AID PROCEDURE STEPS'}
                  </span>
                </div>
                <ol className="space-y-2.5">
                  {activeTopic.langkahPenanganan.map((langkah, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 bg-[#1c1b1b] border border-[#242424] rounded-lg p-2.5 text-xs sm:text-sm text-[#EDEDED] leading-relaxed"
                    >
                      <span className="text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 px-1.5 py-0.5 rounded shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span>{langkah}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Red Alert Callout Box: [!] PERINGATAN / LARANGAN KRITIS (DO NOT) */}
            {activeTopic.peringatanLarangan &&
              activeTopic.peringatanLarangan.length > 0 && (
                <div className="bg-[#EF4444]/10 border border-[#EF4444]/35 rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#EF4444] uppercase tracking-wider mb-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-[#EF4444]/20 text-[#EF4444] font-mono text-xs">
                      !
                    </span>
                    <span>
                      {lang === 'id'
                        ? 'PERINGATAN / LARANGAN KRITIS (DO NOT):'
                        : 'CRITICAL WARNINGS / PROHIBITED ACTIONS (DO NOT):'}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {activeTopic.peringatanLarangan.map((larangan, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FCA5A5] font-medium leading-relaxed"
                      >
                        <span className="text-[#EF4444] font-bold shrink-0">✕</span>
                        <span>{larangan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Prev / Next Topic Navigation Footer */}
            <div className="flex items-center justify-between gap-3 pt-4 border-t border-[#262626]">
              {prevTopic ? (
                <button
                  type="button"
                  onClick={() => setActiveId(prevTopic.id)}
                  className="px-3.5 py-2 rounded-lg bg-[#1c1b1b] hover:bg-[#252525] border border-[#2a2a2a] text-xs text-[#EDEDED] flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>←</span>
                  <span className="truncate max-w-[180px] sm:max-w-xs">
                    {prevTopic.judul}
                  </span>
                </button>
              ) : (
                <div></div>
              )}

              {nextTopic && (
                <button
                  type="button"
                  onClick={() => setActiveId(nextTopic.id)}
                  className="px-3.5 py-2 rounded-lg bg-white hover:bg-[#e5e5e5] text-[#0A0A0A] font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span className="truncate max-w-[180px] sm:max-w-xs">
                    {nextTopic.judul}
                  </span>
                  <span>→</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Zoomed Illustration Lightbox */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div className="max-w-2xl w-full flex flex-col items-center">
            <img
              src={zoomedImage.src}
              alt={zoomedImage.title}
              className="max-h-[80vh] w-auto rounded-xl border border-[#333333] bg-[#141414] p-2 shadow-2xl"
            />
            <p className="text-xs sm:text-sm text-white mt-3 font-medium">
              {zoomedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

