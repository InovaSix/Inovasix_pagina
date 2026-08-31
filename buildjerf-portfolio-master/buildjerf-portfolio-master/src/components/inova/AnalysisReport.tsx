'use client'

import { motion } from 'framer-motion'
import {
  TrendingUp,
  Target,
  DollarSign,
  Calendar,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react'

interface AnalysisReportProps {
  formData: {
    idea: string
    targetAudience: string
    problem: string
    solution: string
    name: string
    email: string
  }
  onClose: () => void
  onUpgrade: () => void
  emailWarning?: boolean
}

export default function AnalysisReport({ formData, onClose, onUpgrade, emailWarning }: AnalysisReportProps) {
  // Mock data baseado no copywriting
  const mockData = {
    score: 8.4,
    scoreBreakdown: {
      viabilidadeTecnica: 85,
      potencialMercado: 90,
      inovacao: 75,
      competitividade: 82,
    },
    tam: 'R$ 2,4 bilhões',
    investimentoEstimado: 'R$ 250.000 - R$ 500.000',
    tempoMVP: '4-6 meses',
    risco: 'Médio',
    recomendacoes: [
      'Valide a proposta de valor com 20-30 early adopters antes de desenvolver',
      'Considere começar com uma versão mobile-first para reduzir custos iniciais',
      'Desenvolva um programa de beta testers para feedback constante',
      'Planeje uma estratégia de go-to-market focada em comunidades nichadas',
    ],
    proximosPassos: [
      'Pesquisa qualitativa com público-alvo (2-3 semanas)',
      'Criação de MVP wireframes e protótipo (3-4 semanas)',
      'Desenvolvimento de MVP funcional (12-16 semanas)',
      'Testes beta e ajustes (4-6 semanas)',
      'Lançamento soft e captação de early adopters',
    ],
    concorrentes: [
      { nome: 'Concorrente A', forcas: 'Market share estabelecido', fraquezas: 'UX desatualizada' },
      { nome: 'Concorrente B', forcas: 'Preço competitivo', fraquezas: 'Falta features avançadas' },
    ],
  }

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-400'
    if (score >= 6) return 'text-[--color-neon-blue]'
    return 'text-yellow-400'
  }

  const getScoreLabel = (score: number) => {
    if (score >= 8) return 'Alto Potencial'
    if (score >= 6) return 'Bom Potencial'
    return 'Potencial Moderado'
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md">
      <div className="min-h-screen px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-between"
          >
            <div>
              <h1 className="text-4xl font-black mb-2">
                <span className="bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple] bg-clip-text text-transparent">
                  Análise Completa
                </span>
              </h1>
              <p className="text-[--color-text-secondary]">
                Relatório gerado para: <span className="text-white font-semibold">{formData.name}</span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn-secondary flex items-center gap-2">
                <Download className="w-5 h-5" />
                <span>Baixar PDF</span>
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl glass hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Email Warning */}
          {emailWarning && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center gap-3 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 px-5 py-4 text-sm text-yellow-200"
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>Não conseguimos enviar uma cópia da sua ideia por e-mail. Seu relatório abaixo continua disponível normalmente.</span>
            </motion.div>
          )}

          {/* Score Card - Hero */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-hover rounded-3xl p-8 mb-8 relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[--color-neon-blue]/10 via-transparent to-[--color-neon-purple]/10" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Score Gauge */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="relative inline-block"
                >
                  <svg className="w-48 h-48 transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="none"
                      className="text-white/10"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      stroke="url(#scoreGradient)"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: '552', strokeDashoffset: '552' }}
                      animate={{ strokeDashoffset: `${552 - (mockData.score / 10) * 552}` }}
                      transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-neon-blue)" />
                        <stop offset="100%" stopColor="var(--color-neon-purple)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className={`text-6xl font-black ${getScoreColor(mockData.score)}`}
                    >
                      {mockData.score}
                    </motion.span>
                    <span className="text-sm text-[--color-text-secondary] font-semibold">de 10</span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="mt-4"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[--color-neon-blue]/30">
                    <Sparkles className="w-4 h-4 text-[--color-neon-blue]" />
                    <span className="text-sm font-bold">{getScoreLabel(mockData.score)}</span>
                  </div>
                </motion.div>
              </div>

              {/* Key Metrics */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--color-neon-blue]/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-[--color-neon-blue]" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-secondary] mb-1">Tamanho de Mercado (TAM)</div>
                    <div className="text-2xl font-black">{mockData.tam}</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[--color-neon-purple]/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[--color-neon-purple]" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-secondary] mb-1">Investimento Estimado</div>
                    <div className="text-2xl font-black">{mockData.investimentoEstimado}</div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-[--color-text-secondary] mb-1">Tempo para MVP</div>
                    <div className="text-2xl font-black">{mockData.tempoMVP}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="glass-hover rounded-3xl p-8 mb-8"
          >
            <h2 className="text-2xl font-black mb-6">Análise Detalhada</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(mockData.scoreBreakdown).map(([key, value], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-sm font-bold text-[--color-neon-blue]">{value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                      className="h-full bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recomendações */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="glass-hover rounded-3xl p-8 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-black">Recomendações Estratégicas</h2>
            </div>
            <div className="space-y-3">
              {mockData.recomendacoes.map((rec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-[--color-neon-blue] flex-shrink-0 mt-0.5" />
                  <span className="text-[--color-text-secondary]">{rec}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Próximos Passos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="glass-hover rounded-3xl p-8 mb-8"
          >
            <h2 className="text-2xl font-black mb-6">Roadmap Recomendado</h2>
            <div className="space-y-4">
              {mockData.proximosPassos.map((passo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1 p-4 rounded-xl bg-white/5">
                    <span className="text-[--color-text-secondary]">{passo}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA para Upgrade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="glass-hover rounded-3xl p-8 bg-gradient-to-br from-[--color-neon-blue]/10 to-[--color-neon-purple]/10 border border-[--color-neon-blue]/30"
          >
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[--color-neon-blue]/20 text-[--color-neon-blue] text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Desbloqueie o Relatório Completo</span>
                </div>
                <h3 className="text-2xl font-black mb-3">
                  Quer ir além?
                </h3>
                <p className="text-[--color-text-secondary] mb-4">
                  Este é apenas um preview. Com o plano Starter você recebe:
                </p>
                <ul className="space-y-2 text-sm text-[--color-text-secondary]">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[--color-neon-blue]" />
                    <span>Roadmap técnico detalhado em PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[--color-neon-blue]" />
                    <span>Análise completa de concorrência</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[--color-neon-blue]" />
                    <span>Conexão com investidores do seu nicho</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[--color-neon-blue]" />
                    <span>Acesso ao Pitch Deck Builder</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3">
                <button onClick={onUpgrade} className="btn-primary flex items-center justify-center gap-2">
                  <span>Ver Planos</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-secondary">
                  Agendar Consultoria Gratuita
                </button>
              </div>
            </div>
          </motion.div>

          {/* Alert de Confidencialidade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10"
          >
            <AlertCircle className="w-5 h-5 text-[--color-neon-blue] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-[--color-text-secondary]">
              <span className="font-semibold text-white">Seus dados estão protegidos:</span> Esta análise é 100% confidencial. 
              Sua ideia jamais será compartilhada sem sua autorização explícita. Todos os dados são criptografados e protegidos por NDA.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
