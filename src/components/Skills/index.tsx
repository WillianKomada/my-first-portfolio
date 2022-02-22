import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';

import { SectionTitle } from '../SectionTitle';
import { SkillItem } from './SkillItem';
import { Container } from './styles';

export function Skills() {
  return (
    <Container>
      <SectionTitle title="Habilidades" />

      <section data-aos="fade-up">
        <SkillItem title="HTML5" icon={<AiFillHtml5 />} />
        <SkillItem title="CSS3" icon={<FaCss3Alt />} />
        <SkillItem title="JavaScript" icon={<IoLogoJavascript />} />
        <SkillItem title="ReactJS" icon={<FaReact />} />
      </section>
    </Container>
  );
}
