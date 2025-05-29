import React, { useState } from 'react';
// Importa todos os Styled Components do arquivo separado
import {
  FAQContainer,
  FAQCard,
  Title,
  FAQItemContainer,
  QuestionButton,
  AnswerText,
  ChevronIcon
} from '../Styles/StyledFAQPage'
// Componente para um item individual do FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <FAQItemContainer>
      <QuestionButton onClick={toggleOpen}>
        {question}
        <ChevronIcon isOpen={isOpen}>&#9660;</ChevronIcon> {/* Ícone de seta para baixo/cima */}
      </QuestionButton>
      <AnswerText isOpen={isOpen}>{answer}</AnswerText>
    </FAQItemContainer>
  );
};

// Componente principal da página de FAQ
function FAQPage() {
  const faqs = [
    {
      question: 'O que é resiliência alimentar e por que é importante para agricultores?',
      answer: 'Resiliência alimentar refere-se à capacidade de um sistema alimentar de resistir, adaptar-se e se recuperar de choques e estresses, como mudanças climáticas, pragas ou crises econômicas. Para agricultores, é crucial para garantir a continuidade da produção, a segurança da renda e a oferta de alimentos, mesmo diante de adversidades.'
    },
    {
      question: 'Como o AgroConnect pode ajudar especialistas a promover a resiliência alimentar?',
      answer: 'O AgroConnect oferece ferramentas e dados para especialistas monitorarem riscos climáticos, acessarem técnicas agrícolas sustentáveis e desenvolverem planos de ação para crises. Isso permite que eles forneçam orientações mais precisas e proativas aos agricultores, fortalecendo toda a cadeia de produção alimentar.'
    },
    {
      question: 'Quais são as principais técnicas agrícolas para aumentar a resiliência?',
      answer: 'Algumas técnicas incluem a diversificação de culturas, o uso de sementes adaptadas ao clima local, a implementação de sistemas de irrigação eficientes, a rotação de culturas, o manejo integrado de pragas e doenças, e a adoção de práticas de agricultura de conservação que melhoram a saúde do solo.'
    },
    {
      question: 'Como posso acessar as previsões do tempo e alertas no AgroConnect?',
      answer: 'Após fazer login na plataforma, você terá acesso a um painel de controle (Dashboard) onde poderá visualizar previsões do tempo detalhadas para sua região, alertas sobre eventos climáticos extremos e recomendações personalizadas com base nos dados da sua lavoura.'
    },
    {
      question: 'O que devo fazer em caso de uma crise climática inesperada?',
      answer: 'O AgroConnect oferece um "Plano de Ação da Crise" que fornece diretrizes passo a passo e recursos para lidar com situações de emergência, como geadas, secas prolongadas ou inundações. Ele inclui contatos de emergência, medidas de proteção e estratégias de recuperação.'
    },
    {
      question: 'É possível colaborar com outros agricultores ou especialistas na plataforma?',
      answer: 'Sim, o AgroConnect visa ser uma comunidade colaborativa. Você pode se conectar com outros usuários, compartilhar experiências, fazer perguntas e até mesmo participar de fóruns de discussão para trocar conhecimentos e soluções sobre desafios comuns na agricultura.'
    }
  ];

  return (
    <FAQContainer>
      <FAQCard>
        <Title>Perguntas Frequentes</Title>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </FAQCard>
    </FAQContainer>
  );
}

export default FAQPage;
