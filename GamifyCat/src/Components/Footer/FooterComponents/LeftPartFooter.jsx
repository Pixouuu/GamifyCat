import React from "react";
import { motion } from "framer-motion";
import HoverLinks from "../../GeneralComponents/HoverLinks";

function LeftPartFooter() {
  return (
    <div className="flex-1 h-full text-white font-jakarta font-bold">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="md:text-8xl text-5xl mt-12 md:ml-24 ml-10"
      >
        Let's talk
      </motion.h1>
      <motion.h3
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="md:text-xl text-lg md:ml-24 ml-11 mt-1 cursor-pointer inline-block li-header"
      >
        hello@gamifycat.io
        <HoverLinks width={"195px"} />
      </motion.h3>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-light md:ml-24 ml-10 opacity-50 md:mt-28 mt-10"
      >
        CANADA
      </motion.p>
      <motion.h3
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 md:text-xl text-sm md:ml-24 ml-10 li-header cursor-pointer inline-block"
      >
        108 Waterfront CT SW, Calgary, AB, T2P1K7
        <HoverLinks width={"420px"} />
      </motion.h3>
    </div>
  );
}

export default LeftPartFooter;
