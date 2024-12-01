import DrAhmed from "./components/DrAhmed";
import Footer from "./components/Footer";
import Gain from "./components/Gain";
import Gifts from "./components/Gifts";
import Hero from "./components/Hero";
import SecTwo from "./components/SecTwo";
import Subscribe from "./components/Subscribe";
import Suffer from "./components/Suffer";
import Techs from "./components/Techs";
import Testmonials from "./components/Testmonials";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main className="container font-[pnu] flex flex-col  justify-center items-center bg-black text-white">
      <Hero />
      <SecTwo />
      <WhySec />
      <Suffer />
      <Techs />
      <DrAhmed />
      <Gain />
      <Gifts />
      <Testmonials />
      <Subscribe />
      <Footer />
    </main>
  );
}
