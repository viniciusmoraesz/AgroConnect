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

export const SearchSection = styled.section`
  margin: 2rem 0;
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    flex: 1;
    padding: 0.75rem 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    
    &::placeholder {
      color: #999;
    }
  }

  button {
    background: #2E8B57;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0 1.5rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: background 0.2s;

    &:hover {
      background: #237347;
    }
  }
`;

export const SectionTitle = styled.h2`
  color: #2E8B57;
  font-size: 1.25rem;
  margin: 2rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RecommendedSection = styled.section`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
`;

export const Card = styled.article`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardIcon = styled.div`
  background: #f0f9f0;
  width: 64px;
  height: 64px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #2E8B57;
  flex-shrink: 0;
`;

export const CardContent = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 0.5rem;
    color: #333;
  }

  p {
    margin: 0.5rem 0;
    color: #666;
    line-height: 1.5;
  }
`;

export const LearnMoreButton = styled.button`
  background: none;
  border: none;
  color: #2E8B57;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const CategoryCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  border: 1px solid #eee;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2E8B57;
    margin: 0 0 0.75rem;
    font-size: 1.1rem;
  }

  p {
    margin: 0.5rem 0 0;
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const CategoryIcon = styled.div`
  background: #f0f9f0;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2E8B57;
  margin-bottom: 1rem;
`;

export const FaqSection = styled.section`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 3rem 0;
`;

export const FaqItem = styled.div`
  margin: 1rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  strong {
    color: #2E8B57;
    display: block;
    margin-bottom: 0.25rem;
  }
`;

export const ViewMoreButton = styled.button`
  background: none;
  border: 1px solid #2E8B57;
  color: #2E8B57;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s;

  &:hover {
    background: #f0f9f0;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem 0;
  margin-top: 2rem;
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