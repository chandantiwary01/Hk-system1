import React from "react";

import HeroSection from "../components/Gallery/HeroSection";
import GalleryCarousel from "../components/Gallery/Carousel";
import MarqueeSection from "../components/Gallery/TextMarquee";
import Tab from "../components/Gallery/Tab";
import Feature from "../components/Gallery/Feature";


const GalleryPage = () => {

 

  return (
    <div className="bg-black w-full text-white font-['Inter',_sans-serif] overflow-x-hidden">
      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee { 
          animation: marquee 20s linear infinite; 
        }
      `}</style>

      {/* Top Border */}
      <div className="border-b border-white w-full"></div>

      {/* Hero Section (without hero.png) */}
      <HeroSection  />

      {/* Bottom Border */}
      <div className="border-b border-white w-full"></div>
       <Feature />

        <Tab />

      {/* Main Gallery Carousel */}
      <GalleryCarousel  />

      {/* Bottom Marquee */}
      <MarqueeSection />
    </div>
  );
};

export default GalleryPage;