"use client";

import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";
import backVideo from "@/public/videos/backVid.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden mb-[60px] md:mb-[120px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-transparent to-black"></div>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center">
        <Image src={logo} alt="logo" className="mb-6" />
        <p className="mb-4 text-[#ffffff] text-center font-bold text-xl md:text-2xl leading-relaxed">
          التشافي الذاتي يبدأ باستعادة الاتزان الشعوري <br />
          الاتزان الشعوري هو حال السكون والطمأنينة تجاه الاحداث و الافكار
        </p>
        <a
          href="#subscribe"
          className="flex text-white font-bold text-sm md:text-xl w-[130px] md:w-[195px] h-[50px] md:h-[60px] justify-center items-center gap-2 bg-gradient-to-r from-[#f8cb0a] to-[#493c04] shadow-md px-4 py-2 rounded-2xl"
        >
          اشترك الآن
        </a>
      </div>
    </div>
  );
};

export default Hero;
