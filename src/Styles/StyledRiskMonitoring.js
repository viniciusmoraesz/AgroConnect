import styled from 'styled-components';

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

export const StatusBanner = styled.div`
  background: #e8f4fd;
  border-left: 4px solid #4a90e2;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 0 4px 4px 0;
`;

export const StatusTitle = styled.h2`
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RiskList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

export const RiskItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => {
    if (props.severity === 'high') return '#e74c3c';
    if (props.severity === 'medium') return '#f39c12';
    return '#27ae60';
  }};
`;

export const RiskTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RiskDescription = styled.p`
  margin: 0.5rem 0 0 0;
  color: #666;
  font-size: 0.95rem;
`;

export const Section = styled.section`
  margin: 2.5rem 0;
`;

export const SectionTitle = styled.h2`
  color: #2E8B57;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

export const CategoryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2E8B57;
    margin: 0 0 0.75rem 0;
    font-size: 1.1rem;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    flex-grow: 1;
  }
`;

export const ReportSection = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

export const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ReportCard = styled.div`
  background: white;
  border-radius: 6px;
  padding: 1.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;

  h4 {
    margin: 0 0 0.75rem 0;
    color: #2c3e50;
    font-size: 1.1rem;
  }
`;

export const ResourceSection = styled.div`
  background: #f0f7f0;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

export const ResourceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;

  li {
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #e0e0e0;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

export const ResourceLink = styled.a`
  color: #2E8B57;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s;

  &:hover {
    color: #237347;
    text-decoration: underline;
  }
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

// Detail Page Styles
export const DetailHeader = styled.div`
  margin-bottom: 2rem;
`;

export const RiskTitleLarge = styled.h1`
  font-size: 1.75rem;
  color: #2c3e50;
  margin: 0 0 0.5rem 0;
`;

export const RiskMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  color: #666;
  font-size: 0.95rem;
`;

export const RiskSeverity = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  background-color: ${props => {
    if (props.severity === 'high') return '#fde8e8';
    if (props.severity === 'medium') return '#fef5e7';
    return '#e8f5e9';
  }};
  color: ${props => {
    if (props.severity === 'high') return '#c0392b';
    if (props.severity === 'medium') return '#d35400';
    return '#27ae60';
  }};
`;

export const SectionDivider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 2rem 0;
`;

export const ImageContainer = styled.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
    font-style: italic;
    font-size: 0.9rem;
  }
`;

export const StepList = styled.ol`
  padding-left: 1.5rem;
  margin: 1rem 0;
`;

export const StepItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  line-height: 1.6;
`;

export const ContactCard = styled.div`
  background: #e8f4fd;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;

  h3 {
    margin: 0 0 1rem 0;
    color: #2c3e50;
  }

  p {
    margin: 0.5rem 0;
    color: #444;
  }
`;

export const Button = styled.button`
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
  font-size: 1rem;

  &:hover {
    background: #237347;
  }
`;
