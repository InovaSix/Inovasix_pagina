'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Sparkles, BarChart3, MessageSquare, Zap, Eye } from 'lucide-react'

const capabilities = [
  {
    icon: Brain,
    title: 'Automação Inteligente',
    description: 'Processos que se otimizam sozinhos',
    stat: '-70% custos',
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue-light',
    statColor: 'text-accent-blue-light',
  },
  {
    icon: BarChart3,
    title: 'Análise Preditiva',
    description: 'Antecipe tendências do mercado',
    stat: '+300% insights',
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple-vibrant',
    statColor: 'text-accent-purple-vibrant',
  },
  {
    icon: MessageSquare,
    title: 'Chatbots Avançados',
    description: 'Atendimento 24/7 inteligente',
    stat: '+250% engajamento',
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue-light',
    statColor: 'text-accent-blue-light',
  },
  {
    icon: Eye,
    title: 'Visão Computacional',
    description: 'Reconhecimento facial e OCR',
    stat: '99.5% precisão',
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple-vibrant',
    statColor: 'text-accent-purple-vibrant',
  },
  {
    icon: Sparkles,
    title: 'Experiência Personalizada',
    description: 'Cada usuário é único',
    stat: '+180% retenção',
    iconBg: 'bg-accent-blue/10',
    iconColor: 'text-accent-blue-light',
    statColor: 'text-accent-blue-light',
  },
  {
    icon: Zap,
    title: 'Processamento Rápido',
    description: 'IA otimizada para performance',
    stat: '10x mais rápido',
    iconBg: 'bg-accent-purple/10',
    iconColor: 'text-accent-purple-vibrant',
    statColor: 'text-accent-purple-vibrant',
  },
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

export default function AISection() {
  return (
    <section id="ia" className="py-24 md:py-32 bg-bg-deep relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-accent-blue-light bg-accent-blue/10 border border-accent-blue/20 px-5 py-2 rounded-full mb-6">
            Inteligência Artificial
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Potencialize seu negócio <br />
            <span className="text-gradient-tech">com o Poder da IA</span>
          </h2>
          <p className="text-lg md:text-xl text-text-elegant max-w-2xl mx-auto leading-relaxed">
            Empresas que investem em IA crescem 3x mais rápido. 
            Nós construímos o cérebro digital da sua empresa.
          </p>
        </motion.div>

        {/* Harmonized card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={itemVariants}
              className="glass rounded-3xl p-8 group hover:border-accent-blue/30 hover:bg-white/[0.05] transition-all duration-500 hover:-translate-y-2 shadow-2xl shadow-black/20"
            >
              <div className={`w-14 h-14 rounded-2xl ${cap.iconBg} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <cap.icon className={`w-7 h-7 ${cap.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
              <p className="text-text-muted mb-6 leading-relaxed">{cap.description}</p>
              <div className={`text-3xl font-black ${cap.statColor} tracking-tight`}>{cap.stat}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="#contato"
            className="inline-flex items-center gap-4 bg-gradient-tech text-white font-black uppercase tracking-widest px-10 py-5 rounded-2xl transition-all duration-500 shadow-2xl shadow-accent-blue/30 hover:scale-105 group"
          >
            Implementar IA Agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
