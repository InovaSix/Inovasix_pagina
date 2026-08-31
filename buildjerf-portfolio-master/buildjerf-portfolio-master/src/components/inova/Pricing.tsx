'use client'

import { motion } from 'framer-motion'
import { Check, X, Zap, Rocket, Building2, Sparkles } from 'lucide-react'
import { useState } from 'react'

const plans = [
  {
    name: 'Análise Gratuita',
    price: 0,
    priceAnnual: 0,
    tagline: 'Perfeito para validar sua ideia',
    icon: Sparkles,
    features: [
      { text: '1 análise de ideia por mês', included: true },
      { text: 'Relatório básico de viabilidade', included: true },
      { text: 'Score IA', included: true },
      { text: 'Recomendações gerais', included: true },
      { text: 'Roadmap detalhado', included: false },
      { text: 'Acesso a investidores', included: false },
    ],
    cta: 'Começar Agora',
    popular: false,
    color: 'from-gray-500 to-gray-600',
  },
  {
    name: 'Starter',
    price: 297,
    priceAnnual: 2970,
    tagline: 'Para empreendedores sérios',
    icon: Zap,
    features: [
      { text: '5 análises de ideias por mês', included: true },
      { text: 'Relatórios completos', included: true },
      { text: 'Roadmap detalhado em PDF', included: true },
      { text: 'Dashboard de projetos', included: true },
      { text: 'Pitch Deck Builder', included: true },
      { text: 'Perfil público para investidores', included: true },
      { text: '3 conexões com investidores/mês', included: true },
      { text: 'Suporte prioritário', included: true },
    ],
    cta: 'Assinar Starter',
    popular: true,
    color: 'from-[--color-neon-blue] to-[--color-electric-blue]',
  },
  {
    name: 'Growth',
    price: 897,
    priceAnnual: 8970,
    tagline: 'Escale seu negócio',
    icon: Rocket,
    features: [
      { text: 'Análises ilimitadas', included: true },
      { text: 'Tudo do Starter +', included: true },
      { text: 'Conexões ilimitadas com investidores', included: true },
      { text: 'Acesso a rede de mentores', included: true },
      { text: 'Dev Partner Network', included: true },
      { text: 'API Access', included: true },
      { text: 'White-label reports', included: true },
      { text: 'Consultoria estratégica 2h/mês', included: true },
    ],
    cta: 'Assinar Growth',
    popular: false,
    color: 'from-[--color-neon-purple] to-[--color-deep-purple]',
  },
  {
    name: 'Enterprise',
    price: null,
    priceAnnual: null,
    tagline: 'Para corporações e aceleradoras',
    icon: Building2,
    features: [
      { text: 'Tudo do Growth +', included: true },
      { text: 'Multi-team workspace', included: true },
      { text: 'Custom IA training', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'SLA garantido', included: true },
      { text: 'Integrações customizadas', included: true },
      { text: 'Treinamento on-site', included: true },
    ],
    cta: 'Falar com Especialista',
    popular: false,
    color: 'from-amber-500 to-orange-600',
  },
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[--color-bg-primary]">
        <div className="blur-orb-blue w-96 h-96 top-1/2 left-1/4 opacity-10" />
        <div className="blur-orb-purple w-96 h-96 top-1/2 right-1/4 opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Planos para Cada{' '}
            <span className="gradient-text">Estágio</span>
          </h2>
          <p className="text-xl text-[--color-text-secondary] max-w-2xl mx-auto mb-8">
            Comece gratuitamente e escale conforme seu projeto cresce
          </p>

          {/* Toggle Mensal/Anual */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-[--color-text-muted]'}`}>
              Mensal
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full glass transition-colors duration-300"
            >
              <motion.div
                animate={{ x: isAnnual ? 28 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple]"
              />
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-[--color-text-muted]'}`}>
              Anual
            </span>
            {isAnnual && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-bold text-[--color-neon-blue] bg-[--color-neon-blue]/10 px-3 py-1 rounded-full"
              >
                Economize 10%
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon
            const price = isAnnual ? plan.priceAnnual : plan.price

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      Mais Popular
                    </div>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ y: -8, scale: plan.popular ? 1.02 : 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`h-full glass-hover rounded-3xl p-8 ${
                    plan.popular ? 'border-2 border-[--color-neon-blue]' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-black mb-2">{plan.name}</h3>
                  <p className="text-sm text-[--color-text-muted] mb-6">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mb-8">
                    {price === null ? (
                      <div className="text-4xl font-black">Sob consulta</div>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-black">R$ {price.toLocaleString('pt-BR')}</span>
                          {price > 0 && (
                            <span className="text-[--color-text-muted]">/{isAnnual ? 'ano' : 'mês'}</span>
                          )}
                        </div>
                        {isAnnual && price > 0 && (
                          <p className="text-xs text-[--color-text-muted] mt-1">
                            ou R$ {Math.round(price / 12).toLocaleString('pt-BR')}/mês
                          </p>
                        )}
                      </>
                    )}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-xl font-bold mb-8 transition-all duration-300 ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-[--color-neon-blue] mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-[--color-text-muted] mt-0.5 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-[--color-text-secondary]' : 'text-[--color-text-muted]'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-[--color-text-muted] mb-4">
            Todos os planos incluem atualizações gratuitas e suporte via email
          </p>
          <div className="flex items-center justify-center gap-8 text-sm">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[--color-neon-blue]" />
              <span className="text-[--color-text-secondary]">Cancele quando quiser</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[--color-neon-blue]" />
              <span className="text-[--color-text-secondary]">Sem taxas escondidas</span>
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[--color-neon-blue]" />
              <span className="text-[--color-text-secondary]">Dados 100% seguros</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
