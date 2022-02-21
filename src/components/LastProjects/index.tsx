import Link from 'next/link';

import { SectionTitle } from '../SectionTitle';
import { LastProjectItem } from './LastProjectItem';

import { Container } from './styles';

export function LastProjects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section>
        <LastProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          img="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
        />
        <LastProjectItem
          title="Projeto 02"
          type="Website"
          slug="teste"
          img="https://wallpaper.dog/large/20459082.jpg"
        />
        <LastProjectItem
          title="Projeto 03"
          type="Website"
          slug="teste"
          img="https://wallpapercave.com/wp/wp5405231.jpg"
        />
        <LastProjectItem
          title="Projeto 04"
          type="Website"
          slug="teste"
          img="https://wallpapercave.com/wp/wp3208018.jpg"
        />
      </section>

      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
