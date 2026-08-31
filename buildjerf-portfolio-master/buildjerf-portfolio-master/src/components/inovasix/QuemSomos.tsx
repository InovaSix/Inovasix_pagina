'use client';

import { motion } from 'framer-motion';
import { ListChecks, Clock3, TrendingUp, Smartphone, Globe, Layers, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function QuemSomos() {
  const stats = [
    { icon: ListChecks, text: '10 etapas de metodologia própria' },
    { icon: Clock3, text: '48h de substituição garantida' },
    { icon: TrendingUp, text: '+87% de ganho médio de performance' }
  ];

  const areas = [
    { icon: Smartphone, name: 'Aplicativos' },
    { icon: Globe, name: 'Sites' },
    { icon: Layers, name: 'Sistemas' },
    { icon: Zap, name: 'Automação' },
    { icon: Shield, name: 'Segurança' }
  ];

  return (
    <section className="py-20 relative" id="empresa">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-0 glass rounded-3xl overflow-hidden mb-14">
          {/* Text Column */}
          <div className="p-6 sm:p-9 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wide mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
              Quem Somos
            </div>

            <h3 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Criamos soluções, conectamos ideias, <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">transformamos negócios.</span>
            </h3>

            <p className="text-[15px] text-[#BDBDBD] leading-relaxed mb-6 max-w-[440px]">
              A InovaSix6 é uma software house que integra Inteligência Artificial em todo o ciclo de desenvolvimento — do levantamento de requisitos ao suporte pós-entrega — para reduzir prazos sem abrir mão de qualidade e segurança.
            </p>

            <ul className="flex flex-col gap-3 mb-7">
              {stats.map((stat, index) => (
                <li key={index} className="flex items-center gap-2.5 text-sm font-semibold">
                  <stat.icon className="w-4 h-4 text-[#4ade80] flex-shrink-0" />
                  {stat.text}
                </li>
              ))}
            </ul>

            <Link
              href="#produtos"
              className="btn-primary px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 w-fit transition-all duration-300"
            >
              Conhecer Nossas Soluções
            </Link>
          </div>

          {/* Areas Column */}
          <div className="bg-gradient-to-br from-[#060c1e] to-[#030815] p-5 sm:p-9 flex items-center justify-center relative">
            <div className="w-full max-w-[340px] glass rounded-[22px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] p-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#BDBDBD] mb-5">Áreas de Atuação</div>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 * index }}
                    className="flex flex-col items-center gap-2.5 text-center bg-white/[0.04] border border-white/[0.07] rounded-xl p-4"
                  >
                    <area.icon className="w-6 h-6 text-white" />
                    <span className="text-sm font-bold">{area.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
