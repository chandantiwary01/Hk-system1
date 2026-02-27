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
        
        {/* --- HERO SECTION --- */}
        <section className="w-full bg-black relative">
          <div className="w-full border-t border-b border-white bg-black relative overflow-hidden">
            <div className="laser-h-line"></div>

            <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white relative py-5 sm:py-6 md:py-7 flex items-center justify-center bg-[#4D4D4D] overflow-hidden px-3 sm:px-4">
              <div className="laser-v-line"></div>
              <div className="laser-v-line right-0 delay-1"></div>

              <img src={RightCorner} alt="" className="absolute top-0 left-0 w-8 sm:w-12 md:w-20 lg:w-24 h-auto opacity-60 pointer-events-none" />
              <img src={LeftCorner} alt="" className="absolute top-0 right-0 w-8 sm:w-12 md:w-20 lg:w-24 h-auto opacity-60 pointer-events-none" />

              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-center leading-tight">
                Built for the modern Family to Leaving
              </h2>
            </div>
          </div>

          <div className="w-full bg-black relative">
            <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white flex overflow-hidden bg-[#4D4D4D] relative">
              <div className="laser-v-line delay-2"></div>

              {/* Side gutter for desktop */}
              <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white relative overflow-hidden">
                <div className="laser-v-line right-0 delay-3"></div>
              </div>

              <div className="flex-1 flex flex-col md:flex-row w-full">
                {/* Text Content */}
                <div className="w-full md:w-1/2 px-5 sm:px-8 md:pl-12 py-10 sm:py-12 md:py-16 flex flex-col justify-center text-center md:text-left">
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 leading-tight">
                    Residences and penthouses for the <br /> discerning and curious
                  </h3>

                  <p className="text-gray-200 text-xs sm:text-sm leading-relaxed mb-8 md:mb-10 max-w-xl mx-auto md:mx-0">
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC.
                    <br /><br />
                    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                    Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                    Cicero, written in 45 BC.
                  </p>

                  <button className="group mx-auto md:mx-0 flex items-center gap-3 border border-white px-5 sm:px-6 py-2 rounded-full w-fit hover:bg-white hover:text-black transition-all">
                    <span className="text-sm font-medium">Contact us</span>
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* Person Images */}
                <div className="w-full md:w-1/2 relative mt-6 md:mt-0 min-h-[260px] sm:min-h-[320px] md:min-h-[420px] lg:min-h-[480px] overflow-hidden flex items-end justify-center">
                  <img
                    src={WomanImage}
                    alt="Woman"
                    className="absolute bottom-0 left-1/2 -translate-x-[65%] sm:-translate-x-[70%] md:-translate-x-[80%] lg:-translate-x-[35%] h-[65%] sm:h-[75%] md:h-[85%] lg:h-full w-auto object-contain object-bottom z-10 max-w-none"
                  />
                  <img
                    src={ManImage}
                    alt="Man"
                    className="absolute bottom-0 left-1/2 -translate-x-[30%] sm:-translate-x-[25%] md:-translate-x-[20%] lg:-translate-x-[58%] h-[70%] sm:h-[85%] md:h-[95%] lg:h-full w-auto object-contain object-bottom z-20 max-w-none"
                  />
                </div>
              </div>

              {/* Right side gutter */}
              <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white relative overflow-hidden">
                <div className="laser-v-line delay-1"></div>
              </div>
            </div>
          </div>

          <div className="w-full border-t border-white bg-black relative overflow-hidden">
            <div className="laser-h-line delay-2"></div>
            <div className="w-full max-w-[1427px] mx-auto border-l border-r border-white h-10 sm:h-12 flex bg-[#4D4D4D] relative overflow-hidden">
              <div className="hidden md:block w-[40px] lg:w-[120px] border-r border-white"></div>
              <div className="flex-1"></div>
              <div className="hidden md:block w-[40px] lg:w-[120px] border-l border-white"></div>
            </div>
          </div>
        </section>

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
                <div key={item} className="p-6 sm:p-8 md:p-10 text-center sm:text-left">
                  <h4 className="font-bold text-base md:text-lg mb-5 md:mb-6 uppercase px-12 tracking-wider">
                    About KDR
                  </h4>
                  <ul className="space-y-3 md:space-y-4 px-12">
                    {["Menu 1", "Menu 1", "Menu 1"].map((text, index) => (
                      <li key={index} className="flex items-center justify-center sm:justify-start text-xs sm:text-sm font-medium">
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
          <div className={`w-full border-t border-b ${borderColor} bg-black relative overflow-hidden`}>
            <div className="laser-h-line delay-1"></div>
            <div className={`w-full max-w-[1427px] mx-auto border-l border-r ${borderColor} flex bg-[#4D4D4D] relative overflow-hidden`}>
              <div className="laser-v-line delay-2"></div>
              <div className={`hidden md:block w-[40px] lg:w-[120px] h-20 border-r ${borderColor}`}></div>

              <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-between items-center px-4 sm:px-6 md:px-6 py-4 md:py-0 gap-5">
                <div className="flex flex-wrap justify-center md:justify-start items-center md:space-x-6 opacity-60">
                  <img src={NoSmoking} alt="" className="h-4 sm:h-5 grayscale invert" />
                  <img src={HouseIcon} alt="" className="h-4 sm:h-5 grayscale invert" />
                  <img src={PawIcon} alt="" className="h-4 sm:h-5 grayscale invert" />
                  <img src={WheelchairIcon} alt="" className="h-4 sm:h-5 grayscale invert" />
                </div>

                <div className="flex items-center gap-2 space-x-3">
                  <img src={FBIcon} alt="" className="h-6 w-6 md:h-7 md:w-7 cursor-pointer rounded-full hover:scale-105 transition-transform" />
                  <div className="h-7 w-7 md:h-8 md:w-8 bg-white rounded-full flex items-center justify-center">
                    <img src={InstaIcon} alt="" className="h-4 w-4 md:h-5 md:w-5 cursor-pointer rounded-full hover:scale-105 transition-transform"/>
                  </div>
                  <img src={XIcon} alt="" className="h-7 w-7 md:h-8 md:w-8  rounded-full cursor-pointer  hover:scale-105 transition-transform" />
                </div>

                <a href="https://webappssoft.com/" target="_blank" rel="noopener noreferrer">
                  <img src={WassLogo} alt="WASS" className="h-7 sm:h-8 md:h-10 cursor-pointer hover:scale-105 transition-transform brightness-0 invert opacity-90" />
                </a>
              </div>

              <div className={`hidden md:block w-[40px] lg:w-[120px] h-20 border-l ${borderColor}`}></div>
            </div>
          </div>

          {/* --- COPYRIGHT --- */}
          <div className="w-full bg-black relative overflow-hidden">
            <div className={`w-full max-w-[1427px] mx-auto border-l border-r ${borderColor} flex bg-[#4D4D4D] relative overflow-hidden`}>
              <div className="laser-v-line delay-3"></div>
              <div className={`hidden md:block w-[40px] lg:w-[120px] h-14 border-r ${borderColor}`}></div>
              <div className="flex-1 flex items-center justify-center px-4 py-3">
                <p className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] text-gray-300 text-center">
                  © Copyright 2026 KDR Group. All Rights Reserved.
                </p>
              </div>
              <div className={`hidden md:block w-[40px] lg:w-[120px] h-14 border-l ${borderColor}`}></div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;