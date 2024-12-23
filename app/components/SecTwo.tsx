import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import Marq from "./Marq";
import cardPhoto from "@/public/images/card-photo.svg";
import cardPhotoMob from "@/public/images/card-photo.svg";
import triangles from "@/public/images/triangles.svg";

const SecTwo = () => {
  return (
    <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
      <Marq />
      <div
        dir="rtl"
        className=" w-full flex py-8  flex-col justify-center items-center  lg:flex lg:flex-row lg:items-center lg:justify-center gap-10 "
      >
        <Image src={cardPhoto} alt="photo" className="hidden lg:flex z-40" />
        <Image
          src={cardPhotoMob}
          alt="photo"
          className="block lg:hidden w-[300px] z-40"
        />
        <div className="  w-full flex flex-col  px-4    gap-4 lg:justify-center h-auto  lg:items-start">
          {/* triangles pattern */}
          <Image
            src={triangles}
            alt="triangles"
            className="absolute left-0 top-48 z-10"
          />
          <h1 className="  text-[#F6BE85] text-center lg:text-right mb-[20px] [font-family:--font-monadi] w-full  text-[18px]  lg:text-[28px] font-normal ">
            جلسات الاتزان شفاء (الصدفية والإكزيما)
          </h1>

          <bdi className=" text-white text-right  text-[16px] lg:text-[20px] font-bold ">
            تعتمد المجموعات العلاجية &quot;جلسات الاتزان شفاء&quot; على تفعيل
            آلية التشافي الذاتي
          </bdi>

          <bdi className=" text-white text-right lg:mb-20  text-[14px] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
            التشافي الذاتي يبدأ من خلال استعادة الاتزان الشعوري، وهو حال السكون
            والطمأنينة تجاه الأحداث والأفكار، حيث إن الإنسان كيان متكامل من
            الجسد والمشاعر، وأي اضطراب شعوري ينعكس على الجسد في صورة مرض، وهذه
            الجلسات تمكن الفرد من فهم وإدارة مشاعره المضطربة التي تُعد السبب
            الجذري للاضطرابات الصحية، فالتشافي الذاتي هو نظام فطري أودعه الله في
            كل إنسان، وباستعادة التوازن الداخلي يساعد الجسد على استعادة عافيته
            ورفع جودة الحياة نفسيًا وجسديًا.{" "}
          </bdi>

          <a href="https://payment.mtnhealingcenter.com/payment/8a7dac25-c00f-44e8-8815-c217ec0cbf23">
            <button className=" flex items-center rounded-lg border border-white hover:border-none  justify-center w-[170px] h-[42px] px-8 text-white bg-[#c87331]  text-center [font-family:--font-monadi] text-sm lg:text-xl font-normal  ">
              أشترك الان
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
