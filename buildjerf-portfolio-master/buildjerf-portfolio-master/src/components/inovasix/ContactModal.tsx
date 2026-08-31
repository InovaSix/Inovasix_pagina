'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Mail, Send, CheckCircle, AlertCircle, User, AtSign, FileText } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_MESSAGE, getWhatsAppUrl, sendContactEmail } from '@/lib/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Tab = 'whatsapp' | 'email';
type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>('whatsapp');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  // Fecha ao pressionar ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Bloqueia scroll do body quando modal está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const whatsappURL = getWhatsAppUrl(WHATSAPP_MESSAGE);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const result = await sendContactEmail(form);

    if (result.ok) {
      setFormStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      return;
    }

    setErrorMessage(result.error);
    setFormStatus('error');
  };

  const resetForm = () => {
    setFormStatus('idle');
    setErrorMessage('');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-[520px] glass rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)]">

              {/* Header */}
              <div className="flex items-center justify-between px-7 pt-7 pb-5">
                <div>
                  <h2 className="text-xl font-extrabold">Fale com a Inovasix</h2>
                  <p className="text-sm text-[#BDBDBD] mt-0.5">Escolha como prefere entrar em contato</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all duration-200"
                  aria-label="Fechar modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tabs */}
              <div className="px-7 pb-1">
                <div className="flex gap-2 p-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <button
                    onClick={() => { setActiveTab('whatsapp'); resetForm(); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      activeTab === 'whatsapp'
                        ? 'bg-[#25D366] text-white shadow-[0_4px_20px_-4px_rgba(37,211,102,0.5)]'
                        : 'text-[#BDBDBD] hover:text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button
                    onClick={() => { setActiveTab('email'); resetForm(); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                      activeTab === 'email'
                        ? 'bg-gradient-to-r from-[#0087FF] to-[#782CFF] text-white shadow-[0_4px_20px_-4px_rgba(0,135,255,0.5)]'
                        : 'text-[#BDBDBD] hover:text-white'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    E-mail
                  </button>
                </div>
              </div>

              {/* Tab Content */}
              <div className="px-7 pb-7 pt-5">
                <AnimatePresence mode="wait">
                  {/* WhatsApp Tab */}
                  {activeTab === 'whatsapp' && (
                    <motion.div
                      key="whatsapp"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* WhatsApp Preview */}
                      <div className="bg-[#0A1A0F] border border-[#25D366]/20 rounded-2xl p-5 mb-6">
                        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.06]">
                          <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-bold">InovaSix6</div>
                            <div className="text-[11px] text-[#4ade80] flex items-center gap-1 font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]" />
                              Disponível agora
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#25D366]/10 rounded-xl px-4 py-3 text-sm text-[#BDBDBD] leading-relaxed border-l-2 border-[#25D366]/40">
                          &ldquo;Olá! Vim pelo site da Inovasix e gostaria de conversar com um especialista sobre as soluções disponíveis.&rdquo;
                        </div>
                        <p className="text-[11px] text-[#BDBDBD]/60 mt-2.5">Mensagem pré-definida que será enviada</p>
                      </div>

                      <div className="flex flex-col gap-3">
                        <a
                          href={whatsappURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#1da851] text-white transition-all duration-200 hover:scale-[1.01] shadow-[0_8px_30px_-8px_rgba(37,211,102,0.5)]"
                        >
                          <MessageCircle className="w-5 h-5" />
                          Abrir WhatsApp
                        </a>
                        <button
                          onClick={onClose}
                          className="w-full py-3 rounded-xl text-sm font-semibold text-[#BDBDBD] hover:text-white transition-colors"
                        >
                          Fechar
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Email Tab */}
                  {activeTab === 'email' && (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Success State */}
                      {formStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-8"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-[#4ade80]" />
                          </div>
                          <h3 className="text-lg font-extrabold mb-2">E-mail enviado!</h3>
                          <p className="text-sm text-[#BDBDBD] leading-relaxed mb-6">
                            Recebemos sua mensagem e entraremos em contato em breve através do e-mail informado.
                          </p>
                          <button
                            onClick={() => { resetForm(); onClose(); }}
                            className="btn-primary px-6 py-3 rounded-xl font-bold text-sm"
                          >
                            Fechar
                          </button>
                        </motion.div>
                      )}

                      {/* Error State */}
                      {formStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 mb-5 flex items-start gap-3"
                        >
                          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-red-400">Erro ao enviar</p>
                            <p className="text-xs text-[#BDBDBD] mt-0.5">
                              {errorMessage || 'Tente novamente ou use o WhatsApp.'}
                            </p>
                          </div>
                          <button onClick={resetForm} className="ml-auto text-xs text-[#BDBDBD] hover:text-white underline">
                            Tentar novamente
                          </button>
                        </motion.div>
                      )}

                      {/* Form */}
                      {formStatus !== 'success' && (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          {/* Honeypot anti-spam */}
                          <input type="checkbox" name="botcheck" className="hidden" />

                          <div className="grid grid-cols-2 gap-3">
                            <div className="relative">
                              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BDBDBD]/50" />
                              <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome"
                                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm placeholder-[#BDBDBD]/50 focus:outline-none focus:border-[#0087FF]/50 focus:bg-white/[0.06] transition-all"
                              />
                            </div>
                            <div className="relative">
                              <AtSign className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BDBDBD]/50" />
                              <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="Seu e-mail"
                                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm placeholder-[#BDBDBD]/50 focus:outline-none focus:border-[#0087FF]/50 focus:bg-white/[0.06] transition-all"
                              />
                            </div>
                          </div>

                          <div className="relative">
                            <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#BDBDBD]/50" />
                            <input
                              type="text"
                              name="subject"
                              value={form.subject}
                              onChange={handleChange}
                              placeholder="Assunto (opcional)"
                              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl pl-10 pr-4 py-3 text-sm placeholder-[#BDBDBD]/50 focus:outline-none focus:border-[#0087FF]/50 focus:bg-white/[0.06] transition-all"
                            />
                          </div>

                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Como podemos ajudar sua empresa?"
                            className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm placeholder-[#BDBDBD]/50 focus:outline-none focus:border-[#0087FF]/50 focus:bg-white/[0.06] transition-all resize-none"
                          />

                          <div className="flex items-center gap-2 text-[11px] text-[#BDBDBD]/60">
                            <Mail className="w-3 h-3" />
                            Enviado para: {CONTACT_EMAIL}
                          </div>

                          <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="w-full btn-primary flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-bold text-sm disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                          >
                            {formStatus === 'sending' ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                />
                                Enviando...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                Enviar Mensagem
                              </>
                            )}
                          </button>
                        </form>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
