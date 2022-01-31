import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkContainer } from './styles';

interface NavLinkComponentProps {
  title: string;
  path: string;
}

export function NavLink({ title, path }: NavLinkComponentProps) {
  const router = useRouter();

  const isActive = router.pathname === path;

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
