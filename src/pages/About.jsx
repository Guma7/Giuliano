import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const magicAnimation = keyframes`
  0% {
    : translateX(0) translateY(0) scale(0.8);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  90% {
    opacity: 0.8;
  }
  100% {
    transform: translateX(var(--target-x)) translateY(var(--target-y)) scale(1.2);
    opacity: 0;
  }
`

const textReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const textFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`

const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  position: relative;
  overflow: hidden;
`

const AnimationSection = styled.div`
  height: 50vh;
  position: relative;
  background: #0a0a0a;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(246, 177, 92, 0.3);
  border-radius: 20px;
  margin: 2rem;
  box-shadow: 
    0 0 30px rgba(139, 92, 246, 0.2),
    inset 0 0 50px rgba(139, 92, 246, 0.05);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 1rem;
    border-radius: 15px;
    height: 45vh;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin: 0.5rem;
    border-radius: 10px;
    height: 50vh;
  }
`

const LampContainer = styled.div`
  position: absolute;
  bottom: -43px;
  left: 100%;
  transform: translateX(-50%);
  width: 120px;
  height: 80px;
  z-index: 10;
`

const LampImage = styled.img`
  width: 50%;
  height: 50%;
  object-fit: contain;
  filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.5));
`

const MagicContainer = styled.div`
  position: absolute;
  bottom: -20px;
  left: 99%;
  transform: translateX(-90px);
  width: 200px;
  height: 100vh;
  pointer-events: none;
`

const TrailParticle = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, ${props => props.opacity || '0.4'}) 0%,
    rgba(168, 85, 247, ${props => (props.opacity || 0.4) * 0.7}) 30%,
    rgba(192, 132, 252, ${props => (props.opacity || 0.4) * 0.5}) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(${props => props.blur || '10px'});
  animation: ${magicAnimation} 6s ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  --target-x: ${props => props.targetX || '0px'};
  --target-y: ${props => props.targetY || '0px'};
`

const Magic = styled.div`
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 60px;
  height: 60px;
  background: radial-gradient(
    circle,
    rgba(139, 92, 246, 0.8) 0%,
    rgba(168, 85, 247, 0.6) 30%,
    rgba(192, 132, 252, 0.3) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(12px);
  animation: ${magicAnimation} 6s ease-in-out;
  animation-delay: ${props => props.delay || '0s'};
  animation-fill-mode: both;
  
  --target-x: ${props => props.targetX || '0px'};
  --target-y: ${props => props.targetY || '0px'};
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 5px;
    width: 50px;
    height: 50px;
    background: radial-gradient(
      circle,
      rgba(139, 92, 246, 0.6) 0%,
      rgba(168, 85, 247, 0.3) 40%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(15px);
    animation: ${magicAnimation} 6s ease-in-out;
    animation-delay: 0.2s;
    animation-fill-mode: both;
    --target-x: ${props => props.targetX || '0px'};
    --target-y: ${props => props.targetY || '0px'};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: 10px;
    width: 40px;
    height: 40px;
    background: radial-gradient(
      circle,
      rgba(192, 132, 252, 0.4) 0%,
      rgba(139, 92, 246, 0.2) 50%,
      transparent 80%
    );
    border-radius: 50%;
    filter: blur(18px);
    animation: ${magicAnimation} 6s ease-in-out;
    animation-delay: 0.4s;
    animation-fill-mode: both;
    --target-x: ${props => props.targetX || '0px'};
    --target-y: ${props => props.targetY || '0px'};
  }
`

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: ${props => props.position === 'left' ? '10%' : props.position === 'right' ? '90%' : '50%'};
  transform: translate(
    ${props => props.position === 'left' ? '0' : props.position === 'right' ? '-100%' : '-50%'}, 
    -50%
  );
  z-index: 5;
`

const AnimatedText = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: ${props => props.position === 'left' ? 'left' : props.position === 'right' ? 'right' : 'center'};
  white-space: nowrap;
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2rem;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.5rem;
    white-space: normal;
    text-align: center;
  }
`

const ContentSection = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  background: ${props => props.theme.colors.gradient.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`

const Description = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme.colors.textSecondary};
  text-align: left;
  max-width: 900px;
  margin: 0 auto 3rem;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .greeting {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${props => props.theme.colors.primary};
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .highlight {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
    text-align: left;
    
    .greeting {
      font-size: 1.1rem;
    }
    
    p {
      text-align: left;
    }
  }
`

const ContactSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const ContactCard = styled(motion.div)`
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
    transform: translateY(-5px);
  }
`

const ContactIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

const ContactInfo = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`

const LinkedInText = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: 300;
  transform: translateX(-21px); /* Ajuste este valor para mover o texto para esquerda/direita */
`

const CopyMessage = styled(motion.div)`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 12px;
  padding: 0.8rem 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  font-size: 0.9rem;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
  z-index: 1000;
  backdrop-filter: blur(10px);
  white-space: nowrap;
