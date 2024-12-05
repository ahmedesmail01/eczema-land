import Image from "next/image";
import React from "react";
// import skeleton from "@/public/images/skeleton.svg";
// import circleSvg from "@/public/images/Ellipse 1909.svg";
import cardPhoto from "@/public/images/card-photo.svg";
import cardPhotoMob from "@/public/images/card-photo-mob.svg";
import triangles from "@/public/images/triangles.svg";
const Psoriasis = () => {
  return (
    <div className="relative z-40 flex max-w-full  flex-col px-6 md:px-8 lg:px-[166px] gap-4 justify-center  mb-[60px] md:mb-[96px] ">
      <div
        dir="rtl"
        className=" w-full flex py-8  flex-col justify-center items-center  lg:flex lg:flex-row-reverse lg:items-center lg:justify-center gap-10 "
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
            الصـدفية والإكزيما: فهم الجذور العاطفية وتفعيل التشافي الذاتي{" "}
          </h1>

          <p className=" text-white text-right lg:mb-20  text-[14px] lg:text-[16px] font-normal  opacity-80 leading-relaxed">
            الصدفية والإكزيما هما اضطرابات جلدية تؤثر على الطبقة الخارجية من
            الجلد. تتميز الصدفية بتراكم خلايا الجلد بشكل مفرط، مما يؤدي إلى ظهور
            بقع متقشرة ومتهيجة. أما الإكزيما، فتتصف بتهيج الجلد مع حكة شديدة
            وجفاف قد يصل إلى تشققات مؤلمة. ورغم اختلافهما في الطب التقليدي، إلا
            أن الطب التصنيفي يعتبرهما وجهين لعملة واحدة، إذ يعكسان اضطرابًا
            شعوريًا مرتبطًا بالمشاعر العاطفية....{" "}
            <span className="text-[#F6BE85] font-bold">قراءة المزيد</span>
          </p>

          <a href="#subscribe">
            <button className=" flex items-center rounded-lg border border-white hover:border-none  justify-center w-[170px] h-[42px] px-8 text-white bg-[#c87331]  text-center [font-family:--font-monadi] text-sm lg:text-xl font-normal  ">
              أشترك الان
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Psoriasis;
