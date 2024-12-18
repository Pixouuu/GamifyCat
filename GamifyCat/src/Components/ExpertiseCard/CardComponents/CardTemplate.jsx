import React from "react";
import { motion } from "framer-motion";

function CardTemplate({ Titre, text1, text2, text3, text4, text5 }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white md:w-[790px] w-[350px] md:h-[350px] h-72 rounded-[30px]"
    >
      <h1 className="font-jakarta font-bold md:text-5xl text-4xl md:text-start md:mt-12 mt-8 ml-16">
        {Titre}
      </h1>
      <ul className="font-jakarta font-bold list-disc text-dark md:text-2xl text-lg md:leading-10 leading-8 pb-7 md:pb-0 ml-[85px]">
        <li className="mt-4 font-jakarta">{text1}</li>
        <li>{text2} </li>
        <li>{text3}</li>
        <li>{text4}</li>
        <li>{text5}</li>
      </ul>
    </motion.div>
  );
}

export default CardTemplate;
