import React from "react";
import arrow from "../../../../public/arrow.svg";
import { motion } from "framer-motion";

function LeftPartProject() {
  return (
    <div className="md:w-[750px] w-full md:h-[750px] h-[350px] relative cursor-pointer ">
      <iframe
        src="https://player.vimeo.com/video/988471491?background=1&autoplay=1&loop=1&muted=1&controls=0"
        className="md:w-full w-72 md:h-full h-72 rounded-[30px] pointer-events-none md:ml-0 ml-11"
      ></iframe>

      <button className="text-white absolute md:bottom-7 bottom-[110px] md:left-5 left-14 border border-white md:py-3 py-2 md:px-6 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
        Animation
      </button>

      <button className="text-white absolute md:bottom-7 bottom-[70px] md:left-48 left-14 border border-white md:py-3 py-2 md:px-6 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
        Web Design & Development
      </button>

      <button className="absolute md:bottom-6 bottom-[70px] md:right-8 right-16 border border-white md:py-3 px-2 md:px-3 py-2 rounded-full hover:bg-greenColor hover:border-greenColor transition-all">
        <img src={arrow} alt="arrow" className="md:w-8 w-4" />
      </button>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-6xl text-lg font-semibold hover:text-greenColor duration-500 cursor-pointer mt-5 md:ml-0 ml-[59px]"
      >
        Samsung S21 Ultra
      </motion.h1>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-xl text-xs opacity-80 mt-5 md:ml-0 ml-12 md:p-0 p-3"
      >
        Collaborative advertising campaign for the new Samsung S21 Ultra
        smartphone on the Forbes business magazine platform, the Samsung brand
        increased smartphone sales and received many positive mentions on social
        media.
      </motion.p>
    </div>
  );
}

export default LeftPartProject;
