import React from "react";
import arrow from "../../../public/arrow.svg";
import { cn } from "../../TwMerge";

function Button({ text1, className, imgSrc = arrow }) {
  return (
    <button
      className={cn(
        "group btn-container relative overflow-hidden md:text-xl text-base rounded-full w-60 h-10 font-bold bg-greenColor flex flex-col items-center justify-center text-white font-jakarta md:mr-9",
        className
      )}
    >
      <span className="flex flex-row items-center group-hover:-translate-y-[110%] duration-500 transition-transform ease-[cubic-bezier(0.08, 0.82, 0.17, 1)]">
        {text1} <img src={imgSrc} className="md:w-9 w-6 md:ml-1 md:mt-1" />
      </span>

      <span className="flex flex-row items-center group-hover:-translate-y-[110%] duration-500 transition-transform ease-[cubic-bezier(0.08, 0.82, 0.17, 1)] absolute -bottom-9 opacity-80">
        {text1} <img src={imgSrc} className="md:w-9 w-6 md:ml-1 md:mt-1" />
      </span>
    </button>
  );
}

export default Button;