`

// Usando a imagem local da lâmpada
const lampImagePath = '/lamp.png'

const About = () => {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showText, setShowText] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showCopyMessage, setShowCopyMessage] = useState(false)
  const { t } = useLanguage()
  
  const phrases = [
    { text: t('about.phrases.greeting'), position: 'center', targetX: '-590px', targetY: '-170px' },
    { text: t('about.phrases.experience'), position: 'center', targetX: '-590px', targetY: '-170px' },
    { text: t('about.phrases.magic'), position: 'center', targetX: '-590px', targetY: '-170px' }
  ]

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('giulianocarvalhodasilva@gmail.com')
      setShowCopyMessage(true)
      setTimeout(() => setShowCopyMessage(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar email:', err)
    }
  }

  useEffect(() => {
    const runSequence = async () => {
      for (let i = 0; i < phrases.length; i++) {
        // Inicia a fase da magia
        setCurrentPhase(i)
        setIsAnimating(true)
        setShowText(false)
        
        // Aguarda 5s para mostrar a frase 1s antes da magia terminar
         await new Promise(resolve => setTimeout(resolve, 5800))
         
         // Mostra a frase 1s antes da magia terminar
         setShowText(true)
         
         // Aguarda mais 1s para a magia terminar completamente
         await new Promise(resolve => setTimeout(resolve, 1000))
         
         // Magia terminou
         setIsAnimating(false)
        
        // Frase fica visível por 3s
        await new Promise(resolve => setTimeout(resolve, 3000))
        
        // Esconde a frase
        setShowText(false)
        
        // Pausa de 1s antes da próxima magia (exceto na última)
        if (i < phrases.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
      }
      
      // Pausa de 2s antes de reiniciar o ciclo completo
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Reinicia a sequência
      runSequence()
    }
    
    runSequence()
  }, [])

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimationSection>
        <LampContainer>
          <LampImage src={lampImagePath} alt="Magic Lamp" />
        </LampContainer>
        
        {isAnimating && (
           <MagicContainer>
             <Magic 
               key={`main-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
             />
             <TrailParticle 
               key={`trail1-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
               delay="0.1s"
               size="50px"
               opacity={0.6}
               blur="12px"
             />
             <TrailParticle 
               key={`trail2-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
               delay="0.2s"
               size="45px"
               opacity={0.5}
               blur="14px"
             />
             <TrailParticle 
               key={`trail3-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
               delay="0.3s"
               size="40px"
               opacity={0.4}
               blur="16px"
             />
             <TrailParticle 
               key={`trail4-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
               delay="0.4s"
               size="35px"
               opacity={0.3}
               blur="18px"
             />
             <TrailParticle 
               key={`trail5-${currentPhase}`}
               targetX={phrases[currentPhase]?.targetX}
               targetY={phrases[currentPhase]?.targetY}
               delay="0.5s"
               size="30px"
               opacity={0.2}
               blur="20px"
             />
           </MagicContainer>
         )}
        
        <AnimatePresence>
          {showText && (
            <TextContainer position={phrases[currentPhase]?.position}>
              <AnimatedText
                position={phrases[currentPhase]?.position}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                dangerouslySetInnerHTML={{ __html: phrases[currentPhase]?.text }}
              />
            </TextContainer>
          )}
        </AnimatePresence>
      </AnimationSection>
      
      <ContentSection>
        <Title
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         
        </Title>
        
        <Description
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="greeting">
          {t('about.welcome')}
          </div>
          
          <p>
            {t('about.description.intro').split('Beatriz').map((part, index, array) => (
              index === array.length - 1 ? part : (
                <React.Fragment key={index}>
                  {part}
                  <span className="highlight">Beatriz</span>
                </React.Fragment>
              )
            ))}
          </p>
          
          <p>
            {t('about.description.experience').split('5 anos de experiência Full Stack').map((part, index, array) => (
              index === array.length - 1 ? part : (
                <React.Fragment key={index}>
                  {part}
                  <span className="highlight">5 anos de experiência Full Stack</span>
                </React.Fragment>
              )
            ))}
          </p>
          
          <p>
            {t('about.description.mission').split('transformar sonhos em realidade').map((part, index, array) => (
              index === array.length - 1 ? part : (
                <React.Fragment key={index}>
                  {part}
                  <span className="highlight">transformar sonhos em realidade</span>
                </React.Fragment>
              )
            ))}
          </p>
        </Description>
        
        <ContactSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ContactCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmailToClipboard}
            style={{ cursor: 'pointer', position: 'relative' }}
          >
            <ContactIcon>📧</ContactIcon>
            <ContactInfo>giulianocarvalhodasilva@gmail.com</ContactInfo>
            
            <AnimatePresence>
              {showCopyMessage && (
                <CopyMessage
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓ E-mail copiado com sucesso!
                </CopyMessage>
              )}
            </AnimatePresence>
          </ContactCard>
          
          <ContactCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.linkedin.com/in/giulianocarvalhodasilva', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <ContactIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill=" #0077B5"/>
                <rect width="24" height="24" rx="5" fill=" #FFFFFF"/>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill=" #0077B5"/>
              </svg>
            </ContactIcon>
            <LinkedInText>
              www.linkedin.com/in/giulianocarvalhodasilva
            </LinkedInText>
          </ContactCard>
          
          <ContactCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://wa.me/5551981417821', '_blank')}
            style={{ cursor: 'pointer' }}
          >
            <ContactIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.064 3.488" fill="#25D366"/>
              </svg>
            </ContactIcon>
            <ContactInfo>+55 51 98141-7821</ContactInfo>
          </ContactCard>
        </ContactSection>
      </ContentSection>
    </PageContainer>
  )
}

export default About