import cardTriangles from "@/public/images/card-triangles.svg";
import logo from "@/public/images/logo.svg";
import Image from "next/image";
const Techs = () => {
  const items = [
    {
      title: "فهم جذر المرض",
      desc: " كل نسيج جسدي مرتبط بشعور محدد المرض هو صوره الاضطراب الشعورى المقابل للنسيج",
    },
    {
      title: "تلقي رسالة المرض",
      desc: " المرض رسالة من مشاعرك المضطربة، وبمجرد فهمها تبدأ عملية الشفاء الذاتى",
    },
    {
      title: "التدريب على الاتزان الشعوري",
      desc: " تدريبات مكثفة  على على اختيار المشاعر المتزنة، مما يوثر ايجابا عى صحتك و حالتك الشعوريه",
    },
  ];

  return (
    <div
      dir="rtl"
      className="flex  flex-col text-white justify-center mx-4 mb-[60px] md:mb-[96px] "
    >
      <h1 className="flex-[1_0_0] mb-[30px] lg:mb-[68px] text-[#F6BE85] text-center [font-family:--font-monadi] text-xl lg:text-4xl font-normal leading-[normal]">
        التقنيات المستخدمة في الجلسات
      </h1>

      <div className="flex-col lg:flex lg:flex-row justify-center items-start gap-4 ">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-transparent mb-[68px] w-[280px] lg:w-[355px] h-[424px] flex flex-col gap-4  border border-yellow-700 rounded-lg overflow-hidden"
          >
            <Image src={cardTriangles} alt="shape" className="w-full " />
            <div className="flex px-2 items-center gap-2 justify-between mb-4">
              <h1 className="[font-family:--font-monadi] text-lg font-bold ">
                {item.title}
              </h1>
              <Image src={logo} alt="logo" className="w-[80px] lg:w-[119px]" />
            </div>
            <p className="p-4 font-semibold w-full">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techs;

/* 


<div
            key={index}
            className="bg-transparent w-[348px] flex flex-col gap-4  border border-yellow-700 rounded-lg overflow-hidden"
          >
            <Image src={cardTriangles} alt="shape" className="w-full " />
            <div className="flex  items-center gap-2 justify-between mb-4">
              <h1 className="[font-family:--font-monadi] text-lg font-bold ">
                {item.title}
              </h1>
              <Image src={logo} alt="logo" className="w-[119px]" />
            </div>
            <p className="p-4 font-semibold w-full">{item.desc}</p>
          </div>

*/
