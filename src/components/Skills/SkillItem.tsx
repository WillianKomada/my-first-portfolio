import { ReactNode } from 'react';
import { SkillItemContainer } from './styles';

interface SkillItemProps {
  title: string;
  icon: ReactNode;
}

export function SkillItem({ title, icon }: SkillItemProps) {
  return (
    <SkillItemContainer>
      <p>{title}</p>
      {icon}
    </SkillItemContainer>
  );
}
