'use client'

import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const clients = [
  {
    name: 'Raízen',
    logo: '/logos/raizen.png',
  },
  {
    name: 'Multiplan',
    logo: '/logos/multiplan.png',
  },
  {
    name: 'Polícia Civil BA',
    logo: '/logos/policia-civil-ba.svg',
  },
  {
    name: 'Sírio-Libanês',
    logo: '/logos/sirio-libanes.png',
  },
  {
    name: 'ShopFloor',
    logo: '/logos/shopfloor.png',
  },
  {
    name: 'AP Interactive',
    logo: '/logos/ap-interactive.png',
  },
]

export default function TrustBar() {
  return (
    <section id="clientes" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase mb-4">
            Autoridade e Confiança
          </p>
          <h3 className="text-3xl md:text-4xl font-black text-text-dark tracking-tight">
            Marcas que confiam na <span className="text-gradient-tech">Inovasistema</span>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-3xl bg-white border border-slate-100 px-6 py-8 flex flex-col items-center justify-center min-h-[130px] hover:border-accent-blue/30 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
            >
              <img
                src={client.logo}
                alt={client.name}
                width={140}
                height={52}
                loading="lazy"
                className="object-contain max-w-[8rem] max-h-10 w-auto h-auto opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-3xl border-2 border-dashed border-slate-200 bg-slate-100/50 flex flex-col items-center justify-center min-h-[130px] text-slate-300 hover:border-accent-blue/40 hover:text-accent-blue transition-all duration-500 group cursor-pointer"
          >
            <Plus className="w-6 h-6 group-hover:scale-125 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest mt-3">
              Network Global
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
