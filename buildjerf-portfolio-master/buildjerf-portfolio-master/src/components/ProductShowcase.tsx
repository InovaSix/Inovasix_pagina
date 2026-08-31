'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Monitor, Smartphone, BarChart3, Shield } from 'lucide-react'

export default function ProductShowcase() {
  return (
    <section id="ecossistema" className="bg-bg-deep py-24 md:py-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue-light text-xs font-black uppercase tracking-widest px-5 py-2 rounded-full border border-accent-blue/20">
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            Inovasistema Ecosystem
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white text-center mb-6 tracking-tight"
        >
          Sua visão digital, <br />
          <span className="text-gradient-tech">executada com precisão</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-text-elegant text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Arquitetura de software de última geração projetada para 
          máxima performance e escalabilidade global.
        </motion.p>

        {/* Mockup UI Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="glass rounded-[2rem] border-white/10 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="ml-6 flex-1 bg-white/5 rounded-lg h-8 flex items-center px-4 border border-white/5">
                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">inovasistema.com/cloud-terminal</span>
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {[
                  { icon: Monitor, label: 'Deployment Status', value: 'Active', color: 'bg-accent-blue/20 text-accent-blue-light' },
                  { icon: Smartphone, label: 'Cloud Sync', value: '100%', color: 'bg-accent-purple/20 text-accent-purple-vibrant' },
                  { icon: BarChart3, label: 'System Load', value: 'Optimal', color: 'bg-accent-blue/20 text-accent-blue-light' },
                  { icon: Shield, label: 'Security Layer', value: 'Encrypted', color: 'bg-accent-purple/20 text-accent-purple-vibrant' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-2xl p-5 border border-white/5 group hover:bg-white/10 transition-colors duration-300">
                    <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <p className="text-xl font-black text-white">{stat.value}</p>
                    <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Chart placeholder */}
              <div className="bg-white/5 rounded-2xl p-6 border border-white/5 relative overflow-hidden group hover:border-accent-blue/30 transition-all duration-500">
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <span className="text-xs font-black uppercase tracking-widest text-white/60">Real-time Performance</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent-blue-light">Live Stream</span>
                  </div>
                </div>
                <div className="flex items-end gap-3 h-40 relative z-10">
                  {[40, 55, 35, 70, 50, 85, 65, 90, 75, 95, 80, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-accent-blue/40 to-accent-purple/80 hover:to-accent-blue-light transition-all duration-500 cursor-pointer"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              </div>
            </div>
          </div>

          {/* Glow effect behind card */}
          <div className="absolute -inset-10 bg-gradient-to-r from-accent-blue/10 via-transparent to-accent-purple/10 rounded-[3rem] blur-[80px] -z-10" />
        </motion.div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-4 bg-gradient-tech text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-accent-blue/30 hover:scale-105"
          >
            Deploy Your Vision
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
