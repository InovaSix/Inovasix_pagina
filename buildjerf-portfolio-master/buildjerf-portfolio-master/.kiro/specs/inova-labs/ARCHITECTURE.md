# 🏗️ ARQUITETURA DA INFORMAÇÃO - INOVA LABS

## 📊 HIERARQUIA DE NAVEGAÇÃO

```
┌─────────────────────────────────────────────────────┐
│                   INOVA SISTEMAS                     │
│  Home | Soluções | Clientes | Contato | 🚀 Inova Labs│
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│              INOVA LABS - LANDING PAGE               │
├─────────────────────────────────────────────────────┤
│  1. Hero Section                                     │
│     - Headline + Subheadline                         │
│     - CTA: "Analisar Minha Ideia"                   │
│     - Video/Animation Background                     │
│                                                      │
│  2. Social Proof                                     │
│     - Números de impacto (ideias analisadas, etc)   │
│     - Logos de parceiros                             │
│                                                      │
│  3. Como Funciona (4 Steps)                         │
│     ① Envie sua Ideia                               │
│     ② IA Analisa em Segundos                        │
│     ③ Receba Roadmap Completo                       │
│     ④ Conecte-se com Investidores                   │
│                                                      │
│  4. Análise por IA (Feature Highlight)              │
│     - Validação de Mercado                           │
│     - Análise de Viabilidade                         │
│     - Roadmap Técnico                                │
│     - Estimativa de Investimento                     │
│                                                      │
│  5. Plataforma Preview                              │
│     - Screenshots interativos dos dashboards         │
│     - Demo em vídeo                                  │
│                                                      │
│  6. Ecossistema                                      │
│     - Para Empreendedores                           │
│     - Para Investidores                             │
│     - Para Mentores                                 │
│                                                      │
│  7. Pricing                                          │
│     - Análise Gratuita                              │
│     - Plano Starter                                 │
│     - Plano Growth                                  │
│     - Enterprise                                    │
│                                                      │
│  8. Tecnologias & IA                                │
│     - Stack tecnológico                             │
│     - IA Capabilities                               │
│                                                      │
│  9. Case Studies                                    │
│     - Projetos lançados                             │
│     - Investimentos captados                        │
│                                                      │
│ 10. FAQ                                             │
│                                                      │
│ 11. Final CTA                                       │
│     - "Transforme sua ideia hoje"                   │
│                                                      │
│ 12. Footer                                          │
└─────────────────────────────────────────────────────┘
```

## 🎨 DESIGN SYSTEM

### Paleta de Cores

```css
/* Primary Colors */
--neon-blue: #00D9FF
--neon-purple: #A855F7
--deep-purple: #7C3AED
--electric-blue: #3B82F6

/* Background */
--bg-primary: #0A0A0F
--bg-secondary: #13131A
--bg-card: #1A1A27

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.03)
--glass-border: rgba(255, 255, 255, 0.1)
--glass-shadow: rgba(0, 217, 255, 0.1)

/* Text */
--text-primary: #FFFFFF
--text-secondary: #A0AEC0
--text-muted: #718096

/* Gradients */
--gradient-primary: linear-gradient(135deg, #00D9FF 0%, #A855F7 100%)
--gradient-glow: linear-gradient(135deg, #00D9FF20 0%, #A855F720 100%)
```

### Typography

```css
/* Font Stack */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif

/* Sizes */
--text-xs: 0.75rem     /* 12px */
--text-sm: 0.875rem    /* 14px */
--text-base: 1rem      /* 16px */
--text-lg: 1.125rem    /* 18px */
--text-xl: 1.25rem     /* 20px */
--text-2xl: 1.5rem     /* 24px */
--text-3xl: 1.875rem   /* 30px */
--text-4xl: 2.25rem    /* 36px */
--text-5xl: 3rem       /* 48px */
--text-6xl: 3.75rem    /* 60px */
--text-7xl: 4.5rem     /* 72px */
```

### Spacing

```css
/* 8px base system */
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-5: 1.25rem   /* 20px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-10: 2.5rem   /* 40px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.375rem   /* 6px */
--radius-md: 0.5rem     /* 8px */
--radius-lg: 0.75rem    /* 12px */
--radius-xl: 1rem       /* 16px */
--radius-2xl: 1.5rem    /* 24px */
--radius-3xl: 2rem      /* 32px */
--radius-full: 9999px
```

## 🔄 UX FLOW

### Jornada do Empreendedor

```
START
  │
  ├─> Landing Page
  │    │
  │    ├─> Click "Analisar Minha Ideia"
  │    │
  │    ▼
  │   Formulário de Ideia (Multi-step)
  │    │
  │    ├─> Step 1: Descreva sua ideia (textarea)
  │    ├─> Step 2: Público-alvo
  │    ├─> Step 3: Problema que resolve
  │    ├─> Step 4: Suas informações
  │    │
  │    ▼
  │   Loading IA (animação)
  │    │
  │    ▼
  │   Relatório IA (gratuito)
  │    │
  │    ├─> Score de Viabilidade
  │    ├─> Análise de Mercado
  │    ├─> Recomendações
  │    │
  │    ▼
  │   CTA: "Criar Conta para Ver Roadmap Completo"
  │    │
  │    ▼
  │   Signup/Login
  │    │
  │    ▼
  │   Dashboard do Empreendedor
  │    │
  │    ├─> Meus Projetos
  │    ├─> Análise Completa
  │    ├─> Roadmap
  │    ├─> Pitch Deck Builder
  │    ├─> Investidores Interessados
  │    ├─> Mentores Disponíveis
  │    └─> Desenvolvimento MVP
  │
END
```

