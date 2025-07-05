# Portfolio Giuliano

Um portfólio moderno e responsivo desenvolvido com React, Vite e Styled Components.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **Styled Components** - CSS-in-JS para estilização
- **Framer Motion** - Biblioteca para animações
- **React Router DOM** - Roteamento para aplicações React

## 📦 Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd portfolio

# Instale as dependências
npm install
```

## 🛠️ Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview

# Executar linting
npm run lint
```

## 🌐 Deploy no Vercel

Este projeto está configurado para deploy automático no Vercel:

### Deploy Automático
1. Conecte seu repositório GitHub ao Vercel
2. O Vercel detectará automaticamente as configurações do Vite
3. O deploy será feito automaticamente a cada push na branch main

### Deploy Manual
```bash
# Instale a CLI do Vercel
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

### Configurações do Vercel
O arquivo `vercel.json` já está configurado com:
- Redirecionamento de rotas para SPA
- Comando de build otimizado
- Diretório de saída correto

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── contexts/           # Contextos React
├── pages/              # Páginas da aplicação
├── translations/       # Arquivos de tradução
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
```

## 🎨 Funcionalidades

- ✅ Design responsivo
- ✅ Suporte a múltiplos idiomas
- ✅ Animações suaves
- ✅ Navegação por rotas
- ✅ Seções: About, Hard Skills, Soft Skills, Projects
- ✅ Otimizado para SEO
- ✅ Deploy automático no Vercel

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- 📱 Dispositivos móveis
- 📱 Tablets
- 💻 Desktops

## 🔧 Configurações de Build

- **Framework**: Vite
- **Output Directory**: `dist`
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

---

**Desenvolvido com ❤️ por Giuliano**