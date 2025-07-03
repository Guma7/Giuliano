# Portfolio Giuliano Carvalho

Portfólio pessoal de Giuliano Carvalho - Desenvolvedor Full Stack com 5 anos de experiência.

## 🚀 Tecnologias Utilizadas

- **Frontend**: React 18, TypeScript, Styled Components
- **Animações**: Framer Motion
- **Roteamento**: React Router DOM
- **Build Tool**: Vite
- **Deploy**: Vercel

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
```

### Execução Local
```bash
# Modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no Vercel

Este projeto está configurado para deploy automático no Vercel:

### Opção 1: Deploy via CLI
```bash
# Instale o Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

### Opção 2: Deploy via GitHub
1. Conecte seu repositório ao Vercel
2. O deploy será automático a cada push na branch main

### Configurações do Vercel
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### ⚠️ Solução para Problemas de MIME Types

Se você encontrar erros como:
- "A folha de estilo não foi carregada porque seu tipo MIME, 'text/html', não é 'text/css'"
- "O carregamento de um módulo foi bloqueado devido a um tipo MIME não permitido"

Este projeto já inclui as seguintes correções:

1. **vercel.json** configurado com rewrites corretos para SPA
2. **public/_headers** com tipos MIME corretos para assets
3. **vite.config.js** com configuração adequada

Após fazer o deploy, aguarde alguns minutos para que as configurações sejam aplicadas.

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── contexts/           # Contextos React (ex: LanguageContext)
├── pages/              # Páginas da aplicação
├── translations/       # Arquivos de tradução
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
```

## 🌍 Funcionalidades

- ✅ Design responsivo
- ✅ Animações suaves com Framer Motion
- ✅ Suporte a múltiplos idiomas (PT/EN)
- ✅ Seção About com informações pessoais
- ✅ Portfólio de projetos
- ✅ Skills técnicas e soft skills
- ✅ Contatos interativos (LinkedIn, WhatsApp, Email)
- ✅ Otimizado para SEO
- ✅ Configurado para deploy no Vercel

## 🔧 Arquivos de Configuração

- **vercel.json**: Configuração de deploy e rewrites para SPA
- **public/_headers**: Definição de tipos MIME para assets
- **vite.config.js**: Configuração do Vite
- **.gitignore**: Arquivos ignorados pelo Git

## 📱 Contatos

- **LinkedIn**: [linkedin.com/in/giulianocarvalhodasilva](https://www.linkedin.com/in/giulianocarvalhodasilva)
- **Email**: giulianocarvalhodasilva@gmail.com
- **WhatsApp**: +55 51 98141-7821

## 📄 Licença

Este projeto é de uso pessoal e profissional de Giuliano Carvalho.

---

**Desenvolvido com ❤️ por Giuliano Carvalho**