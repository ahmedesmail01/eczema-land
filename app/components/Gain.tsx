import Image from "next/image";
import React from "react";
import skull from "@/public/images/skull.svg";
import arrow from "@/public/images/Frame 427322974.svg";

const Gain = () => {
  const items = [
    " فهم عميق للاضطرابات الشعورية المؤثرة على حالتك الصحية.",
    " تعلم تقنيات إدارة الحالة بطريقة فعّالة ودائمة.",
    " إرشادات مخصصة لتحسين جودة حياتك اليومية.",
    "  دعم جماعي يعزز رحلة الشفاء الخاصة بك.",
    "جلسه أسبوعية مدتها ساعه ونصف يقدمها دكتور احمد الدملاوي و يناقش فيها الحاضرين حول تفاصيل مشاعرهم و معتقداتهم التى تؤدى إلى اضطراب الغدة الدرقية ",
    "منصة لكل عملاء مجموعات الغدة الدرقية السابقين واللاحقين يتناقشون فيها حول موضوعاتهم المشتركه",
    "يدير المنصة مجموعة من مرشدين الشفاء الذاتى المتدربات على مشاعر الغدة الدرقية ",
    "المنصه 24 ساعه 7 ايام فى الاسبوع مادة علمية متجددة و متطوره",
    "برامج تدريبية يقدمها مرشدون الشفاء طول الاسبوع",
    "يستفيد المشاركون بخبرات وتجارب الاخرين من خلال متابعة الاخر يرى كل مشارك بعد فى نفسه هو .. هى . لم يكن يراه من قبل",
    "سريه تامه فيما يدور فى البرنامج من جميع الأطراف",
  ];

  return (
    <>
      <h1 className="self-stretch text-[#ffffff] text-center [font-family:PNU] mb-4 text-3xl lg:text-[40px] font-bold leading-[160%]">
        ماذا تستفيد عندما تلتحق بالمجموعة العلاجية الخاصة بالغدة الدرقية؟
      </h1>
      <div className="flex-col px-4   lg:flex-row-reverse md:flex  items-start lg:gap-6 justify-center lg:mb-[96px] mb-[60px] [font-family:'Expo_Arabic']">
        <Image
          src={skull}
          alt="image"
          width={612}
          height={986}
          className="w-[330px] mb-4 lg:w-[612px] lg:h-[1168px] object-cover rounded-3xl"
        />
        <div
          dir="rtl"
          className="lg:w-[612px] w-[330px]  lg:h-auto bg-[#212116] lg:py-[48px] px-4 py-8 lg:px-[96px] text-white rounded-3xl"
        >
          <h1 className="self-stretch text-white text-right mb-4   text-2xl  lg:text-[32px] font-bold leading-[160%]">
            من خلال الجلسات:{" "}
          </h1>

          <div className="flex flex-col gap-4 ">
            {items.map((item, index) => {
              return (
                <div key={index} className="flex gap-4 items-center">
                  <Image
                    src={arrow}
                    alt="icon"
                    className="w-[40px] lg:w-[60px]"
                  />{" "}
                  <p className="flex flex-col justify-center flex-[1_0_0] self-stretch text-white text-right text-base lg:text-lg font-medium leading-[160%]">
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
          <a
            href="#subscribe"
            className="flex mt-8 text-white font-bold text-sm md:text-xl w-[130px] md:w-[195px] h-[50px] md:h-[60px] justify-center items-center gap-2 bg-gradient-to-r from-[#f8cb0a] to-[#493c04] shadow-md px-4 py-2 rounded-2xl"
          >
            اشترك الآن
          </a>
        </div>
      </div>
    </>
  );
};

export default Gain;
