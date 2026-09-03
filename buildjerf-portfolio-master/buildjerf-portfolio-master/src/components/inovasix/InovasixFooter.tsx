'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Youtube, Mail } from 'lucide-react';
import { sitePath } from '@/lib/site';

export default function InovasixFooter() {
  return (
    <footer className="py-16 lg:py-20 border-t border-white/[0.07] relative">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                  src={sitePath('/logos/inovasix-icon.png')}
                alt="Inovasix6"
                width={32}
                height={32}
                className="w-8 h-8 rounded-md object-contain"
              />
              <div>
                <div className="text-base font-extrabold">Inovasix<span className="text-[#B026FF]">6</span></div>
                <div className="text-[8px] tracking-[0.28em] text-[#BDBDBD] font-semibold">SOFTWARE HOUSE</div>
              </div>
            </div>
            <p className="text-sm text-[#BDBDBD] leading-relaxed max-w-[280px]">
              Criamos soluções, conectamos ideias, transformamos negócios.
            </p>
          </div>

          {/* Soluções */}
          <div>
            <h5 className="text-sm font-bold mb-4 uppercase tracking-wider">Soluções</h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="#produtos" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Plataforma Inovasix</Link></li>
              <li><Link href="#produtos" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">WhatsApp AI</Link></li>
              <li><Link href="/inova-labs" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Inova Labs</Link></li>
              <li><Link href="#produtos" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Automação</Link></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h5 className="text-sm font-bold mb-4 uppercase tracking-wider">Empresa</h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link href="#contato" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Contato</Link></li>
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Cases</Link></li>
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h5 className="text-sm font-bold mb-4 uppercase tracking-wider">Suporte</h5>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Documentação</Link></li>
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Status</Link></li>
              <li><Link href="/" className="text-sm text-[#BDBDBD] hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-4">
          <div className="text-xs text-[#BDBDBD]">
            © 2026 InovaSix6. Todos os direitos reservados.
          </div>
          <div className="flex gap-3.5">
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-[#782CFF]/15 hover:border-[#B026FF]/40 transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-[#782CFF]/15 hover:border-[#B026FF]/40 transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-[#782CFF]/15 hover:border-[#B026FF]/40 transition-all duration-300">
              <Youtube className="w-4 h-4" />
            </Link>
            <Link href="mailto:contato@inovasix.com.br" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:bg-[#782CFF]/15 hover:border-[#B026FF]/40 transition-all duration-300">
              <Mail className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
