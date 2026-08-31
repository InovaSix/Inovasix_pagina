'use client'

import { useState } from 'react'
import InovaNavbar from '@/components/inova/InovaNavbar'
import InovaHero from '@/components/inova/InovaHero'
import HowItWorks from '@/components/inova/HowItWorks'
import AIFeatures from '@/components/inova/AIFeatures'
import Ecosystem from '@/components/inova/Ecosystem'
import Pricing from '@/components/inova/Pricing'
import FAQ from '@/components/inova/FAQ'
import FinalCTA from '@/components/inova/FinalCTA'
import InovaFooter from '@/components/inova/InovaFooter'
import IdeaAnalysisForm from '@/components/inova/IdeaAnalysisForm'
import LoadingAnalysis from '@/components/inova/LoadingAnalysis'
import AnalysisReport from '@/components/inova/AnalysisReport'
import { sendContactEmail } from '@/lib/contact'

type FlowState = 'landing' | 'form' | 'loading' | 'report'

interface FormData {
  idea: string
  targetAudience: string
  problem: string
  solution: string
  name: string
  email: string
}

export default function InovaLabsPage() {
  const [flowState, setFlowState] = useState<FlowState>('landing')
  const [formData, setFormData] = useState<FormData | null>(null)
  const [emailWarning, setEmailWarning] = useState(false)

  const handleStartAnalysis = () => {
    setFlowState('form')
  }

  const handleFormSubmit = (data: FormData) => {
    setFormData(data)
    setFlowState('loading')
    setEmailWarning(false)

    sendContactEmail({
      name: data.name,
      email: data.email,
      subject: `Nova ideia analisada - Inova Labs: ${data.name}`,
      message: [
        `Ideia: ${data.idea}`,
        `Público-alvo: ${data.targetAudience}`,
        `Problema: ${data.problem}`,
        `Solução: ${data.solution}`,
      ].join('\n\n'),
    }).then((result) => {
      if (!result.ok) setEmailWarning(true)
    })
  }

  const handleLoadingComplete = () => {
    setFlowState('report')
  }

  const handleCloseForm = () => {
    setFlowState('landing')
  }

  const handleCloseReport = () => {
    setFlowState('landing')
    setFormData(null)
  }

  const handleUpgrade = () => {
    // Scroll to pricing section
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
    setFlowState('landing')
  }

  return (
    <>
      <main className="min-h-screen bg-[--color-bg-primary]">
        <InovaNavbar onStartAnalysis={handleStartAnalysis} />
        <InovaHero onStartAnalysis={handleStartAnalysis} />
        <HowItWorks />
        <AIFeatures />
        <Ecosystem />
        <div id="pricing">
          <Pricing />
        </div>
        <FAQ />
        <FinalCTA onStartAnalysis={handleStartAnalysis} />
        <InovaFooter />
      </main>

      {/* Flow Modals */}
      {flowState === 'form' && (
        <IdeaAnalysisForm onSubmit={handleFormSubmit} onClose={handleCloseForm} />
      )}

      {flowState === 'loading' && <LoadingAnalysis onComplete={handleLoadingComplete} />}

      {flowState === 'report' && formData && (
        <AnalysisReport
          formData={formData}
          onClose={handleCloseReport}
          onUpgrade={handleUpgrade}
          emailWarning={emailWarning}
        />
      )}
    </>
  )
}
