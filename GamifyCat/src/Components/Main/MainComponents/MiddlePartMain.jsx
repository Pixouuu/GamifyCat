import React from "react";
import { motion } from "framer-motion";
import Button from "../../GeneralComponents/Button";

function MiddlePartMain() {
  return (
    <div className="md:h-screen h-40 md:w-[100%] flex flex-col justify-center ">
      <div className="md:w-full w-[90%] h-92 flex flex-col font-bold font-jakarta md:text-[150px] text-[50px] leading-none">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="title md:ml-0 ml-16"
        >
          Gamified
        </motion.h1>

        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-white text-right"
        >
          Digital
        </motion.h1>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-white md:ml-0 ml-16"
        >
          Products
        </motion.h1>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="md:h-64 h-52 w-full md:text-xl text-[11px] text-white text-justify font-jakarta flex flex-col justify-center items-center mt-5 p-5"
      >
        <p>
          Web Design & Development gamified products like mini-games,
          interactive landings and puzzles for advertising agencies and brands.
        </p>
        <Button
          text1={"Our cases"}
          className={"md:w-[210px] w-36 md:h-14 h-9 md:mt-10 mt-5"}
        />
      </motion.div>
    </div>
  );
}

export default MiddlePartMain;
