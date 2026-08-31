'use client';

import { Activity, ListChecks, TestTube, ShieldCheck, Gauge, GitBranch, BrainCircuit, FileWarning } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    { icon: Activity, name: 'Progresso do Projeto' },
    { icon: ListChecks, name: 'Backlog e Sprints' },
    { icon: TestTube, name: 'Cobertura de Testes' },
    { icon: ShieldCheck, name: 'Métricas de Segurança' },
    { icon: Gauge, name: 'Indicadores de Qualidade' },
    { icon: GitBranch, name: 'Versões e Deploys' },
    { icon: BrainCircuit, name: 'IA para Dúvidas do Projeto' },
    { icon: FileWarning, name: 'Documentação e Riscos' }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Transparência
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Portal do Cliente — <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">visibilidade total</span>
          </h2>
          <p className="text-lg text-[#BDBDBD] leading-relaxed max-w-[600px] mx-auto">
            O cliente acompanha tudo. Sem surpresas. Sem opacidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <div key={index} className="glass rounded-2xl p-6 flex flex-col items-center gap-2.5 text-center group hover:bg-white/[0.07] transition-all duration-300">
              <integration.icon className="w-7 h-7 text-[#BDBDBD] group-hover:text-white transition-colors duration-300" />
              <span className="text-sm font-bold text-[#BDBDBD]">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
