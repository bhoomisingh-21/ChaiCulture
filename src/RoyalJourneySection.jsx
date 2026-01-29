import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const RoyalJourneySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Changed to end end to respect actual section height
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80, // Higher stiffness for faster response
    damping: 35,
    restDelta: 0.001
  });

  // CONTENT: Fully visible until the very end of the scroll
  const contentOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);
  const contentScale = useTransform(smoothProgress, [0, 0.9], [1, 0.97]);

  // MANDALA: Appears early so it’s visible behind cards, 
  // reaches max beauty quickly.
  const mandalaOpacity = useTransform(smoothProgress, [0, 0.1, 0.8, 1], [0.02, 0.2, 0.2, 0.4]);
  const mandalaScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const mandalaBlur = useTransform(smoothProgress, [0, 0.15], ["blur(12px)", "blur(0px)"]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-chai-brown flex flex-col items-center justify-start overflow-hidden px-4 sm:px-6 md:px-[8%] lg:px-[10%] pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12"
    >
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 flex flex-col items-center pointer-events-none select-none">
        
        {/* Large Section Number */}
        <span className="mt-6 sm:mt-8 md:mt-10 text-[10rem] sm:text-[14rem] md:text-[16rem] lg:text-[20rem] font-serif text-[#FAF7F2] leading-none opacity-[0.02] tracking-tighter">
          02
        </span>

        {/* Delicate Mandala */}
        <motion.div 
          style={{ 
            opacity: mandalaOpacity, 
            scale: mandalaScale,
            filter: mandalaBlur 
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 sm:w-200 sm:h-200 md:w-250 md:h-250 lg:w-350 lg:h-350"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-chai-gold fill-none" strokeWidth="0.12">
            <circle cx="100" cy="100" r="95" strokeDasharray="0.5 4" /> 
            <circle cx="100" cy="100" r="78" />
            <circle cx="100" cy="100" r="48" strokeDasharray="1 2" />
            
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
              <g key={angle} transform={`rotate(${angle} 100 100)`}>
                <circle cx="100" cy="22" r="0.6" fill="#B89461" stroke="none" />
                <line x1="100" y1="15" x2="100" y2="28" opacity="0.3" />
              </g>
            ))}
            <circle cx="100" cy="100" r="10" strokeDasharray="0.5 3" strokeOpacity="0.8" strokeWidth="0.9"/>
          </svg>
        </motion.div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ opacity: contentOpacity, scale: contentScale }} 
        className="relative z-10 w-full flex flex-col items-center"
      >
        {/* 1. Journey Map */}
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg mb-8 sm:mb-10 md:mb-12">
          <div className="flex justify-between items-center px-4 sm:px-6 md:px-8">
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-chai-gold p-0.5">
                <div className="w-full h-full bg-chai-gold rounded-full" />
              </div>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-chai-gold uppercase font-bold">India</span>
            </div>
            <div className="flex-1 h-px border-t border-dashed border-chai-gold/20 mx-3 sm:mx-4 md:mx-6" />
            <div className="flex flex-col items-center gap-1.5 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-chai-gold/40" />
              <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] text-chai-gold uppercase font-bold">USA</span>
            </div>
          </div>
        </div>

        {/* 2. Main Heading */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <h2 className="text-[#FAF7F2] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif leading-tight tracking-tight max-w-4xl">
            Bringing <span className="text-chai-gold italic font-light">Authentic Instant Chai</span> to <br className="hidden sm:block" />
            the American Workplace
          </h2>
        </div>

        {/* 3. Feature Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-6xl mb-10 sm:mb-12 md:mb-16">
          {[
            { title: "Authenticity", desc: "Traditional recipes preserved with precision", icon: "✧" },
            { title: "Convenience", desc: "Instant preparation without compromise", icon: "✦" },
            { title: "Premium Quality", desc: "Only the finest ingredients selected", icon: "✷" }
          ].map((item, idx) => (
            <div key={idx} className="group relative border border-chai-gold/20 rounded-sm p-6 sm:p-8 md:p-10 flex flex-col items-center text-center bg-chai-brown/90 backdrop-blur-md transition-all duration-500 hover:bg-chai-gold/10">
              <div className="text-chai-gold text-xl sm:text-2xl mb-4 sm:mb-5 md:mb-6 opacity-80">{item.icon}</div>
              <h3 className="text-[#FAF7F2] text-[10px] sm:text-xs tracking-[0.35em] sm:tracking-[0.4em] uppercase font-serif mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-[#FAF7F2]/70 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] sm:tracking-[0.15em] leading-relaxed max-w-45">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 4. Final Quote */}
        <div className="w-full flex flex-col items-center text-center mb-6 sm:mb-8 px-4">
          <p className="text-[#FAF7F2]/80 text-sm sm:text-base font-serif italic tracking-wide max-w-xl">
            "Every cup tells a story of tradition meeting innovation. <br className="hidden md:block" />
            From India's royal kitchens to your office break room."
          </p>
          <div className="mt-6 sm:mt-8 w-px h-12 sm:h-16 bg-linear-to-b from-chai-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default RoyalJourneySection;