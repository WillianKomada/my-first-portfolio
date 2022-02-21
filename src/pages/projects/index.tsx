import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';

import { Header } from '../../components/Header';
import { ProjectCardItem } from '../../components/ProjectCardItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

type ProjectsProps = {
  projects: IProjects[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Header />

      <main className="container">
        {projects.map(project => (
          <ProjectCardItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'project')],
    {
      orderings: '[document.first_publication_date desc]'
    }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    }
    // revalidade: 86400 // 60 * 60 * 24 // 24hrs
  };
};
