import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  gap: 20px;
`;

export const BackButton = styled(Link)`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  color: #2c3e50;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #2c3e50;
  margin: 0;
`;

export const FeaturedTip = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const TipHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TipTitle = styled.h2`
  font-size: 22px;
  color: #2c3e50;
  margin: 0;
`;

export const TipContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #34495e;
`;

export const TipIcon = styled.div`
  font-size: 48px;
  margin: 20px 0;
  text-align: center;
  color: #27ae60;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Button = styled(Link)`
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  text-align: center;
  &:hover {
    background-color: #219653;
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: #ecf0f1;
  color: #2c3e50;
  &:hover {
    background-color: #bdc3c7;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  color: #2c3e50;
  margin: 30px 0 15px 0;
`;

export const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

export const TipCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardIcon = styled.div`
  font-size: 32px;
  margin-bottom: 15px;
  color: #27ae60;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #2c3e50;
  margin: 0 0 10px 0;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
`;

export const CategoryCard = styled(Link)`
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  &:hover {
    background: #f8f9fa;
    transform: translateY(-3px);
  }
`;

export const SearchBar = styled.div`
  position: relative;
  margin: 20px 0;
  input {
    width: 100%;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    &:focus {
      outline: none;
      border-color: #27ae60;
    }
  }
  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #7f8c8d;
  }
`;

export const ContributeSection = styled.div`
  background: #e8f5e9;
  border-radius: 12px;
  padding: 25px;
  margin-top: 40px;
  text-align: center;
`;

export const ContributeTitle = styled.h3`
  color: #2c3e50;
  margin: 0 0 15px 0;
`;

export const ContributeText = styled.p`
  color: #34495e;
  margin-bottom: 20px;
`;