'use client';

import styled from 'styled-components';
import TransitionLink from './TransitionLink';

const StyledHeader = styled.header`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const links = [
  { title: 'home', href: '/' },
  { title: 'contact', href: '/contact' },
];

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          {links.map(({ title, href }) => (
            <TransitionLink
              key={title}
              href={href}
              title={title}
            />
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
