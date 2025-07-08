import React, { useState } from 'react'
import styled from 'styled-components'
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
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  -webkit-text-stroke: 2px rgba(139, 92, 246, 0.3);
  text-stroke: 2px rgba(139, 92, 246, 0.3);
  
  filter: drop-shadow(0 4px 8px rgba(139, 92, 246, 0.4)) 
          drop-shadow(0 0 20px rgba(168, 85, 247, 0.3));
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2.5rem;
    -webkit-text-stroke: 1px rgba(139, 92, 246, 0.3);
    text-stroke: 1px rgba(139, 92, 246, 0.3);
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  gap: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`

const StudyImagesContainer = styled.div`
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2rem;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
  }
`

const StudyImage = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 12px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  object-fit: cover;
  object-position: center;
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 300px;
    height: 180px;
  }
`

const ProjectCard = styled(motion.div)`
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 20px 50px rgba(139, 92, 246, 0.2);
    transform: translateY(-10px);
  }
`

const ProjectHeader = styled.div`
  padding: 2rem;
  border-bottom: 1px solid rgba(139, 92, 246, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`

const ProjectTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

const ProjectUrl = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`

const ProjectSubtitle = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.textSecondary};
  font-style: italic;
  margin-bottom: 1rem;
`

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 0.5rem;
  }
`

const TechTag = styled.span`
  background: ${props => props.color}CC;
  color: rgb(255, 255, 255);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 20px 200px ${props => props.color}9;
  text-shadow: 0 3px 7px rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
  }
`

const ProjectContent = styled.div`
  padding: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 1.5rem;
`

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`

const FeatureItem = styled.li`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  
  &::before {
    content: '▶';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
    font-size: 0.8rem;
  }
`

const StatusBadge = styled.span`
  background: ${props => props.status === 'development' ? 'transparent' : '#6b7280'};
  color: ${props => props.status === 'development' ? props.theme.colors.primary : 'white'};
  padding: ${props => props.status === 'development' ? '0.5rem 1rem' : '0.3rem 0.8rem'};
  border: ${props => props.status === 'development' ? `1px solid ${props.theme.colors.primary}` : 'none'};
  border-radius: ${props => props.status === 'development' ? '8px' : '12px'};
  font-size: ${props => props.status === 'development' ? '1rem' : '0.8rem'};
  font-weight: 500;
  margin-left: ${props => props.status === 'development' ? '1rem' : 'auto'};
  cursor: default;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.status === 'development' ? '0.9rem' : '0.8rem'};
    padding: ${props => props.status === 'development' ? '0.4rem 0.8rem' : '0.3rem 0.8rem'};
    margin-left: ${props => props.status === 'development' ? '0.5rem' : 'auto'};
  }
`

const ExpandButton = styled(motion.button)`
  background: ${props => props.theme.colors.gradient.primary};
  border: none;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.3);
  }
`

const ExpandedContent = styled(motion.div)`
  padding: 0 2rem 2rem;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1.5rem 1.5rem;
  }
`

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin: 3.5rem 0 1.4rem;
  position: relative;
  padding-left: 1rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #8b5cf6, #06b6d4);
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #06b6d4, transparent);
    border-radius: 1px;
  }
