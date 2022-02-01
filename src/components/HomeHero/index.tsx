import picture from '../../assets/pessoa.webp';

import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foto" />

      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Willian</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem>
            <span className="comment">// Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Willian;</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Komada;</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Front-end;</span>
            </div>
            <div>
              Nível: <span className="blue">Júnior;</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
