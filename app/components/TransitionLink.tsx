'use client';

import { useRouter, usePathname } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import { MouseEvent } from 'react';
import { animatePageOut } from '../anim/pageTransitions';

const TLink = styled.a`
  color: white;
  text-transform: uppercase;
`;

const TransitionLink = ({ href, title }: { href: string; title: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== href) {
      animatePageOut(e.currentTarget.href, router);
    }
  };

  return (
    <TLink
      as={Link}
      onClick={handleClick}
      href={href}>
      {title}
    </TLink>
  );
};

export default TransitionLink;
