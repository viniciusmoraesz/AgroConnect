import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MainContainer,
  Header,
  Logo,
  HeaderActions,
  MenuButton,
  NotificationButton,
  NotificationBadge,
  WelcomeSection,
  WeatherInfo,
  WeatherIcon,
  WeatherDetails,
  ForecastText,
  AlertSection,
  AlertTitle,
  QuickActions,
  QuickActionsGrid,
  QuickActionCard,
  ActionIcon,
  NewsSection,
  NewsItem,
  NewsTitle,
  Button,
  OutlineButton,
  Footer,
  FooterLinks
} from '../Styles/StyledMainPage';

import { 
  FaBars, 
  FaBell, 
  FaSun, 
  FaCloudRain, 
  FaCloudSun, 
  FaLeaf, 
  FaExclamationTriangle,
  FaChartLine,
  FaGlobeAmericas,
  FaCog,
  FaQuestionCircle,
  FaEnvelope
} from 'react-icons/fa';
import { WiDaySunny, WiRain, WiCloudy } from 'react-icons/wi';

const quickActions = [
  {
    icon: <WiDaySunny size={40} />,
    title: 'Previsão do Tempo',
    path: '/previsao-tempo'
  },
  {
    icon: <FaLeaf size={24} />,
    title: 'Técnicas Agrícolas',
    path: '/tecnicas-agricolas'
  },
  {
    icon: <FaExclamationTriangle size={24} />,
    title: 'Plano de Ação de Crise',
    path: '/plano-crise'
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Monitoramento de Riscos',
    path: '/monitoramento-riscos'
  }
];

const news = [
  {
    title: 'Dica Rápida: Como identificar e combater o pulgão?',
    date: '28/05/2024',
    excerpt: 'Aprenda técnicas naturais para combater esta praga comum em diversas culturas.'
  },
  {
    title: 'Novo programa de incentivo para agricultores familiares',
    date: '27/05/2024',
    excerpt: 'Governo anuncia linha de crédito especial para pequenos produtores rurais.'
  }
];

export default function MainPage() {
  const navigate = useNavigate();
  const [notifications] = useState(3); // Simula notificações não lidas

  // Simula dados do clima
  const weatherData = {
    temperature: '24°C',
    condition: 'Ensolarado',
    forecast: 'Chuva forte à tarde',
    region: 'Zona Rural de São Paulo',
    icon: 'sun'
  };

  const getWeatherIcon = () => {
    switch(weatherData.icon) {
      case 'sun':
        return <WiDaySunny size={48} />;
      case 'rain':
        return <WiRain size={48} />;
      case 'cloud':
        return <WiCloudy size={48} />;
      default:
        return <WiDaySunny size={48} />;
    }
  };

  return (
    <MainContainer>
      {/* Cabeçalho */}
      <Header>
        <Logo>AgroConnect</Logo>
        <HeaderActions>
          <NotificationButton>
            <FaBell />
            {notifications > 0 && (
              <NotificationBadge>
                {notifications > 9 ? '9+' : notifications}
              </NotificationBadge>
            )}
          </NotificationButton>
          <MenuButton>
            <FaBars />
          </MenuButton>
        </HeaderActions>
      </Header>

      {/* Seção de Boas-Vindas */}
      <WelcomeSection>
        <h2>Olá, Agricultor!</h2>
        <WeatherInfo>
          <WeatherIcon>
            {getWeatherIcon()}
          </WeatherIcon>
          <WeatherDetails>
            <p><strong>{weatherData.temperature}</strong> | {weatherData.condition}</p>
            <ForecastText>
              Previsão para {weatherData.region}: {weatherData.forecast}
            </ForecastText>
          </WeatherDetails>
        </WeatherInfo>
        <Button onClick={() => navigate('/previsao-detalhada')}>
          Ver Previsão Detalhada
        </Button>
      </WelcomeSection>

      {/* Seção de Alerta */}
      <AlertSection>
        <AlertTitle>
          <FaBell /> ALERTA IMPORTANTE!
        </AlertTitle>
        <p>Risco de Geada na Região Sul nas Próximas 24h.</p>
        <OutlineButton onClick={() => navigate('/alerta-geada')}>
          Saiba como proteger sua lavoura
        </OutlineButton>
      </AlertSection>

      {/* Acesso Rápido */}
      <QuickActions>
        <h3>Acesso Rápido</h3>
        <QuickActionsGrid>
          {quickActions.map((action, index) => (
            <QuickActionCard 
              key={index} 
              onClick={() => navigate(action.path)}
            >
              <ActionIcon>{action.icon}</ActionIcon>
              <p>{action.title}</p>
            </QuickActionCard>
          ))}
        </QuickActionsGrid>
      </QuickActions>

      {/* Notícias e Dicas */}
      <NewsSection>
        <h3>Notícias e Dicas</h3>
        {news.map((item, index) => (
          <NewsItem key={index}>
            <NewsTitle>{item.title}</NewsTitle>
            <p>{item.excerpt}</p>
            <small>{item.date}</small>
          </NewsItem>
        ))}
        <Button 
          variant="outline" 
          onClick={() => navigate('/noticias')}
          style={{ marginTop: '1rem' }}
        >
          Ver todas as Notícias/Dicas
        </Button>
      </NewsSection>

      {/* Rodapé */}
      <Footer>
        <FooterLinks>
          <a href="/sobre">Sobre Nós</a>
          <a href="/ajuda">Ajuda</a>
          <a href="/contato">Contato</a>
          <a href="/configuracoes">Configurações</a>
        </FooterLinks>
        <div>
          <FaGlobeAmericas />
          <select style={{ marginLeft: '0.5rem', border: 'none', background: 'none' }}>
            <option>Português</option>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>
      </Footer>
    </MainContainer>
  );
}