import React from 'react';

export default function PageSkeleton({ targetPage = 'Home' }) {
  const isMateri = targetPage === 'Materi';

  return (
    <div className="min-h-screen bg-[#131313] text-[#EDEDED] font-sans overflow-x-hidden">
      {/* 1. TOP STICKY NAVBAR SKELETON */}
      <header className="sticky top-0 z-50 w-full bg-[#131313]/90 backdrop-blur-md border-b border-[#262626]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded skeleton-shimmer"></div>
            <div className="w-36 h-3.5 rounded skeleton-shimmer"></div>
          </div>

          {/* Segmented Control */}
          <div className="flex items-center bg-[#1c1b1b] border border-[#262626] rounded-full p-1 gap-1">
            <div
              className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
                !isMateri
                  ? 'bg-[#2a2a2a] text-white/50 border border-[#3a3939]'
                  : 'text-[#555]'
              }`}
            >
              Home
            </div>
            <div
              className={`px-4 py-1 rounded-full text-xs font-medium transition-all ${
                isMateri
                  ? 'bg-[#2a2a2a] text-white/50 border border-[#3a3939]'
                  : 'text-[#555]'
              }`}
            >
              Materi
            </div>
          </div>

          {/* Actions Right (Language Dropdown Skeleton) */}
          <div className="flex items-center gap-2.5">
            <div className="w-24 sm:w-36 h-8 rounded-full skeleton-shimmer"></div>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* 2. HERO SKELETON */}
        <section className="pt-12 sm:pt-16 md:pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Eyebrow */}
              <div className="w-56 sm:w-72 h-6 rounded-full skeleton-shimmer mb-5"></div>

              {/* H1 Heading lines */}
              <div className="space-y-3 mb-6">
                <div className="w-full h-9 sm:h-11 rounded-lg skeleton-shimmer"></div>
                <div className="w-11/12 h-9 sm:h-11 rounded-lg skeleton-shimmer"></div>
                <div className="w-4/5 h-9 sm:h-11 rounded-lg skeleton-shimmer"></div>
              </div>

              {/* Subtitle lines */}
              <div className="space-y-2.5 mb-8 max-w-xl">
                <div className="w-full h-4 rounded skeleton-shimmer"></div>
                <div className="w-11/12 h-4 rounded skeleton-shimmer"></div>
                <div className="w-3/4 h-4 rounded skeleton-shimmer"></div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <div className="w-full sm:w-52 h-11 rounded-lg skeleton-shimmer"></div>
                <div className="w-full sm:w-56 h-11 rounded-lg skeleton-shimmer"></div>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-36 h-4 rounded-full skeleton-shimmer"></div>
                <div className="w-36 h-4 rounded-full skeleton-shimmer"></div>
                <div className="w-36 h-4 rounded-full skeleton-shimmer"></div>
              </div>
            </div>

            {/* Right Card Viewport */}
            <div className="lg:col-span-5">
              <div className="bg-[#141414] border border-[#262626] rounded-2xl p-4 sm:p-5 shadow-2xl">
                {/* Media Screen Area */}
                <div className="rounded-xl overflow-hidden aspect-square skeleton-shimmer relative flex items-end justify-center p-4">
                  <div className="w-48 h-6 rounded-full bg-[#141414]/80 backdrop-blur-sm"></div>
                </div>

                {/* Subpanel */}
                <div className="mt-4 bg-[#1c1b1b] border border-[#262626] rounded-xl p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="w-24 h-3.5 rounded skeleton-shimmer"></div>
                    <div className="w-20 h-5 rounded-full skeleton-shimmer"></div>
                  </div>
                  <div className="h-12 rounded-lg bg-[#141414] border border-[#262626] p-2 flex flex-col justify-center gap-1.5">
                    <div className="w-28 h-2.5 rounded skeleton-shimmer"></div>
                    <div className="w-40 h-3.5 rounded skeleton-shimmer"></div>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <div className="space-y-1.5">
                      <div className="w-32 h-3.5 rounded skeleton-shimmer"></div>
                      <div className="w-24 h-2.5 rounded skeleton-shimmer"></div>
                    </div>
                    <div className="w-16 h-8 rounded skeleton-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MARQUEE STRIP SKELETON */}
        <section className="w-full border-y border-[#262626] bg-[#0E0E0E] py-4 my-4 overflow-hidden">
          <div className="flex items-center justify-around gap-6 opacity-40">
            <div className="w-44 h-4 rounded skeleton-shimmer"></div>
            <div className="w-48 h-4 rounded skeleton-shimmer"></div>
            <div className="w-40 h-4 rounded skeleton-shimmer"></div>
            <div className="w-52 h-4 rounded skeleton-shimmer"></div>
          </div>
        </section>

        {/* 4. BENTO GRID SKELETON */}
        <section className="py-16">
          <div className="mb-10 space-y-2">
            <div className="w-40 h-3.5 rounded skeleton-shimmer"></div>
            <div className="w-72 sm:w-96 h-8 rounded-lg skeleton-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
            {/* Bento Card 1 */}
            <div className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <div className="w-32 h-3.5 rounded skeleton-shimmer"></div>
                <div className="w-5 h-5 rounded skeleton-shimmer"></div>
              </div>
              <div className="w-3/4 h-6 rounded skeleton-shimmer"></div>
              <div className="space-y-2">
                <div className="w-full h-3.5 rounded skeleton-shimmer"></div>
                <div className="w-11/12 h-3.5 rounded skeleton-shimmer"></div>
                <div className="w-4/5 h-3.5 rounded skeleton-shimmer"></div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="h-16 rounded-xl skeleton-shimmer"></div>
                <div className="h-16 rounded-xl skeleton-shimmer"></div>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="lg:col-span-5 bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-4">
              <div className="flex justify-between">
                <div className="w-32 h-3.5 rounded skeleton-shimmer"></div>
                <div className="w-5 h-5 rounded skeleton-shimmer"></div>
              </div>
              <div className="w-3/4 h-6 rounded skeleton-shimmer"></div>
              <div className="space-y-3 pt-2">
                <div className="w-full h-5 rounded skeleton-shimmer"></div>
                <div className="w-full h-5 rounded skeleton-shimmer"></div>
                <div className="w-full h-5 rounded skeleton-shimmer"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. STATS SUMMARY SKELETON */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#141414] border border-[#262626] rounded-2xl p-6 space-y-3">
                <div className="flex justify-between">
                  <div className="w-32 h-3.5 rounded skeleton-shimmer"></div>
                  <div className="w-4 h-4 rounded skeleton-shimmer"></div>
                </div>
                <div className="w-24 h-9 rounded-lg skeleton-shimmer"></div>
                <div className="w-48 h-3.5 rounded skeleton-shimmer"></div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PILLARS / LEVEL CARDS SKELETON */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-7 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-24 h-3.5 rounded skeleton-shimmer"></div>
                  <div className="w-48 h-6 rounded skeleton-shimmer"></div>
                  <div className="w-full h-12 rounded skeleton-shimmer"></div>
                  <div className="space-y-2 pt-2">
                    <div className="w-4/5 h-3.5 rounded skeleton-shimmer"></div>
                    <div className="w-3/4 h-3.5 rounded skeleton-shimmer"></div>
                    <div className="w-2/3 h-3.5 rounded skeleton-shimmer"></div>
                  </div>
                </div>
                <div className="w-full h-11 rounded-lg skeleton-shimmer mt-6"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
