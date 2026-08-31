'use client';

import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function CTAFinal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 relative" id="contato">
        <div className="container mx-auto px-8 max-w-[1280px]">
          <div className="glass rounded-[28px] p-8 sm:p-12 lg:p-20 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B026FF]/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                Solicite seu{' '}
                <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">
                  diagnóstico gratuito
                </span>
              </h2>

              <p className="text-lg text-[#BDBDBD] mb-9 max-w-[600px] mx-auto">
                Analisamos gratuitamente seu processo de desenvolvimento e mostramos, com dados, onde estão os maiores riscos e oportunidades de melhoria.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-9">
                <div className="glass rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <div className="text-2xl font-extrabold text-[#0087FF] mb-1">8</div>
                  <div className="text-xs text-[#BDBDBD]">Pilares avaliados</div>
                </div>
                <div className="glass rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <div className="text-2xl font-extrabold text-[#0087FF] mb-1">0 → 5</div>
                  <div className="text-xs text-[#BDBDBD]">Escala de maturidade</div>
                </div>
                <div className="glass rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <div className="text-2xl font-extrabold text-[#0087FF] mb-1">30/60/90</div>
                  <div className="text-xs text-[#BDBDBD]">Dias de plano de ação</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => setModalOpen(true)}
                  className="btn-primary px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  Vamos Conversar
                </button>
                <Link
                  href="#produtos"
                  className="btn-ghost px-8 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all duration-300"
                >
                  Conhecer Soluções <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
