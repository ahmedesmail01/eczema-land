import Image from "next/image";
import React from "react";
import girlImg from "@/public/images/girl2.svg";
import circleSvg from "@/public/images/Ellipse 1909.svg";

const Techs = () => {
  const bullets = [
    " كل نسيج جسدي مرتبط بشعور محدد",
    " المرض هو صوره الاضطراب الشعورى المقابل للنسيج .",
  ];
  return (
    <div className="flex text-white justify-center mx-4 mb-[60px] md:mb-[96px] ">
      <div className=" flex-col md:flex lg:flex-row justify-between lg:gap-[96px]  border-2 border-[#fed36c] rounded-3xl">
        <Image
          src={girlImg}
          alt="skeleton"
          className="w-full rounded-br-xl rounded-tr-3xl md:rounded-tr-none md:rounded-br-none rounded-tl-3xl rounded-bl-xl  md:rounded-bl-3xl md:rounded-3xl"
        />
        <div
          dir="rtl"
          className="flex px-2 md:px-8 md:py-[60px] flex-col justify-between"
        >
          <h1 className="self-stretch text-[#ffffff] text-right [font-family:PNU] text-[32px] font-bold leading-[normal]">
            التقنيات المستخدمة في الجلسات
          </h1>
          <p className="text-[#ffffff] text-right [font-family:PNU] text-xl font-bold leading-[normal]">
            فهم جذر المرض:
          </p>
          {bullets.map((bullet, index) => (
            <div key={index} className="py-2 md:py-2 flex items-center gap-4">
              <Image src={circleSvg} alt="icon" />
              <span className="md:w-[512.818px] text-[#ffffff] text-right [font-family:PNU] text-sm md:text-xl font-normal ">
                {bullet}
              </span>
            </div>
          ))}
          <p className="text-[#ffffff] text-right [font-family:PNU] text-xl font-bold leading-[normal]">
            تلقي رسالة المرض:
          </p>
          <div className="py-2 md:py-2 flex items-center gap-4">
            <Image src={circleSvg} alt="icon" />
            <span className="md:w-[512.818px] text-[#ffffff] text-right [font-family:PNU] text-sm md:text-xl font-normal leading-[normal]">
              المرض هو صوره الاضطراب الشعورى المقابل للنسيج .{" "}
            </span>
          </div>
          <p className="text-[#ffffff] text-right [font-family:PNU] text-xl font-bold leading-[normal]">
            التدريب  على الاتزان الشعوري:
          </p>
          <div className="py-2 md:py-2 flex items-center gap-4">
            <Image src={circleSvg} alt="icon" />
            <span className="md:w-[512.818px] text-[#ffffff] text-right [font-family:PNU] text-sm md:text-xl font-normal leading-[normal]">
               تدريبات مكثفة  على على اختيار المشاعر المتزنة، مما يوثر ايجابا عى
              صحتك و حالتك الشعوريه .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techs;
