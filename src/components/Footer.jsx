import React from "react";
import { ArrowRight } from "lucide-react";

import WassLogo from "../assets/wass-logo.png";
import NoSmoking from "../assets/no-smoking.png";
import HouseIcon from "../assets/equal-housing.png";
import PawIcon from "../assets/pet.png";
import WheelchairIcon from "../assets/accessibility.png";
import FBIcon from "../assets/facebook-fb.gif";
import InstaIcon from "../assets/instagram1.gif";
import XIcon from "../assets/twitter.webp";
import LeftCorner from "../assets/left_corner.png";
import RightCorner from "../assets/right_corner.png";
import ManImage from "../assets/man.png";
import WomanImage from "../assets/woman.png";

function Footer() {
  const borderColor = "border-[#FFFFFF]";

  return (
    <>
      {/* Laser line animations CSS used for first time---*/}
      <style>{`
        @keyframes laser-h {
          0% { transform: translateX(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        @keyframes laser-v {
          0% { transform: translateY(-100%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .laser-h-line {
          position: absolute;
          top: -1px;
          left: 0;
          width: 30%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #fff, transparent);
          box-shadow: 0 0 8px #fff;
          animation: laser-h 5s linear infinite;
          z-index: 40;
          pointer-events: none;
        }
        .laser-v-line {
          position: absolute;
          left: -1px;
          top: 0;
          width: 1px;
          height: 30%;
          background: linear-gradient(180deg, transparent, #fff, transparent);
          box-shadow: 0 0 8px #fff;
          animation: laser-v 5s linear infinite;
          z-index: 40;
          pointer-events: none;
        }
        .delay-1 { animation-delay: 1.2s; }
        .delay-2 { animation-delay: 2.4s; }
        .delay-3 { animation-delay: 3.6s; }
      `}</style>

      <footer className="bg-black text-white font-['Inter',_sans-serif] w-full select-none overflow-x-hidden">
        

         {/* --------------------- ---------------MODERN FAMILY SECTION END ----------------------------------------------------------------*/}
        
        <section className="w-full bg-black relative text-white font-sans">
      
      {/* --- TOP HEADER SECTION --- */}
      <div className="w-full border-t border-b border-white bg-black relative overflow-hidden">
        {/* Horizontal Laser Line */}
        <div className="laser-h-line absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>

        <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white relative bg-[#4D4D4D] flex overflow-hidden">
          
          {/* Left Gutter */}
           <div className="laser-v-line absolute right-0 top-0 h-full w-[1px]"></div>

          {/* Main Title Area */}
          <div className="flex-1 py-6 sm:py-8 md:py-10 flex items-center justify-center relative px-4">
            {/* Corner */}
            <img
              src={ RightCorner}

              alt=""
              className="absolute top-0 left-0 w-8 sm:w-12 md:w-20 lg:w-24 h-auto opacity-60 pointer-events-none"
            />
            <img
              src={LeftCorner}
              alt=""
              className="absolute top-0 right-0 w-8 sm:w-12 md:w-20 lg:w-24 h-auto opacity-60 pointer-events-none"
            />

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center leading-tight uppercase">
              Built for The Modern Family Living
            </h2>
          </div>

          {/* Right Gutter  */}
           <div className="laser-v-line absolute right-0 top-0 h-full w-[1px]"></div>
        </div>
      </div>

      {/* --- MIDDLE CONTENT SECTION --- */}
<div className="w-full bg-black relative">
  <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white flex flex-col md:flex-row bg-[#4D4D4D] relative overflow-hidden">
    
    {/* Left Gutter (Hidden on mobile for better space) */}
    <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white shrink-0"></div>

    {/* Content Wrapper */}
    <div className="flex-1 flex flex-col md:flex-row w-[390px] relative min-h-[300px] md:min-h-[400px]">
      
      {/* Text Content Area */}
      <div className="w-[300px] md:w-1/2 px-6 sm:px-5 md:pl-6 py-5 sm:py-16 md:py-20 flex flex-col justify-center z-5">
        <h3 className="text-xl sm:text-2xl md:text-2xl font-bold mb-1 leading-tight">
          Residences and penthouses <br className="hidden sm:block" /> 
          for the discerning and curious
        </h3>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise 
          on the theory of ethics,
        </p>

        <button className="group flex items-center gap-3 border border-white px-6 py-2 rounded-full w-fit hover:bg-white hover:text-black transition-all duration-300">
          <span className="text-xs sm:text-sm font-medium">Contact us &rarr;</span>
        </button>
      </div>

      {/* --- IMAGE AREA (The Fix) --- */}
      {/* On Mobile: It takes fixed height. On Desktop: It takes full height of the parent container */}
      <div className="relative w-full md:w-1/2 h-[205px] sm:h-[450px] md:h-auto overflow-hidden md:static">
        
        {/* Container for Images that spans full height of the gray box */}
        <div className="absolute inset-0 md:left-1/2 md:right-0">
          
          {/* Woman (Background) - Positioned to the right */}
          <img
            src={WomanImage}
            alt="Woman"
            className="absolute bottom-0 -right-[12%] sm:right-[-2%] md:left-[30%] lg:left-[30%] 
    h-[260px] 
    sm:h-[320px] 
    md:h-[80%] 
    lg:h-[90%] 
    xl:h-full 
    w-auto object-contain object-bottom z-0"
          />

          {/* Man (Foreground) - Positioned to overlap her shoulder */}
          <img
            src={ManImage}
            alt="Man"
            className="absolute bottom-0 right-[1%] md:right-[35%] md:left-[10%] lg:right-[0%] h-full w-auto object-contain object-bottom z-10"
          />

        </div>
      </div>
    </div>

    {/* Right Gutter */}
    <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white shrink-0"></div>
  </div>
</div>

      {/* --- BOTTOM DECORATIVE SECTION --- */}
      <div className="w-full border-t border-white bg-black relative overflow-hidden">
        <div className="laser-h-line absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
        
        <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white h-12 sm:h-16 flex bg-[#4D4D4D] relative">
          <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>
          <div className="flex-1"></div>
          <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
        </div>
      </div>

</section>

   
{/* --------------------- ---------------MODERN FAMILY SECTION END ----------------------------------------------------------------*/}

    
        {/* --- SPACERS --- */}
        <div className="border-b border-white w-full relative overflow-hidden">
          <div className="laser-h-line delay-3"></div>
        </div>
        <div className="h-12 sm:h-16 md:h-20 bg-black border-b border-white relative overflow-hidden">
          <div className="laser-h-line"></div>
        </div>

        {/* --- SECTION TITLE --- */}
        <div className="w-full border-b border-white bg-black relative overflow-hidden">
          <div className="laser-h-line delay-1"></div>
          <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D] relative overflow-hidden">
            <div className="laser-v-line delay-2"></div>
            <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>
            <div className="flex-1 py-5 sm:py-10 md:py-7 text-center px-4 sm:px-6">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight">
                There are `Lorem Ipsum available, but the majority
              </h2>
            </div>
            <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
          </div>
        </div>

        {/* --- LINKS GRID --- */}
        <div className="w-full border-b border-white bg-black relative overflow-hidden">
          <div className="laser-h-line delay-3"></div>
          <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D] relative overflow-hidden">
            <div className="laser-v-line"></div>
            <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="p-6 sm:p-8 md:p-10 text-center sm:text-left"
                >
                  <h4 className="font-bold text-base md:text-lg mb-5 md:mb-6 uppercase px-12 tracking-wider">
                    About KDR
                  </h4>
                  <ul className="space-y-3 md:space-y-4 px-12">
                    {["Menu 1", "Menu 1", "Menu 1"].map((text, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium"
                      >
                        <span className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
          </div>

          {/* --- BOTTOM BAR WITH ICONS --- */}
          <div
            className={`w-full border-t border-b ${borderColor} bg-black relative overflow-hidden`}
          >
            <div className="laser-h-line delay-1"></div>
            <div
              className={`w-full max-w-[1427px] mx-auto border-l border-r ${borderColor} flex bg-[#4D4D4D] relative overflow-hidden`}
            >
              <div className="laser-v-line delay-2"></div>
              <div
                className={`hidden md:block w-[40px] lg:w-[120px] h-20 border-r ${borderColor}`}
              ></div>

              <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 sm:px-6 md:px-6 py-4 md:py-0 gap-5">
               <div className="flex flex-wrap justify-center md:justify-start items-center 
gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 opacity-60">
                  <img
                    src={NoSmoking}
                    alt=""
                    className="h-4 sm:h-5 grayscale invert"
                  />
                  <img
                    src={HouseIcon}
                    alt=""
                    className="h-4 sm:h-5 grayscale invert"
                  />
                  <img
                    src={PawIcon}
                    alt=""
                    className="h-4 sm:h-5 grayscale invert"
                  />
                  <img
                    src={WheelchairIcon}
                    alt=""
                    className="h-4 sm:h-5 grayscale invert"
                  />
                </div>

                <div className="flex items-center gap-2 space-x-3">
                  <img
                    src={FBIcon}
                    alt=""
                    className="h-6 w-6 md:h-7 md:w-7 cursor-pointer rounded-full hover:scale-105 transition-transform"
                  />
                  <div className="h-7 w-7 md:h-8 md:w-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      src={InstaIcon}
                      alt=""
                      className="h-4 w-4 md:h-5 md:w-5 cursor-pointer rounded-full hover:scale-105 transition-transform"
                    />
                  </div>
                  <img
                    src={XIcon}
                    alt=""
                    className="h-7 w-7 md:h-8 md:w-8  rounded-full cursor-pointer  hover:scale-105 transition-transform"
                  />
                </div>

                <a
                  href="https://webappssoft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WassLogo}
                    alt="WASS"
                    className="h-7 sm:h-8 md:h-10 cursor-pointer hover:scale-105 transition-transform brightness-0 invert opacity-90"
                  />
                </a>
              </div>

              <div
                className={`hidden md:block w-[40px] lg:w-[120px] h-20 border-l ${borderColor}`}
              ></div>
            </div>
          </div>

          {/* --- COPYRIGHT --- */}
          <div className="w-full bg-black relative overflow-hidden">
            <div
              className={`w-full max-w-[1427px] mx-auto border-l border-r ${borderColor} flex bg-[#4D4D4D] relative overflow-hidden`}
            >
              <div className="laser-v-line delay-3"></div>
              <div
                className={`hidden md:block w-[40px] lg:w-[120px] h-14 border-r ${borderColor}`}
              ></div>
              <div className="flex-1 flex items-center justify-center px-4 py-3">
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-gray-300 text-center">
                  © Copyright 2026 KDR Group. All Rights Reserved.
                </p>
              </div>
              <div
                className={`hidden md:block w-[40px] lg:w-[120px] h-14 border-l ${borderColor}`}
              ></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
