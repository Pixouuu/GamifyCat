import React from "react";

function ImgLogoHover({ src, height }) {
  return (
    <img
      src={src}
      className="hover:opacity-80 transition-opacity cursor-pointer"
      style={{ height: height }}
    />
  );
}

export default ImgLogoHover;
