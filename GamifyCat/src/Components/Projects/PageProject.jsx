import React from "react";
import TopPartProject from "./ProjectsComponents/TopPartProject";
import LeftPartProject from "./ProjectsComponents/LeftPartProject";
import RightPartProject from "./ProjectsComponents/RightPartProject";
import BottomPartProject from "./ProjectsComponents/BottomPartProject";

function PageProject() {
  return (
    <div
      className="bg-black md:w-screen w-full md:h-[2450px] h-[1840px]"
      id="project-div"
    >
      <TopPartProject />

      <div className=" w-full md:h-[1100px] h-[1000px] flex md:flex-row flex-col items-start justify-evenly md:mt-10">
        <LeftPartProject />
        <RightPartProject />
      </div>

      <BottomPartProject />
    </div>
  );
}

export default PageProject;
