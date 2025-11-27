# Flowly - Landing Page Enterprise

## 🚀 Visão Geral

Landing page moderna e responsiva para o Flowly, uma plataforma de produtividade que combina design minimalista com recursos inteligentes. Desenvolvida com Next.js 16, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

- **Design Responsivo**: Mobile-first com breakpoints otimizados
- **Performance**: Core Web Vitals otimizados, lazy loading, code splitting
- **Acessibilidade**: WCAG AA+ compliant, navegação por teclado
- **SEO**: Meta tags otimizadas, structured data, sitemap
- **PWA**: Service worker, manifest, instalação offline
- **Tema**: Modo claro/escuro com persistência
- **Animações**: Framer Motion com scroll-based animations
- **Testes**: Jest, React Testing Library, Cypress E2E
- **CI/CD**: GitHub Actions com deploy automático
- **Qualidade**: ESLint, Prettier, Husky, Commitlint

## 🛠️ Tecnologias

### Core
- **Next.js 16** - React framework com App Router
- **TypeScript** - Type safety e melhor DX
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animações e transições

### Testing
- **Jest** - Test runner e assertions
- **React Testing Library** - Component testing
- **Cypress** - E2E testing
- **Testing Library** - Custom matchers

### Quality & DevOps
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Commit message linting
- **GitHub Actions** - CI/CD pipeline
- **Netlify** - Hosting e deploy

### Performance & SEO
- **Next.js Image** - Otimização de imagens
- **Lighthouse CI** - Performance auditing
- **Structured Data** - JSON-LD schema
- **Sitemap** - SEO optimization

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── common/         # Componentes reutilizáveis
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── hooks/              # Custom hooks
├── lib/                # Utilities e helpers
├── types/              # TypeScript definitions
└── styles/             # Global styles

cypress/                # E2E tests
├── e2e/               # E2E test specs
├── fixtures/          # Test data
└── support/           # Custom commands

__tests__/             # Unit tests
├── components/        # Component tests
├── hooks/             # Hook tests
└── utils/             # Utility tests
```

## 🚀 Getting Started

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/flowly-landing.git
cd flowly-landing

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Execute o projeto em desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run export       # Export estático

# Qualidade de Código
npm run lint         # ESLint
npm run lint:fix     # ESLint com auto-fix
npm run type-check   # TypeScript check
npm run format       # Prettier format
npm run format:check # Prettier check

# Testes
npm run test         # Jest unit tests
npm run test:watch   # Jest watch mode
npm run test:coverage # Jest com coverage
npm run test:e2e     # Cypress E2E tests
npm run test:e2e:ci  # Cypress headless

# Deploy
npm run deploy:preview  # Deploy preview
npm run deploy:prod     # Deploy produção
```

## 🧪 Testes

### Unit Tests (Jest + RTL)

```bash
# Executar todos os testes
npm run test

# Modo watch
npm run test:watch

# Com coverage
npm run test:coverage
```

### E2E Tests (Cypress)

```bash
# Abrir Cypress
npm run test:e2e

# Executar headless
npm run test:e2e:ci
```

### Testes de Acessibilidade

```bash
# Verificar acessibilidade
npm run test:a11y
```

## 🚀 Deploy

### Netlify (Recomendado)

1. Conecte o repositório ao Netlify
2. Configure as variáveis de ambiente
3. Deploy automático via GitHub Actions

### Deploy Manual

```bash
# Build
npm run build

# Deploy para Netlify
npm run deploy:prod
```

## 📊 Performance

### Core Web Vitals

- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

### Lighthouse Score

- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 🔧 Configuração

### Variáveis de Ambiente

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://flowly.com.br
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_HOTJAR_ID=XXXXXXXXXX
```

### Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "20"
  NEXT_TELEMETRY_DISABLED = "1"
```

## 📈 Analytics & Monitoring

- **Google Analytics** - Tracking de eventos
- **Hotjar** - Heatmaps e session recordings
- **Sentry** - Error tracking
- **Lighthouse CI** - Performance monitoring

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Convenções

- **Commits**: Conventional Commits
- **Branches**: `feature/`, `fix/`, `docs/`
- **Code Style**: ESLint + Prettier
- **Tests**: Cobertura mínima de 80%

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🎯 Roadmap

- [ ] Integração com CMS headless
- [ ] A/B testing com Vercel
- [ ] Internacionalização (i18n)
- [ ] Chatbot integrado
- [ ] Analytics avançados
- [ ] Micro-interações
- [ ] Design system com Storybook

## 📞 Suporte

- **Email**: contato@flowly.com.br
- **GitHub Issues**: [Issues](https://github.com/seu-usuario/flowly-landing/issues)
- **Documentação**: [Docs](https://docs.flowly.com.br)

---

Desenvolvido com ❤️ para demonstrar excelência em desenvolvimento front-end moderno.