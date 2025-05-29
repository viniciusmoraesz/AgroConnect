import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaFilter, FaLeaf, FaTint, FaBug, FaSeedling, FaCloudSunRain, FaCertificate } from 'react-icons/fa';
import { GiFarmer, GiCorn, GiWheat } from 'react-icons/gi';
import { 
  Container, 
  Header, 
  BackButton, 
  Title, 
  SearchSection, 
  SearchBar, 
  SectionTitle, 
  RecommendedSection, 
  Card, 
  CardIcon, 
  CardContent, 
  LearnMoreButton,
  CategoriesGrid,
  CategoryCard,
  CategoryIcon,
  FaqSection,
  FaqItem,
  ViewMoreButton,
  Footer
} from '../Styles/StyledAgriculturalTechniques';

const AgriculturalTechniques = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for recommended techniques
  const recommendedTechniques = [
    {
      id: 1,
      title: 'Irrigação por Gotejamento para Períodos de Estiagem',
      description: 'Aprenda a economizar água e manter a produtividade mesmo em períodos de seca prolongada.',
      icon: <FaTint />
    },
    {
      id: 2,
      title: 'Milho Híbrido Resistente à Seca (Variedade X)',
      description: 'Conheça os benefícios e como cultivar esta variedade que se adapta bem a condições de baixa umidade.',
      icon: <GiCorn />
    }
  ];

  // Categories data
  const categories = [
    {
      title: 'Manejo do Solo e Água',
      description: 'Técnicas como rotação de culturas, irrigação inteligente e terraceamento para melhorar a qualidade do solo e uso da água.',
      icon: <FaTint />
    },
    {
      title: 'Cultivos e Variedades Resistentes',
      description: 'Conheça sementes adaptadas e cultivares mais resistentes às condições climáticas da sua região.',
      icon: <GiWheat />
    },
    {
      title: 'Proteção contra Pragas e Doenças',
      description: 'Métodos de controle biológico, defensivos naturais e monitoramento para proteger sua lavoura.',
      icon: <FaBug />
    },
    {
      title: 'Técnicas de Pós-Colheita',
      description: 'Melhores práticas para armazenamento, processamento básico e redução de perdas após a colheita.',
      icon: <FaSeedling />
    },
    {
      title: 'Preparo para Eventos Extremos',
      description: 'Técnicas como cobertura de solo, quebra-vento e sistemas de drenagem para proteger sua lavoura.',
      icon: <FaCloudSunRain />
    },
    {
      title: 'Certificações e Boas Práticas',
      description: 'Informações sobre agricultura orgânica, boas práticas agrícolas e certificações disponíveis.',
      icon: <FaCertificate />
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'Como preparar sua lavoura para chuvas fortes?',
      type: 'Artigo'
    },
    {
      question: 'Qual a melhor época para plantar feijão na região Sudeste?',
      type: 'FAQ'
    },
    {
      question: 'Quais são as técnicas mais eficientes para economizar água na irrigação?',
      type: 'Artigo'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <Container>
      {/* Header */}
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </BackButton>
        <Title>Técnicas Agrícolas</Title>
      </Header>

      {/* Search Section */}
      <SearchSection>
        <SearchBar onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar técnica, cultivo ou problema..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch /> Buscar
          </button>
        </SearchBar>
        <button>
          <FaFilter /> Filtros
        </button>
      </SearchSection>

      {/* Recommended Techniques */}
      <SectionTitle>
        <FaLeaf /> Técnicas Recomendadas para sua Região:
      </SectionTitle>
      <RecommendedSection>
        <p>Baseado na previsão climática e histórico de sua área</p>
        
        {recommendedTechniques.map(tech => (
          <Card key={tech.id}>
            <CardIcon>
              {tech.icon}
            </CardIcon>
            <CardContent>
              <h3>{tech.title}</h3>
              <p>{tech.description}</p>
              <LearnMoreButton>
                Saiba Mais <span>→</span>
              </LearnMoreButton>
            </CardContent>
          </Card>
        ))}
      </RecommendedSection>

      {/* Categories */}
      <SectionTitle>Navegue por Categoria:</SectionTitle>
      <CategoriesGrid>
        {categories.map((category, index) => (
          <CategoryCard key={index} onClick={() => console.log(`Clicked ${category.title}`)}>
            <CategoryIcon>
              {category.icon}
            </CategoryIcon>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </CategoryCard>
        ))}
      </CategoriesGrid>

      {/* FAQ Section */}
      <FaqSection>
        <SectionTitle>Novidades e Dúvidas Comuns:</SectionTitle>
        {faqs.map((faq, index) => (
          <FaqItem key={index}>
            <strong>{faq.type}:</strong> {faq.question}
          </FaqItem>
        ))}
        <ViewMoreButton>
          Ver Mais Artigos/FAQ <span>→</span>
        </ViewMoreButton>
      </FaqSection>

      {/* Footer */}
      <Footer>
        <a href="#">Sobre Nós</a>
        <a href="#">Ajuda</a>
        <a href="#">Contato</a>
        <a href="#">Configurações</a>
      </Footer>
    </Container>
  );
};

export default AgriculturalTechniques;
