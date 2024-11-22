import React from "react";
import "./card.css";
import CardTemplate from "./CardComponents/CardTemplate";
import AnimationBase from "../GeneralComponents/AnimationBase";
import { motion } from "framer-motion";

function Card() {
  return (
    <div
      className="bg-light w-full md:h-[1100px] h-[1430px] flex flex-col "
      id="card-div"
    >
      <motion.h1
        initialX={-100}
        finalX={0}
        className="font-jakarta font-bold md:text-8xl text-5xl md:ml-32 mt-10 mb-5 ml-10 md:mt-20 md:mb-16"
      >
        Expertise
      </motion.h1>

      <div className="w-screen md:h-[720px] h-full flex flex-col gap-10 mt-5 md:mt-0">
        <div className="w-screen h-full flex md:flex-row flex-col justify-center items-center gap-10">
          <CardTemplate
            Titre={"Design"}
            text1={"Logo, Branding, Icons"}
            text2={"Custom Illustrations"}
            text3={"User Experience (UX)"}
            text4={"User Interface (UI)"}
            text5={"Web & Product Design"}
          />
          <CardTemplate
            Titre={"Development"}
            text1={"Js, Vue, React, Angular"}
            text2={"Web Development"}
            text3={"App Development"}
            text4={"Wordpress, Webflow"}
            text5={"Shopify, BigCommerce"}
          />
        </div>

        <div className="w-screen md:h-[720px] flex md:flex-row flex-col justify-center items-center gap-10 md:mt-10 mb-10">
          <CardTemplate
            Titre={"Marketing"}
            text1={"PPC, SEO & SMM"}
            text2={"Content Marketing"}
            text3={"Email Marketing"}
            text4={"Marketing Research"}
            text5={"Web & Game Analytics"}
          />
          <CardTemplate
            Titre={"Gamification"}
            text1={"Interactive ADs Banners"}
            text2={"Animated Landing Page"}
            text3={"Gamification Web Design"}
            text4={"Game Design & Development"}
            text5={"HTML5 & Unity Game"}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
