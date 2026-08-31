'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'

const WHATSAPP_NUMBER = '5511975696233'

const SERVICE_LABELS: Record<string, string> = {
  landing: 'Landing Page',
  ecommerce: 'E-commerce',
  erp: 'Sistema ERP',
  crm: 'CRM Personalizado',
  mobile: 'Aplicativo Mobile',
  bi: 'Business Intelligence',
  custom: 'Sistema Personalizado + IA',
  consulting: 'Consultoria',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    const serviceLabel = SERVICE_LABELS[formData.service] ?? formData.service
    const text = [
      'Olá! Gostaria de solicitar um orçamento gratuito na Inovasistema.',
      '',
      `Nome: ${formData.name}`,
      `Serviço: ${serviceLabel}`,
      '',
      'Projeto:',
      formData.message,
    ].join('\n')

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setIsSubmitting(true)
    setIsSubmitted(true)
    setFormData({ name: '', service: '', message: '' })
    setTimeout(() => {
      setIsSubmitted(false)
      setIsSubmitting(false)
    }, 4000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-bg-deep relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 text-accent-blue-light text-[10px] font-black tracking-[0.4em] uppercase px-6 py-2.5 rounded-full border border-accent-blue/20 mb-8">
            Conexão Humana
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Vamos <span className="text-gradient-tech">inovar juntos?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-elegant max-w-xl mx-auto leading-relaxed font-medium">
            Pronto para o próximo nível? Solicite sua análise técnica gratuita agora.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-[3rem] border-white/10 p-8 md:p-14 shadow-2xl"
          >
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-6 bg-accent-blue/10 border border-accent-blue/20 rounded-2xl"
              >
                <div className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-accent-blue-light" />
                  <span className="text-sm font-black text-white leading-tight">
                    WhatsApp iniciado com sucesso. <br />
                    Aguardamos sua mensagem!
                  </span>
                </div>
              </motion.div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-4">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/20 outline-none transition-all duration-300 font-medium"
                  placeholder="Nome completo"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-4">
                  Especialidade
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/20 outline-none transition-all duration-300 appearance-none font-medium"
                >
                  <option value="" className="bg-bg-deep">Selecione o serviço</option>
                  {Object.entries(SERVICE_LABELS).map(([key, label]) => (
                    <option key={key} value={key} className="bg-bg-deep">{label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-12">
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-4">
                Briefing do Projeto
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white focus:border-accent-blue focus:ring-4 focus:ring-accent-blue/20 outline-none transition-all duration-300 resize-none font-medium"
                placeholder="Descreva brevemente seus objetivos e desafios..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-6 px-10 rounded-2xl font-black uppercase tracking-[0.3em] text-xs transition-all duration-500 flex items-center justify-center gap-4 ${
                isSubmitting
                  ? 'bg-white/10 text-white/30 cursor-not-allowed'
                  : 'bg-gradient-tech text-white shadow-2xl shadow-accent-blue/30 hover:scale-[1.02]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Conectando...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Solicitar Consultoria Gratuita
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors border border-white/5">
              <Mail className="w-5 h-5 text-accent-blue-light" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-text-elegant">contato@inovasistema.com</span>
          </div>
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors border border-white/5">
              <Phone className="w-5 h-5 text-accent-blue-light" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-text-elegant">+55 11 97569-6233</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
              <MapPin className="w-5 h-5 text-accent-blue-light" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-text-elegant">Bahia, Brasil</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
