'use client';

import React from 'react';
import { useLayoutEffect } from 'react';
import { animatePageIn } from './anim/pageTransitions';
import Transition from './components/Transition';

const Template = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    animatePageIn();
  }, []);

  return (
    <>
      <Transition />
      {children}
    </>
  );
};

export default Template;
