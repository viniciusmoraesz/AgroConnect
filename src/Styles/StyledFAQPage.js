import styled from 'styled-components';

export const FAQContainer = styled.div`
  min-height: 100vh;
  background-color: #f0fdf4; /* green-50 */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: 'Poppins', sans-serif; /* Usando a fonte Poppins */
`;

export const FAQCard = styled.div`
  background-color: #ffffff;
  padding: 2.5rem;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  width: 100%;
  max-width: 50rem; /* Um pouco mais largo para o FAQ */
  border: 1px solid #dcfce7; /* border-green-200 */
  margin-top: 2rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem; /* text-4xl */
  font-weight: bold;
  color: #166534; /* text-green-800 */
  margin-bottom: 2rem;
  text-align: center;
`;

export const FAQItemContainer = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #d1d5db; /* gray-300 */
  padding-bottom: 1.5rem;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const QuestionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: transparent;
  border: none;
  text-align: left;
  padding: 0.75rem 0;
  font-size: 1.125rem; /* text-lg */
  font-weight: 600; /* font-semibold */
  color: #15803d; /* text-green-700 */
  cursor: pointer;
  &:hover {
    color: #16a34a; /* green-600 */
  }
  transition: color 0.2s ease-in-out;
`;

export const AnswerText = styled.div`
  padding-top: 0.5rem;
  padding-left: 1.5rem;
  font-size: 1rem; /* text-base */
  color: #4b5563; /* gray-700 */
  line-height: 1.6;
  max-height: ${(props) => (props.isOpen ? '500px' : '0')}; /* Altura máxima para transição */
  overflow: hidden;
  transition: max-height 0.3s ease-in-out, padding-top 0.3s ease-in-out;
  padding-top: ${(props) => (props.isOpen ? '0.5rem' : '0')};
`;

export const ChevronIcon = styled.span`
  font-size: 1.5rem;
  color: #15803d; /* green-700 */
  transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;
