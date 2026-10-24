import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all 6 user provided image assets
import img4433 from '../assets/IMG_4433.PNG'; // 01. Merayap lumpur & rintangan kawat
import img4442 from '../assets/IMG_4442.PNG'; // 02. Tanggul irigasi beton licin tanpa alas kaki
import img4449 from '../assets/IMG_4449.PNG'; // 03. Tiarap rumput halang rintang di mulut
import img4443 from '../assets/IMG_4443.PNG'; // 04. Pematang sawah & parit tebing batu
import img4440 from '../assets/IMG_4440.PNG'; // 05. Long march jalan terbuka beban berat
import img4446 from '../assets/IMG_4446.PNG'; // 06. Orientasi lapangan terik matahari

export default function ScoutRiskCards({ lang = 'id', onNavigate }) {
  const isEn = lang === 'en';

  // State for fullscreen lightbox modal (holds active card index 0..5 or null)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const cardsData = [
    {
      id: 1,
      image: img4433,
      tag: isEn ? 'FIELD CASE 01 • WATER & MUD OBSTACLE' : 'KASUS LAPANGAN 01 • RINTANGAN AIR & LUMPUR',
      severity: isEn ? 'HIGH RISK' : 'RISIKO TINGGI',
      severityColor: 'text-rose-400 bg-rose-500/10 border-rose-500/30',
      title: isEn
        ? 'Crawling in Murky Muddy Waters & Low Wire Obstacles'
        : 'Merayap di Kubangan Lumpur Berair & Rintangan Kawat',
      desc: isEn
        ? 'High-intensity physical endurance test crawling through murky muddy water under narrow low cables and ropes.'
        : 'Latihan ketahanan fisik merayap di kubangan air berlumpur keruh di bawah bentangan tali kawat sempit dengan intensitas fisik tinggi.',
      risks: isEn
        ? [
            {
              title: 'Laceration & Sharp Object Trauma',
              detail: 'Cuts from hidden rocks, sharp debris, or barbed wire submerged in mud.',
            },
            {
              title: 'Open Wound Contamination',
              detail: 'High bacterial load and soil microbes triggering acute infection and tetanus risks.',
            },
            {
              title: 'Mud Water Aspiration & Hypothermia',
              detail: 'Involuntary inhalation of muddy water and severe muscle cramps from cold water immersion.',
            },
          ]
        : [
            {
              title: 'Luka Robek & Trauma Benda Tajam',
              detail: 'Gesekan kawat tali atau benturan bebatuan tajam tersembunyi di dasar lumpur.',
            },
            {
              title: 'Kontaminasi Infeksi Luka Terbuka',
              detail: 'Mikroorganisme tanah dan air keruh berpotensi memicu infeksi akut serta tetanus.',
            },
            {
              title: 'Aspirasi Lumpur & Hipotermia',
              detail: 'Risiko air lumpur terhirup ke jalan napas serta kram otot akibat dingin berdurasi panjang.',
            },
          ],
      p3kProtocol: isEn
        ? 'Sterile Saline (NaCl) wound irrigation, antiseptic dressing, sterile bandaging & respiratory check.'
        : 'Irigasi luka dengan NaCl steril, pembersihan antiseptik, kassa steril, serta pemantauan ventilasi napas.',
      moduleTag: isEn ? 'Wound Care & Trauma Module' : 'Modul Asuhan Luka & Kedaruratan Trauma',
    },
    {
      id: 2,
      image: img4442,
      tag: isEn ? 'FIELD CASE 02 • SLIPPERY CONCRETE CANAL' : 'KASUS LAPANGAN 02 • TANGGUL IRIGASI LICIN',
      severity: isEn ? 'HIGH RISK' : 'RISIKO TINGGI',
      severityColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
      title: isEn
        ? 'Barefoot Trekking on Slippery Concrete Canal Dikes'
        : 'Trekking Tanggul Irigasi Beton Berlumut Tanpa Alas Kaki',
      desc: isEn
        ? 'Navigating along narrow, mossy concrete edges between flowing irrigation channels carrying heavy backpacks barefoot.'
        : 'Menyusuri jalan setapak beton sempit yang berlumut licin di antara aliran saluran air dengan beban ransel berat tanpa perlindungan alas kaki.',
      risks: isEn
        ? [
            {
              title: 'Slip, Fall & Blunt Force Impact',
              detail: 'Loss of traction leading to falls into concrete canals or impact trauma.',
            },
            {
              title: 'Puncture Wounds on Bare Soles',
              detail: 'Vulnera punctum caused by sharp gravel, glass shards, or spiky flora along the track.',
            },
            {
              title: 'Severe Ankle Sprain & Joint Dislocation',
              detail: 'Unstable footing under heavy backpack load causing acute ligament hyperinversion.',
            },
          ]
        : [
            {
              title: 'Terpeleset & Benturan Dinding Beton',
              detail: 'Hilang keseimbangan jatuh ke saluran air deras atau terbentur sudut beton keras.',
            },
            {
              title: 'Luka Tusuk Telapak Kaki (Vulnus Punctum)',
              detail: 'Telapak kaki rentan tertusuk kerikil tajam, pecahan kaca, atau duri liar.',
            },
            {
              title: 'Keseleo Ankle Akut (Sprain Ligamen)',
              detail: 'Tumpuan sempit tidak stabil saat menahan beban ransel memicu cedera pergelangan kaki.',
            },
          ],
      p3kProtocol: isEn
        ? 'R.I.C.E. protocol for sprains, rigid anatomical splinting, careful foreign body handling & elastic compression.'
        : 'Protokol R.I.C.E. (Rest, Ice, Compression, Elevation), pencabutan benda asing hati-hati, fiksasi bidai/spalk, dan balut tekan.',
      moduleTag: isEn ? 'Fracture & Sprain Splinting Module' : 'Modul Imobilisasi Fraktur & Pembidaian Sprain',
    },
    {
      id: 3,
      image: img4449,
      tag: isEn ? 'FIELD CASE 03 • PRONE OBSTACLE & AIRWAY HAZARD' : 'KASUS LAPANGAN 03 • SIMULASI TIARAP & OBSTRUKSI NAPAS',
      severity: isEn ? 'CRITICAL RISK' : 'RISIKO KRITIS',
      severityColor: 'text-orange-400 bg-orange-500/10 border-orange-500/30',
      title: isEn
        ? 'Prone Maneuvers in Field Grass with Mouth Apparatus'
        : 'Simulasi Tiarap Medan Rumput & Rintangan Rongga Mulut',
      desc: isEn
        ? 'Ground crawling maneuvers in rough field grass holding training apparatus in mouth with field camouflage paint.'
        : 'Latihan fisik tiarap merayap di padang rumput terbuka dengan media simulasi di rongga mulut serta kamuflase wajah lapangan.',
      risks: isEn
        ? [
            {
              title: 'Airway Obstruction & Choking Risk',
              detail: 'Foreign object dislodgement into larynx during hyperventilation or physical fatigue.',
            },
            {
              title: 'Oral Soft Tissue & Dental Trauma',
              detail: 'Impact of chin and teeth against hard ground during rapid low crawling.',
            },
            {
              title: 'Insect Stings & Contact Dermatitis',
              detail: 'Direct skin contact with wild insects, red ants, or toxic plant sap in tall grass.',
            },
          ]
        : [
            {
              title: 'Obstruksi Saluran Napas (Tersedak / Choking)',
              detail: 'Media di mulut rentan menyumbat laring/trakea saat peserta terengah-engah kelelahan.',
            },
            {
              title: 'Trauma Rongga Mulut & Gigi',
              detail: 'Benturan dagu atau wajah ke permukaan tanah keras saat merayap.',
            },
            {
              title: 'Gigitan Serangga Semak & Alergi Kontak',
              detail: 'Kontak langsung kulit dengan serangga liar, semut tanah, atau getah rumput beracun.',
            },
          ],
      p3kProtocol: isEn
        ? 'Immediate airway clearance / Heimlich maneuver, clearing oral cavity & insect bite management.'
        : 'Manuver pembebasan jalan napas cepat (Heimlich / finger sweep), pembersihan rongga mulut, dan penanganan luka gigitan serangga.',
      moduleTag: isEn ? 'CPR, Choking & Basic Life Support' : 'Modul RJP, Manuver Tersedak & BHD',
    },
    {
      id: 4,
      image: img4443,
      tag: isEn ? 'FIELD CASE 04 • RICE FIELD DIKE & STONE DITCH' : 'KASUS LAPANGAN 04 • PEMATANG SAWAH & TEBING BATU',
      severity: isEn ? 'HIGH RISK' : 'RISIKO TINGGI',
      severityColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      title: isEn
        ? 'Rice Field Dike Trekking Beside Stone-Embankment Ditches'
        : 'Lintas Alam Pematang Sawah & Tebing Parit Bebatuan',
      desc: isEn
        ? 'Scout troop carrying colors navigating narrow earthen dikes right along steep stone-walled drainage canals.'
        : 'Regu ambalan membawa panji kehormatan menyusuri pematang tanah sempit di tepi parit dengan susunan tebing bebatuan terjal.',
      risks: isEn
        ? [
            {
              title: 'Slips & Falls into Steep Stone Ditches',
              detail: 'High fall impact on rough rock embankments causing blunt trauma, contusions, and fractures.',
            },
            {
              title: 'Wildlife Exposure & Snake Bites',
              detail: 'Tall wetland flora and muddy ditches provide natural habitat for venomous reptiles and insects.',
            },
            {
              title: 'Knee & Ankle Misalignment Trauma',
              detail: 'Unstable soft mud ridges causing sudden ankle rolling and hyperextension under march tempo.',
            },
          ]
        : [
            {
              title: 'Tergelincir Jatuh ke Parit Bebatuan',
              detail: 'Ketinggian tebing batu berisiko menimbulkan trauma tumpul, fraktur tulang, atau dislokasi sendi.',
            },
            {
              title: 'Paparan Satwa Liar / Gigitan Ular Sawah',
              detail: 'Ekosistem semak pematang berpotensi sarang ular atau hewan berbisa.',
            },
            {
              title: 'Cedera Lutut & Pergelangan Kaki',
              detail: 'Medan tanah lembek berkontur tidak rata menyebabkan salah tumpuan langkah saat berbaris.',
            },
          ],
      p3kProtocol: isEn
        ? 'Limb immobilization, elastic compression, pressure immobilization for venomous bites & emergency stretcher transport.'
        : 'Imobilisasi ekstremitas terkilir/patah, pembalutan elastis, imobilisasi tekanan pada gigitan satwa berbisa, dan evakuasi tandu darurat.',
      moduleTag: isEn ? 'Field Evacuation & Venomous Bites Module' : 'Modul Evakuasi Lapangan & Gigitan Satwa Berbisa',
    },
    {
      id: 5,
      image: img4440,
      tag: isEn ? 'FIELD CASE 05 • LONG MARCH & PHYSICAL EXHAUSTION' : 'KASUS LAPANGAN 05 • LONG MARCH & KELELAHAN FISIK',
      severity: isEn ? 'MODERATE - HIGH' : 'RISIKO SEDANG - TINGGI',
      severityColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30',
      title: isEn
        ? 'Open Road March & Heavy Expedition Backpacking'
        : 'Long March Jalur Terbuka & Beban Ekspedisi Punggung',
      desc: isEn
        ? 'Long-distance trek along open rural asphalt roads bearing fully packed logistics backpacks under rising ambient temperatures.'
        : 'Perjalanan lintas medan jalan aspal pedesaan jarak jauh membawa ransel logistik penuh di bawah paparan suhu lingkungan yang meningkat.',
      risks: isEn
        ? [
            {
              title: 'Heat Exhaustion & Severe Dehydration',
              detail: 'Massive sweat loss and electrolyte depletion triggering headache, nausea, and severe fatigue.',
            },
            {
              title: 'Friction Blisters (Bulla Gesek)',
              detail: 'Repetitive friction between sweat-soaked socks and heavy boots causing painful intradermal blisters.',
            },
            {
              title: 'Trapezius & Lumbar Muscle Spasms',
              detail: 'Prolonged pressure from heavy shoulder straps causing acute neck, shoulder, and lower back strain.',
            },
          ]
        : [
            {
              title: 'Heat Exhaustion & Dehidrasi Berat',
              detail: 'Kehilangan cairan dan elektrolit melalui keringat berlebih memicu pusing, kram, dan kelelahan ekstrem.',
            },
            {
              title: 'Luka Gesek & Bula Kaki (Blister)',
              detail: 'Gesekan kaus kaki basah keringat dan sepatu trekking berpotensi menimbulkan lepuh kulit perih.',
            },
            {
              title: 'Trauma Otot Punggung & Bahu',
              detail: 'Penekanan strap ransel berat berjam-jam memicu spasme otot trapezius dan lumbar.',
            },
          ],
      p3kProtocol: isEn
        ? 'Gradual oral electrolyte rehydration, sterile blister care without de-roofing, gentle stretching & shaded recovery.'
        : 'Rehidrasi bertahap larutan oralit/elektrolit, perawatan luka lepuh bula steril tanpa dipecahkan, peregangan otot, dan istirahat teduh.',
      moduleTag: isEn ? 'Dehydration & Blister Care Module' : 'Modul Penanganan Dehidrasi & Perawatan Blister',
    },
    {
      id: 6,
      image: img4446,
      tag: isEn ? 'FIELD CASE 06 • HEAT STROKE & MIDDAY SUN EXPOSURE' : 'KASUS LAPANGAN 06 • CUACA TERIK & PAPARAN PANAS EKSTREM',
      severity: isEn ? 'CRITICAL RISK' : 'RISIKO KRITIS',
      severityColor: 'text-red-400 bg-red-500/10 border-red-500/30',
      title: isEn
        ? 'Open Field Debriefing Under Harsh Midday Tropical Sun'
        : 'Orientasi Lapangan Terbuka di Bawah Sinar Matahari Terik',
      desc: isEn
        ? 'Troop assembly, debriefing, and discipline drills in unshaded open grounds during peak solar radiation hours.'
        : 'Aktivitas orientasi, pengarahan, dan apel regu di lapangan terbuka tanpa kanopi pelindung pada jam-jam puncak radiasi sinar matahari.',
      risks: isEn
        ? [
            {
              title: 'Heat Stroke Emergency',
              detail: 'Failure of body thermoregulation causing core temp >40°C, altered mental status, and shock.',
            },
            {
              title: 'Heat Syncope (Sudden Fainting)',
              detail: 'Peripheral venous pooling from prolonged standing in extreme heat triggering cerebral hypoperfusion.',
            },
            {
              title: 'First-Degree Sunburn (Erythema)',
              detail: 'Direct ultraviolet radiation damaging unprotected skin on neck, face, and forearms.',
            },
          ]
        : [
            {
              title: 'Sengatan Panas Ekstrem (Heat Stroke)',
              detail: 'Kegagalan regulasi termal tubuh berisiko menyebabkan penurunan kesadaran, kejang, hingga syok panas.',
            },
            {
              title: 'Sinkop / Pingsan Akut (Heat Syncope)',
              detail: 'Pengumpulan darah di ekstremitas bawah akibat berdiri lama di suhu panas memicu pingsan mendadak.',
            },
            {
              title: 'Eritema & Luka Bakar Matahari (Sunburn)',
              detail: 'Radiasi UV intensif merusak lapisan epidermis kulit terbuka yang tidak terproteksi.',
            },
          ],
      p3kProtocol: isEn
        ? 'Immediate shaded relocation, shock position (legs elevated 30cm), active cooling packs at neck/axilla, loosen clothing & monitor vitals.'
        : 'Evakuasi cepat ke tempat sejuk, posisi syok (kaki diangkat 30 cm), kompres air dingin di leher/aksila, longgarkan seragam ketat, dan pantau tanda vital.',
      moduleTag: isEn ? 'Heat Stroke & Syncope Emergency Module' : 'Modul Kedaruratan Panas, Heat Stroke & Penanganan Pingsan',
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % cardsData.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
      }
    };
    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, cardsData.length]);

  return (
    <div className="my-8">
      {/* Sub-Header Section */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#262626] pb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-rose-400 uppercase">
              {isEn ? 'URGENCY & FIELD RISK IDENTIFICATION' : 'IDENTIFIKASI KASUS LAPANGAN & URGENSI P3K'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {isEn
              ? 'Real-World Scout Activities with High Injury Potential'
              : 'Contoh Nyata Aktivitas Pramuka Berpotensi Cedera & Kedaruratan'}
          </h3>
          <p className="text-xs sm:text-sm text-[#8A8A8A] mt-1 max-w-3xl leading-relaxed">
            {isEn
              ? 'Real photographic documentation of 6 Ambalan outdoor field activities that establish why standardized First Aid (P3K) competency is indispensable.'
              : 'Dokumentasi riil 6 kegiatan luar ruangan kepramukaan Ambalan yang menjadi latar belakang empiris mengapa modul dan edukasi P3K ini dikembangkan.'}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-mono text-[#A3A3A3] bg-[#1a1a1a] border border-[#2e2e2e] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{isEn ? '6 Field Risk Scenarios (3 Rows)' : '6 Dokumentasi Risiko Lapangan (3 Baris)'}</span>
          </span>
        </div>
      </div>

      {/* 6 Responsive Cards Grid: 2 Columns × 3 Rows Down ("3 Kebawah") */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {cardsData.map((card, idx) => (
          <div
            key={card.id}
            className="bg-[#141414] border border-[#262626] rounded-2xl p-5 flex flex-col justify-between hover:border-[#383838] transition-all duration-300 shadow-xl group/card"
          >
            <div>
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                <span className="text-[#8A8A8A] uppercase tracking-wider font-semibold truncate max-w-[70%]">
                  {card.tag}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold border tracking-wider uppercase shrink-0 ${card.severityColor}`}
                >
                  {card.severity}
                </span>
              </div>

              {/* IMAGE CONTAINER (Auto-Fit & Zero Cropping) */}
              <div
                onClick={() => setLightboxIndex(idx)}
                className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626] flex items-center justify-center cursor-pointer group/img transition-all hover:border-[#10B981]/50 shadow-inner mb-4"
                title={isEn ? 'Click to inspect full photo' : 'Klik untuk perbesar foto'}
              >
                {/* Ambient Blur Underlay - Fills the container gracefully with the photo's natural color tones */}
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none select-none"
                />

                {/* Foreground Uncropped Image - object-contain guarantees 100% full view with ZERO cropping */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="relative z-10 w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover/img:scale-105 select-none"
                  loading="lazy"
                />

                {/* Bottom Vignette */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />

                {/* Magnify Tooltip Pill */}
                <div className="absolute bottom-2.5 right-2.5 z-20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0E0E0E]/95 border border-[#383838] backdrop-blur-md text-[10.5px] font-mono text-white shadow-xl">
                  <svg className="w-3.5 h-3.5 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>{isEn ? 'Expand' : 'Perbesar'}</span>
                </div>

                {/* Case Number Badge */}
                <div className="absolute bottom-2.5 left-2.5 z-20 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border border-[#333333] backdrop-blur-md text-[10px] font-mono text-[#D4D4D4]">
                  <span>{`0${card.id} / 06`}</span>
                </div>
              </div>

              {/* Card Title & Narrative */}
              <h4 className="text-base sm:text-[17px] font-bold text-white mb-2 leading-snug group-hover/card:text-[#10B981] transition-colors">
                {card.title}
              </h4>
              <p className="text-xs text-[#8A8A8A] leading-relaxed mb-4">
                {card.desc}
              </p>

              {/* Detailed Injury Hazard List */}
              <div className="space-y-2 mb-4 bg-[#0e0e0e] border border-[#242424] rounded-xl p-3">
                <div className="text-[10.5px] font-mono font-semibold text-[#A3A3A3] uppercase tracking-wider flex items-center gap-1.5 pb-1 border-b border-[#222222]">
                  <svg className="w-3.5 h-3.5 text-rose-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{isEn ? 'Potential Medical Hazards:' : 'Potensi Cedera Medis:'}</span>
                </div>

                {card.risks.map((risk, rIdx) => (
                  <div key={rIdx} className="text-xs">
                    <span className="font-semibold text-[#EDEDED] flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-rose-400 shrink-0" />
                      {risk.title}
                    </span>
                    <p className="text-[11px] text-[#808080] pl-2.5 mt-0.5 leading-normal">
                      {risk.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom P3K Protocol & Module CTA */}
            <div className="pt-3 border-t border-[#262626] flex flex-col gap-2.5">
              <div className="text-[11px] text-[#A3A3A3] flex items-start gap-1.5">
                <span className="text-[#10B981] font-mono font-bold shrink-0">P3K:</span>
                <span className="leading-snug">{card.p3kProtocol}</span>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-[10px] font-mono text-[#737373] truncate">
                  {card.moduleTag}
                </span>
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('Materi')}
                    className="text-[11px] font-medium text-[#10B981] hover:text-[#34D399] transition-colors flex items-center gap-1 font-mono shrink-0 py-0.5"
                  >
                    <span>{isEn ? 'Study Protocol' : 'Pelajari Modul'}</span>
                    <span>➔</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL WITH ARROW NAVIGATION */}
      <AnimatePresence>
        {lightboxIndex !== null && cardsData[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#121212] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#262626] bg-[#161616]">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                  <span className="text-xs font-mono font-bold text-white truncate">
                    {cardsData[lightboxIndex].title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/25 shrink-0 hidden sm:inline">
                    {cardsData[lightboxIndex].severity}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] font-mono text-[#8A8A8A] hidden sm:inline">
                    {`${lightboxIndex + 1} / ${cardsData.length}`}
                  </span>
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="w-8 h-8 rounded-lg bg-[#242424] hover:bg-[#333333] text-[#A3A3A3] hover:text-white flex items-center justify-center transition-colors shrink-0"
                    title={isEn ? 'Close (Esc)' : 'Tutup (Esc)'}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Image Viewport - Full Natural Resolution without Cropping */}
              <div className="relative flex-1 min-h-[300px] max-h-[64vh] bg-[#080808] flex items-center justify-center p-2 sm:p-4 overflow-hidden">
                <img
                  src={cardsData[lightboxIndex].image}
                  alt={cardsData[lightboxIndex].title}
                  className="w-auto h-auto max-w-full max-h-[60vh] object-contain rounded-lg shadow-xl"
                />

                {/* Left/Prev Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#222222] border border-[#333333] text-white flex items-center justify-center transition-colors shadow-lg"
                  title={isEn ? 'Previous Photo (Left Arrow)' : 'Foto Sebelumnya (Panah Kiri)'}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Right/Next Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((prev) => (prev + 1) % cardsData.length);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/70 hover:bg-[#222222] border border-[#333333] text-white flex items-center justify-center transition-colors shadow-lg"
                  title={isEn ? 'Next Photo (Right Arrow)' : 'Foto Selanjutnya (Panah Kanan)'}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Modal Bottom Context Bar */}
              <div className="px-5 py-3.5 bg-[#141414] border-t border-[#262626] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="text-[#EDEDED]">
                  <p className="font-medium text-white mb-0.5">{cardsData[lightboxIndex].desc}</p>
                  <p className="text-[#8A8A8A] text-[11.5px] leading-relaxed">
                    <strong className="text-[#10B981] font-mono">Tindakan P3K:</strong> {cardsData[lightboxIndex].p3kProtocol}
                  </p>
                </div>

                {onNavigate && (
                  <button
                    onClick={() => {
                      setLightboxIndex(null);
                      onNavigate('Materi');
                    }}
                    className="bg-[#10B981] hover:bg-[#059669] text-black font-semibold text-xs px-4 py-2 rounded-xl transition-colors font-mono shrink-0 text-center"
                  >
                    {isEn ? 'Open First Aid Guide ➔' : 'Buka Modul P3K ➔'}
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
