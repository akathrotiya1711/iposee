
import HeroSection from "@/components/Herosection";
import MainboardIpoTable from "@/components/MainboardIPO";
import Navbar from "@/components/Navbar";
import SMEIpoTable from "@/components/SMEIPO";
import IpoTableWithToggle from "@/components/ToggleIPO";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      d
      <Navbar></Navbar> 
      <HeroSection></HeroSection>    
      
      <MainboardIpoTable />
      <SMEIpoTable />
      <IpoTableWithToggle />
        <Link
  href="/abc"
  className="block font-semibold text-gray-900 mb-2"
>
  click here
</Link>
    </div>
  );
}