`

// Função para converter RGB para hexadecimal
const rgbToHex = (rgb) => {
  if (rgb.startsWith('#')) return rgb
  
  const rgbMatch = rgb.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1])
    const g = parseInt(rgbMatch[2])
    const b = parseInt(rgbMatch[3])
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
  }
  
  return rgb
}

const getTechColor = (tech) => {
  const techLower = tech.toLowerCase()
  
  // Languages
  if (['python', 'javascript', 'typescript', 'c++', 'c#', 'jsx', 'sql'].includes(techLower)) {
    return '#ef4444'
  }
  
  // Frontend
  if (['react', 'next.js', 'html5', 'css3', 'tailwind css', 'styled components', 'react router', 'context api', 'react-leaflet', 'framer motion'].includes(techLower)) {
    return '#06b6d4'
  }
  
  // Backend
  if (['django', 'fastapi', 'node.js', 'express.js', 'django rest framework', 'drf', 'jwt'].includes(techLower)) {
    return '#10b981'
  }
  
  // ML/AI
  if (['pytorch', 'tensorflow', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'deepspeed', 'sentencepiece', 'clean-text', 'beautifulsoup'].includes(techLower)) {
    return 'rgb(193, 180, 4)'
  }
  
  // Database
  if (['postgresql', 'sqlite'].includes(techLower)) {
    return '#8b5cf6'
  }
  
  // Tools/Build
  if (['axios', 'leaflet', 'vite'].includes(techLower)) {
    return '#14b8a6'
  }
  
  return '#6b7280' // Default color
}

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState(new Set())
  const { t } = useLanguage()

  const projectsData = [
    {
      title: t('projects.data.veganWorld.title'),
      url: 'https://vegworld.onrender.com',
      subtitle: t('projects.data.veganWorld.subtitle'),
      status: 'live',
      technologies: ['TypeScript', 'Python', 'SQL', 'Next.js', 'React', 'Styled Components', 'Django', 'Django REST Framework', 'JWT', 'PostgreSQL'],
      description: t('projects.data.veganWorld.description'),
      features: t('projects.data.veganWorld.features'),
      note: t('projects.data.veganWorld.note')
    },
    {
      title: t('projects.data.aurora.title'),
      url: 'https://aurora-s2vr.onrender.com/',
      subtitle: t('projects.data.aurora.subtitle'),
      status: 'live',
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'React Router', 'Context API', 'React-Leaflet', 'Node.js', 'Express.js', 'Leaflet'],
      description: t('projects.data.aurora.description'),
      features: t('projects.data.aurora.features'),
      note: t('projects.data.aurora.note')
    },
    {
      title: t('projects.data.worldInGreen.title'),
      url: 'https://worldingreen.vercel.app/',
      subtitle: t('projects.data.worldInGreen.subtitle'),
      status: 'live',
      technologies: ['TypeScript', 'React', 'Styled Components', 'CSS3', 'HTML5', 'React Router', 'Framer Motion', 'Vite'],
      description: t('projects.data.worldInGreen.description'),
      note: t('projects.data.worldInGreen.note')
    },
    {
      title: t('projects.data.animeCosp.title'),
      url: 'https://animecosp.vercel.app/',
      subtitle: t('projects.data.animeCosp.subtitle'),
      status: 'live',
      technologies: ['JavaScript', 'React', 'Styled Components', 'CSS3', 'HTML5', 'React Router', 'Framer Motion', 'Vite'],
      description: t('projects.data.animeCosp.description')
    },
    {
      title: t('projects.data.studyDu.title'),
      subtitle: t('projects.data.studyDu.subtitle'),
      status: 'development',
      technologies: ['TypeScript', 'Python', 'C++', 'SQL', 'React', 'Next.Js', 'Styled Components', 'FastAPI', 'TensorFlow', 'PyTorch', 'DeepSpeed', 'SentencePiece', 'Clean-Text', 'BeautifulSoup', 'PostgreSQL'],
      description: t('projects.data.studyDu.description'),
      features: t('projects.data.studyDu.features'),
      experiences: t('projects.data.studyDu.experiences'),
      personalizations: t('projects.data.studyDu.personalizations'),
      purpose: t('projects.data.studyDu.purpose')
    }
]

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedProjects)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedProjects(newExpanded)
  }

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
          data-text={t('projects.title')}
        >
          {t('projects.title')}
        </Title>
        
        <ProjectsGrid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.title}
              variants={itemVariants}
              layout
            >
              <ProjectHeader>
                <ProjectTitle>
                  {project.title}
                  {project.status === 'development' && (
                    <StatusBadge status={project.status}>
                      {t('projects.status.development')}
                    </StatusBadge>
                  )}
                  {project.url && (
                    <ProjectUrl href={project.url} target="_blank" rel="noopener noreferrer">
                      {t('projects.status.live')}
                    </ProjectUrl>
                  )}
                </ProjectTitle>
                
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
                
                <TechTags>
                  {project.technologies.map((tech) => (
          <TechTag key={tech} color={rgbToHex(getTechColor(tech))}>
            {tech}
          </TechTag>
        ))}
                </TechTags>
              </ProjectHeader>
              
              <ProjectContent>
                <ProjectDescription>{project.description}</ProjectDescription>
                
                {project.features && (
                  <>
                    <FeaturesList>
                      {project.features.map((feature, featureIndex) => (
                        <FeatureItem key={featureIndex}>{feature}</FeatureItem>
                      ))}
                    </FeaturesList>
                  </>
                )}
                
                {project.note && (
                  <ProjectDescription style={{ fontStyle: 'italic', marginTop: '1rem', whiteSpace: 'pre-line' }}>
                    {project.note}
                  </ProjectDescription>
                )}
                
                {project.title === 'StudyDu' && (
                  <ExpandButton onClick={() => toggleExpanded(index)}>
                    {expandedProjects.has(index) ? t('projects.buttons.seeLess') : t('projects.buttons.seeMore')}
                  </ExpandButton>
                )}
                
                {expandedProjects.has(index) && (
                  <ExpandedContent
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title === 'StudyDu' && (
                      <>
                        <SectionTitle>{t('projects.sections.images')}</SectionTitle>
                        <StudyImagesContainer>
                          <StudyImage src="/study1.png" alt="StudyDu Interface 1" />
                          <StudyImage src="/study2.png" alt="StudyDu Interface 2" />
                        </StudyImagesContainer>
                      </>
                    )}
                    
                    {project.experiences && (
                      <>
                        <SectionTitle>{t('projects.sections.experiences')}</SectionTitle>
                        {project.experiences.map((exp, expIndex) => (
                          <div key={expIndex} style={{ marginBottom: '1rem' }}>
                            <h4 style={{ color: 'rgb(132, 99, 252)', marginBottom: '0.5rem' }}>{exp.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                          </div>
                        ))}
                      </>
                    )}
                    
                    {project.personalizations && (
                      <>
                        <SectionTitle>{t('projects.sections.personalization')}</SectionTitle>
                        {project.personalizations.map((pers, persIndex) => (
                          <div key={persIndex} style={{ marginBottom: '1rem' }}>
                            <h4 style={{ color: 'rgb(132, 99, 252)', marginBottom: '0.5rem' }}>{pers.title}</h4>
                            <p dangerouslySetInnerHTML={{ __html: pers.description }}></p>
                          </div>
                        ))}
                      </>
                    )}
                    
                    {project.purpose && (
                      <>
                        <SectionTitle>{t('projects.sections.purpose')}</SectionTitle>
                        <p>{project.purpose}</p>
                      </>
                    )}
                  </ExpandedContent>
                )}
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        <p style={{ 
          textAlign: 'left', 
          marginTop: '1.6rem', 
          fontSize: '0.9rem', 
          color: '#6b7280',
          lineHeight: '1.6',
          maxWidth: '1800px',
          margin: '2rem auto 0',
          padding: '0 1rem'
        }}>
          {t('projects.disclaimer')}
        </p>
      </Container>
    </PageContainer>
  )
}

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
      duration: 0.6
    }
  }
}

export default Projects