'use client';

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
  top: 0;
  left: 0;
`;

const Transition = () => {
  return (
    <>
      <TransPage id='pageTransitionEl'>
        <Icon />
      </TransPage>
    </>
  );
};

export default Transition;
