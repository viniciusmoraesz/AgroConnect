import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { RegisterContainer, RegisterCard, RegisterTitle, HelperText, Form, Input, Select, LinkText, ErrorText, SubmitButton, CheckboxContainer, Checkbox, CheckboxLabel, PasswordRequirements, TogglePassword, Requirement, SuccessModal, SuccessModalContent } from '../Styles/StyledRegisterPage';
import axios from 'axios';

const API_URL = 'https://viacep.com.br/ws/';


function isValidCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  let digito1 = resto > 9 ? 0 : resto;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  let digito2 = resto > 9 ? 0 : resto;

  return cpf.charAt(9) == digito1 && cpf.charAt(10) == digito2;
}

function formatCEP(value) {
  return value.replace(/\D/g, '').slice(0, 8);
}

function isValidCEP(cep) {
  return /^[0-9]{8}$/.test(cep);
}

const fetchAddressFromCEP = async (cep, setValue, setCepError) => {
  try {
    setCepError('');
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      throw new Error('CEP não encontrado');
    }

    const data = response.data;

    // Preenche os campos com os dados da API
    setValue('address', data.logradouro || '');
    setValue('neighborhood', data.bairro || '');
    setValue('city', data.localidade || '');
    setValue('state', data.uf || '');
  } catch (error) {
    setCepError(error.message || 'Erro ao buscar CEP');
  }
};


const schema = yup.object().shape({
  userType: yup
    .string()
    .required('O tipo de usuário é obrigatório'),
  fullName: yup
    .string()
    .max(255, 'O nome completo deve ter no máximo 255 caracteres')
    .required('O nome completo é obrigatório'),
  cpf: yup
    .string()
    .required('O CPF é obrigatório')
    .test('is-valid-cpf', 'CPF inválido', value => isValidCPF(value || '')),
  cep: yup
    .string()
    .matches(/^[0-9]{8}$/, 'CEP inválido')
    .required('O CEP é obrigatório'),
  address: yup
    .string()
    .max(255, 'O endereço deve ter no máximo 255 caracteres')
    .required('O endereço é obrigatório'),
  neighborhood: yup
    .string()
    .max(255, 'O bairro deve ter no máximo 255 caracteres')
    .required('O bairro é obrigatório'),
  city: yup
    .string()
    .max(255, 'A cidade deve ter no máximo 255 caracteres')
    .required('A cidade é obrigatória'),
  state: yup
    .string()
    .max(255, 'O estado deve ter no máximo 255 caracteres')
    .required('O estado é obrigatório'),
  phone: yup
    .string()
    .matches(/^[0-9]{10,11}$/, 'Número de telefone inválido')
    .required('O número de telefone é obrigatório'),
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
    .required('A senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'As senhas não coincidem')
    .required('A confirmação de senha é obrigatória'),
  terms: yup
    .boolean()
    .oneOf([true], 'Você deve aceitar os termos de consentimento')
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cepError, setCepError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const password = watch('password');

  const handleCepBlur = (e) => {
    const rawCep = formatCEP(e.target.value);
    setValue('cep', rawCep);

    if (!isValidCEP(rawCep)) {
      setCepError('CEP inválido. Deve conter 8 dígitos.');
      return;
    }

    fetchAddressFromCEP(rawCep, setValue, setCepError);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setValue('phone', value);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setCepError('');
    
    try {
      console.log('Registration data:', data);
      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowSuccessModal(true);
    } catch (err) {
      console.error('Erro ao registrar:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    reset();
  };

  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterTitle>AgroConnect</RegisterTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Select {...register('userType')}>
              <option value="">Selecione o tipo de usuário</option>
              <option value="agricultor">Agricultor</option>
              <option value="especialista">Especialista</option>
            </Select>
            {errors.userType && <ErrorText>{errors.userType.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Nome Completo"
              {...register('fullName')}
            />
            {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="CPF (apenas dígitos)"
              maxLength="11"
              {...register('cpf')}
            />
            <HelperText>Apenas os 11 dígitos do CPF</HelperText>
            {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="CEP"
              maxLength="8"
              {...register('cep')}
              onBlur={handleCepBlur}
            />
            {errors.cep && <ErrorText>{errors.cep.message}</ErrorText>}
            {cepError && <ErrorText>{cepError}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Endereço"
              {...register('address')}
            />
            {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            {errors.neighborhood && <ErrorText>{errors.neighborhood.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Estado"
              {...register('state')}
            />
            {errors.state && <ErrorText>{errors.state.message}</ErrorText>}
          </div>

          <div>
            <Input
              type="text"
              placeholder="Telefone"
              onChange={handlePhoneChange}
              {...register('phone')}
            />
            {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
          </div>

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

          <div>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirmar Senha"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
          </div>

          <CheckboxContainer>
            <Checkbox type="checkbox" {...register('terms')} />
            <CheckboxLabel>
              Ao marcar esta caixa, você concorda em compartilhar suas informações pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD). Seu consentimento é voluntário e você tem o direito de revogá-lo a qualquer momento.
            </CheckboxLabel>
            {errors.terms && <ErrorText>{errors.terms.message}</ErrorText>}
          </CheckboxContainer>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Registrando...' : 'Registrar'}
          </SubmitButton>
        </Form>
        <LinkText>
          Já tem uma conta no site?{' '}
          <a href="/">Clique aqui e faça login.</a>
        </LinkText>
      </RegisterCard>

      {showSuccessModal && (
        <SuccessModal>
          <SuccessModalContent>
            <h2>✓ Cadastro realizado com sucesso!</h2>
            <p>Seu cadastro foi concluído com sucesso. Você já pode fazer login na AgroConnect.</p>
            <button onClick={handleSuccessModalClose}>
              Fechar
            </button>
          </SuccessModalContent>
        </SuccessModal>
      )}
    </RegisterContainer>
  );
}