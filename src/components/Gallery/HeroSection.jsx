import { useState, useEffect } from "react";
import hero from "../../assets/BG_C.png";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.png";
import hero4 from "../../assets/hero4.png";

const GalleryBanner = () => {
  const heroImages = [hero, hero2, hero3, hero4];
  const [currentHero, setCurrentHero] = useState(0);

  // Change hero image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

 return (
  <section className="w-full bg-black border-y border-white">
    
    
    <div className="px-4 sm:px-6 md:px-0">
      
      {/* Main bordered container */}
      <div className="max-w-[1440px] mx-auto border-x border-white">
        
        <div className="relative h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          
          {/* Image Slider */}
          <div className="absolute inset-0">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Hero"
                className={`absolute inset-0 w-full h-full object-cover brightness-[0.7] transition-opacity duration-1000 ${
                  index === currentHero ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-end text-center h-full 
                          pb-12 sm:pb-16 md:pb-20 
                          px-4 sm:px-6">
            <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight max-w-4xl">
              Gallery
            </h1>

            <p className="text-white mt-3 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl">
              Residences and penthouses for the
              <br className="hidden sm:block" />
              discerning and curious
            </p>
          </div>

        </div>
      </div>

    </div>
  </section>
);
};

export default GalleryBanner;