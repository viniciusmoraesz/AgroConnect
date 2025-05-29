import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #7CFC00;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
    height: 35px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #2E8B57;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #003366;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #2E8B57;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #7CFC00;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${NavLink} {
    display: block;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover {
      background-color: #2E8B57;
      color: #FFFFFF;
    }
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
