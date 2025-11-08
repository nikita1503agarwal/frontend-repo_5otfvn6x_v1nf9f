import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] grid place-items-center px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight" style={{ color: '#FFFFE3' }}>
          NeuroLedger
        </h1>
        <p className="mt-4 text-base md:text-lg opacity-90" style={{ color: '#FFFFE3' }}>
          A modern, atmospheric interface with interactive 3D, glass panels and smooth motion.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <Link to="/login" className="group">
            <button
              className="rounded-xl px-6 py-3 font-semibold border transition-colors"
              style={{
                color: '#FFFFE3',
                borderColor: 'rgba(255,255,255,0.28)'
              }}
            >
              <span className="flex items-center gap-2">
                Get Started <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </button>
          </Link>
          <Link to="/verify" className="group">
            <button
              className="rounded-xl px-6 py-3 font-semibold border transition-colors"
              style={{
                color: '#FFFFE3',
                borderColor: 'rgba(255,255,255,0.28)'
              }}
            >
              <span className="flex items-center gap-2">Verify <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></span>
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
