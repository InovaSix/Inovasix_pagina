'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Lock, Zap } from 'lucide-react'

interface InovaHeroProps {
  onStartAnalysis: () => void
}

export default function InovaHero({ onStartAnalysis }: InovaHeroProps) {
  return (
    <section id="inova-labs" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 mesh-background">
        {/* Blur Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="blur-orb-blue w-96 h-96 top-1/4 left-1/4"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="blur-orb-purple w-96 h-96 bottom-1/4 right-1/4"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 text-[--color-neon-blue]" />
          <span className="text-sm font-semibold">Powered by AI • Inova Labs</span>
          <Sparkles className="w-4 h-4 text-[--color-neon-purple]" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          Transformamos{' '}
          <span className="gradient-text">Ideias</span>
          <br />
          em{' '}
          <span className="gradient-text">Negócios Digitais</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-[--color-text-secondary] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Envie sua ideia, receba uma análise por{' '}
          <span className="text-[--color-neon-blue] font-semibold">Inteligência Artificial</span>{' '}
          e descubra o caminho para transformar seu projeto em um produto real.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            onClick={onStartAnalysis}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 w-full sm:w-auto animate-pulse-glow"
          >
            <span>Analisar Minha Ideia Gratuitamente</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-secondary flex items-center gap-2 w-full sm:w-auto"
          >
            <span>Ver Como Funciona</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-[--color-text-muted]"
        >
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[--color-neon-blue]" />
            <span>Análise em menos de 60 segundos</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[--color-neon-purple]" />
            <span>100% confidencial e seguro</span>
          </div>
        </motion.div>

        {/* Floating Cards Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="glass-hover rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-black gradient-text mb-2">1,247+</div>
                <div className="text-sm text-[--color-text-secondary]">Ideias Analisadas</div>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-black gradient-text mb-2">89%</div>
                <div className="text-sm text-[--color-text-secondary]">Taxa de Viabilidade</div>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-black gradient-text mb-2">R$ 15M+</div>
                <div className="text-sm text-[--color-text-secondary]">Investimentos Conectados</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-white"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
