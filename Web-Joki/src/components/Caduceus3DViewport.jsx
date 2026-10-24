import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import caduceusImg from '../assets/caduceus-chrome.png';
import profileImg from '../assets/profilhitamputih.jpeg';

export default function Caduceus3DViewport({ t, lang = 'id' }) {
  const containerRef = useRef(null);
  const [viewMode, setViewMode] = useState('caduceus'); // 'caduceus' | 'photo'
  const [isHovered, setIsHovered] = useState(false);
  const [hudAngles, setHudAngles] = useState({ x: 0, y: 0 });

  // Motion values for normalized cursor coordinates (-0.5 to +0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Organic spring physics for smooth, inertia-damped movement
  const springConfig = { damping: 22, stiffness: 140, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Pseudo-3D Rotation angles
  // When cursor is higher (mouseY < 0), element pitches up (rotateX > 0)
  // When cursor is to the right (mouseX > 0), element yaws right (rotateY > 0)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);

  // Subtle parallax depth translations
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  // Specular reflection tracking coordinates (percentages 20% - 80%)
  const glareX = useTransform(smoothX, [-0.5, 0.5], [25, 75]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [25, 75]);

  // Combine glare into dynamic CSS radial gradient
  const specularBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle 180px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.22) 0%, rgba(200, 225, 255, 0.08) 40%, transparent 80%)`
  );

  // Subscribe to rotation changes to display real-time technical HUD angles
  useEffect(() => {
    let animId;
    let lastUpdate = 0;

    const unsubscribeX = rotateX.on('change', (latestX) => {
      const now = performance.now();
      if (now - lastUpdate > 60) {
        lastUpdate = now;
        setHudAngles((prev) => ({ ...prev, x: latestX }));
      }
    });

    const unsubscribeY = rotateY.on('change', (latestY) => {
      setHudAngles((prev) => ({ ...prev, y: latestY }));
    });

    return () => {
      unsubscribeX();
      unsubscribeY();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [rotateX, rotateY]);

  // Mouse move handler relative to container bounding box
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Touch move handler for mobile devices
  const handleTouchMove = (e) => {
    if (!containerRef.current || !e.touches[0]) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(-0.5, Math.min(0.5, (touch.clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (touch.clientY - rect.top) / rect.height - 0.5));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleTouchEnd = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      id="hero-3d-viewport"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#262626] aspect-square flex items-center justify-center select-none group cursor-grab active:cursor-grabbing shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]"
      style={{ perspective: 1000 }}
    >
      {/* 1. High-Tech Background Grid & Technical Reticles */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
        }}
      />

      {/* Subtle Circular Radar / Alignment Rings */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[82%] h-[82%] rounded-full border border-white/[0.04] animate-pulse" />
        <div className="w-[58%] h-[58%] rounded-full border border-white/[0.03] border-dashed" />
        <div className="w-[34%] h-[34%] rounded-full border border-white/[0.02]" />
      </div>

      {/* Corner Technical Crosshair Markers [+] */}
      <div className="absolute top-2.5 left-2.5 font-mono text-[9px] text-[#444748] tracking-widest pointer-events-none select-none flex items-center gap-1">
        <span className="text-[#8E9192]">+</span> CADUCEUS_VIEWPORT
      </div>
      <div className="absolute top-2.5 right-2.5 font-mono text-[9px] text-[#444748] tracking-widest pointer-events-none select-none flex items-center gap-1">
        <span>3D_PERSPECTIVE</span> <span className="text-[#8E9192]">+</span>
      </div>
      <div className="absolute bottom-2.5 left-2.5 font-mono text-[9px] text-[#444748] tracking-widest pointer-events-none select-none flex items-center gap-1">
        <span className="text-[#8E9192]">+</span> PITCH:{hudAngles.x >= 0 ? `+${hudAngles.x.toFixed(1)}` : hudAngles.x.toFixed(1)}°
      </div>
      <div className="absolute bottom-2.5 right-2.5 font-mono text-[9px] text-[#444748] tracking-widest pointer-events-none select-none flex items-center gap-1">
        <span>YAW:{hudAngles.y >= 0 ? `+${hudAngles.y.toFixed(1)}` : hudAngles.y.toFixed(1)}°</span> <span className="text-[#8E9192]">+</span>
      </div>

      {/* 2. Top View Controls Overlay (Toggle between 3D Caduceus and Photo Model) */}
      <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between pointer-events-auto">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#141414]/90 backdrop-blur-md border border-[#262626] text-[10px] font-semibold tracking-wider text-[#EDEDED] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-[#10B981]">ONLINE</span>
          <span className="text-[#444748]">|</span>
          <span className="text-[#8A8A8A] font-mono text-[9px]">CHROMIUM_GL</span>
        </div>

        {/* View Switcher Pill */}
        <div className="flex items-center bg-[#141414]/90 backdrop-blur-md border border-[#262626] rounded-full p-0.5 shadow-md">
          <button
            type="button"
            onClick={() => setViewMode('caduceus')}
            className={`px-2.5 py-0.5 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
              viewMode === 'caduceus'
                ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939]'
                : 'text-[#8A8A8A] hover:text-[#EDEDED]'
            }`}
            title="3D Chrome Caduceus Model"
          >
            {t?.hero?.viewportCaduceus || 'Caduceus 3D'}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('photo')}
            className={`px-2.5 py-0.5 text-[10px] font-medium rounded-full transition-all cursor-pointer ${
              viewMode === 'photo'
                ? 'bg-[#2a2a2a] text-white shadow-sm border border-[#3a3939]'
                : 'text-[#8A8A8A] hover:text-[#EDEDED]'
            }`}
            title="Foto Made Candra Susanta"
          >
            {t?.hero?.viewportPhoto || 'Foto Model'}
          </button>
        </div>
      </div>

      {/* 3. Caduceus 3D Viewport Content */}
      {viewMode === 'caduceus' ? (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* A. Dynamic Specular Spotlight Layer (Tracks cursor across viewport) */}
          <motion.div
            className="absolute inset-0 pointer-events-none rounded-xl transition-opacity duration-300"
            style={{
              background: specularBackground,
              opacity: isHovered ? 0.9 : 0.45,
            }}
          />

          {/* B. Ambient Specular Radial Glow (Pulsing background aura for chrome reflection) */}
          <motion.div
            className="absolute pointer-events-none rounded-full blur-3xl"
            animate={{
              opacity: [0.35, 0.65, 0.35],
              scale: [0.92, 1.12, 0.92],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: '72%',
              height: '72%',
              background:
                'radial-gradient(circle, rgba(255, 255, 255, 0.28) 0%, rgba(186, 215, 255, 0.12) 40%, rgba(14, 14, 14, 0) 75%)',
            }}
          />

          {/* C. Primary Interactive 3D Canvas (Tilt + Parallax Translation) */}
          <motion.div
            className="relative z-10 w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
              x: translateX,
              y: translateY,
            }}
          >
            {/* D. Entrance Spring Load Container (0.8 -> 1.0 with damping spring) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: 'spring',
                damping: 18,
                stiffness: 90,
                mass: 0.8,
              }}
              className="w-full h-full flex items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* E. Idle Float (Continuous vertical levitation loop) */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotateZ: [-1, 1, -1],
                }}
                transition={{
                  y: {
                    duration: 4.2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  },
                  rotateZ: {
                    duration: 6.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                  },
                }}
                className="relative flex items-center justify-center w-[78%] h-[78%]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Caduceus Chrome Monochromatic Asset */}
                <img
                  src={caduceusImg}
                  alt="Simbol Medis Caduceus 3D Krom Perak"
                  draggable={false}
                  className="w-full h-full object-contain filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(255,255,255,0.22)] brightness-105 contrast-105 pointer-events-none select-none transition-filter duration-300"
                  style={{
                    transform: 'translateZ(30px)',
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        /* Alternate Photo Model View */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="relative w-full h-full"
        >
          <img
            src={profileImg}
            alt="Made Candra Susanta - Mahasiswa S1 Keperawatan STIKES Buleleng"
            className="w-full h-full object-cover object-[center_20%] filter grayscale contrast-110 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
        </motion.div>
      )}

      {/* 4. Bottom Viewport HUD Pill Overlay */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center gap-2 bg-[#141414]/90 backdrop-blur-md border border-[#333333] px-3.5 py-1 rounded-full text-[10.5px] font-medium text-[#EDEDED] shadow-xl whitespace-nowrap pointer-events-none transition-transform duration-300 group-hover:scale-105">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
        </span>
        <span className="tracking-wide font-semibold text-white">
          {viewMode === 'caduceus'
            ? 'Caduceus 3D'
            : t?.hero?.viewportPhoto || 'Foto Model'}
        </span>
        <span className="text-[#444748]">•</span>
        <span className="text-[#8A8A8A] font-mono text-[9.5px]">
          {isHovered
            ? '3D TRACKING'
            : lang === 'en'
            ? 'HOVER TO TILT'
            : 'SENTUH UNTUK TILT'}
        </span>
      </div>

      {/* Subtle Bottom Ambient Gradient Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>
  );
}
