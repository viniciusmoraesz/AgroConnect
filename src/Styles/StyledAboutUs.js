import styled from 'styled-components';

export const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const HeaderSection = styled.header`
  text-align: center;
  padding: 4rem 2rem;
  margin-bottom: 3rem;
  position: relative;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.8)
    ),
    url('/images/exemplo3.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2E8B57;
`;

export const PageTitle = styled.h1`
  color: #2E8B57;
  font-size: 2.5rem;
  margin: 1rem 0;
`;

export const Tagline = styled.p`
  font-size: 1.2rem;
  color: #2E8B57;
  font-weight: 500;
  max-width: 80%;
  margin: 0 auto 2rem;
  line-height: 1.6;
`;

export const Section = styled.section`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  color: #2E8B57;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const SectionText = styled.p`
  color: #333;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

export const BenefitCard = styled.div`
  background: #f9f9f9;
  border-radius: 10px;
  padding: 1.5rem;
  border-left: 4px solid #2E8B57;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const BenefitIcon = styled.div`
  font-size: 2rem;
  color: #2E8B57;
  margin-bottom: 1rem;
`;

export const BenefitTitle = styled.h3`
  color: #2E8B57;
  margin: 0 0 1rem 0;
  font-size: 1.3rem;
`;

export const ValuesList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const ValueItem = styled.li`
  background: #f5f9f5;
  padding: 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  color: #2E8B57;
  text-align: center;
  
  &::before {
    content: '✓';
    margin-right: 0.5rem;
  }
`;

export const CtaSection = styled(Section)`
  text-align: center;
  background: linear-gradient(135deg, #2E8B57 0%, #7CFC00 100%);
  color: white;
`;

export const CtaTitle = styled.h2`
  color: white !important;
  margin-bottom: 1.5rem !important;
`;

export const CtaText = styled.p`
  color: white !important;
  font-size: 1.2rem;
  margin-bottom: 2rem !important;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  background: white;
  color: #2E8B57;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #eee;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  
  a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #2E8B57;
      text-decoration: underline;
    }
  }
`;