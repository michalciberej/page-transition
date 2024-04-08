'use client';
import styled from 'styled-components';

const Svg = styled.svg`
  height: 50%;
  width: 50%;
  transform: rotateZ(45deg);
`;

const Icon = () => {
  return (
    <Svg
      x='0px'
      y='0px'
      fill='#ff642f'
      viewBox='0 0 100 100'>
      <polygon points='59.4,50 72.3,72.3 50,59.4 27.7,72.3 40.6,50 27.7,27.7 50,40.6 72.3,27.7 ' />
    </Svg>
  );
};

export default Icon;
