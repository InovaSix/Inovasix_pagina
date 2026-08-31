'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Star, Zap } from 'lucide-react'

interface FinalCTAProps {
  onStartAnalysis: () => void
}

export default function FinalCTA({ onStartAnalysis }: FinalCTAProps) {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="blur-orb-blue w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="blur-orb-purple w-[500px] h-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-hover rounded-[3rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
            >
              <Zap className="w-4 h-4 text-[--color-neon-blue]" />
              <span className="text-sm font-semibold">Comece agora, grátis</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight"
            >
              Sua ideia merece uma{' '}
              <span className="gradient-text">chance real</span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-[--color-text-secondary] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Pare de adiar. Descubra em minutos se sua ideia tem potencial, quanto vai custar e
              como chegar lá. Milhares de empreendedores já deram o primeiro passo.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <motion.button
                onClick={onStartAnalysis}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto animate-pulse-glow px-10 py-5 text-lg"
              >
                <span>Analisar Minha Ideia Agora</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2 w-full sm:w-auto px-10 py-5 text-lg"
              >
                <span>Agendar Demo</span>
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {/* Trust Badge 1 */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[--color-neon-blue]" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-[--color-text-muted]">ISO 27001</div>
                  <div className="text-sm font-bold">Certificado</div>
                </div>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <Star className="w-5 h-5 text-[--color-neon-purple]" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-[--color-text-muted]">4.9/5</div>
                  <div className="text-sm font-bold">500+ reviews</div>
                </div>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-[--color-text-muted]">Top 10</div>
                  <div className="text-sm font-bold">Inovação 2024</div>
                </div>
              </div>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm text-[--color-text-muted] mt-8"
            >
              ✨ Análise gratuita • 🔒 100% confidencial • ⚡ Resultado em 60 segundos
            </motion.p>
          </div>

          {/* Floating Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 rounded-full bg-[--color-neon-blue]"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
