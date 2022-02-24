import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';

import { FormContainer, FormInput, FormTextArea } from './styles';

export function Form() {
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) return;

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      toast.error('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });

      return;
    }

    try {
      setLoading(true);

      await sendContactMail(contactName, contactEmail, contactMessage);

      setContactName('');
      setContactEmail('');
      setContactMessage('');

      toast.success(
        'Mensagem enviada com sucesso! Agora é só aguardar o seu retorno!',
        {
          style: {
            background: theme.secondary,
            color: '#fff'
          }
        }
      );
    } catch (err) {
      toast.error(
        'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!',
        {
          style: {
            background: theme.error,
            color: '#fff'
          }
        }
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <FormInput
        placeholder="Nome"
        type="text"
        value={contactName}
        onChange={({ target }) => setContactName(target.value)}
      />
      <FormInput
        placeholder="E-mail"
        type="email"
        value={contactEmail}
        onChange={({ target }) => setContactEmail(target.value)}
      />
      <FormTextArea
        placeholder="Mensagem . . ."
        value={contactMessage}
        onChange={({ target }) => setContactMessage(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  );
}
