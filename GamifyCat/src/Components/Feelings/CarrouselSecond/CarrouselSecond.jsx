import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18 } from "../../../SponsorList";

function Carrousel() {
    const imgs = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6, sponsor7, sponsor8, sponsor9, sponsor10, sponsor11, sponsor12, sponsor13, sponsor14, sponsor15, sponsor16, sponsor17, sponsor18];
    const texts = [
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.",
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.",
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.",
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills.", 
        "Thanks to GamifyCat’s work, the client’s customer gained new patrons. This resulted in an increase in sales for the customer. The team managed the project well by ensuring the design and development phases were completed on time and with high quality. Moreover, they had great communication skills."
    ];

    useEffect(() => {
        $(document).ready(function() {
            $('.slider').not('.slick-initialized').slick({
                autoplay: true,
                autoplaySpeed: 1,
                speed: 10000, 
                cssEase: 'linear',
                centerMode: true,
                arrows: false,
                slidesToShow: 1,
                variableWidth: true,
                infinite: true
            });
        });
    }, []);

    return (
        <div className="w-full h-full mt-14">
            <div id='carousel' className='slider flex flex-row'>
                {imgs.map((src, index) => (
                    <div key={index} className="carousel-item">
                        <div className='w-[575px] h-[300px] bg-white rounded-[30px] flex flex-col justify-center p-10 mr-14 mt-10'>
                            <img src={src} className='w-36 aspect-video mb-5' alt={`sponsor-${index}`} />
                            <p>{texts[index]}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;
