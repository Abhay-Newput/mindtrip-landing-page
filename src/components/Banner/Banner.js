import React from "react";
import "./banner.css";
import bgImg from "../../assets/banner-images/banner.jpeg";
import london from "../../assets/banner-images/London.png";
import paris from "../../assets/banner-images/Paris.png";
import rome from "../../assets/banner-images/Rome.png";
import BannerText from "./BannerText";
import { FaLongArrowAltDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className=" flex flex-1 flex-col">
      <div className="z-0 relative flex h-[85vh] md:h-[95vh] lg:h-[100vh]  overflow:hidden">
        <div>
          <img
            src={bgImg}
            alt="background"
            className="h-full w-[100vW] rounded-b-[30px] object-cover md:object-center"
          ></img>
        </div>
        <img
          src={london}
          alt="big-bang"
          className="w-60 absolute right-[25.25vw] top-[37%]  animate-float1 hidden lg:block"
        ></img>
        <img
          src={paris}
          alt="eiffle tower"
          className="w-40 absolute right-[1vw] top-[10%] md:top-[15%] md:right-[2vw] md:w-56 animate-float2"
        ></img>

        <img
          src={rome}
          alt="colosium"
          className="w-40 md:w-56 absolute bottom-[9%] right-[8vh] animate-float3"
        ></img>
        <div className="absolute inset-x-0 bottom-5 font-light flex justify-center items-center hover:cursor-pointer">
          <span>Learn more</span>
          <FaLongArrowAltDown className="animate-bounce" />
        </div>
      </div>
      <div className="absolute top-[200px]  left-[20px] md:top-[350px] lg:top-[150px]">
        <BannerText />
      </div>
    </div>
  );
};

export default Banner;
