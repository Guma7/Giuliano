import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
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

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const SkillCard = styled(motion.div)`
  background: ${props => props.theme.colors.surface};
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(139, 92, 246, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.gradient.primary};
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  }
`

const SkillTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const SkillIcon = styled.span`
  font-size: 2rem;
`

const SkillDescription = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.7;
  font-size: 1rem;
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Quote = styled.div`
  background: rgba(139, 92, 246, 0.1);
  border-left: 4px solid ${props => props.theme.colors.primary};
  padding: 1rem 1.5rem;
  margin: 1.5rem 0 0 0;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: ${props => props.theme.colors.text};
  position: relative;
  font-size: 0.95rem;
  
  &::before {
    content: '"';
    position: absolute;
    left: -10px;
    top: 10px;
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
    font-weight: bold;
  }
`

const softSkillsData = [
  {
    title: 'Criatividade',
    icon: '💡',
    description: [
      'Acredito que todas as pessoas possuem habilidades grandiosas e características específicas — como na natureza, além de nós. Considero o poder da criatividade (e, com ele, a capacidade de resolver problemas com soluções funcionais e inovadoras) a minha principal característica. Em um mundo que se encaminha para a automatização por meio da inteligência artificial, a criatividade valerá mais do que ouro — não apenas porque os melhores modelos serão aqueles programados com maior inventividade, mas também porque a mente humana é capaz de criar com o futuro, enquanto uma IA está limitada a recombinar fragmentos do passado.',
      'Criatividade e inovação são as asas que nos moveram através do tempo, pois não existem barreiras intransponíveis — apenas barreiras que exigem que se voe mais alto para ultrapassá-las.'
    ]
  },
  {
    title: 'Percepção',
    icon: '🎯',
    description: [
      '“Mesmo o mais belo entre os oásis não consegue compensar a existência do deserto em que habita, mas um deserto nunca existirá enquanto ali houver um oceano.”',
      'Não importa o quão grande seja uma ideia, uma apresentação visual marcante, um funcionamento lógico preciso ou o desejo de solucionar uma demanda, sozinhos, não significam nada. A balança entre o fracasso e o sucesso de um projeto inclinará conforme a sua capacidade de reunir esses elementos em conjunto.', 
      'Não existe projeto perfeito — existe o que é perfeito para cada projeto. E a mensurabilidade e tangibilidade desse conceito estão diretamente relacionadas ao grau de percepção de cada indivíduo.'
    ]
  },
  {
    title: 'Visão Artística',
    icon: '🎨',
    description: [
      'Sou um artista por natureza e amante das artes — e meu trabalho sempre se alimentou desta inspiração. Onde alguns enxergam páginas vazias, eu vejo um mundo de possibilidades; onde veem problemas, eu vejo oportunidades únicas de expandir meus limites e explorar minha criatividade.',
      'O fato é que todo trabalho — seja para uma demanda simples ou complexa — será, no fim, destinado ao público, onde o que reina é somente o desejo do usuário: de que sua experiência sempre caminhe por estradas que o levem a algum lugar, em uma viagem suave e repleta de magia.'
    ]
  },
  {
    title: 'Trabalho em Equipe',
    icon: '🤝',
    description: [
      'Me considero uma pessoa amável, íntegra, honesta, eloquente, empática, diplomática, colaborativa, flexível e altruísta. Para mim, o fundamental no trabalho em equipe é saber ouvir de forma plena e realista, estar verdadeiramente solícito para ajudar o companheiro que necessitar e entender que todos são peças de uma grande engrenagem — onde a qualidade de cada projeto é tudo o que importa.',
      'Sem individualismo. Sem egos.'
    ]
  },
  {
    title: 'Comunicação Clara',
    icon: '💬',
    description: [
      'Demonstro grande capacidade e experiência na tradução de conceitos técnicos em uma linguagem clara, efetiva e objetiva. Esse fator é crucial, especialmente no relacionamento com clientes, pois permite aproximá-los dos projetos em desenvolvimento — caso assim desejem.',
      'Acredito que essa comunicação é essencial para manter um “desenvolvimento limpo” e evitar soluções ou propostas que não estejam alinhadas com o que o cliente realmente procura.'
    ]
  },
  {
    title: 'Adaptabilidade e Versatilidade',
    icon: '🔄',
    description: [
      'Demonstro alta velocidade no aprendizado e na adaptação a novos processos e tecnologias. O mundo está em constante mudança — e nós também precisamos estar. Acredito que o fato de ter trabalhado tantos anos em projetos próprios me permitiu transitar por diferentes caminhos, propostas e tecnologias — do projeto mais simples ao mais complexo — aprendendo, desenvolvendo e me adaptando todos os dias, conforme as necessidades de cada desafio.'
    ]
  },
  {
    title: 'Gestão do Tempo',
    icon: '⏰',
    description: [
      'Acredito que caráter, honestidade e empatia são os pilares principais e indispensáveis de nossa estrutura humana — sendo a corrosão desses valores a causa de todos os males e declínios de nossa sociedade.',
      'Uma gestão de tempo positiva envolve organização eficiente e maximização de processos, mas também exige o compromisso de honrar prazos e compreender que projetos são, muitas vezes, sonhos de alguém — ou, no mínimo, têm o potencial de impactar positivamente a vida das pessoas.',
      'Somente através de verdadeira empatia, caráter, honestidade e carinho é possível alcançar o ideal: olhar para cada projeto com os olhos de quem o sonhou.'
    ]
  },
  {
    title: 'Dedicação',
    icon: '⚒️',
    description: [
      'Congelei todos os meus projetos pessoais para seguir esta jornada, dedicando-me exclusivamente à minha carreira. Isso porque não consigo fazer nada sem entregar tudo de mim.',
      'Dedicação toca o meu caráter, a minha empatia e a minha honestidade — mas também está presente como consequência natural da minha visão de mundo: ela é o impulso das minhas asas criativas e perceptivas. É também o que torna possível, de fato, ser adaptável e versátil — muito além de palavras vagas em um portfólio.',
      'Enfim, dedicação é tudo. Porque é o resultado de tudo o que faço — e de tudo o que sou.'
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
}

function SoftSkills() {
  const { t } = useLanguage()
  
  const softSkillsData = [
    {
      title: t('softSkills.skills.creativity.title'),
      icon: '💡',
      description: t('softSkills.skills.creativity.description')
    },
    {
      title: t('softSkills.skills.perception.title'),
      icon: '🎯',
      description: t('softSkills.skills.perception.description')
    },
    {
      title: t('softSkills.skills.artisticVision.title'),
      icon: '🎨',
      description: t('softSkills.skills.artisticVision.description')
    },
    {
      title: t('softSkills.skills.teamwork.title'),
      icon: '🤝',
      description: t('softSkills.skills.teamwork.description')
    },
    {
      title: t('softSkills.skills.communication.title'),
      icon: '💬',
      description: t('softSkills.skills.communication.description')
    },
    {
      title: t('softSkills.skills.adaptability.title'),
      icon: '🔄',
      description: t('softSkills.skills.adaptability.description')
    },
    {
      title: t('softSkills.skills.timeManagement.title'),
      icon: '⏰',
      description: t('softSkills.skills.timeManagement.description')
    },
    {
      title: t('softSkills.skills.dedication.title'),
      icon: '⚒️',
      description: t('softSkills.skills.dedication.description')
    }
  ]

  return (
    <Container>
      <Title
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t('softSkills.title')}
      </Title>
      
      <SkillsGrid
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {softSkillsData.map((skill, index) => (
          <SkillCard
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <SkillTitle>
              <SkillIcon>{skill.icon}</SkillIcon>
              {skill.title}
            </SkillTitle>
            <SkillDescription>
              {Array.isArray(skill.description) ? (
                skill.description.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))
              ) : (
                <p>{skill.description}</p>
              )}
            </SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </Container>
  )
}

export default SoftSkills