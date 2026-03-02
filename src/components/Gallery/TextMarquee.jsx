import React from "react";

const MarqueeSection = () => {
  const items = [
    "🌟 Built for Startups 🌟",
    "🌟 Built for Couples 🌟",
    "🌟 Built for Families 🌟",
  ];

  return (
   
    <div className="w-full px-4 sm:px-6 md:px-8 mt-[72px]">
      
     
      <div className="max-w-[1427px] mx-auto bg-black border-b border-white/20"></div>

      {/* Main Container */}
      <div className="max-w-[1427px] mx-auto border border-white bg-[#4D4D4D] relative overflow-hidden">
        
        
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-32 z-10 bg-gradient-to-r from-black/70 to-transparent"></div>

     
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-32 z-10 bg-gradient-to-l from-black/70 to-transparent"></div>

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee py-6 md:py-10">
          
          {[...items, ...items, ...items].map((text, index) => (
            <h4
              key={index}
              className="text-lg md:text-3xl font-bold uppercase text-white whitespace-nowrap mx-6 md:mx-16"
            >
              {text}
            </h4>
          ))}
        </div>
      </div>

      {/* Bottom Border/Section */}
      <div className="max-w-[1427px] mx-auto h-12 md:h-20 bg-black border-t border-white/20"></div>
    </div>
  );
};

export default MarqueeSection;