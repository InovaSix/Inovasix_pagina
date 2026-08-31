'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowLeft } from 'lucide-react'

interface InovaNavbarProps {
  onStartAnalysis: () => void
}

export default function InovaNavbar({ onStartAnalysis }: InovaNavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Voltar para Inovasix6</span>
            <span className="sm:hidden">Voltar</span>
          </motion.a>

          {/* Inova Labs CTA */}
          <motion.button
            onClick={onStartAnalysis}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3"
          >
            <Rocket className="w-5 h-5" />
            <span>Analisar Ideia</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
