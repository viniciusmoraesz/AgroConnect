import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  WeatherContainer, 
  Header, 
  BackButton, 
  LocationInfo, 
  AlertBanner, 
  DaySummary, 
  WeekForecast, 
  DaysContainer, 
  DayCard, 
  HourlyForecast, 
  HourlyTable,
  AdditionalInfo,
} from '../Styles/StyledWeatherForecast';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { WiDaySunny, WiRain, WiCloudy, WiDayCloudy, WiDaySunnyOvercast, WiNightClear, WiNightCloudy, WiNightRain } from 'react-icons/wi';

import Footer from './Footer';

const WeatherForecast = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate('/main-page');
  };
  const [selectedDay, setSelectedDay] = useState(0);

  // Mock data - in a real app, this would come from an API
  const location = {
    name: 'Campinas, SP',
    lastUpdated: new Date().toLocaleString('pt-BR')
  };

  const alert = {
    title: 'ALERTA AGRÍCOLA:',
    message: 'Risco de Chuva Intensa com Granizo à tarde.',
    details: 'Verifique o detalhamento por hora para planejar a colheita.'
  };

  const today = {
    condition: 'Parcialmente nublado',
    icon: 'cloud-sun',
    temp: {
      current: '24°C',
      max: '27°C',
      min: '18°C'
    },
    rain: {
      chance: '45%',
      amount: '12mm'
    }
  };

  const weekForecast = [
    { day: 'Qua', date: '29', icon: 'cloud-sun', temp: '18° / 27°' },
    { day: 'Qui', date: '30', icon: 'rain', temp: '19° / 25°' },
    { day: 'Sex', date: '31', icon: 'cloudy', temp: '20° / 28°' },
    { day: 'Sáb', date: '01', icon: 'sunny', temp: '19° / 30°' },
    { day: 'Dom', date: '02', icon: 'sunny', temp: '20° / 31°' },
    { day: 'Seg', date: '03', icon: 'cloudy', temp: '19° / 27°' },
    { day: 'Ter', date: '04', icon: 'cloudy', temp: '18° / 26°' }
  ];

  const hourlyForecast = [
    { time: '06:00', temp: '18°C', condition: 'Nublado', rain: '5%', wind: '5 km/h', humidity: '75%' },
    { time: '09:00', temp: '20°C', condition: 'Parcialmente nublado', rain: '10%', wind: '7 km/h', humidity: '70%' },
    { time: '12:00', temp: '25°C', condition: 'Ensolarado', rain: '0%', wind: '8 km/h', humidity: '60%' },
    { time: '15:00', temp: '27°C', condition: 'Parcialmente nublado', rain: '15%', wind: '10 km/h', humidity: '55%' },
    { time: '18:00', temp: '22°C', condition: 'Chuva fraca', rain: '60%', wind: '12 km/h', humidity: '80%' },
    { time: '21:00', temp: '19°C', condition: 'Nublado', rain: '30%', wind: '8 km/h', humidity: '85%' }
  ];

  const additionalInfo = [
    { title: 'Índice UV', value: 'Moderado (5)' },
    { title: 'Nascer do Sol', value: '06:30' },
    { title: 'Pôr do Sol', value: '17:45' },
    { title: 'Fase da Lua', value: 'Crescente' },
    { title: 'Qualidade do Ar', value: 'Boa' }
  ];

  const getWeatherIcon = (iconName, size = 24) => {
    const icons = {
      'sunny': <WiDaySunny size={size} />,
      'rain': <WiRain size={size} />,
      'cloudy': <WiCloudy size={size} />,
      'cloud-sun': <WiDayCloudy size={size} />,
      'partly-cloudy': <WiDaySunnyOvercast size={size} />,
      'night-clear': <WiNightClear size={size} />,
      'night-cloudy': <WiNightCloudy size={size} />,
      'night-rain': <WiNightRain size={size} />,
      'cloud-moon': <WiNightCloudy size={size} />,
      'cloud-moon-rain': <WiNightRain size={size} />
    };
    return icons[iconName] || <WiDaySunny size={size} />;
  };

  return (
    <WeatherContainer>
      {/* Header */}
      <Header>
        <BackButton onClick={() => navigate('/home')}>
          <FaArrowLeft />
        </BackButton>
        <h1>Previsão Detalhada</h1>
      </Header>

      {/* Location and Date */}
      <LocationInfo>
        <p><strong>Previsão para:</strong> {location.name}</p>
        <p><strong>Atualizado em:</strong> {location.lastUpdated}</p>
      </LocationInfo>

      {/* Alert Banner */}
      <AlertBanner>
        <h3><FaExclamationTriangle /> {alert.title}</h3>
        <p><strong>{alert.message}</strong></p>
        <p>{alert.details}</p>
      </AlertBanner>

      {/* Day Summary */}
      <DaySummary>
        <div className="weather-icon">
          {getWeatherIcon(today.icon, 48)}
        </div>
        <div className="temp-summary">
          <h3>Resumo do Dia:</h3>
          <div className="temp-range">
            <span>Máxima: {today.temp.max}</span>
            <span>Mínima: {today.temp.min}</span>
          </div>
          <p>Chance de Chuva: {today.rain.chance} | Volume Estimado: {today.rain.amount}</p>
        </div>
      </DaySummary>

      {/* 7-Day Forecast */}
      <WeekForecast>
        <h2>Previsão para os Próximos 7 Dias</h2>
        <DaysContainer>
          {weekForecast.map((day, index) => (
            <DayCard 
              key={index} 
              $active={selectedDay === index}
              onClick={() => setSelectedDay(index)}
            >
              <div className="day-name">{day.day}</div>
              <div className="date">{day.date}</div>
              <div className="weather-icon">
                {getWeatherIcon(day.icon, 28)}
              </div>
              <div className="temp">{day.temp}</div>
            </DayCard>
          ))}
        </DaysContainer>
      </WeekForecast>

      {/* Hourly Forecast */}
      <HourlyForecast>
        <h2>Previsão Horária para {weekForecast[selectedDay].day}, {weekForecast[selectedDay].date}/05</h2>
        <div style={{ overflowX: 'auto' }}>
          <HourlyTable>
            <thead>
              <tr>
                <th>Hora</th>
                <th>Temperatura</th>
                <th>Condição</th>
                <th>Chuva</th>
                <th>Vento</th>
                <th>Umidade</th>
              </tr>
            </thead>
            <tbody>
              {hourlyForecast.map((hour, index) => (
                <tr key={index}>
                  <td className="hour-cell">{hour.time}</td>
                  <td className="temp-cell">{hour.temp}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {getWeatherIcon(hour.condition.includes('Chuva') ? 'rain' : 'cloud-sun', 24)}
                      {hour.condition}
                    </div>
                  </td>
                  <td className="rain-cell">{hour.rain}</td>
                  <td>{hour.wind}</td>
                  <td>{hour.humidity}</td>
                </tr>
              ))}
            </tbody>
          </HourlyTable>
        </div>
      </HourlyForecast>

      {/* Additional Info */}
      <AdditionalInfo>
        {additionalInfo.map((info, index) => (
          <div key={index} className="info-item">
            <h4>{info.title}</h4>
            <p>{info.value}</p>
          </div>
        ))}
      </AdditionalInfo>
      
      <Footer />
    </WeatherContainer>
  );
};

export default WeatherForecast;