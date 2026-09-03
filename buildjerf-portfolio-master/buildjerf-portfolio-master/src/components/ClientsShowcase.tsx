'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { sitePath } from '@/lib/site'

const clients = [
  {
    name: 'Raízen',
      logo: sitePath('/logos/raizen.svg'),
    category: 'Energia',
  },
  {
    name: 'Multiplan',
      logo: sitePath('/logos/multiplan.svg'),
    category: 'Varejo',
  },
  {
    name: 'Polícia Civil BA',
      logo: sitePath('/logos/policia-civil-ba.svg'),
    category: 'Governo',
  },
  {
    name: 'Hospital Sírio-Libanês',
      logo: sitePath('/logos/sirio-libanes.png'),
    category: 'Saúde',
  },
  {
    name: 'ShopFloor',
      logo: sitePath('/logos/shopfloor.png'),
    category: 'Indústria',
  },
  {
    name: 'AP Interactive',
      logo: sitePath('/logos/ap-interactive.png'),
    category: 'Tecnologia',
  },
]

export default function ClientsShowcase() {
  return (
    <section id="clientes" className="relative py-24 lg:py-32 overflow-hidden bg-bg-deep">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1E90FF_1px,transparent_1px)] [background-size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-blue-light">
              Nossos Clientes
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Parceiros de <span className="text-gradient-tech">Sucesso</span>
          </h2>
          <p className="text-lg text-text-elegant max-w-2xl mx-auto">
            Confiança de empresas líderes em diversos setores
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass hover:bg-white/5 p-8 rounded-2xl border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent-blue/10 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-20 mb-4 flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-white font-bold mb-1">{client.name}</h3>
                <span className="text-xs text-accent-blue-light font-medium">{client.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-xl text-text-elegant mb-8">
            Faça parte dessa lista de empresas que confiam no nosso trabalho
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-3 bg-gradient-tech text-white px-8 py-4 rounded-2xl text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-2xl shadow-accent-blue/30 hover:scale-105"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  )
}
