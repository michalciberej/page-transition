'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Icon from './Icon';

const TransPage = styled.div`
  background-color: #252525;
  color: #e5e4e0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
  position: absolute;
  z-index: -1;
  border-radius: 6.25rem;
`;

const variants = {
  hidden: { y: '100%' },
  exit: {
    y: ['100%', 0, '-100%'],
    scale: [0.75, 1, 0.75],
    borderRadius: ['6.25rem', '0.625rem', '6.25rem'],
    transition: { duration: 1.65, ease: [0.76, 0, 0.24, 1] },
  },
};

const Transition = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname();

  return (
    <AnimatePresence>
      {children}
      <TransPage
        as={motion.div}
        variants={variants}
        initial='hidden'
        exit='exit'
        key={key}>
        <Icon />
      </TransPage>
    </AnimatePresence>
  );
};

export default Transition;
