'use client'

import { motion } from 'framer-motion'
import { Check, Zap, Star, Crown } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Landing Page',
    icon: Zap,
    price: 'R$ 850',
    period: 'projeto',
    description: 'Sites institucionais modernos e responsivos',
    features: [
      'Design responsivo',
      'SEO otimizado',
      'Formulário de contato',
      'Integração redes sociais',
      'Suporte por 1 mês',
      'Hospedagem inclusa',
    ],
    popular: false,
  },
  {
    name: 'E-commerce',
    icon: Star,
    price: 'R$ 5.000',
    period: 'projeto',
    description: 'Loja virtual completa com gestão de produtos',
    features: [
      'Catálogo de produtos',
      'Carrinho de compras',
      'Checkout seguro',
      'Painel administrativo',
      'Relatórios de vendas',
      'Suporte por 3 meses',
      'Integração pagamentos',
      'SEO otimizado',
    ],
    popular: true,
  },
  {
    name: 'Sistema Personalizado',
    icon: Crown,
    price: 'R$ 10.000+',
    period: 'projeto',
    description: 'Soluções sob medida com IA para impulsionar seu negócio',
    features: [
      'Desenvolvimento sob medida',
      'Inteligência Artificial integrada',
      'Automação de processos',
      'Análise preditiva de dados',
      'Múltiplos módulos',
      'API completa',
      'Suporte por 6 meses',
      'Treinamento incluído',
      'Documentação técnica',
      'Hospedagem cloud',
      'Monitoramento 24/7',
      'Escalabilidade garantida',
    ],
    popular: false,
  },
]

const additionalServices = [
  { service: 'Aplicativo Mobile', price: 'R$ 8.000 - R$ 30.000', description: 'iOS e Android nativos' },
  { service: 'Automação n8n', price: 'R$ 3.000 - R$ 12.000', description: 'Workflows automatizados' },
  { service: 'Integração com ERP', price: 'R$ 3.000 - R$ 15.000', description: 'Conecte com sistemas existentes' },
  { service: 'Consultoria Técnica', price: 'R$ 150/hora', description: 'Especialistas em tecnologia' },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
}

export default function Pricing() {
  return (
    <section id="precos" className="py-24 md:py-32 bg-bg-alt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Investimento <br />
            <span className="text-gradient-tech">transparente e escalável</span>
          </h2>
          <p className="text-lg md:text-xl text-text-elegant max-w-2xl mx-auto leading-relaxed">
            Soluções sob medida com precificação clara. 
            Transformamos seu investimento em vantagem competitiva.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              className={`relative glass rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                plan.popular
                  ? 'border-accent-blue/30 bg-white/[0.05] shadow-2xl shadow-accent-blue/10'
                  : 'border-white/5 shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-tech text-white text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full shadow-xl">
                    Mais Requisitado
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex p-4 rounded-2xl mb-6 ${
                    plan.popular
                      ? 'bg-accent-blue/20'
                      : 'bg-white/5'
                  }`}
                >
                  <plan.icon
                    className={`w-8 h-8 ${
                      plan.popular ? 'text-accent-blue-light' : 'text-text-muted'
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-text-muted mb-6">
                  {plan.description}
                </p>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-text-muted font-bold text-xs uppercase tracking-wider">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-accent-blue-light' : 'text-white/20'
                      }`}
                    />
                    <span className="text-sm text-text-elegant font-medium leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-5 px-8 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-tech text-white shadow-xl shadow-accent-blue/20 hover:scale-105'
                    : 'glass text-white hover:bg-white/10'
                }`}
              >
                Solicitar Orçamento
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-10 border-white/5"
        >
          <h3 className="text-xl font-bold text-white mb-8 text-center tracking-tight">
            Módulos e Serviços Adicionais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((s) => (
              <div
                key={s.service}
                className="bg-white/5 rounded-2xl p-6 border border-white/5 hover:border-accent-blue/30 transition-all duration-300 group"
              >
                <h4 className="font-bold text-text-elegant mb-2 text-sm group-hover:text-white">
                  {s.service}
                </h4>
                <p className="text-xl font-black text-accent-blue-light mb-1">
                  {s.price}
                </p>
                <p className="text-xs text-text-muted font-medium">{s.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
