import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: "Years of Heritage", val: "150+" },
  { label: "Natural Ingredients", val: "100%" },
  { label: "Artificial Flavors", val: "0" }
];

const socialLinks = ['Instagram', 'LinkedIn', 'Email'];

const LauchingSoonSection = () => {
  return (
    <section className="relative w-full bg-[#FCFBF7] overflow-hidden">

      {/* Main Invitation Box */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10 md:pb-12">
        <div className="relative bg-[#FAF7F2] border border-chai-gold/20 rounded-sm p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col items-center text-center">

          {/* Circular Badge */}
          <motion.div 
            className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#FAF7F2] border border-chai-gold/30 rounded-full flex items-center justify-center z-20"
            animate={{ rotate: [0, 15, 0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 border border-dashed border-chai-gold/10 rounded-full flex items-center justify-center">
              <span className="text-chai-gold text-lg sm:text-xl">✧</span>
            </div>
          </motion.div>

          {/* "Launching Soon" Label */}
          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="text-chai-gold text-[9px] sm:text-[10px]">★</span>
            <span className="text-[10px] sm:text-[12px] tracking-[0.4em] sm:tracking-[0.5em] uppercase text-chai-gold font-bold">Launching Soon</span>
            <span className="text-chai-gold text-[9px] sm:text-[10px]">★</span>
          </div>

          <h2 className="text-chai-brown text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 leading-tight">
            Reserve Your <br />
            <span className="text-chai-gold italic font-light">First Taste</span>
          </h2>

          <p className="text-chai-brown/60 text-xs sm:text-sm font-serif italic max-w-md leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2">
            Our inaugural collection is limited. Join our circle to receive early access, exclusive pricing, and a piece of chai history.
          </p>

          <div className="w-full max-w-sm space-y-4 sm:space-y-6">
            <motion.input 
              type="email" 
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-chai-gold/30 py-3 sm:py-4 text-center font-serif text-sm sm:text-base text-chai-brown focus:outline-none focus:border-chai-gold transition-colors placeholder:text-chai-brown/20"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              className="w-full bg-chai-brown text-[#FAF7F2] py-4 sm:py-5 tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[9px] sm:text-[10px] font-bold hover:bg-chai-gold transition-all duration-700"
              whileHover={{ scale: 1.03 }}
            >
              Request Early Access <span>→</span>
            </motion.button>
            <p className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-chai-brown/60 uppercase">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Heritage Stats */}
      <div className="relative z-10 max-w-4xl mx-auto border-b border-chai-gold/10 px-4">
        <div className="grid grid-cols-3 gap-2 sm:gap-8 pt-12 pb-16 sm:pb-24 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col gap-1 sm:gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-xl sm:text-3xl font-serif text-chai-gold">{stat.val}</span>
              <span className="text-[7px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.3em] text-chai-brown/50 uppercase font-bold leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#FAF7F2] py-12 sm:py-14 md:py-16 flex flex-col items-center px-4">
        <div className="text-[11px] sm:text-[13px] tracking-[0.4em] sm:tracking-[0.5em] text-chai-brown/50 uppercase mb-8 sm:mb-10 md:mb-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
          <span>Handcrafted in USA</span>
          <div className="w-1 h-1 bg-chai-gold rounded-full opacity-90 hidden sm:block" />
          <span>Heritage from India</span>
        </div>

        <div className="flex gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
          {socialLinks.map((social) => (
            <a 
              key={social}
              href="#"
              className="text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-chai-brown/60 hover:text-chai-gold transition-colors duration-300"
              aria-label={social}
            >
              {social}
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <div className="w-6 sm:w-8 h-[0.5px] bg-chai-gold/30" />
          <p className="text-[8px] sm:text-[9px] tracking-[0.5em] sm:tracking-[0.6em] text-chai-brown/40 uppercase text-center">
            © MMXIV CHAI CULTURE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default LauchingSoonSection;
