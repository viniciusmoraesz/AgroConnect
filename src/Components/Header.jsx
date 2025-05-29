import React, { useState } from 'react';
import { HeaderContainer, Logo, Nav, NavLink, MobileMenuButton, MobileMenu, MenuIcon } from '../Styles/StyledHeader';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'Dashboard', 'FAQ', 'Contato'];

  return (
    <HeaderContainer>
      <Logo src="../../src/assets/logo_header.png" alt="Logo AgroConnect" />
      <Nav>
        {menuItems.map((item) => (
          <NavLink key={item} href={`/${item == 'Dashboard' ? 'agricultor-dashboard' : item.toLowerCase()}`}>
            {item}
          </NavLink>
        ))}
      </Nav>
      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        <MenuIcon>☰</MenuIcon>
      </MobileMenuButton>
      <MobileMenu isOpen={isOpen}>
        {menuItems.map((item) => (
          <NavLink key={item} href={`/${item == 'Dashboard' ? 'agricultor-dashboard' : item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
            {item}
          </NavLink>
        ))}
      </MobileMenu>
    </HeaderContainer>
  );
}