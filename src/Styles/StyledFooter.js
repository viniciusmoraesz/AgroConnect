import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 1rem 0;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  margin-top: auto; /* Isso faz com que o footer fique sempre no final da página */
  border-top: 1px solid #e0e0e0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

export const FooterText = styled.p`
  color: #2E8B57;
  margin: 0;
  font-size: 0.9rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: #2E8B57;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease;

    &:hover {
      color: #003366;
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
