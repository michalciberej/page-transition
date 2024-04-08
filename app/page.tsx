'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  hidden: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, delay: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export default function Home() {
  return (
    <main>
      <AnimatePresence mode='sync'>
        <motion.div
          key={'yeajp'}
          variants={variants}
          animate='entry'
          exit='exit'
          initial='hidden'>
          <h1>HOME</h1>
          <Link href={'/contact'}>Contact</Link>
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
