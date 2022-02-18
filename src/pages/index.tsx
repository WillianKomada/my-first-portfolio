import { Experiences } from '../components/Experiences';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';

import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Skills />
      </main>
    </HomeContainer>
  );
}
