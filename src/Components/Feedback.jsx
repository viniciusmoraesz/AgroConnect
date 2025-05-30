import React, { useState } from 'react';
import { PageContainer, FeedbackCard, Title, MessageAlert, FormLabel, FeedbackTextarea, StarContainer, StarSVG, SubmitButton } from '../Styles/StyledFeedback';

// Componente principal da aplicação
function Feedback() {
  // Estado para armazenar o feedback do usuário
  const [feedback, setFeedback] = useState('');
  // Estado para armazenar a avaliação em estrelas (0 a 5)
  const [rating, setRating] = useState(0);
  // Estado para controlar a mensagem de sucesso ou erro
  const [message, setMessage] = useState('');

  // Função para lidar com a mudança no campo de feedback
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Função para lidar com a seleção da avaliação em estrelas
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Função para lidar com o envio do formulário de feedback
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    // Aqui você faria a lógica para enviar o feedback para um backend ou API
    console.log('Feedback enviado:', { feedback, rating });

    // Exemplo de mensagem de sucesso
    setMessage('Obrigado pelo seu feedback!');
    setFeedback(''); // Limpa o campo de feedback
    setRating(0); // Reseta a avaliação

    // Limpa a mensagem após alguns segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <PageContainer>
      <FeedbackCard>
        <Title>Deixe seu Feedback</Title>

        {/* Mensagem de sucesso/erro */}
        {message && (
          <MessageAlert role="alert">
            <span className="block sm:inline">{message}</span>
          </MessageAlert>
        )}

        <form onSubmit={handleSubmit}>
          {/* Campo de texto para o feedback */}
          <div className="mb-6">
            <FormLabel htmlFor="feedback">
              Seu Feedback:
            </FormLabel>
            <FeedbackTextarea
              id="feedback"
              placeholder="Escreva seu feedback aqui..."
              value={feedback}
              onChange={handleFeedbackChange}
              required
            ></FeedbackTextarea>
          </div>

          {/* Avaliação por estrelas */}
          <div className="mb-6">
            <FormLabel>
              Avaliação:
            </FormLabel>
            <StarContainer>
              {[1, 2, 3, 4, 5].map((star) => (
                <StarSVG
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  selected={star <= rating}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.565-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </StarSVG>
              ))}
            </StarContainer>
          </div>

          {/* Botão de envio */}
          <SubmitButton type="submit">
            Enviar Feedback
          </SubmitButton>
        </form>
      </FeedbackCard>
    </PageContainer>
  );
}

export default Feedback;