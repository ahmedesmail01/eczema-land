import Image from "next/image";
import React from "react";
import girlImg from "@/public/images/girl.svg";
import arrow from "@/public/images/Frame 427322974.svg";

const Suffer = () => {
  const items = [
    "ستتعلم كيفية إدارة المشاعر المرتبطة بقصور أو نشاط الغدة الدرقية .",
    "ستدرك أن قيمتك لا تُستمد من الخارج بل من داخلك.",
    "ستبدأ رحلة التشافي تدريجيًا مع تراجع حدة المرض وعودة الغدة لنشاطها الطبيعي.",
  ];
  return (
    <div className="flex-col px-4   lg:flex-row md:flex  items-start lg:gap-6 justify-center lg:mb-[96px] mb-[60px] [font-family:'Expo_Arabic']">
      <Image
        src={girlImg}
        alt="image"
        width={612}
        height={986}
        className="w-[300px] mb-4 lg:w-[612px] lg:h-[840px] object-cover rounded-3xl"
      />
      <div
        dir="rtl"
        className="lg:w-[612px] w-[300px]  lg:h-[840px] bg-[#252113] lg:py-[48px] px-4 py-8 lg:px-[96px] text-white rounded-3xl"
      >
        <h1 className="self-stretch text-[#febd21] text-right mb-4   text-2xl  lg:text-[32px] font-bold leading-[160%]">
          اضطراب الغدة الدرقية:{" "}
        </h1>
        <p className="flex mb-4 flex-col justify-center flex-[1_0_0] self-stretch text-[#DADADA] text-right  text-base lg:text-lg font-medium leading-[160%]">
          الغدة الدرقية، هي غدة صغيرة في الرقبة، تفرز هرمونات تتحكم في معدل
          استقلاب الجسم metabolic rate ، تؤثر هرمونات الغدة الدرقية في العديد من
          وظائف الجسم الحيوية، مثل ضربات القلب، ومعدل حرق السعرات الحرارية،
          وترميم الجلد والنمو، وإنتاج الحرارة، والخصوبة، والهضم... <br />
          يُعتبر فرط نشاط الغدة الدرقية وقصور الغدة الدرقية من أكثر الاضطرابات
          شيوعًا والتي تنعكس على حياة الإنسان سلبًا من كل النواحي
        </p>

        <p className="mb-4 flex w-[453px] flex-col justify-center self-stretch text-white text-right  text-lg font-medium leading-[160%]">
          من خلال الجلسات:{" "}
        </p>
        <div className="flex flex-col gap-4 mb-4">
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
  );
};

export default Suffer;
