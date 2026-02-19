
import HeroSection from "@/components/Herosection";
import MainboardIpoTable from "@/components/MainboardIPO";
import Navbar from "@/components/Navbar";
import SMEIpoTable from "@/components/SMEIPO";
import IpoTableWithToggle from "@/components/ToggleIPO";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar> 
      <HeroSection></HeroSection>    
      
      <MainboardIpoTable />
      <SMEIpoTable />
      <IpoTableWithToggle />
    </div>
  );
}
