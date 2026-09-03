# Inovasix - Site institucional

## 🚀 Sobre o Projeto

O BuildFlow é um portfólio inovador desenvolvido para a empresa BuildFlow, especializada em desenvolvimento de sistemas sob encomenda. O projeto apresenta uma landing page moderna e responsiva focada na conversão de clientes para sistemas personalizados.

## ✨ Características

- **Design Moderno**: Interface limpa e profissional com animações suaves
- **Responsivo**: Otimizado para todos os dispositivos
- **Performance**: Carregamento rápido com Next.js 14
- **SEO Otimizado**: Metadados completos para melhor ranking
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Database**: SQLite com Prisma ORM
- **TypeScript**: Para tipagem estática
- **Deployment**: Vercel (recomendado)

## 📋 Seções da Landing Page

### 1. Hero Section
- Título impactante com gradiente
- Call-to-action principal
- Animações de background
- Ícones de tecnologia

### 2. Serviços
- 6 tipos de sistemas principais
- Cards interativos com preços
- Descrições detalhadas
- CTAs individuais

### 3. Portfólio
- Projetos baseados no currículo real
- Casos de sucesso com métricas
- Tecnologias utilizadas
- Links para detalhes

### 4. Preços
- 3 planos principais (Básico, Profissional, Enterprise)
- Serviços adicionais
- Transparência total nos valores
- CTAs para orçamento

### 5. Contato
- Formulário completo e funcional
- Informações de contato
- Validação em tempo real
- Feedback visual

### 6. Footer
- Links úteis
- Redes sociais
- Informações legais

## 🎨 Design System

### Paleta de Cores
- **Primary**: Blue-600 (#3B82F6)
- **Secondary**: Purple-600 (#9333EA)
- **Accent**: Amber-500 (#F59E0B)
- **Neutral**: Gray-50 (#F8FAFC)
- **Text**: Gray-900 (#111827)

### Tipografia
- **Headings**: Geist Sans (Bold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

## 📊 Preços Baseados em Pesquisa

### Sistemas Simples (R$ 850 - R$ 5.000)
- Landing Pages responsivas
- Sites institucionais
- E-commerce básico
- Suporte por 1-3 meses

### Sistemas Médios (R$ 5.000 - R$ 15.000)
- E-commerce completo
- Sistemas de gestão
- Aplicativos mobile
- Automação n8n
- Suporte por 3-6 meses

### Sistemas Complexos (R$ 10.000+)
- Sistemas personalizados com IA
- Múltiplos módulos
- Arquitetura escalável
- Suporte por 6+ meses
- **Diferencial**: Inteligência Artificial integrada

## 🏢 Referências de Clientes

Baseado no currículo de Jerfson Silva dos Santos:

- **Raízen**: Sistema antifraude (>2M contas bloqueadas)
- **AP Interactive**: Sistema de expiração de pontos
- **Multiplan**: Sistema de gestão de lojistas
- **Hospital Sírio-Libanês**: Sistema hospitalar
- **Polícia Civil da Bahia**: Sistema de inquéritos
- **ShopFloor**: Motor fiscal

## Como executar localmente

### Pré-requisitos
- Node.js 20 LTS ou superior
- npm 10 ou superior

### Instalação
```bash
# Na pasta que contém package.json
npm install

# Opcional: copie .env.example para .env.local e preencha as chaves
npx prisma generate

# Inicie o servidor local
npm run dev
```
Abra http://localhost:3000.

Para testar a exportação estática localmente:
```bash
npm install
npm run build
npx serve out
```

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente a pasta `out` a cada push em `master`. No GitHub, ative **Settings > Pages > Source: GitHub Actions**.

Como o repositório é um site de projeto, o endereço esperado é `https://jerfsonsilva.github.io/buildjerf-portfolio/`. A chave `NEXT_PUBLIC_WEB3FORMS_KEY` é opcional e deve ser cadastrada como secret do repositório.

### Deploy alternativo no VPS

O workflow `deploy.yml` continua reservado ao deploy existente no VPS.

```bash
# Build para produção
npm run build

# Deploy no Vercel (alternativa)
vercel --prod
```

## Scripts

- `npm run dev`: desenvolvimento local com Turbopack
- `npm run build`: exportação estática para `out/`
- `npm run lint`: verificação de lint

## 📁 Estrutura do Projeto

```
buildflow-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Pricing.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── prisma.ts
├── prisma/
│   └── schema.prisma
├── public/
└── package.json
```

## 🔧 Configuração do Banco de Dados

O projeto utiliza SQLite com Prisma ORM. As tabelas incluem:

- **contacts**: Formulários de contato
- **projects**: Projetos do portfólio
- **testimonials**: Depoimentos de clientes

## 📈 Métricas de Sucesso

- **Performance**: Core Web Vitals otimizados
- **SEO**: Score Lighthouse > 90
- **Acessibilidade**: WCAG 2.1 AA
- **Conversão**: Taxa de formulários preenchidos
- **Engajamento**: Tempo na página

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

**BuildFlow**
- Email: contato@buildflow.com.br
- Telefone: +55 73 98239-4564
- LinkedIn: [Jerfson Silva](https://www.linkedin.com/in/jerfson-silva)
- Localização: Eunápolis, Bahia, Brasil

---

Desenvolvido com ❤️ pela BuildFlow