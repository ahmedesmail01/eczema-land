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
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-b from-[#424242b8] to-[#22271b]"></div>

      {/* Overlay Content */}
      <div className="relative z-20 flex flex-col items-center">
        <Image src={logo} alt="logo" className="mb-6 w-[200px] lg:w-auto" />
        <p className=" text-[#fff] text-center mb-4 [font-family:--font-monadi] text-2xl lg:text-4xl font-normal leading-[139%] left-[385px] top-[454px]">
          اكتشف قوة التشافي الذاتي
        </p>
        <p className=" text-[#A7A7A7] text-center mb-3 [font-family:--font-monadi] text-2xl lg:text-4xl font-normal leading-[139%] left-[385px] top-[454px]">
          استعد اتزانك الشعوري لتحسين صحتك وحياتك{" "}
        </p>
        <p className=" text-[#A7A7A7] mb-[32px] text-center font-[pnu] text-xl lg:text-2xl font-normal leading-[139%] left-[385px] top-[454px]">
          مشاعرك بوابة لصحة أفضل
        </p>
        <a
          href="https://payment.mtnhealingcenter.com/payment/8a7dac25-c00f-44e8-8815-c217ec0cbf23"
          className="flex text-white font-bold text-sm lg:text-lg w-[172px] h-[47px] justify-center items-center gap-2 bg-[#c87331] shadow-md px-4 py-2 rounded-lg"
        >
          اشترك الآن
        </a>
      </div>
    </div>
  );
};

export default Hero;
