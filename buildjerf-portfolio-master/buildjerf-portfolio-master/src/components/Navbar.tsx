'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { sitePath } from '@/lib/site'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F1A]/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <Image
                src={sitePath('/logo.jpeg')}
                alt="Inovasistema"
                width={40}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110 rounded-lg"
                priority
              />
              <div className="absolute -inset-1 bg-accent-blue/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="font-extrabold text-xl text-white tracking-tight">
              Inova<span className="text-gradient-tech">sistema</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-elegant hover:text-accent-blue transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contato"
              className="bg-gradient-tech hover:opacity-90 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-accent-blue/20"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F1A] border-t border-white/10 shadow-2xl">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-text-elegant hover:text-accent-blue py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-gradient-tech text-white text-base font-semibold px-5 py-3 rounded-xl transition-all duration-200"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
