import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: 4rem 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

const SkillsGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`

const SkillCategory = styled(motion.div)`
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
    transform: translateY(-5px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`

const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 4px;
    height: 30px;
    background: ${props => props.color || props.theme.colors.primary};
    border-radius: 2px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
  }
`

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.75rem;
  }
`

const SkillTag = styled(motion.span)`
  background: ${props => props.color};
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px ${props => props.color}33;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 25px ${props => props.color}55;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`



const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const tagVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 30
    }
  }
}

const HardSkills = () => {
  const { t } = useLanguage()

  const skillCategories = [
    {
      category: t('hardSkills.categories.languages'),
      color: '#ef4444',
      skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'C#', 'SQL']
    },
    {
      category: t('hardSkills.categories.frontend'),
      color: '#3b82f6',
      skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Styled Components']
    },
    {
      category: t('hardSkills.categories.backend'),
      color: 'rgb(30, 145, 72)',
      skills: ['Django', 'Node.js', 'FastAPI', 'Express.js', 'Flask']
    },
    {
      category: t('hardSkills.categories.ml'),
      color: 'rgb(223, 146, 12)',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib']
    },
    {
      category: t('hardSkills.categories.database'),
      color: '#8b5cf6',
      skills: ['PostgreSQL', 'SQLite']
    },
    {
      category: t('hardSkills.categories.design'),
      color: '#ec4899',
      skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Wireframing', 'Prototipagem', 'Design Responsivo']
    },
    {
      category: t('hardSkills.categories.idioms'),
      color: '#1e3a8a',
      skills: [t('hardSkills.skills.portuguese'), t('hardSkills.skills.english')]
    }
  ]

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Title
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {t('hardSkills.title')}
        </Title>
        
        <SkillsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.category}
              variants={itemVariants}
            >
              <CategoryTitle color={category.color}>
                {category.category}
              </CategoryTitle>
              
              <TagsContainer>
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag
                    key={skill}
                    color={category.color}
                    variants={tagVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </SkillTag>
                ))}
              </TagsContainer>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </PageContainer>
  )
}

export default HardSkills