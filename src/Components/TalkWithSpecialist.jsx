import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaCommentAlt, FaPhoneAlt, FaVideo, FaQuestionCircle } from 'react-icons/fa';
import Footer from './Footer';
import { 
  PageContainer, Header, BackButton, Logo, Title, WelcomeSection, 
  SectionTitle, Description, OptionsGrid, OptionCard, OptionIcon, 
  OptionTitle, OptionDescription, PrimaryButton, ThemeSection, 
  ThemeSelect, InfoSection, InfoTitle, InfoText
} from '../Styles/StyledTalkWithSpecialist';

import Footer from './Footer';

const TalkWithSpecialist = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTheme, setSelectedTheme] = useState('');
  
  // Verifica se veio de uma página específica
  const fromPage = location.state?.from || '';
  const showThemeSection = fromPage !== '';

  const handleBack = () => {
    navigate(-1);
  };

  const handleStartChat = () => {
    // Lógica para iniciar o chat
    console.log('Iniciando chat...');
  };

  const handleScheduleCall = () => {
    // Lógica para agendar chamada
    console.log('Agendando chamada...');
  };

  const goToFAQ = () => {
    navigate('/faq');
  };

  const themeOptions = [
    'Selecione um tema',
    'Previsão do Tempo',
    'Manejo de Solo',
    'Controle de Pragas',
    'Irrigação',
    'Adubação',
    'Eventos Climáticos Extremos',
    'Outro'
  ];

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBack}>
          <FaArrowLeft />
        </BackButton>
        <Logo src="/logo_header.png" alt="AgroConnect" />
        <Title>Fale com o Especialista</Title>
      </Header>


      <WelcomeSection>
        <SectionTitle>Pronto para receber suporte especializado?</SectionTitle>
        <Description>
          Nossa equipe de agrônomos e climatologistas está aqui para ajudar você a tirar dúvidas, 
          otimizar sua produção e enfrentar os desafios do campo.
        </Description>
        <Description>
          <strong>Escolha como você gostaria de falar conosco:</strong>
        </Description>
      </WelcomeSection>

      {showThemeSection && (
        <ThemeSection>
          <h3>Qual o tema da sua dúvida?</h3>
          <p>Identificamos que você veio da página: <strong>{fromPage}</strong></p>
          <ThemeSelect 
            value={selectedTheme} 
            onChange={(e) => setSelectedTheme(e.target.value)}
          >
            {themeOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </ThemeSelect>
        </ThemeSection>
      )}

      <OptionsGrid>
        <OptionCard>
          <OptionIcon>
            <FaCommentAlt />
          </OptionIcon>
          <OptionTitle>Chat Online / Enviar Mensagem</OptionTitle>
          <OptionDescription>
            Para dúvidas rápidas ou para descrever seu problema em detalhes.
            Nossa equipe responde em até 2 horas úteis.
          </OptionDescription>
          <PrimaryButton onClick={handleStartChat}>
            Iniciar Chat Agora
          </PrimaryButton>
        </OptionCard>

        <OptionCard>
          <OptionIcon>
            <FaPhoneAlt />
            <FaVideo style={{ marginLeft: '10px' }} />
          </OptionIcon>
          <OptionTitle>Agende uma Consultoria Personalizada</OptionTitle>
          <OptionDescription>
            Para discutir temas mais complexos ou receber orientações detalhadas 
            sobre sua fazenda. Escolha o melhor dia e horário para você.
          </OptionDescription>
          <PrimaryButton onClick={handleScheduleCall}>
            Agendar Consultoria
          </PrimaryButton>
        </OptionCard>

        <OptionCard>
          <OptionIcon>
            <FaQuestionCircle />
          </OptionIcon>
          <OptionTitle>Perguntas Frequentes (FAQ)</OptionTitle>
          <OptionDescription>
            Precisa de Respostas Rápidas? Confira nossa seção de Perguntas Frequentes. 
            Sua dúvida pode já ter sido respondida!
          </OptionDescription>
          <PrimaryButton onClick={goToFAQ}>
            Acessar FAQ
          </PrimaryButton>
        </OptionCard>
      </OptionsGrid>

      <InfoSection>
        <InfoTitle>Horário de Atendimento:</InfoTitle>
        <InfoText>Segunda a Sexta: 08:00 às 18:00</InfoText>
        <InfoText>Sábados: 08:00 às 12:00</InfoText>
        <InfoText>(Feriados: Verificar avisos na página principal)</InfoText>
        <InfoText style={{ marginTop: '1rem' }}>
          <strong>Aguardamos seu contato para ajudar sua lavoura a prosperar!</strong>
        </InfoText>
      </InfoSection>

      <Footer />
    </PageContainer>
  );
};

export default TalkWithSpecialist;