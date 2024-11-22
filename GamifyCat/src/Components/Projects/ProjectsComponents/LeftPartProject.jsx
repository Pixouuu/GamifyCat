import React from "react";
import arrow from "../../../../public/arrow.svg";
import { motion } from "framer-motion";

function LeftPartProject() {
  return (
    <div className=" md:w-[750px] w-full md:h-[750px] h-[350px] relative cursor-pointer ">
      <iframe
        src="https://player.vimeo.com/video/988471491?background=1&autoplay=1&loop=1&muted=1&controls=0"
        className="w-72 h-72 md:w-full md:h-full rounded-[30px] pointer-events-none ml-11 md:ml-0"
      ></iframe>

      <button className="text-white absolute md:bottom-7 md:left-5 bottom-[110px] left-14 border border-white md:py-3 md:px-6 py-2 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
        Animation
      </button>

      <button className="text-white absolute md:bottom-7 md:left-48 border bottom-[70px] left-14 border-white md:py-3 md:px-6 py-2 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold">
        Web Design & Development
      </button>

      <button className="absolute md:bottom-6 md:right-8 bottom-[70px] right-16 border border-white md:py-3 md:px-3 px-2 py-2 rounded-full hover:bg-greenColor hover:border-greenColor transition-all">
        <img src={arrow} alt="arrow" className="md:w-8 w-4" />
      </button>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-6xl text-lg font-semibold mt-5 hover:text-greenColor duration-500 cursor-pointer ml-[59px] md:ml-0"
      >
        Samsung S21 Ultra
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-xl text-xs  mt-5 opacity-80 ml-12 md:ml-0 p-3 md:p-0"
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
