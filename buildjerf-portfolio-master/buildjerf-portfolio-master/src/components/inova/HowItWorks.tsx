'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Brain, Map, Handshake, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Envie sua Ideia',
    headline: 'Descreva sua Visão',
    description:
      'Em poucos minutos, conte-nos sobre seu projeto, problema que resolve e público-alvo. Nossa IA vai entender o contexto completo.',
    color: 'from-[--color-neon-blue]',
  },
  {
    number: '02',
    icon: Brain,
    title: 'IA Analisa em Segundos',
    headline: 'Análise Inteligente Instantânea',
    description:
      'Nossa IA avançada analisa viabilidade técnica, mercado, concorrência e potencial de investimento usando dados de milhares de projetos.',
    color: 'from-[--color-neon-purple]',
  },
  {
    number: '03',
    icon: Map,
    title: 'Receba Roadmap Completo',
    headline: 'Seu Plano de Ação Personalizado',
    description:
      'Obtenha um roadmap detalhado com etapas, tecnologias recomendadas, estimativa de custos e timeline realista para lançamento.',
    color: 'from-[--color-electric-blue]',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Conecte-se com Investidores',
    headline: 'Match com Investidores Certos',
    description:
      'Nossa plataforma conecta você automaticamente com investidores que procuram projetos como o seu. Pitch pronto, só apresentar.',
    color: 'from-[--color-deep-purple]',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="blur-orb-blue w-96 h-96 top-0 right-0 opacity-20" />
        <div className="blur-orb-purple w-96 h-96 bottom-0 left-0 opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Como{' '}
            <span className="gradient-text">Funciona</span>
          </h2>
          <p className="text-xl text-[--color-text-secondary] max-w-2xl mx-auto">
            Do conceito ao lançamento em 4 etapas simples
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-12 lg:gap-20`}
              >
                {/* Content */}
                <div className="flex-1 space-y-6">
                  {/* Step Number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-block"
                  >
                    <div className={`text-8xl font-black bg-gradient-to-r ${step.color} to-transparent bg-clip-text text-transparent opacity-20`}>
                      {step.number}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-black">
                    {step.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-[--color-text-secondary] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mini CTA */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-[--color-neon-blue] font-semibold group"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Visual/Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex-1 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} to-transparent opacity-20 blur-3xl rounded-full`} />

                    {/* Icon Container */}
                    <div className="relative glass-hover rounded-3xl p-16 w-80 h-80 flex items-center justify-center">
                      <Icon className="w-32 h-32 text-white" strokeWidth={1.5} />
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full border border-white/20"
                    >
                      <span className="text-sm font-bold gradient-text">
                        {step.title}
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Connection Lines */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="w-full h-full bg-gradient-to-b from-[--color-neon-blue] via-[--color-neon-purple] to-[--color-deep-purple] opacity-20 origin-top"
          />
        </div>
      </div>
    </section>
  )
}
