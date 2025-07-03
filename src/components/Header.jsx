import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.theme.colors.gradient.primary};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(139, 92, 246, 0.2);
  padding: 1rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`

const logoGlow = keyframes`
  0%, 100% {
    text-shadow: 
      0 0 5px rgba(139, 92, 246, 0.5),
      0 0 10px rgba(139, 92, 246, 0.3),
      0 0 15px rgba(139, 92, 246, 0.2);
  }
  50% {
    text-shadow: 
      0 0 10px rgba(139, 92, 246, 0.8),
      0 0 20px rgba(139, 92, 246, 0.5),
      0 0 30px rgba(139, 92, 246, 0.3);
  }
`

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 800;
  text-decoration: none;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
  
  /* Gradiente principal */
  background: linear-gradient(
    135deg,
rgb(17, 17, 17) 0%,
rgb(255, 224, 224) 25%,
    #c7d2fe 50%,
    #a5b4fc 75%,
rgb(26, 12, 59) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  /* Contorno mais definido para maior cavidade */
  -webkit-text-stroke: 1.5px rgb(15, 14, 9);
  
  /* Sombra profissional */
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  
  /* Animação sutil de brilho */
  animation: ${logoGlow} 7s ease-in-out infinite;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-1px) scale(1.02);
    filter: drop-shadow(0 4px 8px rgba(139, 92, 246, 0.2));
    
    /* Gradiente mais vibrante no hover */
    background: linear-gradient(
      135deg,
      #ffffff 0%,
      #ddd6fe 20%,
      #c4b5fd 40%,
      #a78bfa 60%,
      #8b5cf6 80%,
      #7c3aed 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  /* Efeito de brilho adicional */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(139, 92, 246, 0.1) 50%,
      transparent 70%
    );
    border-radius: 8px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-left: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${props => props.theme.colors.gradient.primary};
    flex-direction: column;
    padding: 1rem 2rem;
    gap: 1rem;
    border-top: 1px solid rgba(139, 92, 246, 0.2);
    margin-left: 0;
  }
`

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  &.active {
    background: rgba(255, 255, 255, 0.2);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      width: 20px;
      height: 2px;
      background: ${props => props.theme.colors.text};
      border-radius: 1px;
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }
`

const LanguageToggle = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  color: ${props => props.theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-top: 1rem;
  }
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: stretch;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navItems = [
    { path: '/about', label: t('nav.about') },
    { path: '/hard-skills', label: t('nav.hardSkills') },
    { path: '/soft-skills', label: t('nav.softSkills') },
    { path: '/projects', label: t('nav.projects') }
  ]

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: scrolled 
          ? 'linear-gradient(135deg, rgb(31, 1, 28) 0%, rgb(94, 32, 93) 50%, rgb(31, 1, 28) 100%)'
          : 'linear-gradient(135deg, rgb(31, 1, 28) 0%, rgb(94, 32, 93) 50%, rgb(31, 1, 28) 100%)'
      }}
    >
      <Nav>
        <LeftSection>
          <Logo to="/">Giuliano</Logo>
          <LanguageToggle onClick={toggleLanguage}>
            {language === 'pt' ? 'PT' : 'EN'}
          </LanguageToggle>
        </LeftSection>
        
        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
        
        <RightSection>
          <MobileMenuButton
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </RightSection>
      </Nav>
    </HeaderContainer>
  )
}

export default Header