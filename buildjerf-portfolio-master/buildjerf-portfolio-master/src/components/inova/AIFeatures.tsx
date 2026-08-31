'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Target, Map, DollarSign, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Validação de Mercado',
    headline: 'Descubra se sua ideia tem mercado',
    description:
      'Nossa IA analisa tendências de busca, comportamento do consumidor, tamanho de mercado e crescimento projetado. Você saberá se há demanda real antes de investir tempo e dinheiro.',
    benefits: [
      'Análise de tendências Google Trends',
      'Benchmarking de concorrentes',
      'TAM, SAM, SOM calculado',
      'Previsão de crescimento 5 anos',
    ],
    color: 'from-[--color-neon-blue]',
    glowColor: 'rgba(0, 217, 255, 0.2)',
  },
  {
    icon: TrendingUp,
    title: 'Análise de Viabilidade',
    headline: 'Saiba exatamente o que precisa construir',
    description:
      'Receba recomendações técnicas precisas baseadas em sua ideia: stack tecnológico ideal, arquitetura sugerida, integrações necessárias e complexidade real.',
    benefits: [
      'Stack tecnológico recomendado',
      'Arquitetura de sistema',
      'APIs e integrações necessárias',
      'Estimativa de tempo de dev',
    ],
    color: 'from-[--color-neon-purple]',
    glowColor: 'rgba(168, 85, 247, 0.2)',
  },
  {
    icon: Map,
    title: 'Roadmap de MVP',
    headline: 'Do zero ao lançamento em etapas claras',
    description:
      'Um roadmap visual e detalhado mostrando exatamente o que construir primeiro, quais features são essenciais e como validar cada etapa com usuários reais.',
    benefits: [
      'Priorização de features (MoSCoW)',
      'Timeline realista por fase',
      'Milestones de validação',
      'KPIs recomendados',
    ],
    color: 'from-[--color-electric-blue]',
    glowColor: 'rgba(59, 130, 246, 0.2)',
  },
  {
    icon: DollarSign,
    title: 'Estimativa de Investimento',
    headline: 'Saiba quanto você precisa captar',
    description:
      'Projeção financeira completa: custos de desenvolvimento, marketing, operação e runway. Descubra quanto investimento você realmente precisa para chegar ao market fit.',
    benefits: [
      'Breakdown de custos detalhado',
      'Projeção de runway (12-24 meses)',
      'Cenários: otimista, realista, pessimista',
      'Sugestão de valuation inicial',
    ],
    color: 'from-[--color-deep-purple]',
    glowColor: 'rgba(124, 58, 237, 0.2)',
  },
]

export default function AIFeatures() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="blur-orb-purple w-96 h-96 top-0 left-0 opacity-20" />
        <div className="blur-orb-blue w-96 h-96 bottom-0 right-0 opacity-20" />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <span className="text-sm font-semibold text-[--color-neon-blue]">
              🤖 Powered by AI
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Inteligência Artificial de{' '}
            <span className="gradient-text">Ponta</span>
            <br />
            para Decisões{' '}
            <span className="gradient-text">Inteligentes</span>
          </h2>
          <p className="text-xl text-[--color-text-secondary] max-w-3xl mx-auto">
            Nossa IA foi treinada com dados de mais de 10.000 startups, análises de mercado e
            padrões de sucesso. Usamos modelos de última geração para entregar insights que
            investidores levam semanas para descobrir.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full glass-hover rounded-3xl p-8 relative overflow-hidden group"
                >
                  {/* Glow Effect on Hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${feature.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} to-transparent flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-black mb-3">{feature.headline}</h3>

                    {/* Description */}
                    <p className="text-[--color-text-secondary] mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Benefits List */}
                    <ul className="space-y-3 mb-6">
                      {feature.benefits.map((benefit, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <svg
                            className="w-5 h-5 text-[--color-neon-blue] mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-[--color-text-secondary]">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[--color-neon-blue] font-semibold text-sm group/btn"
                    >
                      <span>Ver exemplo de análise</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full" strokeWidth={1} />
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Analisar Minha Ideia Agora</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <p className="text-sm text-[--color-text-muted] mt-4">
            ✨ Análise gratuita em menos de 60 segundos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
