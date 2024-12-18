import React from "react";
import arrow from "../../../../public/arrow.svg";
import { motion } from "framer-motion";
import Button from "../../GeneralComponents/Button";

function BottomPartProject() {
  return (
    <div className="w-full md:h-[1000px] h-[500px] flex items-center flex-col font-jakarta text-white font-bold">
      <div className="relative md:h-[670px] h-72">
        <iframe
          src="https://player.vimeo.com/video/989084405?background=1&autoplay=1&loop=1&muted=1&controls=0"
          className="md:w-[1000px] w-80 md:h-[670px] h-72 pointer-events-none"
        ></iframe>
        <button className="text-white absolute md:bottom-7 bottom-12 md:left-7 left-2 border border-white md:py-3 py-2 md:px-6 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
          App Design
        </button>
        <button className="text-white absolute md:bottom-7 bottom-12 md:left-52 left-[115px] border border-white md:py-3 py-2 md:px-6 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
          AR
        </button>
        <button className="text-white absolute md:bottom-7 bottom-12 md:left-[305px] left-[172px] border border-white md:py-3  py-2 md:px-6 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
          UX/UI
        </button>
        <button className="absolute md:bottom-6 bottom-12 md:right-8 right-3 border border-white md:py-3 px-2 md:px-3 py-2 rounded-full hover:bg-greenColor hover:border-greenColor transition-all">
          <img src={arrow} alt="arrow" className="md:w-8 w-4" />
        </button>
      </div>

      <div className="md:w-[1000px] md:h-[200px] ">
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="md:text-6xl text-xl hover:text-greenColor duration-500 cursor-pointer mt-5 ml-8 md:ml-0"
        >
          Dartmouth College
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="opacity-80 md:text-lg text-xs mt-5 md:ml-0 ml-8"
        >
          Developed an AR app for the Hood Art Museum at Dartmouth College,
          allowing visitors to access detailed <br /> information about exhibits
          by pointing their smartphones at the artwork.
        </motion.p>
      </div>

      <Button
        className="md:w-[290px] md:h-[70px] h-12 md:mt-0 mt-2 -bottom-[30px] md:text-lg text-sm"
        text1={"See all case studies"}
      />
    </div>
  );
}

export default BottomPartProject;
