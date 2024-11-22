import React from "react";
import arrowGreen from "../../../../public/arrowGreen.svg";
import Button from "../../GeneralComponents/Button";

function LeftPartTrust() {
  return (
    <div className="md:w-1/2 w-full h-full text-dark font-jakarta flex flex-col justify-center items-center">
      <h1 className="md:text-[90px] text-5xl font-bold text-start leading-none md:mr-36 md:mt-0 mt-10 mb-10">
        We're <br /> trustworthy
      </h1>
      <p className="text-xl font-semibold text-center md:text-left md:mb-0 mb-10">
        Trusted by over 100 advertising agencies, companies, media digital{" "}
        <br /> magazines and brands
      </p>

      <Button
        className={
          "md:w-[250px] md:h-[60px] h-12 md:text-lg text-sm bg-dark text-greenColor md:mt-[60px] md:mr-[400px]"
        }
        text1={"About us"}
        imgSrc={arrowGreen}
      />
    </div>
  );
}

export default LeftPartTrust;
