import { Header } from '../../components/Header';
import { ProjectCardItem } from '../../components/ProjectCardItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />

      <main className="container">
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="project"
          imgUrl="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="project"
          imgUrl="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="project"
          imgUrl="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
        />
        <ProjectCardItem
          title="Projeto 01"
          type="Website"
          slug="project"
          imgUrl="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
        />
      </main>
    </ProjectsContainer>
  );
}
