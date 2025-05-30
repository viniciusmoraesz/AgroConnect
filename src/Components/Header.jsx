import React, { useState, useEffect } from 'react';
import { HeaderContainer, Logo, Nav, NavLink, MobileMenuButton, MobileMenu, MenuIcon } from '../Styles/StyledHeader';
import { useLocation } from 'react-router-dom';

const menuRoutes = {
  Home: '/home',
  Dashboard: '/agricultor-dashboard',
  FAQ: '/faq',
  Contato: '/contato',
  Sair: '/'
};

const authRoutes = {
  Login: '/',
  Cadastro: '/cadastro'
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const currentRoutes = location.pathname === '/' || location.pathname === '/cadastro' 
    ? authRoutes 
    : menuRoutes;

  return (
    <HeaderContainer>
      <Logo src="../../src/assets/logo_header.png" alt="Logo AgroConnect" />
      <Nav>
        {Object.entries(currentRoutes).map(([item, path]) => (
          <NavLink key={item} href={path}>
            {item}
          </NavLink>
        ))}
      </Nav>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon>☰</MenuIcon>
      </MobileMenuButton>
      <MobileMenu isOpen={isOpen}>
        {Object.entries(currentRoutes).map(([item, path]) => (
          <NavLink key={item} href={path} onClick={() => setIsOpen(false)}>
            {item}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
}