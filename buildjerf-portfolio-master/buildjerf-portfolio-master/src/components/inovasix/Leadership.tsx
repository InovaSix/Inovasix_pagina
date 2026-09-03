'use client';
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Briefcase, Landmark, Users } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/contact';

const highlights = [
  { icon: Briefcase, value: '+30 anos', label: 'Experiência corporativa' },
  { icon: Landmark, value: '+25 anos', label: 'Mercado financeiro' },
  { icon: Users, value: '+100 profissionais', label: 'Em equipes lideradas' },
];

const WHATSAPP_LEADERSHIP_MESSAGE =
  'Olá! Vim pelo site da Inovasix e gostaria de falar com o LuiscomS.';

export default function Leadership() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-20 relative" id="lideranca">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.38fr_0.62fr] gap-0 glass rounded-3xl overflow-hidden">
          {/* Photo Column */}
          <div className="relative bg-gradient-to-br from-[#060c1e] to-[#030815] p-5 sm:p-8 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
              className="relative w-full max-w-[360px]"
            >
              {/* Subtle glow behind photo */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0087FF]/20 via-[#782CFF]/10 to-[#B026FF]/20 rounded-[28px] blur-2xl pointer-events-none" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                {!imageError ? (
                  <Image
                    src="/images/luis-antonio-ceo-inovasix.jpg"
                    alt="Foto de Luis Antonio, CEO da Inovasix"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-white/[0.04] text-[#BDBDBD] text-sm text-center px-6">
                    Foto de Luis Antonio, CEO da Inovasix
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Content Column */}
          <div className="p-6 sm:p-9 lg:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
                Liderança
              </div>

              <h2 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
                Experiência de mercado à frente da{' '}
                <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">
                  Inovasix
                </span>
              </h2>

              <div className="mb-5">
                <h3 className="text-xl font-extrabold leading-tight">Luis Antonio</h3>
                <p className="text-sm text-[#BDBDBD] font-semibold leading-tight mt-0">
                  CEO da Inovasix | LuiscomS
                </p>
              </div>

              <div className="text-[15px] text-[#BDBDBD] leading-relaxed space-y-4 max-w-[560px] mb-8">
                <p>
                  Luis Antonio, conhecido como LuiscomS, é CEO da Inovasix, palestrante e
                  executivo com mais de 30 anos de experiência corporativa, sendo mais de 25 anos
                  no mercado financeiro.
                </p>
                <p>
                  Bacharel em Direito pela FMU/SP, pós-graduado em Negócios Bancários pela FGV e
                  com MBA em Liderança Executiva e Gestão de Equipes Saudáveis, já liderou operações
                  digitais com equipes de mais de 100 profissionais em uma das maiores instituições
                  financeiras da América Latina.
                </p>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 bg-white/[0.03] border border-white/[0.07] rounded-xl px-4 py-3"
                  >
                    <item.icon className="w-5 h-5 text-[#0087FF] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-extrabold text-white">{item.value}</div>
                      <div className="text-xs text-[#BDBDBD] leading-snug">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#empresa"
                  className="btn-ghost px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300"
                >
                  Conheça nossa história <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={getWhatsAppUrl(WHATSAPP_LEADERSHIP_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-7 py-3.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  Fale com Luiz
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
