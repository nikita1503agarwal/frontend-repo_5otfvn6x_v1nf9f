import React from 'react';
import { motion } from 'framer-motion';

import BackgroundScene from './components/BackgroundScene';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import GlassCard from './components/GlassCard';

const Section = ({ children }) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative min-h-[70vh] px-6 md:px-10"
  >
    {children}
  </motion.section>
);

function App() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#121212' }}>
      <BackgroundScene />
      <NavMenu />

      <Hero />

      <Section>
        <div className="relative z-10 grid place-items-center">
          <GlassCard className="w-full max-w-3xl p-6">
            <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: '#FFFFE3' }}>Experience the Flow</h2>
            <p className="mt-2 opacity-90" style={{ color: '#FFFFE3' }}>
              Smooth animations, glass surfaces, and an interactive 3D world. Explore Upload and Verify from the menu.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.28)' }}>
                <h3 className="font-semibold" style={{ color: '#FFFFE3' }}>Upload</h3>
                <p className="text-sm mt-1 opacity-80" style={{ color: '#FFFFE3' }}>Select a file and send it securely.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.28)' }}>
                <h3 className="font-semibold" style={{ color: '#FFFFE3' }}>Verify</h3>
                <p className="text-sm mt-1 opacity-80" style={{ color: '#FFFFE3' }}>Check integrity and see detailed results.</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>
    </div>
  );
}

export default App;
