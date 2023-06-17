import Explore from "./components/explore/Explore";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import Subscribe from "./components/subscribe/Subscribe";
import Testiminials from "./components/testiminials/Testiminials";
import Travel from "./components/travel/Travel";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="
        bg-[#FF5722] blur-[270px] -z-50 absolute
          w-[40%] h-[200px] top-[-100%] left-[-25%]
        "
        />
      </div>
      <Nav />
      <Hero />
      <div className="relative">
        <div
          className="
        bg-[#FACD49] blur-[250px] -z-50 absolute
          w-[10%] h-[150px] top-[-100%] -right-[-0%]
        "
        />
      </div>
      <Services />
      <Explore />
      <Travel />
      <Features />
      <Testiminials />
      <Subscribe />
      <Footer />
    </>
  );
}
