import Navbar from "./Header/navbar";
import { HeroSection } from "./Herosection/hero";

export default function Home() {
  return (
  <div  className="bg-cover bg-center h-dvh bg-[url('./Assests/bg-img.jpg')]  bg-black bg-opacity-60">
    <Navbar/>
    <HeroSection/>
  </div>
  );
}
