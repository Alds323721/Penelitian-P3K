import React from 'react';
import { motion, useTransform } from 'framer-motion';
import caduceusImg from '../assets/caduceus-chrome.png';

export default function CaduceusBackground3D({ smoothX, smoothY, opacity = 0.35 }) {
  // 3D Perspective Rotation derived from smooth mouse coordinates
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  // Dynamic Specular Highlight tracking coordinates
  const glareX = useTransform(smoothX, [-0.5, 0.5], [20, 80]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], [20, 80]);

  const dynamicSpecular = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle 280px at ${gx}% ${gy}%, rgba(255, 255, 255, 0.25) 0%, rgba(180, 215, 255, 0.08) 45%, transparent 75%)`
  );

  return (
    <div
      className="relative flex items-center justify-center w-full h-full pointer-events-none select-none overflow-visible"
      style={{ perspective: 1200 }}
    >
      {/* 1. Subtle Orbital / Technical Radar Rings in Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[96%] h-[96%] rounded-full border border-white/[0.05] animate-pulse" />
        <div className="w-[72%] h-[72%] rounded-full border border-white/[0.04] border-dashed" />
        <div className="w-[45%] h-[45%] rounded-full border border-white/[0.02]" />
      </div>

      {/* 2. Ambient Specular Radial Glow behind Caduceus */}
      <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [0.92, 1.12, 0.92],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          width: '80%',
          height: '80%',
          background:
            'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(186, 215, 255, 0.14) 40%, rgba(19, 19, 19, 0) 75%)',
        }}
      />

      {/* 3. Follow-Cursor Specular Spotlight Aura */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: dynamicSpecular }}
      />

      {/* 4. Interactive 3D Motion Container (Tilt + Parallax Translation) */}
      <motion.div
        className="relative flex items-center justify-center w-[85%] h-[85%]"
        style={{
          transformStyle: 'preserve-3d',
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
      >
        {/* Entrance Spring Load (scale 0.8 -> 1.0) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: 'spring',
            damping: 18,
            stiffness: 90,
            mass: 0.8,
            delay: 0.1,
          }}
          className="w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Continuous Idle Levitation Float */}
          <motion.div
            animate={{
              y: [-10, 10, -10],
              rotateZ: [-1, 1, -1],
            }}
            transition={{
              y: {
                duration: 4.5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              },
              rotateZ: {
                duration: 7,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              },
            }}
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              opacity,
            }}
          >
            {/* Monochromatic Chrome Caduceus Asset */}
            <img
              src={caduceusImg}
              alt="Simbol Medis Caduceus 3D Background"
              draggable={false}
              className="w-full h-full object-contain filter drop-shadow-[0_22px_40px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] brightness-105 contrast-105 pointer-events-none select-none"
              style={{
                transform: 'translateZ(25px)',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
