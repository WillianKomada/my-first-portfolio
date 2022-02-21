import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />

      <BannerProject
        title="Projeto 01"
        type="Website"
        imgUrl="https://images.alphacoders.com/109/thumb-1920-1098034.jpg"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, animi?
          Dicta quibusdam sint quam, nesciunt alias totam, facere temporibus
          cupiditate ipsam dolorum velit voluptas voluptate?
        </p>

        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
