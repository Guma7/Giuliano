import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { AnimatePresence } from 'framer-motion'

// Components
import Header from './components/Header'
import About from './pages/About'
import HardSkills from './pages/HardSkills'
import SoftSkills from './pages/SoftSkills'
import Projects from './pages/Projects'

// Context
import { LanguageProvider } from './contexts/LanguageContext'

// Theme
const theme = {
  colors: {
    primary: ' #8b5cf6',
    secondary: ' #a855f7',
    accent: ' #c084fc',
    background: ' #0a0a0a',
    surface: ' #1a1a1a',
    text: ' #ffffff',
    textSecondary: ' #a1a1aa',
    gradient: {
      primary: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)',
      secondary: 'linear-gradient(45deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)',
      accent: 'linear-gradient(90deg, #ec4899 0%, #8b5cf6 50%, #06b6d4 100%)'
    },
    tags: {
      languages: ' #ef4444',
      frontend: ' #06b6d4',
      backend: ' #10b981',
      ml: ' #f59e0b',
      database: ' #8b5cf6',
      design: ' #ec4899'
    }
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px'
  },
  fonts: {
    primary: 'Inter, sans-serif',
    mono: 'JetBrains Mono, monospace'
  }
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
`

const MainContent = styled.main`
  padding-top: 80px;
  min-height: calc(100vh - 80px);
`

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <AppContainer>
            <Header />
            <MainContent>
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/hard-skills" element={<HardSkills />} />
                  <Route path="/soft-skills" element={<SoftSkills />} />
                  <Route path="/projects" element={<Projects />} />
                </Routes>
              </AnimatePresence>
            </MainContent>
          </AppContainer>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App