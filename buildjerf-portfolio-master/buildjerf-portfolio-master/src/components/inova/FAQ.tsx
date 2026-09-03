'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'Quanto tempo leva a análise da IA?',
    answer:
      'A análise inicial leva entre 30 e 90 segundos. O relatório completo fica pronto em até 5 minutos. Nossa IA processa dados de mercado, concorrência, viabilidade técnica e gera recomendações personalizadas em tempo real.',
  },
  {
    question: 'Minha ideia fica protegida?',
    answer:
      'Sim, 100%. Todos os dados são criptografados end-to-end e protegidos por NDA digital. Sua ideia jamais é compartilhada sem sua autorização explícita. Somos certificados ISO 27001 e seguimos rigorosamente a LGPD.',
  },
  {
    question: 'Como funciona o match com investidores?',
    answer:
      'Nossa IA analisa o perfil do investidor (indústrias preferidas, ticket médio, stage de investimento) e cruza com as características do seu projeto. Só há match se houver alta compatibilidade (85%+). Você recebe uma lista de investidores ranqueados por score de match.',
  },
  {
    question: 'Posso usar para validar múltiplas ideias?',
    answer:
      'Sim! Inclusive recomendamos testar várias ideias antes de se comprometer com uma. Quanto mais você analisa, melhor fica a IA em entender seu perfil empreendedor e fazer recomendações mais precisas. No plano gratuito você tem 1 análise/mês, nos pagos tem mais.',
  },
  {
    question: 'A IA substitui um consultor humano?',
    answer:
      'A IA acelera drasticamente o processo e fornece dados objetivos baseados em milhares de casos. Para estratégias complexas ou dúvidas específicas, recomendamos combinar a análise IA com mentoria humana (disponível nos planos Growth e Enterprise).',
  },
  {
    question: 'Quais tipos de projetos vocês analisam?',
    answer:
      'SaaS, marketplaces, apps mobile, e-commerce, fintechs, edtechs, healthtechs e qualquer negócio digital. Projetos físicos ou offline têm análise limitada, pois nossa IA é otimizada para negócios digitais escaláveis.',
  },
  {
    question: 'Como cancelo minha assinatura?',
    answer:
      'A qualquer momento, direto no dashboard, em segundos. Sem burocracia, sem multas, sem perguntas incômodas. Você mantém acesso ao conteúdo já gerado mesmo após cancelar.',
  },
  {
    question: 'Vocês ajudam a construir o produto?',
    answer:
      'Não desenvolvemos diretamente, mas temos uma rede de parceiros de desenvolvimento pré-vetados (Dev Partner Network). Fazemos a conexão, acompanhamos a qualidade e garantimos que você tenha acesso a desenvolvedores confiáveis com preços justos.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="blur-orb-purple w-96 h-96 top-1/4 left-1/4 opacity-10" />
        <div className="blur-orb-blue w-96 h-96 bottom-1/4 right-1/4 opacity-10" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-[--color-text-secondary]">
            Tudo o que você precisa saber sobre a Inova Labs
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="glass-hover rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left group"
                  >
                    <span className="text-lg font-bold pr-4 group-hover:text-[--color-neon-blue] transition-colors">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 w-8 h-8 rounded-lg glass flex items-center justify-center"
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[--color-neon-blue]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[--color-text-muted]" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6">
                          <p className="text-[--color-text-secondary] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[--color-text-secondary] mb-6">
            Ainda tem dúvidas? Estamos aqui para ajudar!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Falar com Suporte
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
