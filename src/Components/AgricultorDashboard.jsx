import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DashboardContainer,
  HeaderSection,
  WelcomeText,
  WeatherInfo,
  AlertCard,
  RiskCard,
  RiskItem,
  ResilienceCard,
  SuggestionItem,
  ToolsCard,
  ToolsGrid,
  ToolButton,
  NewsCard,
  NewsItem,
  Button
} from '../Styles/StyledAgricultorDashboard';
import { 
  FaSun, 
  FaCloudRain, 
  FaWind, 
  FaTint, 
  FaArrowRight, 
  FaExclamationTriangle,
  FaChartLine,
  FaSeedling,
  FaTint as FaWater,
  FaTools,
  FaNewspaper
} from 'react-icons/fa';

export default function AgricultorDashboard() {
  // Mock data - in a real app, this would come from an API
  const farmerData = {
    name: 'João Silva',
    location: 'São Paulo - SP',
    farm: 'Sítio São João'
  };

  const weatherData = {
    temperature: 28,
    condition: 'Ensolarado',
    humidity: 65,
    wind: 12,
    precipitation: 0
  };

  const activeAlert = {
    active: true,
    severity: 'high', // 'high', 'medium', 'low'
    type: 'GEADA FORTE',
    timeFrame: 'próximas 24h',
    impact: 'Pode causar perdas de até 40% na cultura de café.',
    actionPlan: 'plano-geada'
  };

  const risks = [
    {
      id: 1,
      title: 'Praga da Ferrugem Asiática',
      level: 'MÉDIO',
      reason: 'Condições de umidade e temperatura favoráveis.',
      action: 'Revisar estratégias de manejo e inspeção.'
    },
    {
      id: 2,
      title: 'Deficiência Hídrica',
      level: 'BAIXO',
      reason: 'Níveis de chuva abaixo da média para o mês.',
      action: 'Considerar o manejo da irrigação.'
    }
  ];

  const suggestions = [
    {
      id: 1,
      title: 'Preparo do Solo',
      description: 'Técnicas de cobertura e plantio direto para melhorar a retenção de água.',
      link: '#'
    },
    {
      id: 2,
      title: 'Cultivares Resistentes',
      description: 'Melhores variedades de café para climas mais secos.',
      link: '/cultivares/cafe'
    }
  ];

  const tools = [
    { id: 1, icon: <FaChartLine />, label: 'Plano de Ação de Crise', link: '#' },
    { id: 2, icon: <FaSeedling />, label: 'Técnicas Agrícolas', link: '#' },
    { id: 3, icon: <FaWater />, label: 'Monitoramento de Irrigação', link: '#' },
    { id: 4, icon: <FaTools />, label: 'Ferramentas de Gestão', link: '#' }
  ];

  const news = [
    {
      id: 1,
      title: 'Novo sistema de alerta de geadas para a região Sudeste',
      date: '28/05/2025',
      excerpt: 'Sistema emite alertas com 48h de antecedência para auxiliar os produtores.'
    },
    {
      id: 2,
      title: 'Workshop gratuito sobre manejo sustentável',
      date: '25/05/2025',
      excerpt: 'Inscrições abertas para o evento que acontecerá no próximo mês.'
    }
  ];

  return (
    <DashboardContainer>
      {/* Header Section */}
      <HeaderSection>
        <WelcomeText>
          <h1>Olá, {farmerData.name}!</h1>
          <p>Sua fazenda em <strong>{farmerData.farm}</strong>, {farmerData.location}</p>
        </WelcomeText>
        
        <WeatherInfo>
          <div className="temp">{weatherData.temperature}°C</div>
          <div className="details">
            <div className="condition">{weatherData.condition}</div>
            <div className="extra">
              <span><FaTint /> {weatherData.humidity}%</span>
              <span><FaWind /> {weatherData.wind} km/h</span>
            </div>
          </div>
        </WeatherInfo>
      </HeaderSection>

      {/* Alert Card */}
      {activeAlert.active && (
        <AlertCard severity={activeAlert.severity}>
          <h2>
            <FaExclamationTriangle /> ALERTA CLIMÁTICO URGENTE PARA SUA REGIÃO!
          </h2>
          <p className="impact">
            <strong>Risco de {activeAlert.type} nas {activeAlert.timeFrame}!</strong><br />
            {activeAlert.impact}
          </p>
          <div className="actions">
            <Button 
              onClick={(e) => e.preventDefault()}
              className="btn-primary"
            >
              Acessar Plano de Ação para {activeAlert.type}
            </Button>
            <Button 
              onClick={(e) => e.preventDefault()}
              className="btn-outline"
              severity={activeAlert.severity}
            >
              Ver Relatório Completo
            </Button>
          </div>
        </AlertCard>
      )}

      {/* Risks Card */}
      <RiskCard>
        <h3>⚠️ Monitoramento de Riscos Ativos</h3>
        {risks.map(risk => (
          <RiskItem key={risk.id} level={risk.level}>
            <div className="risk-header">
              <span className="risk-title">{risk.title}</span>
              <span className="risk-level">{risk.level}</span>
            </div>
            <p className="risk-reason">{risk.reason}</p>
            <Link 
              onClick={(e) => e.preventDefault()}
              className="risk-action"
            >
              Ver detalhes e prevenção <FaArrowRight size={10} />
            </Link>
          </RiskItem>
        ))}
        <Button 
          onClick={(e) => e.preventDefault()}
          className="btn-outline" 
          style={{ marginTop: '15px' }}
        >
          Ver Todos os Riscos da Minha Região
        </Button>
      </RiskCard>

      <ResilienceCard>
        <h3>🌱 Construa a Resiliência da sua Lavoura</h3>
        {suggestions.map(suggestion => (
          <SuggestionItem key={suggestion.id}>
            <div className="suggestion-title">[{suggestion.title}]</div>
            <p className="suggestion-desc">{suggestion.description}</p>
            <Link 
              onClick={(e) => e.preventDefault()}
              className="suggestion-link"
            >
              Saiba mais <FaArrowRight size={10} />
            </Link>
          </SuggestionItem>
        ))}
      </ResilienceCard>

      <ToolsCard>
        <h3>🛠️ Ferramentas Essenciais e Suporte</h3>
        <ToolsGrid>
          {tools.map(tool => (
            <ToolButton key={tool.id} to={tool.link}>
              <span className="icon">{tool.icon}</span>
              <span className="label">{tool.label}</span>
            </ToolButton>
          ))}
        </ToolsGrid>
      </ToolsCard>

      <NewsCard>
        <h3>📰 Notícias e Atualizações do Setor</h3>
        {news.map(item => (
          <NewsItem key={item.id}>
            <div className="news-title">{item.title}</div>
            <div className="news-date">{item.date}</div>
            <p className="news-excerpt">{item.excerpt}</p>
          </NewsItem>
        ))}
        <Button 
          onClick={(e) => e.preventDefault()}
          className="btn-outline" 
          style={{ marginTop: '15px' }}
        >
          Ver Mais Notícias
        </Button>
      </NewsCard>
    </DashboardContainer>
  );
}