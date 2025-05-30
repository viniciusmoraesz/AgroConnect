import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { ContactContainer, ContactContent, TitleSection, FormSection, FormField, SubmitButton, ContactInfo, ContactItem, SocialLinks } from '../Styles/StyledContactPage';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    mainCulture: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Desativa a funcionalidade de clique nos ícones de redes sociais
  const handleSocialClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <ContactContainer>
      <ContactContent>
        <TitleSection>
          <h1>Fale com Nossos Especialistas</h1>
          <p>Conecte-se com a AgroConnect e obtenha orientação personalizada para sua propriedade</p>
        </TitleSection>

        <FormSection>
          <form onSubmit={handleSubmit}>
            <FormField>
              <label htmlFor="fullName">Nome Completo</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <label htmlFor="phone">Telefone (com DDD)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(XX) XXXXX-XXXX"
              />
            </FormField>

            <FormField>
              <label htmlFor="state">Estado</label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Selecione seu estado</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </FormField>

            <FormField>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormField>

            <FormField>
              <label htmlFor="mainCulture">Cultura Principal</label>
              <select
                id="mainCulture"
                name="mainCulture"
                value={formData.mainCulture}
                onChange={handleChange}
                required
              >
                <option value="">Selecione sua cultura principal</option>
                <option value="soja">Soja</option>
                <option value="milho">Milho</option>
                <option value="cafe">Café</option>
                <option value="arroz">Arroz</option>
                <option value="pecuaria">Pecuária</option>
                <option value="outros">Outros</option>
              </select>
            </FormField>

            <FormField>
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Descreva sua necessidade ou dúvida..."
              />
            </FormField>

            <SubmitButton type="submit">
              Agendar Consulta
            </SubmitButton>
          </form>
        </FormSection>

        <ContactInfo>
          <h2>Informações de Contato</h2>
          <ContactItem>
            <FaPhone />
            <span>(11) 99999-9999</span>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <span>contato@agroconnect.com.br</span>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <span>Rua das Flores, 123 - São Paulo, SP</span>
          </ContactItem>

          <SocialLinks>
            <a href="#" onClick={handleSocialClick} style={{ cursor: 'default' }}>
              <FaLinkedin />
            </a>
            <a href="#" onClick={handleSocialClick} style={{ cursor: 'default' }}>
              <FaInstagram />
            </a>
            <a href="#" onClick={handleSocialClick} style={{ cursor: 'default' }}>
              <FaFacebook />
            </a>
          </SocialLinks>
        </ContactInfo>
      </ContactContent>
    </ContactContainer>
  );
};

export default ContactPage;