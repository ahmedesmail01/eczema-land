import Image from "next/image";
import React from "react";
import ragol from "@/public/images/ragol-kaseep.svg";
import estro from "@/public/images/estro.svg";
import kyam from "@/public/images/kyam.svg";

const Gifts = () => {
  return (
    <div className="text-center px-4 md:pb-[96px]  pb-[60px] flex flex-col items-center  w-full">
      <h1 className="flex-[1_0_0] text-center text-[#f8cfa5] lg:w-[800px] [font-family:--font-monadi] mb-10 text-2xl lg:text-4xl font-normal  ">
        اشترك الآن في المجموعة العلاجية الخاصة بالصدفية و الاكزيما واحصل على
        مميزات إضافية{" "}
      </h1>

      <div
        dir="rtl"
        className="flex-col items-center lg:flex lg:flex-row lg:items-start gap-4 justify-center   [font-family:Tajawal] "
      >
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#f8cfa5] w-[300px]  lg:w-[350px] h-[340px] text-center  rounded-[10px]">
          <Image src={estro} alt="estro gym logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#f6be85] leading-6">
            إستروجيم (4 حلقات شهريا ) :{" "}
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            برنامج مخصص للإناث يعيد التوازن الفطري للأنثى، والعودة إلى هويتها
            الأنثوية مما يساهم في تخفيف حدة الأعراض المرتبطة بمرض السكري من
            النوع الأول{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#f8cfa5] w-[300px]  lg:w-[350px] h-[340px] text-center  rounded-[10px]">
          <Image src={ragol} alt="ragol kasseep logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#f6be85] leading-6">
            الرجل الكسيب (4 حلقات شهريا ) :{" "}
          </h2>

          <p className="w-[248px] text-start font-[pnu] opacity-80">
             برنامج للذكور يساعد على استعادة الهوية الذكورية، مما يساهم في تحسين
            الحالة الصحية وتخفيف حدة الأعراض المرتبطة بمرض السكري من النوع الأول
          </p>
        </div>

        <div className="flex flex-col gap-4 p-[20px] mb-4 justify-start items-start  border border-[#f8cfa5] w-[300px]  lg:w-[350px] h-[340px] text-center  rounded-[10px]">
          <Image src={kyam} alt="kyam logo" />
          <h2 className=" text-center [font-family:--font-monadi] text-xl text-[#f6be85] leading-6">
            برنامج القيم (4 حلقات شهريا ) :{" "}
          </h2>
          <p className="w-[248px] text-start font-[pnu] opacity-80">
            ركز على تعزيز الطمأنينة، والقيمة، والقدرة، والحرية كركائز لحياة
            متزنة ورفع جودة الحياة بشكل عام. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
