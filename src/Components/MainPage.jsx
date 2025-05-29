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
  NotificationPopup,
  NotificationHeader,
  NotificationTitle,
  NotificationList,
  NotificationItem,
  NotificationContent,
  NotificationTime,
  NotificationActions,
  MarkAsReadButton,
  MarkAllRead,
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
  ResilienceSection,
  Button,
  OutlineButton,
  FloatingActionButton
} from '../Styles/StyledMainPage';

import Footer from './Footer';

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
  FaEnvelope,
  FaShieldAlt
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

// Função para gerar data aleatória nos últimos 7 dias
const getRandomDate = () => {
  const randomDays = Math.floor(Math.random() * 7);
  const date = new Date();
  date.setDate(date.getDate() - randomDays);
  return date;
};

// Dados de notificações de exemplo
const sampleNotifications = [
  {
    id: 1,
    title: 'Alerta de Chuva Forte',
    message: 'Previsão de chuva intensa para amanhã na sua região. Recomendamos adiar a aplicação de defensivos.',
    time: getRandomDate(),
    read: false
  },
  {
    id: 2,
    title: 'Dica de Manejo',
    message: 'Período ideal para adubação de cobertura na cultura do milho. Aproveite o clima úmido!',
    time: getRandomDate(),
    read: false
  },
  {
    id: 3,
    title: 'Atualização do Sistema',
    message: 'Nova atualização disponível! Agora você pode acompanhar mais culturas no seu perfil.',
    time: getRandomDate(),
    read: false
  },
  {
    id: 4,
    title: 'Webinar Gratuito',
    message: 'Participe do nosso webinar sobre técnicas de irrigação sustentável. Dia 05/06 às 19h.',
    time: getRandomDate(),
    read: true
  },
  {
    id: 5,
    title: 'Dica de Plantio',
    message: 'Condições climáticas ideais para plantio de feijão na próxima semana.',
    time: getRandomDate(),
    read: true
  }
];

export default function MainPage() {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  
  // Conta notificações não lidas
  const unreadCount = notifications.filter(n => !n.read).length;
  
  // Formata a data para exibição
  const formatTime = (date) => {
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Agora mesmo';
    } else if (diffInHours < 24) {
      return `Há ${diffInHours}h`;
    } else if (diffInHours < 48) {
      return 'Ontem';
    } else {
      return `Há ${Math.floor(diffInHours / 24)} dias`;
    }
  };
  
  // Marca uma notificação como lida
  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };
  
  // Marca todas as notificações como lidas
  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      read: true
    })));
  };
  
  // Alterna a visibilidade do popup de notificações
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

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
          <div style={{ position: 'relative' }}>
            <NotificationButton onClick={toggleNotifications}>
              <FaBell />
              {unreadCount > 0 && (
                <NotificationBadge>
                  {unreadCount > 9 ? '9+' : unreadCount}
                </NotificationBadge>
              )}
            </NotificationButton>
            
            <NotificationPopup $isOpen={showNotifications}>
              <NotificationHeader>
                <NotificationTitle>Notificações</NotificationTitle>
                {unreadCount > 0 && (
                  <MarkAllRead onClick={markAllAsRead}>
                    Marcar todas como lidas
                  </MarkAllRead>
                )}
              </NotificationHeader>
              
              <NotificationList>
                {notifications.map(notification => (
                  <NotificationItem 
                    key={notification.id}
                    $unread={!notification.read}
                  >
                    <NotificationContent>
                      <strong>{notification.title}</strong>
                      <p style={{ margin: '4px 0 0 0' }}>{notification.message}</p>
                      <NotificationTime>
                        {formatTime(notification.time)}
                      </NotificationTime>
                    </NotificationContent>
                    {!notification.read && (
                      <NotificationActions>
                        <MarkAsReadButton onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notification.id);
                        }}>
                          Marcar como lida
                        </MarkAsReadButton>
                      </NotificationActions>
                    )}
                  </NotificationItem>
                ))}
              </NotificationList>
            </NotificationPopup>
          </div>
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
          Dica Rápida do Dia
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

      {/* Seção de Resiliência */}
      <ResilienceSection>
        <h3><FaShieldAlt /> Construa sua Resiliência Agora</h3>
        <p><strong>Sua Lavoura Mais Segura e Produtiva!</strong></p>
        <p>Com o AgroConnect, você tem as ferramentas para se preparar e proteger sua lavoura dos desafios climáticos.</p>
        
        <ul>
          <li><strong>Alerta:</strong> Receba avisos precisos e em tempo real.</li>
          <li><strong>Ação:</strong> Saiba exatamente o que fazer com planos de crise detalhados.</li>
          <li><strong>Prevenção:</strong> Monitore riscos e adote as melhores técnicas agrícolas.</li>
        </ul>
      </ResilienceSection>

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

      {/* Botão Flutuante de Ajuda */}
      <FloatingActionButton 
        onClick={() => navigate('/fale-com-especialista')}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Fale com Especialista"
      >
        <FaQuestionCircle />
        {showTooltip && (
          <div style={{
            position: 'absolute',
            right: '70px',
            backgroundColor: '#2E8B57',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '14px',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            Fale com Especialista
          </div>
        )}
      </FloatingActionButton>
      
      <Footer />
    </MainContainer>
  );
}