import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const duration = 0.47;
const scale = 0.77;

//? FROM MIDDLE UP
export const animatePageIn = () => {
  const transEl = document.querySelector('#pageTransitionEl');

  if (!transEl) return;
  const tl = gsap.timeline();

  tl.to(transEl, {
    yPercent: -100,
    duration,
    borderRadius: '6.25rem',
    scale,
    ease: 'power1.inOut',
  });
};

//! ================================================

//? FROM BOTTOM TO MIDDLE
export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const transEl = document.querySelector('#pageTransitionEl');

  if (!transEl) return;
  const tl = gsap.timeline();

  tl.set(transEl, {
    yPercent: 100,
    scale,
    borderRadius: '6.25rem',
  }).to(transEl, {
    yPercent: 0,
    duration,
    borderRadius: 0,
    scale: 1,
    ease: 'power1.inOut',
    onComplete: () => router.push(href),
  });
};
