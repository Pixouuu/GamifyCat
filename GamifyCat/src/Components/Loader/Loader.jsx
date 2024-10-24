import React from 'react';
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader flex justify-center items-center h-screen w-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ border: "6px solid #f3f3f3", borderTop: "6px solid #3498db", borderRadius: "50%", width: "50px", height: "50px" }}
      />
    </div>
  );
};

export default Loader;
