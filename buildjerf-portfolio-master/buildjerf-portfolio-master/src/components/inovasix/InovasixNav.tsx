'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Menu, X, Sparkles, GraduationCap } from 'lucide-react';
import { sitePath } from '@/lib/site';
import ContactModal from './ContactModal';

export default function InovasixNav() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#top', label: 'Home' },
    { href: '#produtos', label: 'Soluções' },
    { href: '#empresa', label: 'Empresa' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(2,8,23,0.7)] backdrop-blur-2xl border-b border-white/[0.07] py-3'
            : 'py-5 border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-8 max-w-[1280px]">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#top" className="flex items-center gap-3">
              <Image
                src={sitePath('/logos/inovasix-icon.png')}
                alt="Inovasix6"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg object-contain"
                priority
              />
              <div>
                <div className="text-lg font-extrabold tracking-tight">
                  Inovasix<span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">6</span>
                </div>
                <div className="text-[9px] tracking-[0.28em] text-[#BDBDBD] font-semibold -mt-0.5">SOFTWARE HOUSE</div>
              </div>
            </Link>

            {/* Nav Links */}
            <nav className="hidden xl:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {/* Academia Inovasix */}
              <a
                href="https://code-flow.buildjerf.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-bold hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap"
              >
                <GraduationCap className="w-4 h-4" />
                Academia Inovasix
              </a>

              {/* Inova Labs */}
              <Link
                href="/inova-labs"
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-bold hover:bg-white/[0.08] transition-all duration-300 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                InovaSix Labs
              </Link>

              {/* CTA Button */}
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all duration-300 w-10 h-10 justify-center p-0 xl:w-auto xl:h-auto xl:px-5 xl:py-2.5"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span className="hidden xl:inline">Fale Conosco</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen((open) => !open)}
                className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/[0.04] text-white"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {menuOpen && (
          <div className="xl:hidden border-t border-white/[0.07] bg-[rgba(2,8,23,0.95)] backdrop-blur-2xl">
            <nav className="container mx-auto px-8 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link py-3 text-base border-b border-white/[0.05] last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://code-flow.buildjerf.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 mt-3 px-4 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-bold"
              >
                <GraduationCap className="w-4 h-4" />
                Academia Inovasix
              </a>
              <Link
                href="/inova-labs"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 mt-2 px-4 py-3 rounded-xl border border-white/15 bg-white/[0.04] text-white text-sm font-bold"
              >
                <Sparkles className="w-4 h-4" />
                InovaSix Labs
              </Link>
            </nav>
          </div>
        )}
      </header>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
