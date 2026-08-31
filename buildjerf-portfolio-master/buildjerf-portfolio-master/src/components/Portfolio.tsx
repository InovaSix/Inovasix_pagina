'use client'

import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const projects = [
  {
    title: 'Sistema Antifraude',
    client: 'Raízen',
    description:
      'Sistema de cadastro com impressão digital para bloquear usuários fraudulentos, economizando milhares de dólares por ano.',
    metrics: '>2M contas bloqueadas',
    category: 'Segurança',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center',
    tags: ['AWS', 'Node.js', 'TypeScript'],
    url: undefined,
  },
  {
    title: 'Gestão de Lojistas',
    client: 'Multiplan',
    description:
      'Plataforma completa para administração de contratos e operações comerciais com dashboard analítico.',
    metrics: '+1000% performance',
    category: 'Gestão',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    tags: ['React', 'AWS', 'MySQL'],
    url: undefined,
  },
  {
    title: 'Sistema de Inquéritos',
    client: 'Polícia Civil BA',
    description:
      'Sistema com 30+ tipos de documentos e reconhecimento facial, reduzindo criação de 2 dias para 1 hora.',
    metrics: '-95% tempo',
    category: 'Governo',
    image:
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop&crop=center',
    tags: ['AWS', 'Rekognition', 'React'],
    url: undefined,
  },
  {
    title: 'Sistema Hospitalar',
    client: 'Hospital Sírio-Libanês',
    description:
      'Gestão hospitalar com agendamento, gestão de pacientes e app mobile para exames.',
    metrics: '+40% performance',
    category: 'Saúde',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&crop=center',
    tags: ['React', 'Node.js', 'MySQL'],
    url: undefined,
  },
  {
    title: 'Motor Fiscal',
    client: 'ShopFloor',
    description:
      'Cálculo de tributos e regras fiscais complexas com arquitetura limpa e escalável.',
    metrics: '100% precisão',
    category: 'Fiscal',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
    tags: ['PHP', 'Vue.js', 'MySQL'],
    url: undefined,
  },
  {
    title: 'Expiração de Pontos',
    client: 'AP Interactive',
    description:
      'Orquestração tolerante a falhas com SQS/SNS/EventBridge para expiração de pontos.',
    metrics: 'Economia milhões',
    category: 'Loyalty',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
    tags: ['AWS', 'Lambda', 'SQS'],
    url: undefined,
  },
  {
    title: 'Prótese Capilar',
    client: 'Jhulyo Peres',
    description:
      'Website institucional moderno para clínica de prótese capilar com galeria de resultados e agendamento online.',
    metrics: '+200% conversão',
    category: 'Website',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'React', 'Tailwind'],
    url: 'https://jhulyo-peres-protese-capilar.buildjerf.com/',
  },
  {
    title: 'CodeFlow Mentoria',
    client: 'Inovasistema',
    description:
      'Plataforma de mentoria em programação com sistema de aulas, exercícios e acompanhamento de progresso.',
    metrics: '+500 alunos',
    category: 'Educação',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'TypeScript', 'Prisma'],
    url: 'https://code-flow.buildjerf.com/',
  },
  {
    title: 'Dock Açaí',
    client: 'Dock Açaí',
    description:
      'Website moderno para loja de açaí com cardápio digital, sistema de pedidos online e integração com delivery.',
    metrics: '+150% vendas',
    category: 'Website',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'React', 'Tailwind'],
    url: 'https://dock-acai.buildjerf.com/',
  },
  {
    title: 'Geijí Ateliê',
    client: 'Geijí Ateliê',
    description:
      'Vitrine digital para estúdio artesanal especializado em peças de crochê feitas à mão, com catálogo completo e canal direto para encomendas personalizadas via WhatsApp.',
    metrics: '+100% pedidos',
    category: 'Website',
    image:
      'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'React', 'Tailwind'],
    url: 'https://geiji-atelie.buildjerf.com',
  },
  {
    title: 'Anfitrião Feliz',
    client: 'Anfitrião Feliz',
    description:
      'Plataforma de check-in digital para anfitriões do Airbnb com automação do processo, coleta segura de documentos e dashboard unificado para múltiplas propriedades.',
    metrics: '100% automação',
    category: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'React', 'Airbnb API'],
    url: 'https://app1.buildjerf.com/',
  },
  {
    title: 'AgendaEasy',
    client: 'AgendaEasy',
    description:
      'Plataforma de agendamentos online 24/7 para profissionais e empresas, com integração WhatsApp, pagamentos via Stripe, QR code e dashboard analítico em tempo real.',
    metrics: '+60% eficiência',
    category: 'SaaS',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop&crop=center',
    tags: ['Next.js', 'Stripe', 'WhatsApp API'],
    url: 'https://app2.buildjerf.com/',
  },
  {
    title: 'Portfólio Pessoal',
    client: 'Jerfson Silva',
    description:
      'Página de apresentação profissional de engenheiro sênior de software, destacando projetos, expertise técnica e trajetória em Node.js, TypeScript e AWS.',
    metrics: 'Sr. Engineer',
    category: 'Website',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop&crop=center',
    tags: ['Node.js', 'TypeScript', 'AWS'],
    url: 'https://jerfsonsilva.github.io/',
  },
]

const categories = [
  'Todos',
  'Segurança',
  'Gestão',
  'Governo',
  'Saúde',
  'Fiscal',
  'Loyalty',
  'Website',
  'Educação',
  'SaaS',
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

export default function Portfolio() {
  const [selected, setSelected] = useState('Todos')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const filtered =
    selected === 'Todos'
      ? projects
      : projects.filter((p) => p.category === selected)

  if (!isMounted) return (
    <section id="portfolio" className="py-24 md:py-32 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0">
          {/* Static placeholders or just empty to avoid flicker */}
        </div>
      </div>
    </section>
  )

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-900 text-xs font-black tracking-[0.2em] uppercase px-5 py-2 rounded-full border border-slate-200 mb-6">
            Evolução Constante
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-text-dark mb-6 tracking-tight">
            Projetos que geram <br />
            <span className="text-gradient-tech">resultados extraordinários</span>
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-medium">
            Nossa trajetória é marcada por soluções que escalam negócios e
            redefinem mercados através da tecnologia.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-6 py-2.5 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all duration-300 border ${
                selected === cat
                  ? 'bg-text-dark text-white border-transparent shadow-xl shadow-slate-200'
                  : 'bg-white text-text-muted hover:text-text-dark border-slate-100 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          key={selected}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-accent-blue/30 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-text-dark text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-black text-text-dark group-hover:text-accent-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs font-black text-accent-purple uppercase tracking-widest mt-2">
                      {project.client}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-text-muted mb-8 line-clamp-3 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2 bg-accent-blue/5 px-4 py-2 rounded-2xl border border-accent-blue/10">
                    <TrendingUp className="w-4 h-4 text-accent-blue" />
                    <span className="text-xs font-black text-accent-blue uppercase tracking-widest">
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* View Project Button */}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-text-dark hover:text-accent-blue transition-all duration-300 group"
                  >
                    Launch Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 bg-white rounded-[3rem] p-12 border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { value: '60+', label: 'Sistemas Entregues' },
              { value: '25+', label: 'Empresas Líderes' },
              { value: '2M+', label: 'Usuários Ativos' },
              { value: '100%', label: 'Retention Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-black text-text-dark mb-3">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
