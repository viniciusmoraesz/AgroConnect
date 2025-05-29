import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DonationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #2c3e50;
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #27ae60;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  
  &:hover {
    color: #219653;
  }
  
  svg {
    margin-right: 8px;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 3rem;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #27ae60;
  margin-bottom: 1.5rem;
`;

export const HeroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #2c3e50;
`;

export const HeroImage = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Section = styled.section`
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #27ae60;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

export const ImpactCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  svg {
    font-size: 2.5rem;
    color: #27ae60;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #2c3e50;
    margin-bottom: 0.75rem;
  }
  
  p {
    color: #7f8c8d;
    line-height: 1.5;
  }
`;

export const DonationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const DonationButton = styled.button`
  background: ${({ selected }) => (selected ? '#27ae60' : '#f8f9fa')};
  color: ${({ selected }) => (selected ? 'white' : '#2c3e50')};
  border: 2px solid ${({ selected }) => (selected ? '#27ae60' : '#e0e0e0')};
  border-radius: 8px;
  padding: 1.25rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    border-color: #27ae60;
    background: ${({ selected }) => (selected ? '#219653' : '#f1f8f1')};
  }
  
  span {
    display: block;
    font-size: 0.9rem;
    font-weight: normal;
    margin-top: 0.5rem;
    opacity: 0.9;
  }
`;

export const CustomAmountInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  
  label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2c3e50;
  }
  
  input {
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    max-width: 300px;
    
    &:focus {
      outline: none;
      border-color: #27ae60;
    }
  }
`;

export const DonateButton = styled.button`
  background: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
  margin: 2rem auto;
  display: block;
  
  &:hover {
    background: #219653;
  }
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
  flex-wrap: wrap;
  
  .payment-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    img, svg {
      height: 30px;
      width: auto;
      opacity: 0.9;
      transition: opacity 0.3s ease;
      
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const Testimonial = styled.blockquote`
  background: #f8f9fa;
  border-left: 4px solid #27ae60;
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 0 8px 8px 0;
  
  p {
    font-style: italic;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  footer {
    font-weight: 600;
    color: #27ae60;
    text-align: right;
  }
`;

export const TransparencySection = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin: 3rem 0;
`;

export const TransparencyLink = styled.a`
  color: #27ae60;
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`;