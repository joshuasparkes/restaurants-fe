import "/src/app/globals.css";
import { HomeSection1 } from "./components/home/HomeSection1";
import { HomeSection2 } from "./components/home/HomeSection2";
import { Footer } from "./components/home/Footer";
import { Header } from "./components/home/Header";
import { HomeSection3 } from "./components/home/HomeSection3";
import { HomeLanding } from "./components/home/HomeLanding";
import { HomeSection4 } from "./components/home/HomeSection4";

export default function Home() {
  return (
    <div className="flex flex-col text-center text-black font-montserrat bg-white">
      <Header />
      <HomeLanding />
      <HomeSection1 />
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <Footer />
    </div>
  );
}
