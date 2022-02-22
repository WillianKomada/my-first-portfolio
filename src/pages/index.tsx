import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import Aos from 'aos';

import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { LastProjects } from '../components/LastProjects';
import { Skills } from '../components/Skills';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';

import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css';

interface IProjects {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

type HomeProps = {
  projects: IProjects[];
};

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <LastProjects projects={projects} />
        <Skills />
        <FormContact />
      </main>

      <Footer />
    </HomeContainer>
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
