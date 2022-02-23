import { FormContainer, FormInput, FormTextArea } from './styles';

export function Form() {
  return (
    <FormContainer data-aos="fade-up">
      <FormInput placeholder="Nome" type="text" required />
      <FormInput placeholder="E-mail" type="email" required />
      <FormTextArea placeholder="Mensagem . . ." required />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
