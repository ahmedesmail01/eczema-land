import Image from "next/image";
import React from "react";
import ragol from "@/public/images/ragol-kaseep.svg";
import estro from "@/public/images/estro.svg";
import kyam from "@/public/images/kyam.svg";

const Gifts = () => {
  return (
    <div className="text-center px-4 md:pb-[96px]  pb-[60px] flex flex-col items-center bg-gradient-to-b from-black  to-[#342607] w-full">
      <h1 className="self-stretch md:mb-6 text-[#ffffff] text-center [font-family:Tajawal] text-2xl lg:text-5xl font-bold lg:leading-[66px]">
        مميزات  او مزايا الاشتراك بالبرنامج
      </h1>
      <p className="flex  my-4 lg:w-[878px] md:mb-[48px] h-[67px] flex-col justify-center text-[#ffffff] text-center [font-family:PNU] text-base lg:text-lg font-normal leading-[25px]">
        الحصول على مجموعة لقاءات و برامج  بها العديد من التدريبات الشعورية
        المكثفة  التي تساعدك في رحلة التشافي والاتزان وهي
      </p>
      <div
        dir="rtl"
        className="flex-col lg:flex lg:flex-row items-start gap-4 justify-center   [font-family:Tajawal] "
      >
        <div className="flex flex-col gap-4 pt-12 pb-12 mb-4 justify-start items-center w-80 min-h-[598px] text-center bg-[#413617]  rounded-[20px]">
          <Image src={ragol} alt="ragol kasseep logo" />
          <h2 className=" text-center [font-family:Tajawal] text-xl font-black leading-6">
            تدريبات الرجل الكسيب <span className="text-[#EF8218]">للذكور</span>
          </h2>
          <p className=" text-center font-normal leading-6">
            12 حلقة من برنامج الرجل الكسيب للذكور
          </p>
          <p className="w-[248px]">
            هو برنامج مخصص للذكر، يرى من خلاله فطرته المتزنة ويتعرف على أدواره
            وأحواله التي تناسبه من الناحية الجسدية والنفسية، والتي يكون التخلي
            عنها سببًا رئيسًا في المشاكل الصحية التي يُعاني منها، مثل مرض
            السكري، والذي يكون نتيجة لتنازل الرجل عن هويته الذكورية في مواقف
            عديدة من حياته برنامج الراجل الكسيب يُمكن الذكر من استعادة الحالة
            الشعورية الفطرية المتزنة التي تساعده على التشافي.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-12 pb-12 mb-4 justify-start items-center w-80 min-h-[598px] text-center bg-[#413617] rounded-[20px]">
          <Image src={estro} alt="estro gym logo" />
          <h2 className=" text-center [font-family:Tajawal] text-xl font-black leading-6">
            تدريبات استروجيم <span className="text-[#EF8218]">للاناث</span>
          </h2>
          <p>4 حلقات شهريا</p>
          <p className="w-[248px]">
            هو برنامج مخصص للأنثى، ترى من خلاله فطرتها المتزنة وتتعرف على
            أدوارها وأحوالها التي تُناسبها من الناحية الجسدية والعاطفية، والتي
            يكون التخلي عنها هو السبب الرئيسي، في كل المشاكل التي تتعرض لها
            الأنثى بما فيها الأمراض، فالسكري على سبيل المثال هو تجسيد لمشاعر رفض
            الأنثى لذاتها وعدم تقديرها لدورها كأنثى، ومن خلال برنامج استروجيم
            ستتمكن الأنثى من استعادة الحالة الشعورية المتزنة التي تسهل عليها
            عملية التشافي.
          </p>
        </div>
        <div className="flex flex-col gap-4 pt-12 pb-12 mb-4 justify-start items-center w-80 min-h-[598px] text-center bg-[#413617]  rounded-[20px]">
          <Image src={kyam} alt="kyam logo" />
          <h2 className=" text-center [font-family:Tajawal] text-xl font-black leading-6">
            برنامج القيم
          </h2>
          <p>4 حلقات شهريا</p>
          <p className="w-[248px]">
            وهو برنامج أساسي لكل إنسان، يتعرف من خلاله على المشاعر الأساسية
            الأربعة وهي الطمأنينة، القيمة، القدرة والحرية،  والتي لا يُمكنه
            العيش براحة وسعادة وصحة دونها، ويُدرك أن الاضطراب فيها هو السبب في
            كل المشاكل التي يعاني منها في حياته بما فيها الأمراض والعوارض
            الجسدية. مع برنامج القيم ستبدأ حياة جديدة، برؤية أوسع وأشمل وطريق
            أوضح{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gifts;
