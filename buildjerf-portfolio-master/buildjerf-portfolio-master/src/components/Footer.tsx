'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Empresa: [
    { label: 'Sobre nós', href: '#' },
    { label: 'Carreiras', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contato', href: '#contato' },
  ],
  Serviços: [
    { label: 'Sistemas ERP', href: '#servicos' },
    { label: 'CRM Personalizado', href: '#servicos' },
    { label: 'Aplicativos Mobile', href: '#servicos' },
    { label: 'E-commerce', href: '#servicos' },
    { label: 'Business Intelligence', href: '#servicos' },
  ],
  Recursos: [
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Documentação', href: '#' },
    { label: 'Suporte', href: '#' },
  ],
}

const socials = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jerfson-silva', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:contato@inovasistema.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep text-white overflow-hidden border-t border-white/5">
      {/* Decorative tech background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2 flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="glass rounded-xl p-2 flex-shrink-0">
                <Image
                  src="/logo.jpeg"
                  alt="Inovasistema"
                  width={48}
                  height={48}
                  className="h-11 w-auto rounded-lg"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight uppercase">
                Inova<span className="text-gradient-tech">sistema</span>
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Liderando a próxima onda de inovação tecnológica. 
              Sistemas inteligentes e escaláveis que transformam o futuro dos negócios.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-text-muted hover:text-white hover:border-accent-blue/50 transition-all duration-300"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * (i + 1) }}
              viewport={{ once: true }}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-6">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-accent-blue-light transition-all duration-300 font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs font-bold text-text-muted uppercase tracking-widest">
              &copy; 2026 Inovasistema. All Tech Reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-xs font-bold text-text-muted hover:text-white transition-colors duration-300 uppercase tracking-widest"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-xs font-bold text-text-muted hover:text-white transition-colors duration-300 uppercase tracking-widest"
              >
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
