import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

import BackgroundScene from './components/BackgroundScene';
import NavMenu from './components/NavMenu';
import Hero from './components/Hero';
import GlassCard from './components/GlassCard';

const Page = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="relative min-h-screen"
  >
    {children}
  </motion.main>
);

const HomePage = () => (
  <Page>
    <Hero />
  </Page>
);

const LoginPage = () => (
  <Page>
    <div className="relative z-10 grid place-items-center min-h-[80vh] px-6 md:px-10">
      <GlassCard className="w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold" style={{ color: '#FFFFE3' }}>NeuroLedger</h2>
        <p className="mt-1 opacity-90" style={{ color: '#FFFFE3' }}>Access your dashboard securely</p>
        <form className="mt-6 space-y-4">
          <div>
            <label className="block mb-1" style={{ color: '#FFFFE3' }}>Email</label>
            <input type="email" className="w-full rounded-lg px-3 py-2 bg-white/10 outline-none focus:ring-2" style={{ color: '#FFFFE3' }} placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1" style={{ color: '#FFFFE3' }}>Password</label>
            <input type="password" className="w-full rounded-lg px-3 py-2 bg-white/10 outline-none focus:ring-2" style={{ color: '#FFFFE3' }} placeholder="••••••••" />
          </div>
          <button className="w-full rounded-xl py-3 font-semibold" style={{ background: '#FFFFF0', color: '#0B2A6D' }}>Sign In</button>
        </form>
      </GlassCard>
    </div>
  </Page>
);

const UploadPage = () => (
  <Page>
    <div className="relative z-10 grid place-items-center min-h-[80vh] px-6 md:px-10">
      <GlassCard className="w-full max-w-2xl p-6">
        <h2 className="text-2xl font-semibold" style={{ color: '#FFFFE3' }}>Upload</h2>
        <div className="mt-4 flex flex-col gap-3" style={{ color: '#FFFFE3' }}>
          <div className="flex items-center gap-3">
            <button className="rounded-lg px-4 py-2 bg-white/10">Select File</button>
            <button className="rounded-lg px-4 py-2 bg-white/10">Upload</button>
          </div>
          <p className="opacity-80 text-sm">Login state and API wiring can be added later. This focuses on the visual layer.</p>
        </div>
      </GlassCard>
    </div>
  </Page>
);

const VerifyPage = () => (
  <Page>
    <div className="relative z-10 grid place-items-center min-h-[80vh] px-6 md:px-10">
      <GlassCard className="w-full max-w-2xl p-6">
        <h2 className="text-2xl font-semibold" style={{ color: '#FFFFE3' }}>Verify</h2>
        <div className="mt-4 flex items-center gap-3" style={{ color: '#FFFFE3' }}>
          <button className="rounded-lg px-4 py-2 bg-white/10">Select File</button>
          <button className="rounded-lg px-4 py-2 bg-white/10">Verify</button>
        </div>
        <div className="mt-6 text-sm opacity-80" style={{ color: '#FFFFE3' }}>
          Results will appear here with animated cards and status indicators.
        </div>
      </GlassCard>
    </div>
  </Page>
);

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen" style={{ backgroundColor: '#121212' }}>
        <BackgroundScene />
        <NavMenu />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
