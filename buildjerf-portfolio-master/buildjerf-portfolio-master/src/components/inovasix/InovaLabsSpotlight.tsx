'use client';

import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function InovaLabsSpotlight() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="glass rounded-[32px] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Background Orbs */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-[#782CFF]/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#0087FF]/30 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#B026FF] mb-6">
              <Sparkles className="w-4 h-4" />
              Inova Labs
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Valide sua ideia de negócio com <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">Inteligência Artificial</span>
            </h2>

            <p className="text-lg text-[#BDBDBD] leading-relaxed max-w-[640px] mx-auto mb-8">
              Análise gratuita e instantânea do potencial de mercado, viabilidade técnica e projeções financeiras da sua ideia. Powered by AI.
            </p>

            <Link
              href="/inova-labs"
              className="btn-primary px-8 py-4 rounded-xl font-bold text-base inline-flex items-center gap-2 transition-all duration-300"
            >
              <Sparkles className="w-5 h-5" />
              Analisar Minha Ideia Agora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
