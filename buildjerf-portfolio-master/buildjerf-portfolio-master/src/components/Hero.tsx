'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { sitePath } from '@/lib/site'
import {
  ArrowRight,
  Bot,
  CloudCog,
  Code2,
  Cpu,
  Database,
  Globe,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react'

const techElements = [
  { icon: Code2, x: 8, y: 16, depth: 20, delay: 0 },
  { icon: Database, x: 84, y: 24, depth: 16, delay: 0.1 },
  { icon: Cpu, x: 10, y: 58, depth: 17, delay: 0.2 },
  { icon: Globe, x: 86, y: 64, depth: 18, delay: 0.3 },
  { icon: Smartphone, x: 18, y: 38, depth: 14, delay: 0.4 },
  { icon: ShieldCheck, x: 76, y: 32, depth: 13, delay: 0.5 },
  { icon: Workflow, x: 28, y: 74, depth: 15, delay: 0.25 },
  { icon: CloudCog, x: 72, y: 12, depth: 16, delay: 0.35 },
  { icon: Bot, x: 72, y: 78, depth: 14, delay: 0.45 },
  { icon: Server, x: 92, y: 46, depth: 12, delay: 0.15 },
]

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    const x = (clientX / innerWidth - 0.5) * 20
    const y = (clientY / innerHeight - 0.5) * 20
    setMouse({ x, y })
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-deep pt-20 pb-16 lg:pb-0"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1E90FF_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue-light">
                O Próximo Nível da Tecnologia
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              Transformamos <br />
              <span className="text-gradient-tech">Ideias em Código</span> <br />
              de Elite
            </h1>

            <p className="text-lg md:text-xl text-text-elegant mb-10 max-w-xl leading-relaxed font-medium">
              Desenvolvimento de software premium para empresas que buscam 
              excelência e resultados excepcionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="#contato"
                className="group bg-gradient-tech text-white px-8 py-4 rounded-2xl text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-accent-blue/30 hover:scale-105 flex items-center justify-center gap-3"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#clientes"
                className="glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-lg font-black uppercase tracking-widest transition-all duration-300 border border-white/10 flex items-center justify-center gap-2"
              >
                Clientes
              </a>
            </div>

            {/* Tech stack mini icons */}
            <div className="mt-12 pt-8 border-t border-white/5 flex gap-8 items-center justify-center lg:justify-start opacity-40">
              <Code2 className="w-6 h-6 text-white" />
              <Database className="w-6 h-6 text-white" />
              <Cpu className="w-6 h-6 text-white" />
              <Globe className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* Video with Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 1, x: 0 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative group w-screen -ml-4 sm:-ml-6 lg:ml-0 lg:w-full mb-12 lg:mb-0 order-1 lg:order-2"
          >
            {/* The "Infinite" Video Container - Adjusted for Full Frame */}
            <div className="relative z-10 overflow-hidden">
              <div className="relative flex items-center justify-center">
                {/* Mask for infinite edges effect - disabled/softened for mobile full frame */}
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_20px_10px_#050810] lg:shadow-[inset_0_0_60px_20px_#050810]" />
                
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto lg:h-full lg:object-cover scale-100 lg:scale-90"
                  style={{
                    maskImage: 'none',
                    WebkitMaskImage: 'none'
                  }}
                >
                  <source src={sitePath('/video/video-logo-interativa.mp4')} type="video/mp4" />
                </video>

                {/* Overlays for total blending - reduced for mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/60 via-transparent to-[#050810]/40 pointer-events-none lg:block" />
              </div>
            </div>

            {/* Subtle Glow behind the video */}
            <div className="absolute -inset-20 bg-accent-blue/10 blur-[100px] rounded-full opacity-30 -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Decorative floating tech icons in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {techElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.1,
              x: mouse.x * (element.depth / 20),
              y: mouse.y * (element.depth / 20)
            }}
            className="absolute hidden lg:block"
            style={{
              top: `${element.y}%`,
              left: `${element.x}%`,
            }}
          >
            <element.icon className="w-12 h-12 text-accent-blue-light" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
