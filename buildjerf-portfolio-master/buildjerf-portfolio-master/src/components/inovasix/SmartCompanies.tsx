'use client';

import { Smartphone, Globe, Layers, Zap, Shield } from 'lucide-react';

export default function SmartCompanies() {
  const features = [
    {
      icon: Smartphone,
      title: 'Aplicativos',
      description: 'Apps mobile e multiplataforma, do MVP à escala.'
    },
    {
      icon: Globe,
      title: 'Sites',
      description: 'Sites institucionais e plataformas web de alta performance.'
    },
    {
      icon: Layers,
      title: 'Sistemas',
      description: 'Sistemas corporativos sob medida para o seu processo.'
    },
    {
      icon: Zap,
      title: 'Automação',
      description: 'Automação de processos e integrações entre sistemas.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Melhores práticas em AppSec, do código ao deploy.'
    }
  ];

  return (
    <section className="py-20 relative" id="produtos">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Nossas Soluções
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            O que <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">entregamos</span>
          </h2>
          <p className="text-lg text-[#BDBDBD] leading-relaxed max-w-[600px] mx-auto">
            Software engineering e IA aplicada em cada etapa da entrega, do discovery ao deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="glass rounded-2xl p-6 glow-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0087FF]/20 to-[#B026FF]/20 border border-white/[0.08] flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-[#BDBDBD] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
