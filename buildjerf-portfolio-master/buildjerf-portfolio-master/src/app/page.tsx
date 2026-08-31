'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-white overflow-hidden relative flex items-center justify-center">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-8 max-w-[640px]">
        <Image
          src="/logos/inovasix-icon.png"
          alt="Inovasix6"
          width={72}
          height={72}
          className="w-18 h-18 rounded-2xl object-contain mb-8"
          priority
        />

        <div className="text-2xl font-extrabold tracking-tight mb-4">
          Inovasix<span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">6</span>
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-5">
          Transformando empresas{' '}
          <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent animate-gradient">
            através da tecnologia.
          </span>
        </h1>

        <p className="text-lg text-[#BDBDBD] leading-relaxed mb-10">
          Gestão, automação e inteligência em uma única plataforma para simplificar processos e acelerar resultados.
        </p>

        <Link
          href="/inovasix"
          className="btn-primary px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300"
        >
          Entrar na Plataforma <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
