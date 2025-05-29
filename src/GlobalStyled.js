import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  h1 {
    font-size: 2.5rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 2rem;
    }
  }

  h2 {
    font-size: 2rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1.75rem;
    }
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.blueDark};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.blueLight};
    }
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    border-radius: ${({ theme }) => theme.borders.radius.md};
    transition: all 0.2s ease;
    font-weight: 500;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`
