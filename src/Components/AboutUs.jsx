import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSun, FaLeaf, FaExclamationTriangle, FaSearch, FaUsers, FaBullseye } from 'react-icons/fa';
import { 
  AboutContainer, 
  HeaderSection, 
  BackButton, 
  PageTitle, 
  Tagline,
  Section, 
  SectionTitle, 
  SectionText,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  ValuesList,
  ValueItem,
  CtaSection,
  CtaTitle,
  CtaText,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton
} from '../Styles/StyledAboutUs';

const AboutUs = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: <FaSun />,
      title: 'Informação Climática Essencial',
      description: 'Mantenha-se à frente do tempo com previsões climáticas detalhadas e específicas para sua região. Planeje o plantio, a pulverização e a colheita com mais segurança, minimizando os riscos de perdas causadas por eventos climáticos.'
    },
    {
      icon: <FaLeaf />,
      title: 'Estratégias Inteligentes para sua Lavoura',
      description: 'Acesse um vasto conhecimento sobre técnicas agrícolas adaptadas às diferentes condições climáticas e tipos de cultivo. Otimize o manejo do solo, a irrigação e outras práticas para aumentar a eficiência e a produtividade da sua lavoura.'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Proteção Ativa Contra Crises',
      description: 'Esteja preparado para enfrentar eventos climáticos extremos com alertas em tempo real e planos de ação práticos. Saiba como agir para proteger sua produção e se recuperar rapidamente após uma crise.'
    },
    {
      icon: <FaSearch />,
      title: 'Defesa da sua Colheita Contra Riscos',
      description: 'Monitore e previna problemas como pragas e doenças que podem ser influenciados pelas condições climáticas. Tenha acesso a informações sobre identificação e manejo para proteger sua colheita.'
    },
    {
      icon: <FaUsers />,
      title: 'Compartilhamento de Experiências',
      description: 'Conecte-se com outros agricultores e especialistas para trocar informações, compartilhar desafios e aprender com as experiências de quem vive a mesma realidade no campo.'
    },
    {
      icon: <FaBullseye />,
      title: 'Focado no Seu Sucesso',
      description: 'O AgroConnect foi desenvolvido pensando nas necessidades do agricultor, oferecendo uma plataforma intuitiva e com informações relevantes para o seu dia a dia no campo, do plantio à colheita.'
    }
  ];

  const values = [
    'Resiliência',
    'Conhecimento',
    'Comunidade',
    'Inovação',
    'Sustentabilidade'
  ];

  return (
    <AboutContainer>
      <HeaderSection>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <PageTitle>Sobre o AgroConnect</PageTitle>
        <Tagline>
          Conectando você ao conhecimento e às ferramentas para uma agricultura mais segura e produtiva.
        </Tagline>
      </HeaderSection>

      <Section>
        <SectionTitle>Nossa Missão</SectionTitle>
        <SectionText>
          <strong>Nossa Missão: Apoiar sua Jornada Agrícola em um Clima em Mudança</strong>
        </SectionText>
        <SectionText>
          O AgroConnect nasceu da clara necessidade de oferecer suporte robusto aos agricultores, especialmente diante da crescente imprevisibilidade do clima. Compreendemos os desafios diários da agricultura, desde o planejamento da safra até a colheita, e sabemos que eventos climáticos extremos podem impactar drasticamente seu trabalho e sua renda.
        </SectionText>
        <SectionText>
          Nossa missão é clara: fornecer as informações, as ferramentas e a conexão necessárias para que você possa tomar decisões mais assertivas, proteger sua produção e construir uma agricultura mais resiliente e produtiva.
        </SectionText>
      </Section>

      <Section>
        <SectionTitle>Por que o AgroConnect é o seu parceiro ideal no campo?</SectionTitle>
        <SectionText>Confira as soluções que preparamos especialmente para você:</SectionText>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <p>{benefit.description}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </Section>

      <Section>
        <SectionTitle>Nossos Valores</SectionTitle>
        <SectionText>No AgroConnect, somos guiados por princípios que garantem o melhor suporte para você:</SectionText>
        
        <ValuesList>
          {values.map((value, index) => (
            <ValueItem key={index}>{value}</ValueItem>
          ))}
        </ValuesList>
      </Section>

      <CtaSection>
        <CtaTitle>Sua Opinião Ajuda a Construir o AgroConnect!</CtaTitle>
        <CtaText>
          Queremos que o AgroConnect seja cada vez melhor para você. Sua experiência é fundamental para aprimorarmos nossas ferramentas e suporte.
        </CtaText>
        
        <ButtonGroup>
          <PrimaryButton onClick={() => navigate('/feedback')}>
            Deixar um Feedback
          </PrimaryButton>
        </ButtonGroup>
      </CtaSection>

    </AboutContainer>
  );
};

export default AboutUs;