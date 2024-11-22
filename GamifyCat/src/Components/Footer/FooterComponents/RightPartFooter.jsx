import React from "react";
import { motion } from "framer-motion";
import Badge from "../../../../public/logo/clutchbadge.svg";
import ClutchReview from "../../../../public/logo/clutchreview.svg";
import GoogleReview from "../../../../public/logo/googlereview.svg";
import Linkedin from "../../../../public/logo/linkedin.svg";
import Google from "../../../../public/logo/googleicon_white.svg";
import ClutchIcon from "../../../../public/logo/clutchicon_white.svg";
import HoverLinks from "../../GeneralComponents/HoverLinks";
import ImgLogoHover from "../../GeneralComponents/ImgLogoHover";

function RightPartFooter() {
  return (
    <div className="flex-1 md:h-full text-white font-jakarta font-bold flex md:flex-row flex-col md:text-xl text-sm items-center justify-end md:mt-3 ">
      <div className="flex flex-col w-full md:w-52 p-10 md:p-0">
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="opacity-50 text-base"
        >
          MENU
        </motion.span>
        <motion.ul
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-5 mb-5 inline cursor-pointer "
        >
          <li className="li-header">
            Agency
            <HoverLinks width={"80px"} />
          </li>
          <li className="li-header">
            Cases
            <HoverLinks width={"65px"} />
          </li>
          <li className="li-header">
            Contacts
            <HoverLinks width={"95px"} />
          </li>
          <li className="li-header">
            Terms And Conditions
            <HoverLinks width={"215px"} />
          </li>
          <li className="li-header">
            Privacy Policy
            <HoverLinks width={"140px"} />
          </li>
        </motion.ul>
        <motion.span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="opacity-50 text-base"
        >
          LINKS
        </motion.span>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-row gap-5 mt-10"
        >
          <ImgLogoHover src={Linkedin} />
          <ImgLogoHover src={ClutchIcon} />
          <ImgLogoHover src={Google} />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col gap-6 justify-end md:mr-40 md:ml-10 md:mt-16 mt-10"
      >
        <ImgLogoHover src={Badge} height={"120px"} />
        <ImgLogoHover src={ClutchReview} />
        <ImgLogoHover src={GoogleReview} />
      </motion.div>
    </div>
  );
}

export default RightPartFooter;
