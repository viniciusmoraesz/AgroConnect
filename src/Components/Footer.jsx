import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterContent,
  FooterText,
  FooterLinks
} from '../Styles/StyledFooter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          &copy; {currentYear} AgroConnect. Todos os direitos reservados.
        </FooterText>
        
        <FooterLinks>
          <Link to="/sobre-nos">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;