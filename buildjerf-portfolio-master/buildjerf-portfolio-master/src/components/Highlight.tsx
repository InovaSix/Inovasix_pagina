'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  'Arquitetura em Microserviços',
  'IA Generativa Aplicada',
  'DevOps & Cloud Nativo',
  'Performance Ultra-rápida',
]

export default function Highlight() {
  return (
    <section className="relative bg-gradient-to-br from-bg-deep via-accent-blue/20 to-bg-deep py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-xs font-black text-accent-blue-light bg-accent-blue/10 px-5 py-2 rounded-full mb-8 border border-accent-blue/20 uppercase tracking-[0.2em]">
              The Innovation Standard
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
              Inovasistema: <br />
              o novo padrão em{' '}
              <span className="text-gradient-tech">tecnologia de elite</span>
            </h2>
            <p className="text-text-elegant text-lg md:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              Não apenas construímos software; arquitetamos vantagens competitivas 
              através de IA avançada e infraestrutura de escala global.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <div className="w-5 h-5 rounded-full bg-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-accent-blue-light" />
                  </div>
                  <span className="text-sm font-bold text-text-elegant">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-3 bg-gradient-tech text-white font-black uppercase tracking-widest px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-accent-blue/20"
              >
                Iniciar Projeto
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-3 glass text-white font-black uppercase tracking-widest px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                Cases de Sucesso
              </a>
            </div>
          </motion.div>

          {/* Visual - system preview card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-[2.5rem] border-white/10 p-8 md:p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
              {/* Mini window controls */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-accent-blue/30" />
                <div className="w-3 h-3 rounded-full bg-accent-purple/30" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>

              {/* Dynamic Interface Preview */}
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-blue/40 to-transparent border border-accent-blue/20 shadow-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="w-3/4 h-2.5 bg-white/10 rounded-full" />
                    <div className="w-1/2 h-2 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/40 to-transparent border border-accent-purple/20 shadow-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="w-2/3 h-2.5 bg-white/10 rounded-full" />
                    <div className="w-1/3 h-2 bg-white/5 rounded-full" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/5 shadow-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="w-4/5 h-2.5 bg-white/10 rounded-full" />
                    <div className="w-2/5 h-2 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '60+', label: 'Sistemas', color: 'text-accent-blue-light' },
                  { value: '2M+', label: 'Users', color: 'text-accent-purple-vibrant' },
                  { value: '99%', label: 'SLA', color: 'text-white' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-5 text-center border border-white/5">
                    <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                    <p className="text-[9px] font-black uppercase tracking-widest text-text-muted mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative floating badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-tech text-white text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl shadow-2xl animate-bounce">
              #1 Tech Partner
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
