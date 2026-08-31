'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'Raízen', href: '#portfolio', color: 'text-orange-400' },
  { name: 'Multiplan', href: '#portfolio', color: 'text-blue-400' },
  { name: 'Polícia Civil BA', href: '#portfolio', color: 'text-indigo-400' },
  { name: 'Hospital Sírio-Libanês', href: '#portfolio', color: 'text-cyan-400' },
  { name: 'ShopFloor', href: '#portfolio', color: 'text-purple-400' },
  { name: 'AP Interactive', href: '#portfolio', color: 'text-pink-400' },
  { name: 'Dock Açaí', href: 'https://dock-acai.buildjerf.com/', color: 'text-violet-400' },
  { name: 'Jhulyo Peres', href: 'https://jhulyo-peres-protese-capilar.buildjerf.com/', color: 'text-[#00DDB3]' },
  { name: 'CodeFlow', href: 'https://code-flow.buildjerf.com/', color: 'text-emerald-400' },
]

export default function FeaturedProjects() {
  return (
    <section className="py-20 md:py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00DDB3]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00DDB3]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            Nossos <span className="underline decoration-[#00DDB3] decoration-4 underline-offset-8">principais clientes</span> em{' '}
            <span className="text-[#00DDB3]">Solution Development</span>
          </h2>
        </motion.div>

        {/* Clients horizontal list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.href}
              target={client.href.startsWith('http') ? '_blank' : undefined}
              rel={client.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <span className={`text-2xl md:text-3xl lg:text-4xl font-bold ${client.color} hover:brightness-125 transition-all duration-300 cursor-pointer`}>
                {client.name}
              </span>
              
              {/* Underline animation */}
              <div className={`absolute -bottom-2 left-0 right-0 h-1 ${client.color.replace('text-', 'bg-')} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
            </motion.a>
          ))}
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-[#00DDB3]/30 to-transparent"
        />
      </div>
    </section>
  )
}
