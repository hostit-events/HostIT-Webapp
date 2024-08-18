import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiStarShuriken } from "react-icons/gi";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  const announcements = [
    { id: 1, text: "HostIT powered by Lisk" },
    { id: 2, text: "Web3 Lagos Conference" },
    { id: 3, text: "HostIT" },
    { id: 4, text: "Web3Bridge at 5🥳🥳🥳" },
    { id: 5, text: "HostIT" },
  ];

  return (
   <div>
     <Slider {...settings}>
    {announcements.map((info) => (
        <div className='bg-[#0D0042] text-[#11EBF2] p-4 w-[100%]' key={info.id}>
            <p className='flex justify-between items-center font-[600] text-[20px]'>{info.text} <GiStarShuriken /></p>
        </div>
    ))}
        </Slider>
   </div>
  );
};

export default Banner;
