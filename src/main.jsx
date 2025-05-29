import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyled';
import App from './App';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AgricultureDashboard from './Components/AgricultorDashboard';
import ExpertDashboard from './Components/EspecialistaDashboard';
import FAQPage from './Components/FAQPage';
import ContactPage from './Components/ContactPage';
import MainPage from './Components/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<LoginPage />} />
        <Route path="contato" element={<ContactPage />} />
        <Route path="registro-usuario" element={<RegisterPage />} />
        <Route path="agricultor-dashboard" element={<AgricultureDashboard />} />
        <Route path="especialista-dashboard" element={<ExpertDashboard />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="main-page" element={<MainPage />} />
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