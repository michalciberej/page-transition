'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const ContactPage = () => {
  return (
    <motion.div
      variants={variants}
      animate='entry'
      exit='exit'
      initial='hidden'>
      <h1>Contact</h1>
      <Link href={'/'}>Home</Link>
    </motion.div>
  );
};

export default ContactPage;
