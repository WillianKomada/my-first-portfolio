import { ReactNode } from 'react';
import { SkillItemContainer } from './styles';

interface SkillItemProps {
  title: string;
  icon: ReactNode;
}

export function SkillItem({ title, icon }: SkillItemProps) {
  return (
    <SkillItemContainer data-aos="flip-right">
      <p>{title}</p>
      {icon}
    </SkillItemContainer>
  );
}
