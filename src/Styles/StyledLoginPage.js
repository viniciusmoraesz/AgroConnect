import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding: 20px;
`;

export const LoginCard = styled.div`
  background-color: #FFFFFF;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const LoginTitle = styled.h1`
  color: #2E8B57;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #2E8B57;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #F5F5F5;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #7CFC00;
    box-shadow: 0 0 0 2px rgba(124, 252, 0, 0.2);
  }

  &::placeholder {
    color: #2E8B57;
  }
`;

export const ErrorText = styled.p`
  color: #FF8C42;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2E8B57;
  color: #FFFFFF;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #7CFC00;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: #2E8B57;
  font-size: 0.875rem;

  a {
    color: #003366;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TogglePassword = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2E8B57;
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #7CFC00;
  }
`;

export const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`;

export const Requirement = styled.span`
  color: ${props => props.isMet ? '#7CFC00' : '#FF8C42'};
  font-size: 0.75rem;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const RememberMe = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  color: #2E8B57;
`;

export const RememberMeInput = styled.input`
  accent-color: #7CFC00;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-size: 0.875rem;
  color: #2E8B57;

  a {
    color: #003366;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormDivider = styled.div`
  border-top: 1px solid #2E8B57;
  margin: 20px 0;
`;

export const FormDescription = styled.p`
  color: #2E8B57;
  font-size: 0.875rem;
  margin-bottom: 20px;
`;

export const FormError = styled.div`
  background-color: #FFF8F0;
  color: #FF8C42;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const FormSuccess = styled.div`
  background-color: #F0FFF0;
  color: #7CFC00;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormLabel = styled.label`
  color: #2E8B57;
  font-size: 0.875rem;
`;
