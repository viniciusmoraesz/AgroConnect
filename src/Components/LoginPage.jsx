import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitButton, Form, Input, ErrorText, LinkText, LoginCard, LoginTitle, LoginContainer, TogglePassword, PasswordRequirements, Requirement } from '../Styles/StyledLoginPage';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor, insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: yup
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .matches(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[0-9]/, 'A senha deve conter pelo menos um número')
    .matches(/[^A-Za-z0-9]/, 'A senha deve conter pelo menos um caractere especial')
    .required('A senha é obrigatória')
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      // Aqui você implementará a lógica de autenticação
      console.log('Dados de login:', data);
    } catch (err) {
      setError('Erro ao fazer login. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const password = watch('password');

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>AgroConnect</LoginTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
            {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
          </div>

          <div>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              {...register('password')}
            />
            <TogglePassword onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '👁️' : '👁️'}
            </TogglePassword>
            {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
          </div>

          <PasswordRequirements>
            <Requirement isMet={password && password.length >= 8}>
              ✅ Mínimo de 8 caracteres
            </Requirement>
            <Requirement isMet={password && /[a-z]/.test(password)}>
              ✅ Letra minúscula
            </Requirement>
            <Requirement isMet={password && /[A-Z]/.test(password)}>
              ✅ Letra maiúscula
            </Requirement>
            <Requirement isMet={password && /[0-9]/.test(password)}>
              ✅ Número
            </Requirement>
            <Requirement isMet={password && /[^A-Za-z0-9]/.test(password)}>
              ✅ Caractere especial
            </Requirement>
          </PasswordRequirements>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Entrando...' : 'Entrar'}
          </SubmitButton>

          {error && <ErrorText>{error}</ErrorText>}

          <LinkText>
            Não tem uma conta?{' '}
            <a href="/cadastro">Cadastre-se</a>
          </LinkText>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}