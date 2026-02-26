import React from "react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

import RightCorner from "../assets/right_corner.png";
import LeftCorner from "../assets/left_corner.png";
import hero from "../assets/BG_C.png";
import left_G from "../assets/left_G.png";
import center_G from "../assets/center_G.png";
import right_G from "../assets/right_G.png";

const GalleryPage = () => {
  
  const images = [left_G, center_G, right_G];
  const [currentIndex, setCurrentIndex] = useState(0);

  // This timer changes the gallery image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-black w-full text-white font-['Inter',_sans-serif] overflow-x-hidden">
      
      {/* Animation for the bottom marqueee scrolling text */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="border-b border-white w-full"></div>

      {/* 1. HERO SECTION */}
      <div className="max-w-[1427px] mx-auto relative h-[420px] md:h-[550px] lg:h-[650px] border-l border-r border-white overflow-hidden">
        <img
          src={hero}
          alt="Luxury Interior Hero"
          className="w-full h-full object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4 pt-40 md:pt-60 lg:pt-95">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
            Gallery
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
            Residences and penthouses for the <br className="hidden md:block" />
            discerning and curious
          </p>
        </div>
      </div>

      <div className="border-b border-white w-full"></div>

      {/* 2. BROWSE SECTION ===================================================================================================== */}
      <section className="bg-black text-white w-full select-none">
        <div className="h-12 md:h-16 lg:h-20 bg-black border-b border-white"></div>

        
        <div className="w-full border-b border-white bg-black">
          <div className="max-w-[1427px] mx-auto border-l border-r border-white relative py-6 md:py-8 flex items-center justify-center bg-[#4D4D4D]">
            <img
              src={RightCorner}
              alt=""
              className="absolute top-0 left-0 w-10 md:w-16 lg:w-24 h-auto opacity-60"
            />
            <img
              src={LeftCorner}
              alt=""
              className="absolute top-0 right-0 w-10 md:w-16 lg:w-24 h-auto opacity-60"
            />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-center px-4">
              Browse our gallery
            </h2>
          </div>
        </div>

        {/* DESCRIPTION TEXT=================================================================================================== */}
        <div className="w-full border-b border-white bg-black">
          <div className="max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D]">
            <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>
            <div className="flex-1 py-10 md:py-16 px-6 md:px-12 lg:px-20 text-center">
              <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 text-gray-200 leading-relaxed text-sm md:text-lg">
                <p>
                  Discover a pet-friendly community designed for those who
                  appreciate life's finer things. From a state-of-the-art
                  fitness center and cybercafé to a resort-style pool and
                  soothing Jacuzzi, every detail elevates your lifestyle. Stay
                  active on pickleball and basketball courts, unwind by cozy
                  fire pits, or pamper your furry friends at the dog run and pet
                  wash station.
                </p>
                <p>
                  Tour our brand-new apartments today and explore an amenity
                  package that redefines modern living. Discover a pet-friendly
                  community designed for those who appreciate life's finer
                  things.
                </p>
              </div>
            </div>
            <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
          </div>
        </div>

        {/* ACTION BUTTONS======================================================================================================== */}
        <div className="w-full border-b border-white bg-black">
          <div className="max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D]">
            <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center py-8 md:py-6 gap-6 md:gap-20 lg:gap-50 px-4 md:px-6">
              <button className="flex items-center justify-center gap-2 px-8 md:px-12 py-3 md:py-4 border border-white rounded-full uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all w-full md:w-auto">
                Apartment Gallery <ArrowRight size={16} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 md:px-12 py-3 md:py-4 border border-white rounded-full uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all w-full md:w-auto">
                Community Gallery <ArrowRight size={16} />
              </button>
            </div>
            <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
          </div>
        </div>
      </section>

      {/* FILTER TABS============================================================================================================ */}
      <div className="w-full max-w-[1427px] mx-auto bg-black border-b border-white">
        <div className="h-12 md:h-20 bg-black border-b border-white"></div>
        <div className="w-full border-l border-r bg-[#4D4D4D] py-4 md:py-6 px-3 md:px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Corner Unit",
              "Courtyard View",
              "Large Balcony",
              "Pool View",
              "Washer & Dryer",
              "Tile Backsplash",
            ].map((tab) => (
              <button
                key={tab}
                className="px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs uppercase tracking-widest border border-transparent text-white hover:border-white hover:text-white rounded-[3px] transition-all duration-300 ease-in-out"
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-12 md:h-20 bg-black border-b border-white"></div>

      {/* 5. GALLERY GRID SECTION ==================================================================================================*/}
      <section className="w-full bg-black text-white font-sans">
        <div className="max-w-[1427px] mx-auto border-l border-r border-white bg-[#4D4D4D] relative overflow-hidden">
          
          <div className="relative py-6 md:py-8 border-b border-white flex items-center">
            <img
              src={RightCorner}
              alt=""
              className="absolute top-0 left-0 w-14 md:w-20 lg:w-24 h-auto opacity-40"
            />
            <img
              src={LeftCorner}
              alt=""
              className="absolute top-0 right-0 w-14 md:w-20 lg:w-24 h-auto opacity-40 "
            />
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold px-4 md:px-12 tracking-tight">
              Gallery <span className="font-light">Corner Unit</span>
            </h3>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex flex-col lg:flex-row items-stretch border-b border-white min-h-[400px] lg:min-h-[550px]">
              
              <div className="hidden lg:block w-[60px] border-r border-white shrink-0"></div>

              {/*  LEFT IMAGE */}
              <div className="flex-1 border-b lg:border-b-0 lg:border-r border-white flex items-end justify-center py-8 lg:pb-10 px-4">
                <div className="w-full max-w-[280px] md:max-w-[340px] aspect-[1/1] border-2 border-white shadow-xl overflow-hidden">
                  <img
                    src={images[currentIndex % images.length]} 
                    alt="Left Gallery"
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                </div>
              </div>

              <div className="hidden lg:block w-[60px] border-r border-white shrink-0"></div>

              {/*  CENTER IMAGE (WITH DOTS) */}
              <div className="flex-[1.4] border-b lg:border-b-0 lg:border-r border-white flex items-center justify-center p-4 md:p-6">
                <div className="w-full max-w-[420px] lg:max-w-[500px] aspect-[1.1/1] border-2 border-white shadow-2xl relative">
                  <img
                    src={images[(currentIndex + 1) % images.length]} 
                    alt="Center Gallery"
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                  {/* Indicators */}
                  <div className="absolute bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gray-900/60 rounded-full px-3 py-1.5 backdrop-blur-md">
                    {images.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`cursor-pointer rounded-full transition-all duration-300 ${
                          index === (currentIndex + 1) % images.length 
                            ? "w-2.5 h-2.5 bg-black border-2 border-white scale-110"
                            : "w-2 h-2 bg-white/50 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-[30px] border-r border-white px-8 shrink-0"></div>

              {/* SLOT 3: RIGHT IMAGE */}
              <div className="flex-1 border-t lg:border-t-0 border-white flex items-end justify-center py-8 lg:pb-10 px-4">
                <div className="w-full max-w-[280px] md:max-w-[340px] aspect-[1/1] border-2 border-white shadow-xl overflow-hidden">
                  <img
                    src={images[(currentIndex + 2) % images.length]}
                    alt="Right Gallery"
                    className="w-full h-full object-cover transition-opacity duration-700"
                  />
                </div>
              </div>
              
              <div className="hidden lg:block w-[5px] border-r border-white shrink-0"></div>
              <div className="hidden lg:block w-[60px] shrink-0"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-black border-b border-white"></div>
          <div className="max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D] overflow-hidden">
            <div className="flex-1 py-8 md:py-8 px-6 md:px-8 flex flex-wrap justify-between items-center gap-4"></div>
          </div>
          <div className="bg-black border-b border-white"></div>
        </div>
      </section>

      {/* 6. BOTTOM MARQUEE SECTION */}
      <div className="bg-black border-b mt-20 border-white"></div>
      <div className="max-w-[1427px] mx-auto border-l border-r border-white bg-[#4D4D4D] overflow-hidden">
        
        <div className="animate-marquee py-8 md:py-10">
          {/* Strip Loop Set 1 */}
          <div className="flex items-center gap-20 md:gap-40 px-10">
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Startups 🌟</h4>
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Couples 🌟</h4>
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Families 🌟</h4>
          </div>

          {/* Strip Loop Set 2  */}
          <div className="flex items-center gap-20 md:gap-30 px-10">
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Startups 🌟</h4>
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Couples 🌟</h4>
            <h4 className="text-lg md:text-2xl lg:text-3xl font-bold whitespace-nowrap">🌟 Built for Families 🌟</h4>
          </div>
        </div>

      </div>

      <div className="h-12 md:h-20 bg-black border-t border-white"></div>
    </div>
  );
};

export default GalleryPage;