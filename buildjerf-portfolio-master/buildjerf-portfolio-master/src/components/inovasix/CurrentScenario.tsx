'use client';

import { Clock, AlertTriangle, ShieldOff, EyeOff } from 'lucide-react';

export default function CurrentScenario() {
  const problems = [
    {
      icon: Clock,
      title: 'Prazos que estouram',
      description: 'Projetos atrasam por falta de processo e retrabalho constante.'
    },
    {
      icon: AlertTriangle,
      title: 'Qualidade inconsistente',
      description: 'Bugs em produção geram custo, retrabalho e insatisfação.'
    },
    {
      icon: ShieldOff,
      title: 'Segurança como afterthought',
      description: 'Vulnerabilidades descobertas tarde demais, ou nunca.'
    },
    {
      icon: EyeOff,
      title: 'Falta de visibilidade',
      description: 'Cliente não sabe em que pé está o próprio projeto.'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#782CFF]/[0.08] border border-[#782CFF]/25 text-[#B026FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#782CFF] to-[#B026FF]" />
            O Cenário Atual
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Entregar software rápido, com qualidade e segurança virou o <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">maior desafio de TI</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem, index) => (
            <div key={index} className="glass rounded-2xl p-6 glow-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0087FF]/20 to-[#B026FF]/20 border border-white/[0.08] flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{problem.title}</h3>
              <p className="text-sm text-[#BDBDBD] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
