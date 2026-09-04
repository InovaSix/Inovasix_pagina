'use client';

import Image from 'next/image';
import { sitePath } from '@/lib/site';

type Client = {
  name: string;
  image: string;
  alt: string;
  // url ausente/nulo => destino ainda não configurado (não inventar URL)
  url: string | null;
};

// As imagens já são o card completo (fundo, borda, composição e ícone embutidos).
const clients: Client[] = [
  {
    name: 'Dock Açaiteria',
    image: '/images/clientes/01_dock_acaiteria.png',
    alt: 'Logo Dock Açaiteria',
    url: 'https://dockaçaiins.com.br/',
  },
  {
    name: 'Urban Store',
    image: '/images/clientes/02_urban_store.png',
    alt: 'Logo Urban Store',
    url: 'https://www.instagram.com/urban_store_araucariaa/',
  },
  {
    name: 'Inovasix RH',
    image: '/images/clientes/03_inovasix_rh.png',
    alt: 'Logo Inovasix RH',
    url: 'https://inovasix6rh.com.br/',
  },
  {
    name: 'Jhulyo Peres',
    image: '/images/clientes/04_jhulyo_peres.png',
    alt: 'Jhulyo Peres',
    url: 'https://jhulyo-peres-protese-capilar.buildjerf.com/',
  },
  {
    name: 'Anatomazelli',
    image: '/images/clientes/05_anatomazelli.png',
    alt: 'Logo Anatomazelli',
    url: 'https://inovasix.github.io/ANATOMAZELLI/',
  },
];

const cardClass =
  'group relative block rounded-2xl overflow-hidden h-[410px] transition-all duration-300';
const interactiveClass =
  'hover:-translate-y-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0087FF]/60';

function ClientImage({ client }: { client: Client }) {
  return (
    <Image
      src={sitePath(client.image)}
      alt={client.alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 260px"
      className="object-contain object-center p-2"
    />
  );
}

export default function Clients() {
  return (
    <section className="py-16 relative" id="clientes">
      <div className="container mx-auto px-8 max-w-[1280px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0087FF]/[0.08] border border-[#0087FF]/25 text-[#0087FF] text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0087FF] to-[#B026FF]" />
            Nossos Clientes
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Projetos que <span className="bg-gradient-to-r from-[#0087FF] via-[#782CFF] to-[#B026FF] bg-clip-text text-transparent">transformam negócios.</span>
          </h2>
          <p className="text-lg text-[#BDBDBD] leading-relaxed max-w-[600px] mx-auto">
            Soluções desenvolvidas para desafios reais, conectando tecnologia, estratégia e resultado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {clients.map((client) =>
            client.url ? (
              <a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Conhecer o projeto ${client.name} (abre em nova aba)`}
                className={`${cardClass} ${interactiveClass}`}
              >
                <ClientImage client={client} />
              </a>
            ) : (
              <div
                key={client.name}
                aria-label={`${client.name} (link em breve)`}
                className={cardClass}
                title="Link em breve"
              >
                <ClientImage client={client} />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
