import { FC, ReactNode } from 'react';

import Link from 'next/link';

export interface NavBarLinkProps {
  type: 'mobile' | 'desktop';
  href: string;
  children: ReactNode;
  onClick?: () => void;
}

const NavBarLink: FC<NavBarLinkProps> = ({ type, href, children }) => {
  return (
    <Link href={href}>
      {type === 'mobile' && (
        <li className="py-4 font-semibold text-lg">{children}</li>
      )}
      {type === 'desktop' && (
        <li className="ml-10 font-semibold">{children}</li>
      )}
    </Link>
  );
};

export default NavBarLink;
