'use client';

import { BrainCircuit, Zap, ClipboardCheck, ShieldCheck, Activity, Award } from 'lucide-react';

const differentials = [
  {
    icon: BrainCircuit,
    title: 'IA em Todo o Ciclo',
    description: 'Requisitos, arquitetura, código, testes, segurança e documentação apoiados por IA do início ao fim.'
  },
  {
    icon: Zap,
    title: 'Metodologia Própria',
    description: 'InovaSix6 Smart Delivery™ — processo exclusivo, testado e comprovado em projetos reais.'
  },
  {
    icon: ClipboardCheck,
    title: 'QA desde o Dia 1',
    description: 'Qualidade não é etapa final. É cultura desde a descoberta do projeto.'
  },
  {
    icon: ShieldCheck,
    title: 'Segurança por Padrão',
    description: 'AppSec e DevSecOps integrados em todas as entregas.'
  },
  {
    icon: Activity,
    title: 'Transparência Total',
    description: 'Dashboard em tempo real: progresso, bugs, testes e métricas.'
  },
  {
    icon: Award,
    title: 'Garantias Reais',
    description: 'Substituição em 48h, SLA definido e garantia pós-entrega.'
  }
];

const steps = [
  { title: 'Business Discovery', description: 'Entender profundamente o negócio' },
  { title: 'Product Design', description: 'UX, UI, protótipos, wireframes' },
  { title: 'AI Assisted Engineering', description: 'IA em todo o ciclo de desenvolvimento' },
  { title: 'Software Development', description: 'Backend, frontend, mobile, cloud' },
  { title: 'Software Quality', description: 'Manual, automação, performance, API' },
  { title: 'Application Security', description: 'SAST, DAST, OWASP' },
  { title: 'DevOps', description: 'CI/CD, containers, cloud, deploy' },
  { title: 'Observability', description: 'Logs, métricas, tracing, alertas' },
  { title: 'Customer Success', description: 'Relatórios, reuniões, roadmap' },
  { title: 'Continuous Evolution', description: 'Melhorias contínuas após a entrega' }
];

export default function WhyInovasix() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Por que a InovaSix6
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Nossos <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">diferenciais</span>
          </h2>
          <p className="text-lg text-[#BDBDBD] leading-relaxed max-w-[600px] mx-auto">
            IA em todo o ciclo, metodologia própria e QA desde o dia 1 para entregar software rápido, com qualidade e segurança de verdade.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {differentials.map((item, index) => (
            <div key={index} className="glass rounded-2xl p-6 glow-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0087FF]/20 to-[#B026FF]/20 border border-white/[0.08] flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-[#BDBDBD] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-center mb-10">
            InovaSix6 Smart Delivery<span className="align-super text-sm">™</span> em <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">10 etapas</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.title} className="glass rounded-xl p-5">
                <div className="text-xl font-extrabold text-[#B026FF] mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h4 className="text-sm font-bold mb-1.5">{step.title}</h4>
                <p className="text-xs text-[#BDBDBD] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
