import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaExclamationTriangle, 
  FaPhone, 
  FaVideo, 
  FaQuestionCircle, 
  FaBook, 
  FaUsers, 
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaChartLine,
  FaHistory,
  FaBug,
  FaLeaf,
  FaTint,
  FaTractor,
  FaWater
} from 'react-icons/fa';
import {
  Container,
  Header,
  BackButton,
  Title,
  StatusBanner,
  StatusTitle,
  RiskList,
  RiskItem,
  RiskTitle,
  RiskDescription,
  Section,
  SectionTitle,
  CategoryGrid,
  CategoryCard,
  ReportSection,
  ReportGrid,
  ReportCard,
  ResourceSection,
  ResourceList,
  ResourceLink,
  Footer,
  DetailHeader,
  RiskTitleLarge,
  RiskMeta,
  RiskSeverity,
  SectionDivider,
  ImageContainer,
  StepList,
  StepItem,
  ContactCard,
  Button
} from '../Styles/StyledRiskMonitoring';

const RiskMonitoring = () => {
  const navigate = useNavigate();
  const [selectedRisk, setSelectedRisk] = useState(null);
  const [showRiskList, setShowRiskList] = useState(true);

  const riskCategories = [
    {
      id: 'pests',
      title: 'Pragas Agrícolas',
      description: 'Identificação e controle de pragas como percevejos, lagartas e ácaros que afetam suas culturas.',
      icon: <FaBug size={24} />
    },
    {
      id: 'diseases',
      title: 'Doenças de Cultivos',
      description: 'Diagnóstico e tratamento de doenças como ferrugem, míldio e antracnose em suas plantas.',
      icon: <FaLeaf size={24} />
    },
    {
      id: 'nutrition',
      title: 'Nutrição do Solo',
      description: 'Monitoramento de deficiências nutricionais e recomendações para melhoria da fertilidade do solo.',
      icon: <FaTint size={24} />
    },
    {
      id: 'physical',
      title: 'Danos Físicos e Estruturais',
      description: 'Identificação e prevenção de danos por erosão, ventos fortes e outros fatores físicos.',
      icon: <FaTractor size={24} />
    },
    {
      id: 'water',
      title: 'Qualidade da Água',
      description: 'Monitoramento da qualidade da água para irrigação e identificação de contaminação.',
      icon: <FaWater size={24} />
    }
  ];

  const currentRisks = [
    {
      id: 'bicudo',
      title: 'Praga do Bicudo do Algodoeiro',
      severity: 'medium',
      description: 'Condições climáticas favoráveis à proliferação. Saiba mais.'
    },
    {
      id: 'ferrugem',
      title: 'Doença da Ferrugem Asiática da Soja',
      severity: 'high',
      description: 'Umidade elevada e temperaturas amenas aumentam o risco. Aja agora!'
    }
  ];

  const riskDetails = {
    bicudo: {
      id: 'bicudo',
      title: 'Bicudo do Algodoeiro',
      scientificName: 'Anthonomus grandis',
      affectedCrops: ['Algodão'],
      severity: 'medium',
      climateFactors: 'Temperaturas entre 25-30°C e umidade relativa do ar acima de 70%',
      description: 'O bicudo-do-algodoeiro é uma das principais pragas da cultura do algodão, podendo causar perdas significativas na produção se não for devidamente controlado.',
      identification: {
        description: 'O bicudo adulto é um pequeno besouro de coloração acinzentada ou marrom-avermelhada, com um rostro (tromba) longo e curvo. As larvas são brancas, ápodas e em forma de "C".',
        symptoms: [
          'Perfurações em botões florais, flores e maçãs jovens',
          'Botões florais com aspecto de "balão" devido à alimentação das larvas',
          'Queda prematura de botões florais e maçãs',
          'Orifícios de saída circulares nas maçãs atacadas'
        ]
      },
      prevention: [
        'Implemente o vazio sanitário do algodoeiro conforme as recomendações oficiais',
        'Elimine soqueiras e plantas voluntárias de algodão após a colheita',
        'Utilize cultivares resistentes ou tolerantes ao bicudo',
        'Mantenha a área livre de plantas daninhas que possam servir de hospedeiras alternativas',
        'Realize o monitoramento constante da lavoura para detecção precoce da praga'
      ],
      control: [
        'Controle químico com inseticidas registrados, seguindo as recomendações técnicas',
        'Aplicações devem ser realizadas no início da infestação, quando forem encontrados 5% de botões atacados',
        'Rotacione os princípios ativos para evitar a seleção de populações resistentes',
        'Utilize tecnologias de aplicação adequadas para melhor cobertura das plantas',
        'Respeite o intervalo de segurança entre aplicações e a cultura'
      ],
      monitoring: [
        'Instale armadilhas com feromônio para monitoramento da população de adultos',
        'Realize amostragens semanais, examinando 100 plantas por talhão',
        'Registre os dados de infestação para tomada de decisão',
        'Monitore as condições climáticas que favorecem o desenvolvimento da praga'
      ]
    },
    ferrugem: {
      id: 'ferrugem',
      title: 'Ferrugem Asiática da Soja',
      scientificName: 'Phakopsora pachyrhizi',
      affectedCrops: ['Soja'],
      severity: 'high',
      climateFactors: 'Temperaturas entre 18-26°C e períodos prolongados de molhamento foliar (acima de 6 horas)',
      description: 'A ferrugem asiática é uma das doenças mais destrutivas da cultura da soja, podendo causar perdas de até 90% na produtividade se não for adequadamente controlada.',
      identification: {
        description: 'A doença é caracterizada por pequenas pontuações de coloração mais clara na face superior das folhas, que evoluem para lesões de coloração castanho-avermelhada na face inferior.',
        symptoms: [
          'Pequenas pontuações de coloração mais clara na face superior das folhas',
          'Lesões castanho-avermelhadas na face inferior das folhas',
          'Lesões com formato angular, delimitadas pelas nervuras',
          'Amarelecimento e queda prematura das folhas em casos severos'
        ]
      },
      prevention: [
        'Respeite o vazio sanitário da soja em sua região',
        'Utilize sementes certificadas e tratadas',
        'Escolha cultivares com resistência ou tolerância à ferrugem',
        'Realize a semeadura na época recomendada para sua região',
        'Mantenha um espaçamento adequado entre as plantas para melhor aeração'
      ],
      control: [
        'Aplicação de fungicidas protetores e sistêmicos em mistura',
        'Inicie as aplicações preventivas ou ao primeiro sinal da doença',
        'Respeite o intervalo entre aplicações recomendado pelo fabricante',
        'Rotacione os princípios ativos dos fungicidas para evitar resistência',
        'Utilize volumes de calda adequados para boa cobertura foliar'
      ],
      monitoring: [
        'Monitore a lavoura semanalmente a partir do estádio V2',
        'Observe as folhas do terço inferior da planta',
        'Fique atento às condições climáticas favoráveis ao desenvolvimento da doença',
        'Consulte o sistema de alerta de ferrugem da soja para sua região'
      ]
    }
  };

  const handleRiskSelect = (riskId) => {
    setSelectedRisk(riskDetails[riskId]);
    setShowRiskList(false);
  };

  const handleCategorySelect = (categoryId) => {
    // In a real app, this would filter risks by category
    console.log('Selected category:', categoryId);
  };

  const handleBackToList = () => {
    setSelectedRisk(null);
    setShowRiskList(true);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!showRiskList && selectedRisk) {
    return (
      <Container>
        <Header>
          <BackButton onClick={handleBackToList}>
            <FaArrowLeft />
          </BackButton>
          <Title>Detalhes do Risco</Title>
        </Header>

        <DetailHeader>
          <RiskTitleLarge>{selectedRisk.title}</RiskTitleLarge>
          <RiskMeta>
            <span><strong>Cultura(s) Afetada(s):</strong> {selectedRisk.affectedCrops.join(', ')}</span>
            <RiskSeverity severity={selectedRisk.severity}>
              {selectedRisk.severity === 'high' ? 'ALTO' : selectedRisk.severity === 'medium' ? 'MÉDIO' : 'BAIXO'} RISCO
            </RiskSeverity>
          </RiskMeta>
          <p><strong>Fatores Climáticos Favoráveis:</strong> {selectedRisk.climateFactors}</p>
        </DetailHeader>

        <Section>
          <h2>Visão Geral</h2>
          <p>{selectedRisk.description}</p>
        </Section>


        <Section>
          <h2>Identificação e Sintomas</h2>
          <p>{selectedRisk.identification.description}</p>
          
          <h3>Sintomas Principais:</h3>
          <StepList>
            {selectedRisk.identification.symptoms.map((symptom, index) => (
              <StepItem key={`symptom-${index}`}>{symptom}</StepItem>
            ))}
          </StepList>

          <ImageContainer>
            <p>Imagem ilustrativa: {selectedRisk.title}</p>
          </ImageContainer>
        </Section>

        <Section>
          <h2>Prevenção e Manejo</h2>
          
          <h3>Medidas Preventivas:</h3>
          <StepList>
            {selectedRisk.prevention.map((step, index) => (
              <StepItem key={`prevention-${index}`}>{step}</StepItem>
            ))}
          </StepList>

          <h3>Controle:</h3>
          <StepList>
            {selectedRisk.control.map((step, index) => (
              <StepItem key={`control-${index}`}>{step}</StepItem>
            ))}
          </StepList>

          <h3>Monitoramento:</h3>
          <StepList>
            {selectedRisk.monitoring.map((step, index) => (
              <StepItem key={`monitoring-${index}`}>{step}</StepItem>
            ))}
          </StepList>
        </Section>


        <ContactCard>
          <h3>Precisa de Ajuda Específica?</h3>
          <Button>
            <FaPhone /> Falar com um Agrônomo
          </Button>
          <Button>
            <FaUsers /> Discutir na Comunidade
          </Button>
        </ContactCard>

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
        <Title>Monitoramento de Riscos</Title>
      </Header>

      <StatusBanner>
        <StatusTitle>
          <FaExclamationTriangle /> Status de Risco para Fazenda São João:
        </StatusTitle>
        <p>Nível de Risco: <strong>Médio</strong> - Fique atento aos alertas ativos</p>
        
        <h3>Alertas Ativos:</h3>
        <RiskList>
          {currentRisks.map((risk) => (
            <RiskItem 
              key={risk.id} 
              severity={risk.severity}
              onClick={() => handleRiskSelect(risk.id)}
            >
              <RiskTitle>
                {risk.severity === 'high' ? '🚨 ' : '⚠️ '}
                {risk.title}
              </RiskTitle>
              <RiskDescription>{risk.description}</RiskDescription>
            </RiskItem>
          ))}
        </RiskList>
      </StatusBanner>

      <Section>
        <SectionTitle>Navegue pelos Tipos de Risco</SectionTitle>
        <CategoryGrid>
          {riskCategories.map((category) => (
            <CategoryCard 
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
            >
              <h3>{category.icon} {category.title}</h3>
              <p>{category.description}</p>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </Section>

      <ReportSection>
        <SectionTitle>Relatórios e Previsão de Risco</SectionTitle>
        <ReportGrid>
          <ReportCard>
            <h4><FaMapMarkedAlt /> Mapa de Calor de Ocorrências</h4>
            <p>Visualize onde outros agricultores reportaram problemas na sua região.</p>
          </ReportCard>
          <ReportCard>
            <h4><FaChartLine /> Gráfico de Tendências</h4>
            <p>Projeção dos próximos 7 dias para riscos de pragas e doenças.</p>
          </ReportCard>
          <ReportCard>
            <h4><FaHistory /> Meu Histórico de Alertas</h4>
            <p>Revise os alertas passados para sua propriedade.</p>
          </ReportCard>
        </ReportGrid>
      </ReportSection>

      <ResourceSection>
        <SectionTitle>Recursos e Consultoria</SectionTitle>
        <p>Aprofunde seus conhecimentos e consulte especialistas:</p>
        
        <ResourceList>
          <li>
            <ResourceLink href="#">
              <FaBook /> Biblioteca de Guias
            </ResourceLink>
            <p>Manuais completos sobre prevenção e controle de riscos agrícolas.</p>
          </li>
          <li>
            <ResourceLink href="#">
              <FaUsers /> Fórum de Discussão
            </ResourceLink>
            <p>Troque experiências sobre manejo de riscos com outros agricultores.</p>
          </li>
          <li>
            <ResourceLink href="#">
              <FaCalendarAlt /> Consultoria Remota
            </ResourceLink>
            <p>Agende um atendimento com um especialista para uma análise personalizada.</p>
          </li>
        </ResourceList>
      </ResourceSection>

      <Footer>
        <a href="#">Sobre Nós</a>
        <a href="#">Ajuda</a>
        <a href="#">Contato</a>
        <a href="#">Configurações</a>
      </Footer>
    </Container>
  );
};

export default RiskMonitoring;