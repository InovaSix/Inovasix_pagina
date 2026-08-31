'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, GraduationCap, ArrowRight } from 'lucide-react'

const personas = [
  {
    icon: Lightbulb,
    title: 'Para Empreendedores',
    headline: 'Transforme sua ideia em realidade',
    description:
      'Tenha acesso a ferramentas profissionais de análise, mentoria e conexão com investidores. Da validação ao lançamento, nós guiamos cada etapa.',
    features: [
      { icon: '🧠', text: 'Análise IA ilimitada' },
      { icon: '📊', text: 'Dashboard de projetos' },
      { icon: '🎨', text: 'Pitch Deck Builder' },
      { icon: '💬', text: 'Conexão com investidores' },
      { icon: '👨‍🏫', text: 'Rede de mentores' },
      { icon: '🛠️', text: 'Dev Partner Network' },
    ],
    cta: 'Começar Gratuitamente',
    color: 'from-[--color-neon-blue] to-[--color-electric-blue]',
    glowColor: 'rgba(0, 217, 255, 0.3)',
  },
  {
    icon: TrendingUp,
    title: 'Para Investidores',
    headline: 'Encontre as melhores oportunidades antes dos outros',
    description:
      'Acesse projetos pré-analisados por IA, com score de viabilidade, projeções financeiras e match automático com seu perfil de investimento.',
    features: [
      { icon: '🎯', text: 'Match inteligente de projetos' },
      { icon: '📈', text: 'Analytics de mercado' },
      { icon: '🤖', text: 'Due diligence automatizada' },
      { icon: '💼', text: 'Portfolio management' },
      { icon: '📧', text: 'Alertas personalizados' },
      { icon: '🔐', text: 'Deal room privado' },
    ],
    cta: 'Acessar Plataforma',
    color: 'from-[--color-neon-purple] to-[--color-deep-purple]',
    glowColor: 'rgba(168, 85, 247, 0.3)',
  },
  {
    icon: GraduationCap,
    title: 'Para Mentores',
    headline: 'Ajude a próxima geração de founders',
    description:
      'Compartilhe sua experiência, conecte-se com empreendedores alinhados com sua expertise e construa seu legado no ecossistema de inovação.',
    features: [
      { icon: '🎓', text: 'Perfil de mentor verificado' },
      { icon: '📅', text: 'Sessões agendadas' },
      { icon: '💰', text: 'Monetização opcional' },
      { icon: '🏆', text: 'Ranking de impacto' },
      { icon: '🤝', text: 'Equity opportunities' },
      { icon: '📊', text: 'Métricas de mentoria' },
    ],
    cta: 'Tornar-se Mentor',
    color: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245, 158, 11, 0.3)',
  },
]

export default function Ecosystem() {
  return (
    <section className="relative py-32 overflow-hidden bg-[--color-bg-secondary]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="blur-orb-blue w-96 h-96 top-0 right-0 opacity-10" />
        <div className="blur-orb-purple w-96 h-96 bottom-0 left-0 opacity-10" />
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
            Um{' '}
            <span className="gradient-text">Ecossistema</span>
            <br />
            Completo de Inovação
          </h2>
          <p className="text-xl text-[--color-text-secondary] max-w-2xl mx-auto">
            Conectamos empreendedores, investidores e mentores em uma plataforma única
          </p>
        </motion.div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon

            return (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="h-full glass-hover rounded-3xl p-8 relative overflow-hidden group"
                >
                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${persona.glowColor} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${persona.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </motion.div>

                    {/* Badge */}
                    <div className="text-xs font-bold text-[--color-text-muted] uppercase tracking-wide mb-2">
                      {persona.title}
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl font-black mb-4">{persona.headline}</h3>

                    {/* Description */}
                    <p className="text-[--color-text-secondary] mb-6 leading-relaxed">
                      {persona.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {persona.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <span className="text-xl">{feature.icon}</span>
                          <span className="text-sm text-[--color-text-secondary]">
                            {feature.text}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-gradient-to-r ${persona.color} hover:shadow-lg`}
                      style={{
                        boxShadow: `0 0 20px ${persona.glowColor}`,
                      }}
                    >
                      <span>{persona.cta}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 glass rounded-3xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-black gradient-text mb-2">1,247+</div>
              <div className="text-sm text-[--color-text-muted]">Empreendedores Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black gradient-text mb-2">150+</div>
              <div className="text-sm text-[--color-text-muted]">Investidores Registrados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black gradient-text mb-2">80+</div>
              <div className="text-sm text-[--color-text-muted]">Mentores Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black gradient-text mb-2">R$ 15M+</div>
              <div className="text-sm text-[--color-text-muted]">Investimentos Conectados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
