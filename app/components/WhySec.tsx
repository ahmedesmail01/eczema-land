"use client";

import React from "react";
// import cardTriangles from "@/public/images/card-triangles.svg";
import Image from "next/image";
// import logo from "@/public/images/logo.svg";
import girlCardLeft from "@/public/images/girl-card-left.svg";
import girlCardRight from "@/public/images/girl-card-right.svg";
import triangles from "@/public/images/triangles.svg";

const WhySec = () => {
  const items = [
    {
      title: "فهم علاقة الجسد والمشاعر",
      desc: "رؤية واضحة لعلاقة مشاعرك والمرض، مما يساعدك على فهم السبب الجذري الشعوري للمرض",
      img: girlCardRight,
    },
    {
      title: "استعادة القدرة الفطرية على الشفاء",
      img: girlCardLeft,
      desc: "تدريبات شعورية مكثفة، لتتعلم  إدارة ذاتك ومشاعرك بفعالية،عند ادارتك لذاتك و مشاعرك بفاعلية تتحسن حالتك الصحية  مع كل تحسن في إدارتك الشعورية  مما يعزز تحسن حالتك الصحية تدريجيًا.",
    },
  ];
  return (
    <div className=" relative w-full flex flex-col gap-4 overflow-hidden justify-center items-center px-4 mb-[60px] lg:mb-[96px]">
      <Image
        src={triangles}
        alt="triangles"
        className="absolute -right-10 top-10 z-10"
      />
      <h1 className="self-stretch text-[#f6be85] text-center font-[PNU] text-2xl lg:text-[40px] font-bold leading-[160%] lg:mb-[48px]">
        لماذا جلسات &quot;الاتزان شفاء&quot;؟
      </h1>

      <div
        dir="rtl"
        className="flex flex-col lg:flex-row gap-4 justify-between"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-transparent p-4 w-[300px] md:w-[350px] h-[448px] flex flex-col gap-4  border border-yellow-700 rounded-lg overflow-hidden"
          >
            <Image src={item.img} alt="shape" className="w-full " />
            <h1 className=" [font-family:--font-monadi] text-lg font-bold ">
              {item.title}
            </h1>
            <p className="font-semibold w-full">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySec;

/* 

<div
            key={index}
            className="bg-transparent w-[348px] flex flex-col gap-4  border border-yellow-700 rounded-lg overflow-hidden"
          >
            <Image src={cardTriangles} alt="shape" className="w-full " />
            <div className="flex  items-center gap-2 justify-between mb-4">
              <h1 className="[font-family:--font-monadi] text-lg font-bold ">
                {item.title}
              </h1>
              <Image src={logo} alt="logo" className="w-[119px]" />
            </div>
            <p className="p-4 font-semibold w-full">{item.desc}</p>
          </div>

*/