### Jornada do Investidor

```
START
  │
  ├─> Landing Page
  │    │
  │    ├─> Click "Para Investidores"
  │    │
  │    ▼
  │   Signup/Login (Investidor)
  │    │
  │    ▼
  │   Dashboard do Investidor
  │    │
  │    ├─> Projetos em Destaque
  │    ├─> Filtros por Categoria
  │    ├─> Análise IA dos Projetos
  │    ├─> Portfolio Management
  │    ├─> Mensagens
  │    └─> Analytics
  │
END
```

## 📱 DASHBOARDS

### Dashboard do Empreendedor

```
┌──────────────────────────────────────────────┐
│  [Avatar] John Doe                    [🔔]  │
├──────────────────────────────────────────────┤
│                                              │
│  📊 Overview                                 │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ 3 Ideias │ │ 2 Ativos │ │ 5 Matches│    │
│  └──────────┘ └──────────┘ └──────────┘    │
│                                              │
│  💡 Meus Projetos                           │
│  ┌────────────────────────────────────┐     │
│  │ [📱] App de Delivery                │     │
│  │ Score: 8.5/10 | Fase: MVP          │     │
│  │ 3 investidores interessados         │     │
│  │ [Ver Detalhes] [Continuar]         │     │
│  └────────────────────────────────────┘     │
│                                              │
│  ⚡ Ações Rápidas                           │
│  [Nova Ideia] [Criar Pitch] [Buscar]       │
│                                              │
│  📈 Progresso do Projeto Ativo              │
│  [═══════════════════▒▒▒] 75%              │
│                                              │
│  🎯 Próximos Passos                         │
│  ✓ Análise IA concluída                    │
│  ⟳ Definir MVP (Em andamento)              │
│  ○ Pitch para investidores                  │
│                                              │
└──────────────────────────────────────────────┘
```

### Dashboard do Investidor

```
┌──────────────────────────────────────────────┐
│  [Avatar] Maria Silva - Investidora   [🔔]  │
├──────────────────────────────────────────────┤
│                                              │
│  💼 Portfolio                               │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ R$ 500K  │ │ 8 Invest │ │ 3 Exits  │    │
│  │ Investido│ │ Ativos   │ │ Realizad │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│                                              │
│  🔥 Projetos em Alta (IA Recomenda)        │
│  ┌────────────────────────────────────┐     │
│  │ [🤖] IA para Educação              │     │
│  │ Score IA: 9.2/10 | R$ 200K         │     │
│  │ Match: 95% com seu perfil          │     │
│  │ [Ver Análise] [Demonstrar Interesse│     │
│  └────────────────────────────────────┘     │
│                                              │
│  📊 Filtros                                 │
│  [SaaS] [FinTech] [EdTech] [Todos]         │
│  Score mínimo: ████████░░ 8.0+             │
│                                              │
│  💬 Mensagens Pendentes (4)                │
│  • Proposta de João Silva                  │
│  • Update do projeto XYZ                    │
│                                              │
└──────────────────────────────────────────────┘
```

## 🎬 MICROINTERAÇÕES

1. **Hover em Cards**: Elevação + glow neon sutil
2. **CTA Buttons**: Gradient animado + pulse effect
3. **Form Inputs**: Border glow ao focus
4. **Loading IA**: Partículas flutuantes + progress bar pulsante
5. **Score Display**: Número animado contando + glow
6. **Notificações**: Slide in from top + bounce
7. **Menu Mobile**: Slide from right + backdrop blur
8. **Scroll Progress**: Barra neon no topo da página
9. **Parallax**: Background elements em diferentes velocidades
10. **Reveal**: Fade in + slide up ao entrar no viewport

## 📐 BREAKPOINTS

```css
/* Mobile First Approach */
--mobile: 0px
--tablet: 640px
--laptop: 1024px
--desktop: 1280px
--wide: 1536px
```

## 🚀 MVP FEATURES (Fase 1)

### Core Features
- ✅ Landing Page completa
- ✅ Formulário de análise de ideia
- ✅ IA Analysis Engine (OpenAI integration)
- ✅ Dashboard Empreendedor (basic)
- ✅ Dashboard Investidor (basic)
- ✅ Sistema de autenticação
- ✅ Geração de relatório PDF

### Nice to Have (Fase 2)
- 📧 Email notifications
- 💬 Chat entre investidor/empreendedor
- 📊 Analytics avançado
- 🎨 Pitch Deck Builder
- 📱 App Mobile
