import { useEffect, useState } from "react";
import ArrowUpImg from "../assets/arrow-up.png";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed 
        right-4 sm:right-6 md:right-10 
        bottom-6 sm:bottom-8 md:bottom-12 pb-safe
        z-[999]
        w-[35px] h-[35px] sm:w-[35px] sm:h-[35px] md:w-[45px] md:h-[45px]
        border border-white/30 
        bg-black/90 backdrop-blur-md
        rounded-full 
        flex items-center justify-center

         hover:bg-white/10 
        active:bg-white/20 
        hover:scale-110 
        active:scale-95

        transition-all duration-300 ease-in-out
        shadow-lg
      "
    >
      <img
        src={ArrowUpImg}
        alt="Scroll to top"
        className="w-[18px] sm:w-[20px] md:w-[24px] h-auto object-contain invert"
      />
    </button>
  );
};

export default ScrollToTopButton;