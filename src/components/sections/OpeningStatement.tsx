import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBackground from "@/assets/hero-background.png";

export function OpeningStatement() {
  return (
    <section className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      
      <div className="container-narrow text-center relative z-10 py-32 px-6 pt-40">
        {/* Subtle company identifier */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.3em] text-white/50 mb-12"
        >
          Sorø Micro Soft
        </motion.p>
        
        {/* Primary headline - bold, memorable */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-10"
          style={{ letterSpacing: "-0.04em" }}
        >
          Stabil drift.
          <br />
          <span className="text-white/70">Intet mindre.</span>
        </motion.h1>
        
        {/* Supporting line - grounded, human */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-md mx-auto leading-relaxed mb-14"
        >
          Vi holder virksomheders IT kørende — dag efter dag, år efter år. 
          Siden 1990.
        </motion.p>
        
        {/* Single, calm CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-3 text-base text-white/90 hover:text-white transition-colors duration-300 group"
          >
            <span>Tag en snak med os</span>
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
