import React from 'react';
import { useEffect, useState } from 'react';
import './Carrousel.css';
import { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18 } from "../../SponsorList";

function Carrousel() {
    const imgs = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18];
    const divImgs = [];
   
    for (let i = 0; i < imgs.length; i += 3) {
        divImgs.push(imgs.slice(i, i + 3));
    }
   
   window.onload=function(){
        $('.sliderFirst').not('.slick-initialized').slick({
        autoplay:true,
        autoplaySpeed:4000,
        centerMode:true,
        arrows:false,
        slidesToShow:3,
        slidesToScroll:1,
        infinite:true
        });
      };

    return (
        <div className="w-full h-full mt-56 ml-20">
            <div id='carousel' className='sliderFirst'>
                            {divImgs.map((subArray, idx)=>{
                                return (
                                    <div key={idx}>
                                        {subArray.map((src, index) => (
                                            <img key={index} src={src} className='w-36 aspect-video carousel-image' alt={`sponsor-${index}`} />
                                        ))}
                                    </div>
                                )
                            })}
            </div>
        </div>
    );
}

export default Carrousel;
