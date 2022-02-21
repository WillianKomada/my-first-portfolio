import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLinkContainer } from './styles';

interface NavLinkComponentProps {
  title: string;
  path: string;
  includes?: boolean;
}

export function NavLink({
  title,
  path,
  includes = false
}: NavLinkComponentProps) {
  const router = useRouter();

  function includesActive() {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  }

  const isActive = includesActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path}>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
