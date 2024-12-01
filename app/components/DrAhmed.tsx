import Image from "next/image";
import React from "react";
import drAhmed from "@/public/images/drAhmed.svg";

const DrAhmed = () => {
  return (
    <div className="w-full bg-[#121311] md:px-[96px] mb-[60px] md:mb-[96px]">
      <h1 className="md:mb-[48px] mb-10  self-stretch text-[#ffffff] text-center [font-family:PNU] text-3xl lg:text-[40px] font-bold leading-[160%]">
        هذا البرنامج يقدمه
      </h1>
      <div className="lg:flex justify-between mx-4  gap-6">
        <Image
          src={drAhmed}
          alt="dr ahmed"
          className="md:w-[606px] md:h-[750px] mb-10 "
        />
        <div>
          <h2 className="h-[67px] self-stretch md:mb-[40px] text-[#ffffff] text-right [font-family:PNU] text-3xl lg:text-5xl font-bold leading-[140%]">
            د.أحمد الدملاوي
          </h2>

          <div dir="rtl" className="flex flex-col gap-4 md:w-[606px]">
            <bdi className="self-stretch text-[#ffffff] text-justify  [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
              طبيب متمرس تخرج من كلية الطب جامعة عين شمس عام 1982 وُيعد د.أحمد
              استشاریا مشهوراً في مجال التحول والتطوير والاستشفاء الذاتي حيث كرس
              في حياته أكثر من ٢٥ عاماعاماً في التدريب على اتزان الشعورالإنساني
              وتصنيفه وتنظيمه.
            </bdi>

            <bdi className="self-stretch text-[#ffffff] text-justify [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
              يعد د/أحمد الطبيب الوحيد في العالم العربي الذي يعتمد في تشخيص
              وعلاج عملائة على منظور علاجي وتدريبي ينبع من تشخيص النفس بالألوان
              وتشخيص المرض بالسبب النفسي له , منذ عام 2012 حتى الآن. أستاذ مدرب
              علم الميتاھيلث ونائب رئيس الجمعية العالمية للميتا ماديسون
              بالولايات المتحدة الأمريكية IMMA. &quot; ( سابقاً) .
            </bdi>

            <bdi className="self-stretch text-[#ffffff] text-justify [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
              علم الميتاھيلث ھو منظور جديد للطب ينبع من منظور الشفاء وليس المرض
              حاصل على درجة ماجستير في إدارة الأعمال من ESLSCA
            </bdi>

            <bdi className="self-stretch text-[#ffffff] text-justify [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
              حاصل على شهادة تدريب الممارسين من المعهد الدولى للألوان بجريس
              بألمانيا ومؤسسة لوشر للتشخيص بالألوان بسويسرا
            </bdi>

            <bdi className="self-stretch text-[#ffffff] text-justify [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
              قام بدراسات عليا في الهندسة الطبية من جامعة واشنطن بالولايات
              المتحدة الأمريكية عام 1990
            </bdi>

            <bdi className="self-stretch text-[#ffffff] text-justify [font-family:PNU] text-base  lg:text-xl font-medium leading-[140%]">
               Landmark Education® 1992-1993 في مؤسسة ontology درس علم النفس
              بالولايات المتحدة الأمريكية و2006-2007 بالمملكة المتحدة. أعد ونشر
              العديد من الأبحاث في مجال الأشعة التشخيصية بجامعة واشنطن بسياتل
            </bdi>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAhmed;
