import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaExclamationTriangle, FaPhone, FaVideo, FaQuestionCircle } from 'react-icons/fa';
import {
  Container,
  Header,
  BackButton,
  Title,
  AlertBanner,
  AlertTitle,
  Section,
  SectionTitle,
  Subsection,
  SubsectionTitle,
  StepList,
  StepItem,
  StepNumber,
  CrisisGrid,
  CrisisCard,
  ActionButton,
  WarningBox,
  Footer,
  ContactInfo
} from '../Styles/StyledCrisisActionPlan';

const CrisisActionPlan = () => {
  const navigate = useNavigate();
  const [selectedCrisis, setSelectedCrisis] = useState(null);
  const [showCrisisList, setShowCrisisList] = useState(true);

  const crisisTypes = [
    {
      id: 'drought',
      title: 'Estiagem/Seca Prolongada',
      description: 'Estratégias para conservação de água, espécies resistentes e manejo do solo em períodos de seca.',
      alertLevel: 'ALTO',
      steps: {
        before: [
          'Monitore a previsão de chuvas e níveis de reservatórios.',
          'Implemente sistemas de captação e armazenamento de água da chuva.',
          'Escolha variedades de plantas mais resistentes à seca.',
          'Aplique cobertura morta para reduzir a evaporação da água do solo.'
        ],
        during: [
          'Reduza a irrigação para o mínimo necessário, priorizando culturas mais sensíveis.',
          'Aplique técnicas de irrigação por gotejamento para maior eficiência.',
          'Proteja o solo com cobertura vegetal para reduzir a perda de umidade.'
        ],
        after: [
          'Avalie os danos às culturas e ao solo.',
          'Planeje a recuperação do solo com matéria orgânica.',
          'Considere rotação de culturas para melhorar a saúde do solo.'
        ]
      }
    },
    {
      id: 'frost',
      title: 'Geada/Frio Extremo',
      description: 'Medidas para proteção de culturas, irrigação preventiva e cuidados com viveiros em períodos de frio intenso.',
      alertLevel: 'MÉDIO',
      steps: {
        before: [
          'Monitore as previsões de temperatura para as próximas 48h.',
          'Realize irrigação no final da tarde, pois o solo úmido retém mais calor.',
          'Proteja mudas e plantas jovens com TNT, plástico ou palha.',
          'Evite podas que estimulem brotações novas e sensíveis ao frio.'
        ],
        during: [
          'Acenda fogueiras controladas (se permitido e seguro) para elevar a temperatura do ar.',
          'Utilize aspersores para criar uma camada protetora de gelo (apenas para geada por radiação).',
          'Não remova as coberturas das plantas até que a temperatura suba significativamente.'
        ],
        after: [
          'Avalie os danos às plantas, verificando quais partes foram afetadas.',
          'Remova folhas e galhos necrosados para evitar doenças.',
          'Aplique nutrientes para auxiliar na recuperação das plantas.',
          'Monitore o aparecimento de pragas em plantas enfraquecidas.'
        ]
      }
    },
    {
      id: 'flood',
      title: 'Chuvas Intensas/Inundação',
      description: 'Orientações sobre drenagem, escoamento, recuperação de solo e prevenção de erosão.',
      alertLevel: 'ALTO',
      steps: {
        before: [
          'Verifique e limpe os sistemas de drenagem antes do período chuvoso.',
          'Crie canais de escoamento para direcionar o excesso de água.',
          'Plante em curvas de nível para reduzir a erosão.',
          'Tenha um plano de evacuação para equipamentos e animais, se necessário.'
        ],
        during: [
          'Desligue equipamentos elétricos em áreas de risco de alagamento.',
          'Proteja insumos e produtos químicos da água da chuva.',
          'Evite circular em áreas alagadas devido ao risco de doenças e acidentes.'
        ],
        after: [
          'Avalie os danos à infraestrutura e às culturas.',
          'Documente os prejuízos com fotos para fins de seguro ou auxílio governamental.',
          'Monitore o aparecimento de doenças fúngicas nas plantas.'
        ]
      }
    },
    {
      id: 'storm',
      title: 'Vendaval/Tempestade',
      description: 'Medidas de proteção contra ventos fortes, incluindo quebra-ventos e proteção de estruturas.',
      alertLevel: 'MÉDIO',
      steps: {
        before: [
          'Mantenha árvores e galhos podados para reduzir o risco de queda.',
          'Proteja estufas e estruturas frágeis.',
          'Amarre ou guarde equipamentos e materiais que possam ser levados pelo vento.',
          'Tenha um estoque de emergência de materiais para reparos rápidos.'
        ],
        during: [
          'Mantenha-se em local seguro, longe de árvores e estruturas que possam cair.',
          'Desligue equipamentos elétricos para evitar danos por raios ou quedas de energia.',
          'Evite circular na propriedade até que o tempo melhore.'
        ],
        after: [
          'Avalie os danos após a tempestade, com atenção a fios elétricos soltos.',
          'Remova galhos e detritos que possam causar acidentes.',
          'Verifique se há vazamentos ou danos em estruturas de armazenamento.'
        ]
      }
    },
    {
      id: 'fire',
      title: 'Incêndio Agrícola',
      description: 'Estratégias de prevenção de focos, criação de aceiros e manejo pós-incêndio.',
      alertLevel: 'ALTO',
      steps: {
        before: [
          'Mantenha aceiros ao redor da propriedade e de áreas de vegetação densa.',
          'Tenha equipamentos de combate a incêndios facilmente acessíveis.',
          'Armazene materiais inflamáveis longe de fontes de calor.',
          'Tenha um plano de evacuação para pessoas e animais.'
        ],
        during: [
          'Acione imediatamente o Corpo de Bombeiros (193).',
          'Tente controlar pequenos focos apenas se for seguro, usando abafadores ou água.',
          'Não arrisque sua segurança - priorize a evacuação se o fogo se alastrar rapidamente.'
        ],
        after: [
          'Mantenha-se afastado de áreas queimadas até que sejam consideradas seguras.',
          'Avalie os danos e documente com fotos para fins de seguro ou auxílio.',
          'Monitore a regeneração da vegetação e previna a erosão do solo.'
        ]
      }
    },
    {
      id: 'pests',
      title: 'Surto de Pragas/Doenças',
      description: 'Identificação rápida e controle emergencial de pragas e doenças que surgem após eventos climáticos extremos.',
      alertLevel: 'MÉDIO',
      steps: {
        before: [
          'Mantenha um caderno de campo para registrar ocorrências de pragas e doenças.',
          'Promova a diversidade de espécies para reduzir a propagação de pragas.',
          'Inspecione regularmente as plantas para detecção precoce de problemas.'
        ],
        during: [
          'Identifique corretamente a praga ou doença antes de qualquer tratamento.',
          'Use métodos de controle integrado, priorizando os menos agressivos ao meio ambiente.',
          'Isole plantas infectadas para evitar a propagação.'
        ],
        after: [
          'Avalie a eficácia das medidas de controle adotadas.',
          'Registre as práticas bem-sucedidas para referência futura.',
          'Monitore a área para detectar possíveis reinfestações.'
        ]
      }
    }
  ];

  const handleCrisisSelect = (crisis) => {
    setSelectedCrisis(crisis);
    setShowCrisisList(false);
  };

  const handleBackToList = () => {
    setSelectedCrisis(null);
    setShowCrisisList(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!showCrisisList && selectedCrisis) {
    return (
      <Container>
        <Header>
          <BackButton onClick={handleBackToList}>
            <FaArrowLeft />
          </BackButton>
          <Title>Plano de Ação: {selectedCrisis.title.toUpperCase()}</Title>
        </Header>

        <AlertBanner>
          <AlertTitle>
            <FaExclamationTriangle /> Nível de Alerta Atual: {selectedCrisis.alertLevel}
          </AlertTitle>
          <p>Este plano irá guiá-lo nas ações necessárias para lidar com esta situação de crise.</p>
        </AlertBanner>

        <Section>
          <Subsection>
            <SubsectionTitle>Antes da Crise (Prevenção e Preparo)</SubsectionTitle>
            <StepList>
              {selectedCrisis.steps.before.map((step, index) => (
                <StepItem key={`before-${index}`}>
                  <StepNumber>Passo {index + 1}:</StepNumber> {step}
                </StepItem>
              ))}
            </StepList>
          </Subsection>

          <Subsection>
            <SubsectionTitle>Durante a Crise (Ações Imediatas)</SubsectionTitle>
            <StepList>
              {selectedCrisis.steps.during.map((step, index) => (
                <StepItem key={`during-${index}`}>
                  <StepNumber>Passo {index + 1}:</StepNumber> {step}
                </StepItem>
              ))}
            </StepList>
          </Subsection>

          <Subsection>
            <SubsectionTitle>Depois da Crise (Recuperação e Avaliação)</SubsectionTitle>
            <StepList>
              {selectedCrisis.steps.after.map((step, index) => (
                <StepItem key={`after-${index}`}>
                  <StepNumber>Passo {index + 1}:</StepNumber> {step}
                </StepItem>
              ))}
            </StepList>
          </Subsection>
        </Section>

        <ContactInfo>
          <h3>Recursos e Ajuda:</h3>
          <ul>
            <li><FaPhone /> <strong>Defesa Civil:</strong> 199</li>
            <li><FaPhone /> <strong>Bombeiros:</strong> 193</li>
            <li><FaVideo /> <a href="#">Vídeos de Ação Rápida</a></li>
            <li><FaQuestionCircle /> <a href="#">Perguntas Frequentes</a></li>
          </ul>
        </ContactInfo>

        <Footer>
          <a href="#">Sobre Nós</a>
          <a href="#">Ajuda</a>
          <a href="#">Contato</a>
          <a href="#">Configurações</a>
        </Footer>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <BackButton onClick={handleBackToHome}>
          <FaArrowLeft />
        </BackButton>
        <Title>Plano de Ação de Crise</Title>
      </Header>

      <AlertBanner>
        <AlertTitle>
          <FaExclamationTriangle /> ALERTA ATIVO PARA SUA REGIÃO:
        </AlertTitle>
        <p>Risco de GEADA FORTE nas próximas 24h!</p>
        <ActionButton onClick={() => handleCrisisSelect(crisisTypes[1])}>
          Acessar Plano de Ação para GEADA
        </ActionButton>
      </AlertBanner>

      <Section>
        <SectionTitle>Escolha o tipo de crise que você enfrenta:</SectionTitle>
        <CrisisGrid>
          {crisisTypes.map((crisis) => (
            <CrisisCard key={crisis.id} onClick={() => handleCrisisSelect(crisis)}>
              <h3>{crisis.title}</h3>
              <p>{crisis.description}</p>
            </CrisisCard>
          ))}
        </CrisisGrid>
      </Section>

      <ContactInfo>
        <h3>Recursos e Ajuda:</h3>
        <ul>
          <li><FaPhone /> <strong>Defesa Civil:</strong> 199</li>
          <li><FaPhone /> <strong>Bombeiros:</strong> 193</li>
          <li><FaVideo /> <a href="#">Vídeos de Ação Rápida</a></li>
          <li><FaQuestionCircle /> <a href="#">Perguntas Frequentes</a></li>
        </ul>
      </ContactInfo>

      <Footer>
        <a href="#">Sobre Nós</a>
        <a href="#">Ajuda</a>
        <a href="#">Contato</a>
        <a href="#">Configurações</a>
      </Footer>
    </Container>
  );
};

export default CrisisActionPlan;

