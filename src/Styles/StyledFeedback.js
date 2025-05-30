import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components para os elementos da página
export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f0fdf4; /* green-50 */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: sans-serif;
`;

export const FeedbackCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.75rem; /* rounded-xl */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
  width: 100%;
  max-width: 28rem; /* max-w-md */
  border: 1px solid #dcfce7; /* border-green-200 */
`;

export const Title = styled.h2`
  font-size: 1.875rem; /* text-3xl */
  font-weight: bold;
  color: #166534; /* text-green-800 */
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const MessageAlert = styled.div`
  background-color: #dcfce7; /* bg-green-100 */
  border: 1px solid #4ade80; /* border-green-400 */
  color: #15803d; /* text-green-700 */
  padding: 0.75rem 1rem;
  border-radius: 0.5rem; /* rounded-lg */
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
`;

export const FormLabel = styled.label`
  display: block;
  color: #15803d; /* text-green-700 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
  margin-bottom: 0.5rem;
`;

export const FeedbackTextarea = styled.textarea`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
  appearance: none;
  border: 1px solid #a7f3d0; /* border-green-300 */
  border-radius: 0.5rem; /* rounded-lg */
  width: 100%;
  padding: 0.75rem 1rem;
  color: #374151; /* text-gray-700 */
  line-height: 1.5; /* leading-tight */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); /* focus:ring-2 focus:ring-green-500 */
    border-color: transparent; /* focus:border-transparent */
  }
  transition: all 0.2s ease-in-out;
  resize: vertical;
  min-height: 100px;
`;

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  space-x: 0.25rem; /* space-x-1 */
`;

export const StarSVG = styled.svg`
  height: 2rem; /* h-8 */
  width: 2rem; /* w-8 */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${(props) => (props.selected ? '#facc15' : '#d1d5db')}; /* text-yellow-400 or text-gray-300 */
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: #16a34a; /* bg-green-600 */
  &:hover {
    background-color: #15803d; /* hover:bg-green-700 */
  }
  color: #ffffff;
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem; /* rounded-lg */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 0 2px rgba(16, 185, 129, 0.5); /* focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 */
  }
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
`;

export default {};