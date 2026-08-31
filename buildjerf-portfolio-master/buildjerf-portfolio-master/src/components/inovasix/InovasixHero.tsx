'use client';

import { motion } from 'framer-motion';

export default function InovasixHero() {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[760px] flex items-center pt-20 pb-16" id="top">
      {/* Background Video */}
      <video
        src="/videos/iNOVAsIX.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/75 to-[#020817]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

      <div className="container mx-auto px-8 max-w-[1280px] relative z-10">
        <div className="max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Software Engineering &amp; IA Aplicada
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Software mais rápido.{' '}
            <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent animate-gradient">
              Mais inteligente. Mais seguro.
            </span>
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
