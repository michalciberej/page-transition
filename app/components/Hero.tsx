'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import styled from 'styled-components';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const StyledHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 10rem;
  font-size: 4rem;
`;

const chars = ['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D'];

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top middle',
          end: '+=200',
          markers: true,
          scrub: 1,
        },
      });

      tl.to('h1', {
        yPercent: 100,
        stagger: 0.05,
      });
    },
    { dependencies: [], scope: container }
  );

  return (
    <StyledHero ref={container}>
      {chars.map((ch, i) => (
        <h1 key={i + ch}>{ch}</h1>
      ))}
    </StyledHero>
  );
};

export default Hero;
