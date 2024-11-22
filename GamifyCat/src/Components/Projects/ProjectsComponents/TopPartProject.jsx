import React from "react";
import { motion } from "framer-motion";
import AnimationBase from "../../GeneralComponents/AnimationBase";

function TopPartProject() {
  return (
    <div className="w-full flex md:flex-row flex-col h-72 md:ml-12 ml-14 ">
      <AnimationBase>
        <h2 className="text-white md:text-8xl text-4xl font-bold font-jakarta md:ml-32 mt-10">
          <b className="text-greenColor">Successful</b>
          <br />
          projects
        </h2>
      </AnimationBase>
      <div className="flex flex-1 justify-end">
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-white font-medium leading-[155%] md:text-right md:text-xl text-base mt-10 mr-44 opacity-80 "
        >
          Explore our diverse cases, featuring immersive <br></br> mini-games,
          animated gamification, and <br></br> interactive quizzes.
        </motion.p>
      </div>
    </div>
  );
}

export default TopPartProject;
