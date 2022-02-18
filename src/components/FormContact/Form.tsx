import { FormContainer, FormInput, FormTextArea } from './styles';

export function Form() {
  return (
    <FormContainer>
      <FormInput placeholder="Nome completo" type="text" required />
      <FormInput placeholder="E-mail" type="email" required />
      <FormTextArea placeholder="Mensagem" required />
      <button type="submit" disabled>
        ENVIAR
      </button>
    </FormContainer>
  );
}
