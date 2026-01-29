import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';
import { useRef, useMemo } from 'react';

// Particle Component
const Particle = ({ size, delay, top, left }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.7, 0],
      y: [0, -150],
      scale: [0.5, 1.2, 0.5],
    }}
    transition={{
      duration: Math.random() * 4 + 4,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
    className="absolute bg-chai-gold rounded-full shadow-[0_0_8px_#B89461]"
    style={{
      width: size + 'px',
      height: size + 'px',
      top: `${top}%`,
      left: `${left}%`,
    }}
  />
);

const Hero = () => {
  const containerRef = useRef(null);

  // Scroll animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.85]);

  // Pre-generate particle positions for performance
  const particles = useMemo(() => {
    return [...Array(30)].map(() => ({
      size: Math.random() * 4 + 2,
      delay: Math.random(),
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <header
      ref={containerRef}
      className="relative min-h-screen lg:h-[120vh] w-full bg-chai-cream flex flex-col items-center justify-center overflow-hidden"
    >
      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 w-full p-4 sm:p-6 md:p-10 flex justify-between items-start z-50">
        <div className="flex items-start gap-2 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-chai-gold/30 rounded-full flex items-center justify-center">
            <span className="text-chai-gold text-[10px] sm:text-xs">⚜</span>
          </div>
          <div className="flex flex-col">
            <span className="text-chai-brown font-serif tracking-[0.15em] sm:tracking-[0.2em] text-sm sm:text-base md:text-lg leading-none">
              CHAI CULTURE
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-chai-gold mt-1">
              MMXXIV
            </span>
          </div>
        </div>

        <div className="flex gap-3 sm:gap-5 text-chai-brown/70">
          <FiInstagram aria-label="Instagram" title="Instagram" className="cursor-pointer hover:text-chai-gold transition-colors" size={16} />
          <FiLinkedin aria-label="LinkedIn" title="LinkedIn" className="cursor-pointer hover:text-chai-gold transition-colors" size={16} />
          <FiMail aria-label="Email" title="Email" className="cursor-pointer hover:text-chai-gold transition-colors" size={16} />
        </div>
      </nav>

      {/* --- PARTICLES --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p, i) => (
          <Particle key={i} {...p} />
        ))}
      </div>

      {/* --- MAIN HERO CONTENT --- */}
      <motion.div
        style={{ opacity, scale }}
        className="flex flex-col items-center text-center z-10 px-4 pt-24 lg:pt-0"
      >
        {/* Floating Coffee Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="mb-8 sm:mb-12"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-chai-gold/13 flex items-center justify-center shadow-[0_0_30px_rgba(184,148,97,0.2)]">
            <div className="w-12 h-12 sm:w-15 sm:h-15 rounded-full bg-chai-gold flex items-center justify-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="sm:w-6.25 sm:h-6.25">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-chai-brown font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[120px] leading-tight lg:leading-[0.9] tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8"
        >
          CHAI <br /> CULTURE
        </motion.h1>

        {/* Gradient Divider */}
        <div
          className="w-40 sm:w-48 md:w-64 h-px mb-6 sm:mb-8"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #B89461 50%, transparent 100%)',
            opacity: 0.6,
          }}
        />

        {/* Subtitle & Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-4 sm:space-y-6"
        >
          <div>
            <p className="text-chai-gold font-serif italic text-xl sm:text-2xl md:text-3xl tracking-[0.15em] sm:tracking-[0.2em]">
              Brew the Royal Tradition
            </p>
            <p className="text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase font-serif text-chai-gold mt-2 font-medium">
              DISCOVER THE STORY
            </p>
          </div>

          {/* Scroll Cue */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center text-chai-gold/60"
            >
              <motion.svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="sm:w-5 sm:h-5">
                <path d="M7 13l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.div>
            <span className="lg:hidden text-[8px] tracking-[0.3em] uppercase text-chai-gold font-sans opacity-60">
              Scroll to explore
            </span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Hero;
