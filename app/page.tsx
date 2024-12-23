import DrAhmed from "./components/DrAhmed";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Gifts from "./components/Gifts";
import Help from "./components/Help";
import Hero from "./components/Hero";
import Psoriasis from "./components/Psoriasis";
import SecTwo from "./components/SecTwo";
import Subscribe from "./components/Subscribe";
// import Suffer from "./components/Suffer";
import Techs from "./components/Techs";
import Testmonials from "./components/Testmonials";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main className="container [font-family:--font-cairo] flex flex-col max-w-[100vw] overflow-hidden  justify-center items-center bg-[#22271b] text-white">
      <Hero />
      <SecTwo />
      <WhySec />
      <Psoriasis />
      <Techs />
      <DrAhmed />
      <Gain />
      <Help />
      {/* <Suffer /> */}
      <Gifts />
      <Testmonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
