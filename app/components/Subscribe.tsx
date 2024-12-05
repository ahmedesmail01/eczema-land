import React from "react";

const Subscribe = () => {
  return (
    <div
      id="subscribe"
      className="text-center px-4 flex flex-col w-full justify-center items-center pb-[60px] lg:pb-[96px] "
    >
      <h1 className="self-stretch md:mb-6  text-center  [font-family:--font-monadi] text-[#f6be85] text-2xl lg:text-3xl font-bold lg:leading-[66px]">
        اشترك الأن
      </h1>
      <p className="flex my-4 lg:w-[878px] md:mb-[48px] h-[67px] flex-col justify-center items-center text-[#fff] text-center font-[PNU] text-base lg:text-lg font-normal leading-[25px]">
        اشترك الآن في المجموعة العلاجية الخاصة بجلسات الصدفية و الاكزيما واحصل
        على مميزات إضافية:{" "}
      </p>

      <div className="lg:w-[694px] p-[24px] lg:p-[48px] flex flex-col gap-4 items-center border border-[#f6be85] rounded-3xl">
        <h2 className="self-stretch text-[#fff] text-center font-['Expo_Arabic'] text-2xl font-bold leading-6">
          مدة المجموعة العلاجية: 3 أشهر
        </h2>
        <p className="self-stretch text-[#fff] text-center font-['Expo_Arabic'] text-xl font-medium leading-6">
          سعر الاشتراك
        </p>
        <p className="text-[#bc662d] text-[50px] font-bold  text-center font-['Expo_Arabic']">
          1500$
        </p>
        <bdi className="self-stretch text-[#fff] text-center font-['Expo_Arabic'] text-xl font-semibold leading-6">
          12 لقاء مع دكتور أحمد الدملاوي
        </bdi>
        <button className="flex justify-center font-bold items-center text-white font-['Expo_Arabic'] lg:text-[32px] gap-1 self-stretch bg-[#bc662d] px-4 py-8 rounded-[20px]">
          أشترك الان
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
