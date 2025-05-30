import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  primary: '#2E8B57',
  secondary: '#7CFC00',
  danger: '#E74C3C',
  warning: '#F39C12',
  info: '#3498DB',
  light: '#F8F9FA',
  dark: '#343A40',
  success: '#28A745'
};

export const DashboardContainer = styled.div`
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  padding-top: 100px;
`;

export const HeaderSection = styled.header`
  grid-column: 1 / -1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 20px;
`;

export const WelcomeText = styled.div`
  h1 {
    margin: 0;
    font-size: 28px;
    color: ${colors.dark};
    font-weight: 600;
  }
  
  p {
    margin: 8px 0 0;
    color: #666;
    font-size: 16px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f8f9fa;
  padding: 15px 25px;
  border-radius: 10px;
  
  .temp {
    font-size: 32px;
    font-weight: 700;
    color: ${colors.primary};
  }
  
  .details {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  
  .condition {
    font-weight: 600;
    color: ${colors.dark};
  }
  
  .extra {
    display: flex;
    gap: 15px;
    font-size: 14px;
    color: #666;
  }
`;

export const AlertCard = styled.div`
  grid-column: 1 / -1;
  background: ${props => props.severity === 'high' ? `linear-gradient(135deg, ${colors.danger} 0%, #FF6B6B 100%)` : 
    props.severity === 'medium' ? `linear-gradient(135deg, ${colors.warning} 0%, #FFD166 100%)` : 
    `linear-gradient(135deg, ${colors.success} 0%, #9CFFB3 100%)`};
  color: ${props => props.severity === 'low' ? colors.dark : 'white'};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  
  h2 {
    margin: 0 0 16px 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .impact {
    font-size: 16px;
    margin-bottom: 16px;
    line-height: 1.5;
  }
  
  .actions {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
`;

export const RiskCard = styled.div`
  grid-column: span 6;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  h3 {
    margin: 0 0 16px 0;
    font-size: 18px;
    color: ${colors.dark};
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  @media (max-width: 992px) {
    grid-column: 1 / -1;
  }
`;

export const RiskItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .risk-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .risk-title {
    font-weight: 600;
    color: ${colors.dark};
  }
  
  .risk-level {
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    background: ${props => 
      props.level === 'ALTO' ? colors.danger :
      props.level === 'MÉDIO' ? colors.warning : colors.success
    };
    color: white;
  }
  
  .risk-reason {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
  
  .risk-action {
    font-size: 14px;
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ResilienceCard = styled.div`
  grid-column: span 6;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  h3 {
    margin: 0 0 16px 0;
    font-size: 18px;
    color: ${colors.dark};
  }
  
  @media (max-width: 992px) {
    grid-column: 1 / -1;
  }
`;

export const SuggestionItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .suggestion-title {
    font-weight: 600;
    color: ${colors.primary};
    margin-bottom: 6px;
  }
  
  .suggestion-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
  }
  
  .suggestion-link {
    font-size: 14px;
    color: ${colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ToolsCard = styled.div`
  grid-column: 1 / -1;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  h3 {
    margin: 0 0 20px 0;
    font-size: 18px;
    color: ${colors.dark};
  }
`;

export const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const ToolButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 15px;
  background: ${colors.light};
  border-radius: 8px;
  text-decoration: none;
  color: ${colors.dark};
  transition: all 0.2s;
  text-align: center;
  border: 1px solid #eee;
  
  &:hover {
    background: ${colors.primary};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .icon {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .label {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const NewsCard = styled.div`
  grid-column: 1 / -1;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  
  h3 {
    margin: 0 0 16px 0;
    font-size: 18px;
    color: ${colors.dark};
  }
`;

export const NewsItem = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
  
  .news-title {
    font-weight: 600;
    color: ${colors.primary};
    margin-bottom: 4px;
  }
  
  .news-date {
    font-size: 12px;
    color: #999;
    margin-bottom: 4px;
  }
  
  .news-excerpt {
    font-size: 14px;
    color: #666;
  }
`;

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s;
  font-size: 14px;
  gap: 8px;
  
  &.btn-primary {
    background: ${colors.primary};
    color: white;
    
    &:hover {
      background: #1f6b3f;
    }
  }
  
  &.btn-outline {
    background: transparent;
    border: 1px solid ${props => props.severity === 'high' ? 'white' : colors.primary};
    color: ${props => props.severity === 'high' ? 'white' : colors.primary};
    
    &:hover {
      background: rgba(255,255,255,0.1);
    }
  }
`;