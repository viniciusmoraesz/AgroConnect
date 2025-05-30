import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ContactContent = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const TitleSection = styled.div`
  text-align: center;
  h1 {
    color: #32BCAD;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

export const FormSection = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: #333;
    font-weight: 600;
  }

  input, select, textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #32BCAD;
    }
  }

  textarea {
    height: 150px;
    resize: vertical;
  }
`;

export const SubmitButton = styled.button`
  background-color: #32BCAD;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #239a8d;
  }
`;

export const ContactInfo = styled.div`
  h2 {
    color: #333;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #666;

  svg {
    width: 24px;
    height: 24px;
    color: #32BCAD;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #32BCAD;
    }
  }
`;