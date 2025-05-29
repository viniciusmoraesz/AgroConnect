import styled from 'styled-components';

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #2E8B57 0%, #7CFC00 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

/* Estilos para o menu de navegação */
export const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const NotificationButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  position: relative;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const NotificationPopup = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  max-height: 400px;
  overflow-y: auto;
  display: ${props => props.$isOpen ? 'block' : 'none'};
`;

export const NotificationHeader = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  border-radius: 8px 8px 0 0;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NotificationTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const MarkAllRead = styled.button`
  background: none;
  border: none;
  color: #2E8B57;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  
  &:hover {
    background: rgba(46, 139, 87, 0.1);
  }
`;

export const NotificationList = styled.div`
  padding: 0;
`;

export const NotificationItem = styled.div`
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  align-items: flex-start;
  background: ${props => props.$unread ? '#f8f9ff' : 'transparent'};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background: #f8f9fa;
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
`;

export const NotificationTime = styled.small`
  display: block;
  color: #666;
  font-size: 0.75rem;
  margin-top: 4px;
`;

export const NotificationActions = styled.div`
  margin-left: 8px;
`;

export const MarkAsReadButton = styled.button`
  background: none;
  border: none;
  color: #2E8B57;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 4px;
  
  &:hover {
    background: rgba(46, 139, 87, 0.1);
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

export const PrimaryButton = styled.a`
  background-color: #FFD700;
  color: #003366;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const FeaturesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f9f9f9;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: #2E8B57;
  margin-bottom: 3rem;
  font-size: 2.5rem;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    color: #003366;
    margin: 1.5rem 0;
    font-size: 1.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

export const IconWrapper = styled.div`
  background-color: rgba(135, 206, 235, 0.2);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  svg {
    width: 40px;
    height: 40px;
    color: #003366;
  }
`;

export const CtaSection = styled.section`
  background-color: #003366;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

export const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

/* Main Container */
export const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
`;

/* Header */
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2E8B57;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NotificationBadge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: bold;
  pointer-events: none;
`;



/* Welcome Section */
export const WelcomeSection = styled.section`
  background: linear-gradient(135deg, #2E8B57 0%, #7CFC00 100%);
  color: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const WeatherIcon = styled.div`
  font-size: 3rem;
  line-height: 1;
`;

export const WeatherDetails = styled.div`
  flex: 1;

  p {
    margin: 0.25rem 0;
    font-size: 1.1rem;
  }
`;

export const ForecastText = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0.5rem 0 0 !important;
`;

/* Alert Section */
export const AlertSection = styled.div`
  background-color: #fff2f0;
  border: 1px solid #ffccc7;
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 2rem;
`;

export const AlertTitle = styled.h3`
  color: #cf1322;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
`;

/* Quick Actions */
export const QuickActions = styled.section`
  margin-bottom: 2.5rem;
`;

export const QuickActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const QuickActionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  p {
    margin: 0.75rem 0 0;
    font-weight: 500;
    color: #333;
  }
`;

export const ActionIcon = styled.div`
  font-size: 2rem;
  margin: 0 auto 0.5rem;
  color: #2E8B57;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background-color: rgba(46, 139, 87, 0.1);
  
  svg {
    width: 32px;
    height: 32px;
  }
`;

/* News Section */
export const NewsSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  border: 1px solid #f0f0f0;
`;

export const NewsItem = styled.article`
  padding: 1.25rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const NewsTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2E8B57;
  font-size: 1.1rem;
`;

/* Buttons */
export const Button = styled.button`
  background: #2E8B57;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  text-decoration: none;

  &:hover {
    background: #237347;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const OutlineButton = styled(Button)`
  background: transparent;
  border: 1px solid #2E8B57;
  color: #2E8B57;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: rgba(46, 139, 87, 0.05);
    color: #237347;
    border-color: #237347;
  }
`;

/* Footer */
export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
  border-top: 1px solid #f0f0f0;
  font-size: 0.9rem;
  color: #666;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  a {
    color: #2E8B57;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FloatingActionButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #2E8B57;
  color: white;
  border: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #1f6d3d;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ResilienceSection = styled.section`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  
  h3 {
    color: #2E8B57;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  p {
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  ul {
    padding-left: 1.25rem;
    margin: 1.5rem 0;
  }
  
  li {
    margin-bottom: 0.75rem;
    position: relative;
    padding-left: 1.75rem;
    line-height: 1.5;
    
    &::before {
      content: '✓';
      color: #2E8B57;
      font-weight: bold;
      position: absolute;
      left: 0;
      font-size: 1.1em;
    }
  }
  
  button {
    width: 100%;
    margin-top: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    @media (min-width: 768px) {
      width: auto;
      min-width: 280px;
    }
  }
`;