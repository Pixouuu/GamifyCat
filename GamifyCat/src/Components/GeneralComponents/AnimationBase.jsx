import React from 'react';
import { motion } from 'framer-motion';

const AnimationBase = ({ children, className, initialX = 0, initialY = 0, finalX = 0, finalY = 0, opacity = { initial: 0, final: 1 }, transition = { duration: 1 }, viewport = { once: true } }) => {
  return (
    <motion.div
      initial={{ x: initialX, y: initialY, opacity: opacity.initial }}
      whileInView={{ x: finalX, y: finalY, opacity: opacity.final }}
      transition={transition}
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationBase;
