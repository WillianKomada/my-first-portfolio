import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiências" />

      <section>
        <ExperienceItem
          year="2017 - 2020"
          title="Faculdade de Tecnologia"
          description="Sou formado em Gestão da Tecnologia da Informação na FATEC Guaratinguetá"
        />
        <ExperienceItem
          year="2021"
          title="Yellow Engenharia"
          description="Fui bolsista pela Fapesp, trabalhei na empresa Yellow Engenharia e desenvolvi um projeto de Startup voltado para engenharia."
        />
        <ExperienceItem
          year="2021 - 2022"
          title="Ignite - Trilha ReactJS"
          description="Completei a jornada de treinamento na trilha ReactJS do programa Ignite da Rocketseat."
        />
        <ExperienceItem
          year="2022"
          title="Dev Front-end"
          description="Procurando por uma nova experiência... 🤩"
        />
      </section>
    </Container>
  );
}
