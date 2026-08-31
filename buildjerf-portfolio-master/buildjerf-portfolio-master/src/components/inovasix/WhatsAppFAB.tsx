'use client';

import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getWhatsAppUrl } from '@/lib/contact';

export default function WhatsAppFAB() {
  return (
    <motion.div
      animate={{
        boxShadow: [
          '0 10px 30px -8px rgba(37,211,102,0.55), 0 0 0 0 rgba(37,211,102,0.45)',
          '0 10px 30px -8px rgba(37,211,102,0.55), 0 0 0 12px rgba(37,211,102,0)',
          '0 10px 30px -8px rgba(37,211,102,0.55), 0 0 0 0 rgba(37,211,102,0.45)'
        ]
      }}
      transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
      className="fixed right-7 bottom-7 z-[60]"
    >
      <Link
        href={getWhatsAppUrl('Olá, gostaria de saber mais sobre a Inovasix')}
        target="_blank"
        rel="noopener noreferrer"
        className="h-15 pl-4 pr-5 rounded-full bg-[#25D366] flex items-center gap-2.5 hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle className="w-6 h-6 text-white shrink-0" />
        <span className="text-white text-sm font-bold whitespace-nowrap hidden sm:inline">Converse com um Especialista</span>
      </Link>
    </motion.div>
  );
}
