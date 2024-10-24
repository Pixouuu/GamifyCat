import React, { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";

const ScrollContainer = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const scrollAnimation = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-50%"],
          transition: {
            duration: 10, // Ajuster la durée pour ralentir la vitesse de défilement de base
            ease: "linear",
            times: [0, 1],
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      }
    };
    scrollAnimation();
  }, [controls]);

  return (
    <motion.div
      style={{ overflow: "hidden", width: "100%", height: "100%", display: 'flex', justifyContent: "center", alignItems: "center" }}
    >
      <motion.div animate={controls} style={{ display: "flex", flexDirection: "row", width: "200%" }}>
        {children}
        {children}  {/* Duplication */}
      </motion.div>
    </motion.div>
  );
};

export default ScrollContainer;
