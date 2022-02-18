import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiências" />

      <section>
        <ExperienceItem
          year="2017 - 2018"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <ExperienceItem
          year="2019"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <ExperienceItem
          year="2020"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
        <ExperienceItem
          year="2021"
          title="Dev Front-end"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
        />
      </section>
    </Container>
  );
}
