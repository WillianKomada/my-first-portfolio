import Link from 'next/link';

import { SectionTitle } from '../SectionTitle';
import { LastProjectItem } from './LastProjectItem';

import { Container } from './styles';

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface LastProjectsProps {
  projects: IProjects[];
}

export function LastProjects({ projects }: LastProjectsProps) {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />

      <section data-aos="fade-up">
        {projects.slice(0, 3).map(project => (
          <LastProjectItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            img={project.thumbnail}
          />
        ))}
      </section>

      <button type="button" data-aos="fade-down">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
