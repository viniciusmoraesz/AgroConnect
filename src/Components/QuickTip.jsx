import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaSeedling, FaSnowflake, FaSprayCan, FaSearch } from 'react-icons/fa';
import Footer from './Footer';
import { GiPlantRoots, GiWheat } from 'react-icons/gi';
import { IoWater } from 'react-icons/io5';
import { BsCloudSun } from 'react-icons/bs';
import { MdPestControl, MdOutlineWaterDrop } from 'react-icons/md';
import { 
  Container, Header, BackButton, Title, FeaturedTip, TipHeader, TipTitle, 
  TipContent, TipIcon, ButtonGroup, Button, SecondaryButton, SectionTitle, 
  TipsGrid, TipCard, CardIcon, CardTitle, CategoriesGrid, CategoryCard,
  SearchBar, ContributeSection, ContributeTitle, ContributeText
} from '../Styles/StyledQuickTip';

const QuickTip = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample data for the tips
  const featuredTip = {
    title: 'Otimize a Irrigação em Períodos de Pouca Chuva',
    content: 'Com a diminuição das chuvas, é crucial ajustar a irrigação. Prefira irrigar no início da manhã ou final da tarde para reduzir a evaporação. Monitore a umidade do solo com a mão ou um tensiômetro simples para evitar o desperdício de água e garantir que suas plantas recebam o necessário.',
    icon: <MdOutlineWaterDrop />,
    region: 'Sul do Brasil'
  };

  const popularTips = [
    { id: 1, title: 'Como Melhorar a Saúde do Solo Pós-Colheita', icon: <GiPlantRoots /> },
    { id: 2, title: 'Escolha de Sementes Resistentes à Estiagem', icon: <FaSeedling /> },
    { id: 3, title: 'Proteção Básica Contra Geadas Leves', icon: <FaSnowflake /> },
    { id: 4, title: 'Calendário Ideal para Pulverização de Fungicidas', icon: <FaSprayCan /> },
  ];

  const categories = [
    { id: 1, name: 'Manejo do Solo', icon: <GiPlantRoots /> },
    { id: 2, name: 'Irrigação e Água', icon: <IoWater /> },
    { id: 3, name: 'Plantio e Colheita', icon: <GiWheat /> },
    { id: 4, name: 'Controle de Pragas e Doenças', icon: <MdPestControl /> },
    { id: 5, name: 'Nutrição de Plantas', icon: <FaSeedling /> },
    { id: 6, name: 'Clima e Prevenção', icon: <BsCloudSun /> },
    { id: 7, name: 'Pós-Colheita', icon: <GiWheat /> },
  ];

  return (
    <Container>
      <Header>
        <BackButton to="/home">
          <FaArrowLeft />
        </BackButton>
        <Title>Dica Rápida do Dia</Title>
      </Header>

      <FeaturedTip>
        <TipHeader>
          <span>Dica do Dia para {featuredTip.region}:</span>
          <TipTitle>{featuredTip.title}</TipTitle>
        </TipHeader>
        
        <TipIcon>
          {featuredTip.icon}
        </TipIcon>
        
        <TipContent>{featuredTip.content}</TipContent>
        
        <ButtonGroup>
          <Button to="/irrigacao-inteligente">Acessar Ferramenta de Irrigação Inteligente</Button>
          <SecondaryButton to="/dicas/irrigacao">Ver Mais Dicas sobre Irrigação</SecondaryButton>
        </ButtonGroup>
      </FeaturedTip>

      <SectionTitle>Outras Dicas Populares para Você</SectionTitle>
      <TipsGrid>
        {popularTips.map(tip => (
          <TipCard key={tip.id}>
            <CardIcon>{tip.icon}</CardIcon>
            <CardTitle>{tip.title}</CardTitle>
            <Button to={`/dicas/${tip.id}`} style={{ display: 'inline-block', padding: '8px 16px', fontSize: '14px' }}>Leia Mais</Button>
          </TipCard>
        ))}
      </TipsGrid>

      <SectionTitle>Encontre a Dica que Você Precisa</SectionTitle>
      <SearchBar>
        <FaSearch />
        <input 
          type="text" 
          placeholder="Buscar por cultivo, problema ou técnica..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>
      <CategoriesGrid>
        {categories.map(category => (
          <CategoryCard key={category.id} to={`/categorias/${category.id}`}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>{category.icon}</div>
            {category.name}
          </CategoryCard>
        ))}
      </CategoriesGrid>

      <ContributeSection>
        <ContributeTitle>Compartilhe Seu Conhecimento!</ContributeTitle>
        <ContributeText>
          Você tem uma dica valiosa que funciona em sua fazenda? Ajude outros agricultores!
        </ContributeText>
        <Button to="/enviar-dica" style={{ display: 'inline-block' }}>Enviar Minha Dica</Button>
      </ContributeSection>
      
      <Footer />
    </Container>
  );
};

export default QuickTip;