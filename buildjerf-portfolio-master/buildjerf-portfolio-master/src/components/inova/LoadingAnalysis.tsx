'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Target, Lightbulb, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

const analysisSteps = [
  { icon: Brain, message: 'Analisando sua ideia...', duration: 1500 },
  { icon: TrendingUp, message: 'Processando dados de mercado...', duration: 1800 },
  { icon: Target, message: 'Calculando viabilidade técnica...', duration: 1600 },
  { icon: Lightbulb, message: 'Avaliando potencial de inovação...', duration: 1400 },
  { icon: Sparkles, message: 'Gerando seu roadmap personalizado...', duration: 1700 },
]

interface LoadingAnalysisProps {
  onComplete: () => void
}

export default function LoadingAnalysis({ onComplete }: LoadingAnalysisProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let stepTimer: NodeJS.Timeout
    let progressTimer: NodeJS.Timeout

    if (currentStep < analysisSteps.length) {
      const stepDuration = analysisSteps[currentStep].duration
      const progressIncrement = 100 / analysisSteps.length

      // Smooth progress animation
      const startProgress = currentStep * progressIncrement
      const endProgress = (currentStep + 1) * progressIncrement
      let currentProgress = startProgress
      const progressStep = (endProgress - startProgress) / (stepDuration / 16)

      progressTimer = setInterval(() => {
        currentProgress += progressStep
        if (currentProgress >= endProgress) {
          currentProgress = endProgress
          clearInterval(progressTimer)
        }
        setProgress(currentProgress)
      }, 16)

      // Move to next step
      stepTimer = setTimeout(() => {
        if (currentStep < analysisSteps.length - 1) {
          setCurrentStep(currentStep + 1)
        } else {
          setTimeout(onComplete, 500)
        }
      }, stepDuration)
    }

    return () => {
      clearTimeout(stepTimer)
      clearInterval(progressTimer)
    }
  }, [currentStep, onComplete])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="relative w-full max-w-2xl">
        {/* Animated Background Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[--color-neon-blue] blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[--color-neon-purple] blur-[120px]"
        />

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-hover rounded-3xl p-12 text-center relative z-10"
        >
          {/* Icon Animation */}
          <div className="mb-8 flex justify-center">
            <motion.div
              key={currentStep}
              initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] blur-2xl opacity-50" />
              <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center">
                {(() => {
                  const IconComponent = analysisSteps[currentStep].icon
                  return <IconComponent className="w-12 h-12 text-white" strokeWidth={2.5} />
                })()}
              </div>
            </motion.div>
          </div>

          {/* Message */}
          <motion.h2
            key={currentStep + '-text'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-black mb-4"
          >
            {analysisSteps[currentStep].message}
          </motion.h2>

          <p className="text-[--color-text-secondary] mb-8">
            Nossa IA está processando sua ideia. Isso levará apenas alguns segundos.
          </p>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-[--color-neon-blue] via-[--color-neon-purple] to-[--color-neon-blue] relative"
                style={{ backgroundSize: '200% 100%' }}
              >
                <motion.div
                  animate={{ backgroundPosition: ['0% 0%', '100% 0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  style={{ backgroundSize: '200% 100%' }}
                />
              </motion.div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-[--color-text-secondary]">
                Etapa {currentStep + 1} de {analysisSteps.length}
              </span>
              <span className="text-[--color-neon-blue] font-bold">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -100],
                x: [0, (i % 2 === 0 ? 1 : -1) * 50],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
              className="absolute w-2 h-2 rounded-full bg-[--color-neon-blue]"
              style={{
                left: `${20 + i * 12}%`,
                bottom: '20%',
              }}
            />
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-center text-sm text-[--color-text-muted]"
        >
          <div className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-[--color-neon-blue]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>100% confidencial e seguro • Análise em tempo real</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
