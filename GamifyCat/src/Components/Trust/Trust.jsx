import React from "react";
import LeftPartTrust from "./TrustComponents/LeftPartTrust";
import Carrousel from "./Carrousel/Carrousel";

function Trust() {
  return (
    <div className="bg-green-600 w-full md:h-[950px] h-[650px] flex md:flex-row flex-col ">
      <LeftPartTrust />
      <div className="md:w-1/2 w-3/4 h-full flex justify-center items-center md:mt-0 mt-10">
        <Carrousel />
      </div>
    </div>
  );
}

export default Trust;
