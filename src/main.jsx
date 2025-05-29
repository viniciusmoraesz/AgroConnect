import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyled';
import App from './App';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AgricultorDashboard from './Components/AgricultorDashboard';
import ExpertDashboard from './Components/EspecialistaDashboard';
import FAQPage from './Components/FAQPage';
import ContactPage from './Components/ContactPage';
import MainPage from './Components/MainPage';
import WeatherForecast from './Components/WeatherForecast';
import AgriculturalTechniques from './Components/AgriculturalTechniques';
import CrisisActionPlan from './Components/CrisisActionPlan';
import RiskMonitoring from './Components/RiskMonitoring';
import AboutUs from './Components/AboutUs';
import TalkWithSpecialist from './Components/TalkWithSpecialist';

// Importar a fonte Poppins
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App/>}>
        <Route index element={<LoginPage/>} />
        <Route path="contato" element={<ContactPage/>} />
        <Route path="cadastro" element={<RegisterPage/>} />
        <Route path="agricultor-dashboard" element={<AgricultorDashboard/>} />
        <Route path="especialista-dashboard" element={<ExpertDashboard/>} />
        <Route path="faq" element={<FAQPage/>} />
        <Route path="home" element={<MainPage/>} />
        <Route path="previsao-tempo" element={<WeatherForecast/>} />
        <Route path="tecnicas-agricolas" element={<AgriculturalTechniques/>} />
        <Route path="plano-crise" element={<CrisisActionPlan/>} />
        <Route path="monitoramento-riscos" element={<RiskMonitoring/>} />
        <Route path="sobre-nos" element={<AboutUs/>} />
        <Route path="fale-com-especialista" element={<TalkWithSpecialist/>} />
      </Route>
    </Routes>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Router>
      <AppRouter />
    </Router>
  </StrictMode>
);
