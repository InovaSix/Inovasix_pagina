'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Users,
  Smartphone,
  ShoppingCart,
  BarChart3,
  Settings,
  Zap,
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Sistemas ERP',
    description:
      'Integração completa de processos empresariais com gestão financeira, RH e logística.',
  },
  {
    icon: Users,
    title: 'CRM Personalizado',
    description:
      'Gestão inteligente de relacionamento com clientes e leads para maximizar vendas.',
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Móveis',
    description:
      'Apps nativos para iOS e Android com design moderno e funcionalidades avançadas.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    description:
      'Plataformas de vendas online com checkout seguro e gestão completa de produtos.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description:
      'Dashboards inteligentes para análise de dados e suporte à tomada de decisões.',
  },
  {
    icon: Zap,
    title: 'Automação n8n',
    description:
      'Workflows automatizados sem código para conectar sistemas e otimizar processos.',
  },
  {
    icon: Settings,
    title: 'Sistemas Personalizados + IA',
    description:
      'Soluções sob medida com Inteligência Artificial para impulsionar seu negócio.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 text-xs font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-slate-200 mb-6">
            Expertise Técnica
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 tracking-tight">
            Soluções que <br />
            <span className="text-gradient-tech">aceleram seu negócio</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            Dominamos as tecnologias mais avançadas para construir sistemas que 
            realmente transformam a realidade da sua empresa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-accent-blue/30 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-tech p-[1px] mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-accent-blue" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-text-muted leading-relaxed font-medium text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
