import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaChartLine, 
  FaUsers, 
  FaHandHoldingHeart, 
  FaShieldAlt,
  FaCcVisa,
  FaCcMastercard,
  FaCreditCard,
  FaBarcode,
  FaQrcode
} from 'react-icons/fa'; // For payment icons
import Footer from './Footer';
import { 
  DonationContainer, BackButton, HeroSection, HeroContent, HeroTitle, HeroText, HeroImage,
  Section, SectionTitle, ImpactGrid, ImpactCard, DonationOptions, DonationButton,
  CustomAmountInput, DonateButton, PaymentMethods, Testimonial, TransparencySection, TransparencyLink
} from '../Styles/StyledDonations';

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = [
    { value: 25, label: 'R$ 25', description: 'Ajuda 1 agricultor a acessar dados climáticos por 1 mês' },
    { value: 50, label: 'R$ 50', description: 'Suporte a 2 agricultores em período de safra' },
    { value: 100, label: 'R$ 100', description: 'Permite o desenvolvimento de 1 nova dica agrícola' },
    { value: 250, label: 'R$ 250', description: 'Financia 1 consultoria especializada em crise' },
  ];

  const impactItems = [
    {
      icon: <FaChartLine />,
      title: 'Desenvolvimento de Ferramentas',
      description: 'Financie a criação de novas funcionalidades, como algoritmos de previsão mais precisos e módulos de manejo de solo.'
    },
    {
      icon: <FaUsers />,
      title: 'Acesso à Tecnologia',
      description: 'Ajude a subsidiar o acesso de agricultores em regiões carentes à nossa plataforma e internet.'
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Treinamento e Capacitação',
      description: 'Apoie a criação de conteúdos educativos e consultorias com especialistas.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Resposta a Crises',
      description: 'Contribua para que possamos emitir alertas mais rápidos e planos de ação eficazes em momentos críticos.'
    }
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    // Here you would typically integrate with a payment gateway
    alert(`Obrigado por doar R$ ${amount}! Você será redirecionado para o pagamento.`);
  };

  return (
    <DonationContainer>
      <BackButton to="/home">
        <FaArrowLeft /> Voltar para Home
      </BackButton>

      <HeroSection>
        <HeroContent>
          <HeroTitle>Apoie o AgroConnect</HeroTitle>
          <HeroText>
            Sua Contribuição Transforma Vidas no Campo.
            No AgroConnect, trabalhamos incansavelmente para empoderar agricultores familiares a enfrentar 
            os desafios climáticos e garantir a segurança alimentar. Sua doação é o combustível que nos 
            permite continuar desenvolvendo ferramentas, oferecendo suporte e construindo um futuro mais 
            resiliente para a agricultura no Brasil.
          </HeroText>
        </HeroContent>
        <HeroImage>
          <img 
            src="/images/exemplo5..png" 
            alt="Agricultor usando tecnologia no campo" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://img.freepik.com/free-vector/farmer-with-tablet-farm-landscape-farmer-s-hand-holding-digital-tablet_48369-13566.jpg';
            }}
          />
        </HeroImage>
      </HeroSection>

      <Section>
        <SectionTitle>Como Sua Doação Faz a Diferença?</SectionTitle>
        <ImpactGrid>
          {impactItems.map((item, index) => (
            <ImpactCard key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </ImpactCard>
          ))}
        </ImpactGrid>
      </Section>

      <Section>
        <SectionTitle>Escolha o Valor da Sua Doação</SectionTitle>
        <DonationOptions>
          {donationAmounts.map((amount) => (
            <DonationButton
              key={amount.value}
              selected={selectedAmount === amount.value}
              onClick={() => setSelectedAmount(amount.value)}
            >
              {amount.label}
              <span>{amount.description}</span>
            </DonationButton>
          ))}
        </DonationOptions>
        
        <CustomAmountInput>
          <label htmlFor="custom-amount">Ou insira outro valor:</label>
          <input
            id="custom-amount"
            type="number"
            placeholder="R$ 0,00"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount(null);
            }}
            min="1"
          />
        </CustomAmountInput>

        <DonateButton onClick={handleDonate}>
          Doar Agora
        </DonateButton>
      </Section>

      <Section>
        <SectionTitle>Formas de Pagamento</SectionTitle>
        <p style={{ textAlign: 'center', marginBottom: '1rem' }}>Sua doação de forma segura e rápida:</p>
        
        <PaymentMethods>
          <div className="payment-icon" title="Pix">
            <FaQrcode size={40} color="#32BCAD" />
          </div>
          <div className="payment-icon" title="Visa">
            <FaCcVisa size={40} color="#1A1F71" />
          </div>
          <div className="payment-icon" title="Mastercard">
            <FaCcMastercard size={40} color="#EB001B" />
          </div>
          <div className="payment-icon" title="Elo">
            <FaCreditCard size={40} style={{ color: '#00A1E1' }} />
          </div>
          <div className="payment-icon" title="Boleto">
            <FaBarcode size={40} color="#7D40E7" />
          </div>
        </PaymentMethods>
        
        <div style={{ textAlign: 'center', margin: '1.5rem 0' }}>
          <p><strong>Pix:</strong> Chave: 12.345.678/0001-90 (CNPJ) ou escaneie o QR Code abaixo</p>
          <img 
            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PIX%3A%2B5511999999999%3Famount%3D50.00" 
            alt="QR Code PIX" 
            style={{ margin: '1rem 0', maxWidth: '150px' }}
          />
        </div>
      </Section>

      <TransparencySection>
        <h3>Sua Confiança é Nosso Maior Ativo</h3>
        <p>
          No AgroConnect, prezamos pela total transparência no uso dos recursos. Você pode acompanhar 
          como as doações estão sendo aplicadas e o impacto que estamos gerando.
        </p>
        <TransparencyLink href="#">Ver Relatórios de Transparência e Impacto</TransparencyLink>
      </TransparencySection>

      <Section>
        <SectionTitle>Depoimentos</SectionTitle>
        <Testimonial>
          <p>
            "Graças ao AgroConnect, consegui salvar minha lavoura da última estiagem. 
            É um apoio que faz a diferença na vida de quem trabalha no campo."
          </p>
          <footer>- João da Silva, Agricultor Familiar - Bahia</footer>
        </Testimonial>
        
        <Testimonial>
          <p>
            "A plataforma mudou a forma como lido com as mudanças climáticas na minha plantação. 
            Agora tomo decisões mais assertivas e com menos riscos."
          </p>
          <footer>- Maria Oliveira, Produtora Rural - Minas Gerais</footer>
        </Testimonial>
      </Section>
      
      <Footer />
    </DonationContainer>
  );
};

export default Donations;