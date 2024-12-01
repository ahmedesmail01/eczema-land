"use client";

import React from "react";

const WhySec = () => {
  const items = [
    {
      title: "فهم علاقة الجسد والمشاعر:",
      desc: "رؤية واضحة لعلاقة مشاعرك والمرض، مما يساعدك على فهم السبب الجذري الشعوري للمرض",
    },
    {
      title: "استعادة القدرة الفطرية على الشفاء:",
      desc: "تدريبات شعورية مكثفة، لتتعلم  إدارة ذاتك ومشاعرك بفعالية،عند ادارتك لذاتك و مشاعرك بفاعلية تتحسن حالتك الصحية  مع كل تحسن في إدارتك الشعورية  مما يعزز تحسن حالتك الصحية تدريجيًا.",
    },
  ];
  return (
    <div className="flex flex-col gap-4 justify-center items-center px-4 mb-[60px] lg:mb-[96px]">
      <h1 className="self-stretch text-[#ffffff] text-center font-[PNU] text-2xl lg:text-[40px] font-bold leading-[160%] lg:mb-[48px]">
        لماذا جلسات &quot;الاتزان شفاء&quot;؟
      </h1>

      <div
        dir="rtl"
        className="flex flex-col lg:flex-row gap-4 justify-between"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="lg:w-[395px] lg:h-[208px] bg-gradient-to-b from-[#fed573] to-black rounded-2xl p-1"
          >
            <div className="rounded-2xl h-full bg-black text-center p-4">
              <h2 className="mb-3 font-bold text-xl">{item.title}</h2>
              <p className="flex-[1_0_0] text-[#ffffff] text-center [font-family:PNU] text-base font-normal leading-[normal]">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="lg:w-[395px] lg:h-[208px] bg-gradient-to-b from-[#fed573] to-black rounded-2xl p-1">
          <div className="rounded-2xl h-full text-white bg-black text-center p-4">
            <h2 className="mb-3 font-bold text-[18px]">
              التحرر من حال انا لست مفعولا به
            </h2>
            <p className="mb-3 font-bold text-[18px]">أنا من ذهبت الى المرض</p>
            <p className="mb-3 font-bold text-[18px]">
              انا من اذهب الى الشفاء{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySec;
