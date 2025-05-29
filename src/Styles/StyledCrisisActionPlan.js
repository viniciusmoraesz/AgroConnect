import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2E8B57;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background: #f5f5f5;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #2E8B57;
  margin: 0;
  flex: 1;
`;

export const AlertBanner = styled.div`
  background: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

export const AlertTitle = styled.h2`
  color: #856404;
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Section = styled.section`
  margin: 2rem 0;
`;

export const SectionTitle = styled.h2`
  color: #2E8B57;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Subsection = styled.div`
  margin: 1.5rem 0;
`;

export const SubsectionTitle = styled.h3`
  color: #2c3e50;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StepItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
  
  &::before {
    content: '→';
    position: absolute;
    left: 0;
    color: #2E8B57;
    font-weight: bold;
  }
`;

export const StepNumber = styled.span`
  font-weight: bold;
  color: #2E8B57;
`;

export const CrisisGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const CrisisCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2E8B57;
    margin: 0 0 0.5rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const ActionButton = styled.button`
  background: #2E8B57;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  margin: 1rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #237347;
  }
`;

export const WarningBox = styled.div`
  background: #fff8e1;
  border-left: 4px solid #ffc107;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0 4px 4px 0;
  font-style: italic;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid #eee;

  a {
    color: #666;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.2s;

    &:hover {
      color: #2E8B57;
      text-decoration: underline;
    }
  }
`;

export const ContactInfo = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;

  h3 {
    color: #2E8B57;
    margin: 0 0 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;