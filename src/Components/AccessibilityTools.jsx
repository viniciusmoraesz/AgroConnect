import React, { useState } from 'react';
import { FaWheelchair, FaAdjust, FaTextHeight, FaEye, FaExpand } from 'react-icons/fa';
import styled from 'styled-components';

// Wrap styled components with transient props
const StyledAccessibilityContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 20px;
  z-index: 1000;
`;

const StyledAccessibilityButton = styled.button`
  background-color: #32BCAD;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 15px 0;
  position: relative;

  &:hover {
    transform: scale(1.1);
    background-color: #239a8d;
  }
`;

const StyledTooltip = styled.span`
  position: absolute;
  top: 50%;
  left: -250px;
  transform: translateY(-50%);
  background-color: #32BCAD;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 1001;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:before {
    content: '';
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 8px 0 8px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #32BCAD;
  }

  ${StyledAccessibilityButton}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;

// Add a wrapper for each button to prevent tooltip overlap
const StyledButtonWrapper = styled.div`
  position: relative;
  margin: 15px 0;
  width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


// Error boundary for accessibility tools
const AccessibilityErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div style={{ color: 'red', padding: '1rem' }}>Erro ao carregar as ferramentas de acessibilidade</div>;
  }

  return children;
};

const AccessibilityTools = () => {
  const [showSettings, setShowSettings] = useState(false);

  // Funções para cada funcionalidade (implementar conforme necessário)
  const toggleContrast = () => {
    // Implementar lógica para alternar contraste
    console.log('Alternando contraste...');
  };

  const changeTextSize = () => {
    // Implementar lógica para mudar tamanho do texto
    console.log('Mudando tamanho do texto...');
  };

  const toggleScreenReader = () => {
    // Implementar lógica para ativar leitor de tela
    console.log('Ativando leitor de tela...');
  };

  const controlZoom = () => {
    // Implementar lógica para controlar zoom
    console.log('Controlando zoom...');
  };

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <AccessibilityErrorBoundary>
      <StyledAccessibilityContainer>
        <StyledButtonWrapper>
          <StyledAccessibilityButton
            onClick={toggleSettings}
            aria-label="Configurações de Acessibilidade"
            $showSettings={showSettings}
          >
            <FaWheelchair size={20} />
            <StyledTooltip>Configurações de Acessibilidade</StyledTooltip>
          </StyledAccessibilityButton>
        </StyledButtonWrapper>

        {showSettings && (
          <>
            <StyledButtonWrapper>
              <StyledAccessibilityButton
                onClick={toggleContrast}
                aria-label="Alternar Contraste"
                $showSettings={showSettings}
              >
                <FaAdjust size={20} />
                <StyledTooltip>Alternar Contraste</StyledTooltip>
              </StyledAccessibilityButton>
            </StyledButtonWrapper>

            <StyledButtonWrapper>
              <StyledAccessibilityButton
                onClick={changeTextSize}
                aria-label="Mudar Tamanho do Texto"
                $showSettings={showSettings}
              >
                <FaTextHeight size={20} />
                <StyledTooltip>Mudar Tamanho do Texto</StyledTooltip>
              </StyledAccessibilityButton>
            </StyledButtonWrapper>

            <StyledButtonWrapper>
              <StyledAccessibilityButton
                onClick={toggleScreenReader}
                aria-label="Ativar Leitor de Tela"
                $showSettings={showSettings}
              >
                <FaEye size={20} />
                <StyledTooltip>Ativar Leitor de Tela</StyledTooltip>
              </StyledAccessibilityButton>
            </StyledButtonWrapper>

            <StyledButtonWrapper>
              <StyledAccessibilityButton
                onClick={controlZoom}
                aria-label="Controlar Zoom"
                $showSettings={showSettings}
              >
                <FaExpand size={20} />
                <StyledTooltip>Controlar Zoom</StyledTooltip>
              </StyledAccessibilityButton>
            </StyledButtonWrapper>
          </>
        )}
      </StyledAccessibilityContainer>
    </AccessibilityErrorBoundary>
  );
};

export default AccessibilityTools;


