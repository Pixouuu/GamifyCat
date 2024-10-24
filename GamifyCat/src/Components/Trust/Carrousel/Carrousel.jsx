import React, { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18 } from "../../../SponsorList";

const Carrousel = () => {
  const imgs = [
    sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,
    sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12,
    sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18
  ];

  const divImgs = [];
  for (let i = 0; i < imgs.length; i += 9) {
    divImgs.push(imgs.slice(i, i + 9));
  }

  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    
  };

  return (
    <div className='w-full h-full mt-[550px] ml-20'>
      <Slider {...settings}>
        {divImgs.map((subArray, idx) => (
          <div key={idx}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(3, 1fr)", gap: "20px" }}>
              {subArray.map((src, index) => (
                <img key={index} src={src} className='w-36 aspect-video carousel-image' alt={`sponsor-${index}`} />
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
