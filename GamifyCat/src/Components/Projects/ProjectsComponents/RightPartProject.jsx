import React from "react";
import BgPaper from "../../../../public/bgpaper.webp";
import Cartridge1 from "../../../../public/CartRidge/CartRidge_1.webp";
import Case from "../../../../public/casesquare.webp";
import arrow from "../../../../public/arrow.svg";
import { motion } from "framer-motion";

function RightPartProject() {
  return (
    <div className=" md:w-[750px] md:h-[750px] w-full h-96 rounded-xl md:mt-20 mt-28 ">
      <div className="md:w-full md:h-full w-72 h-72 rounded-[30px] flex justify-center items-center bg-emerald-800 relative cursor-pointer ml-11 md:ml-0">
        <img
          src={BgPaper}
          className="absolute rounded-[30px] mix-blend-multiply pointer-events-none"
        />
        <img
          src={Cartridge1}
          alt="img"
          className="relative md:w-80 w-[145px] hover:w-[330px] transition-all duration-400"
        />
        <img
          src={Case}
          className="top-0 left-0 absolute pointer-events-none "
        />
        <button className="text-white absolute border border-white md:py-3 md:px-6 py-2 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold md:bottom-7 md:left-5 bottom-12 left-3">
          Game Design
        </button>
        <button className="text-white absolute border border-white md:py-3 md:px-6 py-2 px-4 rounded-full md:text-xl text-xs font-jakarta font-bold md:bottom-7 md:left-56 bottom-2 left-3">
          Web Design & Development
        </button>
        <button className="absolute md:bottom-6 md:right-8 bottom-2 right-5 border border-white md:py-3 md:px-3 px-2 py-2 rounded-full hover:bg-greenColor hover:border-greenColor transition-all">
          <img src={arrow} alt="arrow" className="md:w-8 w-4" />
        </button>
      </div>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-6xl text-xl font-semibold mt-5 hover:text-greenColor duration-500 cursor-pointer ml-11 md:ml-0"
      >
        Asus ZenBook 14
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-jakarta text-white md:text-xl text-xs mt-5 opacity-80 ml-11 md:ml-0"
      >
        Developed an animated landing page and a Unity pixel adventure game for
        the Asus ZenBook 14. The game featured tasks that rewarded users with
        promo codes, boosting engagement and sales.
      </motion.p>
    </div>
  );
}

export default RightPartProject;
