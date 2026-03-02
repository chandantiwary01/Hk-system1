import React from 'react';
import { ChevronRight } from 'lucide-react';
import RightCorner from "../assets/right_corner.png";
import LeftCorner from "../assets/left_corner.png";
import hero from "../assets/BG_C.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import agent from "../assets/agent.jpg";

const ContactUs = () => {
  const heroImages = [hero, hero2, hero3, hero4];
  const [currentHero, setCurrentHero] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-black w-full text-white font-['Inter',_sans-serif] overflow-x-hidden px-4 md:px-0">
      
      {/* =====================  TOP BORDER (FULL WIDTH ON DESKTOP) ================= */}
      <div className="border-b border-white w-full"></div>

      {/* ======================= HERO SECTION ==================== */}
      <section className="max-w-[1440px] mx-auto relative h-[550px] sm:h-[650px] border-l border-r border-white overflow-hidden">
        
        {/* TOP INNER BORDER - Absolutely positioned to stay at the very top of the image */}
        <div className="absolute top-0 left-0 w-full border-t border-white z-30"></div>

        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Hero"
              className={`absolute inset-0 w-full h-full object-cover brightness-[0.6] transition-opacity duration-1000 ${
                index === currentHero ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Overlay - Darkened to match Screenshot */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero Text - Centered like "Gallery" in SS */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
            We have Excited To Meet You
          </h1>
          <p className="text-sm md:text-xl max-w-[280px] md:max-w-2xl opacity-90 leading-relaxed font-medium">
            Residences and penthouses for the <br className="hidden md:block" />
            discerning and curious
          </p>
        </div>

        {/* BOTTOM INNER BORDER - Absolutely positioned to stay at the very bottom of the image frame */}
        <div className="absolute bottom-0 left-0 w-full border-b border-white z-30"></div>
      </section>

      {/* =================== SECTION TITLE ======================= */}
      <section className="w-full border-t border-b border-white mt-8 md:mt-18 bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 border-l border-r border-white relative py-10 flex items-center justify-center bg-[#4D4D4D]">
          <img src={RightCorner} alt="" className="absolute top-0 left-0 w-16 md:w-23 opacity-60" />
          <img src={LeftCorner} alt="" className="absolute top-0 right-0 w-16 md:w-23 opacity-60" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">Contact us</h2>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================== */}
      <section className="w-full bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 min-h-[350px] border-l border-r border-white flex bg-[#4D4D4D]">
          <div className="w-[60px] lg:w-[100px] border-r border-white hidden md:block"></div>
          <div className="flex-1 flex flex-col lg:flex-row gap-8 md:gap-12 p-6 sm:p-8 md:p-12">
            
            <div className="lg:w-2/5">
              <div className="border-[2px] border-white shadow-xl overflow-hidden h-full min-h-[300px] md:min-h-[400px]">
                <iframe
                  title="Location Map"
                  src="https://maps.google.com/maps?q=mumbai&z=11&output=embed"
                  className="w-full h-full border-0 opacity-80"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:w-1/2 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First name" placeholder="First name" />
                <Input label="Last name" placeholder="Last name" />
              </div>
              <Input label="Email" type="email" placeholder="you@company.com" />
              <div>
                <Label text="Phone number" />
                <div className="flex">
                  <select className="bg-white/5 border border-white/20 rounded-l-md p-3 text-sm">
                    <option className="bg-black">US</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/20 rounded-r-md p-3 focus:border-white outline-none"
                  />
                </div>
              </div>
              <div>
                <Label text="Message" />
                <textarea
                  rows="5"
                  placeholder="Leave us a message..."
                  className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none"
                ></textarea>
              </div>
              <button className="w-full bg-white hover:bg-black hover:text-white text-black py-4 rounded-md border border-white/70 uppercase text-xs font-bold transition-all duration-300 shadow-md">
                Send message
              </button>
            </div>
          </div>
          <div className="w-[60px] lg:w-[100px] border-l border-white hidden md:block"></div>
        </div>
      </section>

      {/* ================= CONTACT CARDS SECTION ================= */}
      <section className="w-full border-t border-white bg-black">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 border-l border-r border-white flex bg-[#4D4D4D]">
          <div className="w-[100px] border-r border-white hidden md:block"></div>
          <div className="flex-1 px-4 sm:px-6 md:px-12 flex flex-wrap justify-center md:justify-between gap-6 py-10">
            <ContactCard title="Address" subtitle="Visit our Place" />
            <ContactCard title="Office Hours" subtitle="Monday - Friday" />
            <AgentCard />
          </div>
          <div className="w-[100px] border-l border-white hidden md:block"></div>
        </div>
        <div className="border-b border-white w-full"></div>
      </section>

      <div className="h-20 bg-black border-b border-white"></div>
    </div>
  );
};

/* ================= REUSABLE SMALL COMPONENTS ================= */

const Label = ({ text }) => (
  <label className="text-[10px] text-gray-300 uppercase tracking-widest block mb-1.5 font-bold">
    {text}
  </label>
);

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <Label text={label} />
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none"
    />
  </div>
);

const ContactCard = ({ title, subtitle }) => (
  <div className="bg-white text-black w-full max-w-[265px] p-4 rounded-[10px] flex justify-between items-center hover:shadow-2xl transition-all">
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </div>
    <ChevronRight className="text-gray-300 shrink-0" />
  </div>
);

const AgentCard = () => (
  <div className="bg-white text-black w-full max-w-[265px] p-3 rounded-[10px] flex justify-between items-center hover:shadow-2xl transition-all">
    <img src={agent} alt="" className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-sm shrink-0" />
    <div className="px-2">
      <h3 className="font-bold text-sm leading-tight">Brooklyn Simmons</h3>
      <p className="text-[10px] text-gray-400 uppercase">Software Engineer II</p>
    </div>
    <ChevronRight className="text-gray-300 shrink-0" />
  </div>
);

export default ContactUs;