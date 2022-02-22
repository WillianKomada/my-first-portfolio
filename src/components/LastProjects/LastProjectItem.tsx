import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

import { ProjectContainerItem } from './styles';

interface LastProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export function LastProjectItem({
  title,
  type,
  slug,
  img
}: LastProjectItemProps) {
  return (
    <ProjectContainerItem imgUrl={img} data-aos="flip-right">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainerItem>
  );
}
