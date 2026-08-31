'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Lightbulb, Users, Target, User } from 'lucide-react'
import { useState } from 'react'
import { LucideIcon } from 'lucide-react'

interface FormData {
  idea: string
  targetAudience: string
  problem: string
  solution: string
  name: string
  email: string
}

interface IdeaAnalysisFormProps {
  onSubmit: (data: FormData) => void
  onClose: () => void
}

interface TextareaField {
  field: keyof FormData
  label: string
  placeholder: string
}

interface InputField {
  field: keyof FormData
  label: string
  placeholder: string
  type: string
}

type StepField = TextareaField | InputField

interface Step {
  title: string
  subtitle: string
  icon: LucideIcon
  type: string
  field?: keyof FormData
  placeholder?: string
  fields?: StepField[]
}

const steps: Step[] = [
  {
    title: 'Descreva sua Ideia',
    subtitle: 'Conte-nos sobre seu projeto em detalhes',
    icon: Lightbulb,
    field: 'idea' as keyof FormData,
    placeholder: 'Ex: Um aplicativo que conecta personal trainers com alunos de forma personalizada, usando IA para criar treinos adaptados ao perfil de cada pessoa...',
    type: 'textarea',
  },
  {
    title: 'Público-Alvo',
    subtitle: 'Quem são seus clientes ideais?',
    icon: Users,
    field: 'targetAudience' as keyof FormData,
    placeholder: 'Ex: Pessoas de 25-45 anos, que querem praticar exercícios em casa, com renda média-alta, que valorizam acompanhamento profissional...',
    type: 'textarea',
  },
  {
    title: 'Problema & Solução',
    subtitle: 'Que problema você resolve e como?',
    icon: Target,
    fields: [
      {
        field: 'problem' as keyof FormData,
        label: 'Qual problema seu produto resolve?',
        placeholder: 'Ex: Dificuldade de encontrar personal trainers qualificados, alto custo de aulas presenciais, falta de flexibilidade de horários...',
      },
      {
        field: 'solution' as keyof FormData,
        label: 'Como sua solução é única?',
        placeholder: 'Ex: Conectamos alunos com trainers verificados via app, IA cria planos personalizados, pagamento por aula, treino ao vivo ou gravado...',
      },
    ],
    type: 'multi-textarea',
  },
  {
    title: 'Suas Informações',
    subtitle: 'Para enviarmos seu relatório completo',
    icon: User,
    fields: [
      {
        field: 'name' as keyof FormData,
        label: 'Nome completo',
        placeholder: 'João Silva',
        type: 'text',
      },
      {
        field: 'email' as keyof FormData,
        label: 'Email',
        placeholder: 'joao@email.com',
        type: 'email',
      },
    ],
    type: 'multi-input',
  },
]

export default function IdeaAnalysisForm({ onSubmit, onClose }: IdeaAnalysisFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    idea: '',
    targetAudience: '',
    problem: '',
    solution: '',
    name: '',
    email: '',
  })

  const currentStepData = steps[currentStep]
  const progress = ((currentStep + 1) / steps.length) * 100

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onSubmit(formData)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isStepValid = () => {
    const step = steps[currentStep]

    if (step.type === 'textarea' && step.field) {
      return formData[step.field].trim().length > 0
    }

    if (step.type === 'multi-textarea' && step.fields) {
      return step.fields.every((field) => formData[field.field].trim().length > 0)
    }

    if (step.type === 'multi-input' && step.fields) {
      return step.fields.every((field) => {
        const value = formData[field.field].trim()
        const inputField = field as InputField
        if (inputField.type === 'email') {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        }
        return value.length > 0
      })
    }

    return true
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto"
      >
        <div className="glass-hover rounded-3xl p-8 md:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-xl glass hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-[--color-text-secondary]">
                Etapa {currentStep + 1} de {steps.length}
              </span>
              <span className="text-sm font-semibold text-[--color-neon-blue]">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[--color-neon-blue] to-[--color-neon-purple]"
              />
            </div>
          </div>

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center">
                  {currentStepData.icon && <currentStepData.icon className="w-8 h-8 text-white" />}
                </div>
                <div>
                  <h2 className="text-3xl font-black mb-1">{currentStepData.title}</h2>
                  <p className="text-[--color-text-secondary]">{currentStepData.subtitle}</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 mb-8">
                {currentStepData.type === 'textarea' && currentStepData.field && (
                  <div>
                    <textarea
                      value={formData[currentStepData.field]}
                      onChange={(e) => {
                        const field = currentStepData.field as keyof FormData
                        setFormData({ ...formData, [field]: e.target.value })
                      }}
                      placeholder={currentStepData.placeholder}
                      className="w-full h-48 px-6 py-4 rounded-2xl glass border border-white/10 focus:border-[--color-neon-blue] focus:outline-none transition-all duration-300 resize-y min-h-48"
                    />
                  </div>
                )}

                {currentStepData.type === 'multi-textarea' && currentStepData.fields?.map((field) => (
                  <div key={field.field}>
                    <label className="block text-sm font-semibold mb-2">{field.label}</label>
                    <textarea
                      value={formData[field.field]}
                      onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                      placeholder={field.placeholder}
                      className="w-full h-32 px-6 py-4 rounded-2xl glass border border-white/10 focus:border-[--color-neon-blue] focus:outline-none transition-all duration-300 resize-y min-h-32"
                    />
                  </div>
                ))}

                {currentStepData.type === 'multi-input' && currentStepData.fields?.map((field) => {
                  const inputField = field as InputField
                  return (
                    <div key={field.field}>
                      <label className="block text-sm font-semibold mb-2">{field.label}</label>
                      <input
                        type={inputField.type || 'text'}
                        value={formData[field.field]}
                        onChange={(e) => setFormData({ ...formData, [field.field]: e.target.value })}
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4 rounded-2xl glass border border-white/10 focus:border-[--color-neon-blue] focus:outline-none transition-all duration-300"
                      />
                    </div>
                  )
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="btn-secondary flex items-center gap-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Voltar</span>
                  </button>
                )}
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{currentStep === steps.length - 1 ? 'Analisar Minha Ideia' : 'Próximo'}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}
