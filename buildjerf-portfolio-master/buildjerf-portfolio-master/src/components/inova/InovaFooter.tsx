'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Instagram, Twitter, Github, ArrowRight, ArrowLeft } from 'lucide-react'

const footerLinks = {
  produto: [
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Análise IA', href: '#ai-features' },
    { name: 'Planos', href: '#pricing' },
    { name: 'Casos de Uso', href: '#cases' },
  ],
  recursos: [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentação', href: '/docs' },
    { name: 'API', href: '/api' },
    { name: 'Roadmap', href: '/roadmap' },
  ],
  empresa: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Carreiras', href: '/carreiras' },
    { name: 'Contato', href: '/contato' },
    { name: 'Investidores', href: '/investidores' },
  ],
  legal: [
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Privacidade', href: '/privacidade' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'LGPD', href: '/lgpd' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
]

export default function InovaFooter() {
  return (
    <footer className="relative bg-[--color-bg-secondary] border-t border-white/5 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blur-orb-blue w-96 h-96 -bottom-48 -left-48 opacity-10" />
        <div className="blur-orb-purple w-96 h-96 -bottom-48 -right-48 opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 pb-16 border-b border-white/5"
        >
          <div className="max-w-xl">
            <h3 className="text-2xl font-black mb-3">
              Fique por dentro das{' '}
              <span className="gradient-text">novidades</span>
            </h3>
            <p className="text-[--color-text-secondary] mb-6">
              Receba insights sobre startups, IA e inovação direto no seu email. Sem spam.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-6 py-4 rounded-2xl glass border border-white/10 focus:border-[--color-neon-blue] focus:outline-none transition-all duration-300 text-white placeholder-[--color-text-muted]"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 px-8 py-4"
              >
                <span>Inscrever</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Logo & Description */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[--color-neon-blue] to-[--color-neon-purple] flex items-center justify-center">
                  <span className="text-xl font-black text-[--color-bg-primary]">I</span>
                </div>
                <div>
                  <div className="font-black text-lg text-white">Inova Labs</div>
                  <div className="text-xs text-[--color-text-muted]">by Inova Sistemas</div>
                </div>
              </div>
              <p className="text-sm text-[--color-text-secondary] leading-relaxed mb-6">
                Transformamos ideias em negócios digitais através de Inteligência Artificial,
                validação de mercado e conexão com investidores.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="w-10 h-10 rounded-xl glass hover:bg-white/5 flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-[--color-text-muted] group-hover:text-[--color-neon-blue] transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-bold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-[--color-text-secondary] hover:text-[--color-neon-blue] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-[--color-text-muted]">
            © 2026 Inova Labs. Todos os direitos reservados.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center gap-2 px-5 py-2.5 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para Inovasistema</span>
            </motion.a>
            <a
              href="mailto:contato@inovalabs.com.br"
              className="flex items-center gap-2 text-sm text-[--color-text-secondary] hover:text-[--color-neon-blue] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>contato@inovalabs.com.br</span>
            </a>
          </div>
        </motion.div>

        {/* Made with love */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-[--color-text-muted]">
            Feito com{' '}
            <span className="text-red-500 inline-block animate-pulse">❤️</span>{' '}
            pela equipe Inova Sistemas
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
