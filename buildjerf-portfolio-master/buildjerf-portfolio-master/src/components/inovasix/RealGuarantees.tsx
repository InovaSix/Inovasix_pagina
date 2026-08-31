'use client';

import { CheckCircle2 } from 'lucide-react';

const guarantees = [
  'Substituição de profissional em até 48h',
  'Garantia de correção por 30/60/90 dias',
  'Checklist de segurança em toda entrega',
  'Relatório semanal de evolução do projeto',
  'Dashboard do projeto em tempo real',
  'QA obrigatório antes de ir para produção'
];

export default function RealGuarantees() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Garantias Reais
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            O que poucas empresas prometem — <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">nós garantimos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guarantees.map((item) => (
            <div key={item} className="glass rounded-2xl px-6 py-5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-full border border-[#4ade80]/40 bg-[#4ade80]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#4ade80]" />
              </div>
              <span className="text-sm font-semibold">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
