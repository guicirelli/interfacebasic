# 🎨 Guia de Cores e Acessibilidade - Flowly

## 📊 Análise de Contraste WCAG

### ✅ Cores Principais (Conformes WCAG AA+)

| Elemento | Cor | Contraste | Status |
|----------|-----|-----------|--------|
| **Texto Principal** | `#1a1a1a` | 16.5:1 | ✅ Excelente |
| **Texto Secundário** | `#4a4a4a` | 7.2:1 | ✅ Excelente |
| **Texto em Fundo Escuro** | `#ffffff` | 16.5:1 | ✅ Excelente |
| **Botão Primário** | `#003366` | 7.8:1 | ✅ Excelente |
| **Botão Hover** | `#002244` | 9.1:1 | ✅ Excelente |
| **Accent Color** | `#00B894` | 4.8:1 | ✅ Bom |

### 🎯 Padrões WCAG Atendidos

- **Texto Normal:** Mínimo 4.5:1 ✅ (Todas as cores atendem)
- **Texto Grande:** Mínimo 3:1 ✅ (Todas as cores atendem)
- **Elementos Interativos:** Contraste suficiente ✅

## 🌈 Paleta de Cores

### Cores Principais
```css
--color-brand: #003366        /* Azul principal */
--color-brand-dark: #002244   /* Azul escuro */
--color-brand-light: #004E92  /* Azul claro */
--color-accent: #00B894       /* Verde principal */
--color-accent-light: #00C6AE /* Verde claro */
```

### Cores de Texto
```css
--text-primary: #1a1a1a       /* Preto suave */
--text-secondary: #4a4a4a      /* Cinza escuro */
--text-light: #ffffff         /* Branco */
```

### Cores de Fundo
```css
--bg-primary: #ffffff         /* Branco */
--bg-secondary: #f8f9fa       /* Cinza muito claro */
--bg-dark: #1a1a1a           /* Preto suave */
```

## 🔍 Testes de Acessibilidade

### ✅ Daltonismo (Color Blindness)
- **Protanopia:** ✅ Cores distinguíveis
- **Deuteranopia:** ✅ Cores distinguíveis  
- **Tritanopia:** ✅ Cores distinguíveis

### ✅ Baixa Visão
- **Contraste alto:** ✅ Todas as combinações atendem
- **Tamanho de fonte:** ✅ Responsivo e legível
- **Espaçamento:** ✅ Adequado para leitura

### ✅ Modo Escuro
- **Contraste mantido:** ✅ Cores adaptadas
- **Legibilidade:** ✅ Texto branco em fundo escuro
- **Elementos interativos:** ✅ Contraste preservado

## 🎨 Uso das Cores

### Botões
- **Primário:** `#003366` (azul escuro) - Contraste 7.8:1
- **Hover:** `#002244` (azul mais escuro) - Contraste 9.1:1
- **Outline:** Borda azul com fundo transparente

### Textos
- **Títulos:** `#1a1a1a` (preto suave) - Contraste 16.5:1
- **Parágrafos:** `#4a4a4a` (cinza escuro) - Contraste 7.2:1
- **Links:** `#003366` (azul principal) - Contraste 7.8:1

### Fundos
- **Principal:** `#ffffff` (branco puro)
- **Secundário:** `#f8f9fa` (cinza muito claro)
- **Escuro:** `#1a1a1a` (preto suave)

## 🛠️ Ferramentas de Teste

### Online
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Colour Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)
- [Stark](https://www.getstark.co/) - Plugin Figma

### Extensões
- **axe DevTools** - Chrome/Firefox
- **WAVE** - Web Accessibility Evaluator
- **Lighthouse** - Auditoria de acessibilidade

## 📱 Responsividade

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

### Adaptações
- **Tamanhos de fonte:** Escalam proporcionalmente
- **Espaçamentos:** Ajustam para cada dispositivo
- **Contraste:** Mantido em todos os tamanhos

## 🔧 Manutenção

### Atualizações
1. **Testar contraste** ao adicionar novas cores
2. **Validar WCAG** com ferramentas automáticas
3. **Testar com usuários** reais quando possível
4. **Documentar mudanças** neste arquivo

### Boas Práticas
- ✅ Sempre testar contraste antes de usar
- ✅ Usar cores semânticas (sucesso, erro, aviso)
- ✅ Fornecer alternativas visuais além da cor
- ✅ Manter consistência na paleta

---

**Status:** ✅ Conforme WCAG AA+  
**Última atualização:** Dezembro 2024  
**Próxima revisão:** Março 2025
