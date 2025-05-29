import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #F5F5F5;
  padding: 20px;
`;

export const HelperText = styled.p`
  color: #666;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: left;
`;

export const RegisterCard = styled.div`
  background-color: #FFFFFF;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const RegisterTitle = styled.h1`
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

export const Select = styled.select`
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
`;

export const ErrorText = styled.p`
  color: #FF8C42;
  font-size: 0.875rem;
  margin-top: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #45a049;
  }
`;

export const SuccessModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const SuccessModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
  width: 90%;

  h2 {
    color: #4CAF50;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #2E8B57;
`;

export const CheckboxLabel = styled.label`
  color: #2E8B57;
  font-size: 0.875rem;
`;

export const PasswordRequirements = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

export const Requirement = styled.span`
  color: ${props => props.isMet ? '#7CFC00' : '#FF8C42'};
  font-size: 0.875rem;
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
  font-size: 1rem;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(46, 139, 87, 0.1);
  }
`;

