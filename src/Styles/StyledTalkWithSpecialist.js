import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #2E8B57;
`;

export const Logo = styled.img`
  height: 40px;
  margin-right: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: #2E8B57;
  margin: 0;
`;

export const WelcomeSection = styled.section`
  background-color: #f5f9f5;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  color: #2E8B57;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: #555;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 1.5rem;
`;

export const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

export const OptionCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export const OptionIcon = styled.div`
  font-size: 2.5rem;
  color: #2E8B57;
  margin-bottom: 1rem;
`;

export const OptionTitle = styled.h3`
  color: #2E8B57;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
`;

export const OptionDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex-grow: 1;
`;

export const PrimaryButton = styled.button`
  background-color: #2E8B57;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #247145;
  }
`;

export const ThemeSection = styled.section`
  background-color: #f5f9f5;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin: 2rem 0;
`;

export const ThemeSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #555;
`;

export const InfoSection = styled.section`
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  border-left: 4px solid #2E8B57;
`;

export const InfoTitle = styled.h3`
  color: #2E8B57;
  margin-top: 0;
`;

export const InfoText = styled.p`
  color: #555;
  margin: 0.5rem 0;
`;

export const Footer = styled.footer`
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
  text-align: center;
`;

export const FooterLink = styled.a`
  color: #2E8B57;
  text-decoration: none;
  margin: 0 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;