import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

// Decorative Bracket Component for the Card
const DecorativeBrackets = () => (
  <div className="absolute -inset-3 sm:-inset-5 pointer-events-none hidden sm:block">
    {/* Top Left */}
    <div className="absolute top-0 left-19 w-10 h-10 sm:w-14 sm:h-14 border-t border-l border-chai-gold/30 rounded-tl-4xl sm:rounded-tl-[2.5rem]" />
    <div className="absolute top-3 sm:top-4 left-22 sm:left-25 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-chai-gold/60 rounded-full" />

    {/* Top Right */}
    <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-chai-gold/30 rounded-tr-md" />
    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-chai-gold/60 rounded-full" />

    {/* Bottom Left */}
    <div className="absolute bottom-0 left-20 sm:left-22 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-chai-gold/30 rounded-bl-md" />
    <div className="absolute bottom-2 sm:bottom-3 left-22 sm:left-25 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-chai-gold/60 rounded-full" />

    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-14 sm:h-14 border-b border-r border-chai-gold/30 rounded-br-4xl sm:rounded-br-[2.5rem]" />
    <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-chai-gold/60 rounded-full" />
  </div>
);

// Mandala SVG Component
const Mandala = () => (
  <motion.div
    animate={{ rotate: 360, scale: [1, 1.03, 1] }}
    transition={{
      rotate: { duration: 40, repeat: Infinity, ease: 'linear' },
      scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
    }}
    className="absolute inset-0 opacity-[0.2] flex items-center justify-center"
  >
    <svg viewBox="0 0 200 200" className="w-[88%] h-[88%] stroke-chai-gold fill-none" strokeWidth="0.5">
      <circle cx="100" cy="100" r="90" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="70" />
      <circle cx="100" cy="100" r="45" />
      <line x1="100" y1="10" x2="100" y2="190" />
      <line x1="10" y1="100" x2="190" y2="100" />
      <circle cx="100" cy="30" r="3" fill="#B89461" />
      <circle cx="100" cy="170" r="3" fill="#B89461" />
      <circle cx="30" cy="100" r="3" fill="#B89461" />
      <circle cx="170" cy="100" r="3" fill="#B89461" />
    </svg>
  </motion.div>
);

const Heritage = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'center center'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 40,
    restDelta: 0.0001,
  });

  const leftX = useTransform(smoothProgress, [0, 1], [-60, 0]);
  const rightX = useTransform(smoothProgress, [0, 1], [60, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#FCFBF7] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-[8%] xl:px-[15%] py-12 sm:py-16 md:py-20"
    >
      {/* Background Watermark */}
      <div className="absolute left-4 sm:left-[8%] top-8 sm:top-[12%] pointer-events-none select-none">
        <span className="text-[8rem] sm:text-[15rem] md:text-[20rem] lg:text-[25rem] font-serif text-[#E8E2D9] leading-none opacity-20 sm:opacity-30">
          01
        </span>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-6 md:gap-4 items-center">
        {/* Right Side Card */}
        <motion.div style={{ x: rightX }} className="relative flex justify-center lg:justify-end px-4 sm:px-6 lg:order-2">
          <DecorativeBrackets />
          <motion.div className="relative w-64 h-64 sm:w-75 sm:h-75 md:w-87.5 md:h-85 bg-[#3D2B24] rounded-xl flex flex-col items-center justify-center shadow-2xl overflow-hidden p-4 sm:p-6">
            <Mandala />
            <div className="relative z-10 flex flex-col items-center text-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-chai-gold mb-4 sm:mb-6 opacity-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M5 15l-2-7 5 2 4-7 4 7 5-2-2 7H5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-white text-lg sm:text-xl md:text-2xl tracking-[0.3em] sm:tracking-[0.4em] uppercase font-serif font-light mb-4 sm:mb-5">
                Royal Recipe
              </h2>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-4 sm:w-6 h-[0.5px] bg-chai-gold/40" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-chai-gold font-serif italic">
                  Est. 1847
                </span>
                <div className="w-4 sm:w-6 h-[0.5px] bg-chai-gold/40" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Left Side Text */}
        <motion.div style={{ x: leftX }} className="flex flex-col px-4 sm:px-6 items-center lg:items-start text-center lg:text-left lg:order-1">
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-8 sm:w-12 h-px bg-chai-gold" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.5em] sm:tracking-[0.6em] uppercase text-chai-gold font-bold font-sans">
              The Heritage
            </span>
          </div>

          <h1 className="text-chai-brown text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.6rem] font-serif leading-[1.1] mb-6 sm:mb-8 md:mb-10 tracking-tight">
            From Royal <br />
            <span className="text-chai-gold italic font-light">Palaces</span> to Your <br />
            <span className="text-chai-gold italic font-light">Cup</span>
          </h1>

          <div className="max-w-110 space-y-4 sm:space-y-6 md:space-y-8">
            <p className="text-base sm:text-lg text-chai-brown leading-relaxed font-serif font-light opacity-90">
              In the grand halls of Awadh and Rajasthan, chai was an art form. Hand-selected spices, the finest Assam leaves, and recipes passed down through generations of royal tea masters.
            </p>
            <p className="text-[11px] sm:text-[12px] text-chai-brown/50 leading-relaxed font-sans tracking-[0.08em] sm:tracking-widest uppercase max-w-95">
              Centuries-old traditions, crafted with devotion and precision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;
