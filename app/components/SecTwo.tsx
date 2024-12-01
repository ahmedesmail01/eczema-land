import Image from "next/image";
import React from "react";
import skeleton from "@/public/images/skeleton.svg";
import circleSvg from "@/public/images/Ellipse 1909.svg";

const SecTwo = () => {
  const bullets = [
    'تعتمد المجموعات العلاجية "جلسات الاتزان شفاء" على تفعيل آلية التشافي الذاتي',
    "التشافي الذاتي يبدأ باستعادة الاتزان الشعوري",
    "الاتزان الشعوري هو حال السكون والطمأنينة تجاه الاحداث و الافكار ",
    "الإنسان كيان متكامل من الجسد والمشاعر،	وأي اضطراب شعوري ينعكس على الجسد في صورة مرض.",
    "هذه الجلسات تمكن صاحبها  من فهم وإدارة مشاعره المضطربة التي تُعد السبب الجذري للاضطرابات الصحية",
    "التشافي الذاتي هو نظام فطرى أودعه الله في كل انسان،   	وباستعادة توازنك الداخلي، يساعدك جسدك على استعادة عافيته ورفع جودة حياتك نفسيًا وجسديًا.",
  ];
  return (
    <div className="flex justify-center mx-4 mb-[60px] md:mb-[96px] ">
      <div className=" flex-col md:flex lg:flex-row justify-between lg:gap-[96px]   border-2 border-[#fed573] rounded-3xl">
        <Image
          src={skeleton}
          alt="skeleton"
          className="w-full rounded-br-xl rounded-tr-3xl md:rounded-tr-none md:rounded-br-none rounded-tl-3xl rounded-bl-xl  md:rounded-bl-3xl md:rounded-3xl"
        />
        <div
          dir="rtl"
          className="flex px-2 md:px-8 md:py-[60px] flex-col justify-between text-white"
        >
          {bullets.map((bullet, index) => (
            <div key={index} className="py-2 md:py-4 flex items-center gap-4">
              <Image src={circleSvg} alt="icon" />
              <span className="md:w-[512.818px] text-white text-right [font-family:PNU] text-sm md:text-xl font-normal leading-[normal]">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
