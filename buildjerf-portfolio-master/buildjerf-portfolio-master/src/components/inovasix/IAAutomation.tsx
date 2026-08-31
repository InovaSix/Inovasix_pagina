'use client';

import { BrainCircuit, Database, Workflow, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function IAAutomation() {
  const steps = [
    {
      title: 'IA Interpreta e Documenta',
      description: 'A ideia do cliente vira documentação, arquitetura e wireframes com apoio de IA.'
    },
    {
      title: 'Apoia o Desenvolvimento',
      description: 'IA acelera o código e gera testes automatizados em cada etapa.'
    },
    {
      title: 'Analisa Segurança e Entrega',
      description: 'Segurança analisada continuamente até o dashboard final ser entregue ao cliente.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#782CFF]/[0.08] border border-[#782CFF]/25 text-[#B026FF] text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#782CFF] to-[#B026FF]" />
              Como Trabalhamos
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              IA integrada em <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">cada etapa da entrega</span>
            </h2>
            <p className="text-lg text-[#BDBDBD] leading-relaxed mb-8">
              Do discovery ao deploy: não vendemos ChatGPT, vendemos produtividade em cada fase do desenvolvimento.
            </p>

            <div className="flex flex-col gap-5">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-sm font-extrabold text-[#0087FF] w-7 flex-shrink-0 pt-0.5">0{index + 1}</div>
                  <div>
                    <h4 className="text-base font-bold mb-1">{step.title}</h4>
                    <p className="text-sm text-[#BDBDBD] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="glass rounded-3xl p-6 sm:p-9 relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
            <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px]">
              {/* Orbit Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-7 sm:inset-9 border border-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-14 sm:inset-[72px] border border-white/10 rounded-full"
              />

              {/* Core */}
              <motion.div
                animate={{ boxShadow: ['0 0 0 0 rgba(120,44,255,0.4)', '0 0 0 18px rgba(120,44,255,0)', '0 0 0 0 rgba(120,44,255,0.4)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-16 sm:inset-[100px] rounded-full bg-gradient-to-br from-[#0087FF] via-[#782CFF] to-[#B026FF] flex items-center justify-center shadow-[0_0_40px_rgba(120,44,255,0.6)]"
              >
                <BrainCircuit className="w-9 h-9 text-white" />
              </motion.div>

              {/* Orbit Nodes */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 glass w-9 h-9 rounded-xl flex items-center justify-center">
                <Database className="w-4 h-4 text-[#0087FF]" />
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 glass w-9 h-9 rounded-xl flex items-center justify-center">
                <Workflow className="w-4 h-4 text-[#B026FF]" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 glass w-9 h-9 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-[#782CFF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
