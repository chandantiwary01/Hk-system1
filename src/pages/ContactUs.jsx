import React from 'react';

// Icons and Images
import {  ChevronRight } from 'lucide-react';
import RightCorner from "../assets/right_corner.png"; 
import LeftCorner from "../assets/left_corner.png";
import hero from "../assets/BG_C.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import hero4 from "../assets/hero4.png";
import agent from "../assets/agent.jpg";
import phoneIcon from "../assets/call_icon.png"; 

const ContactUs = () => {

  const heroImages = [hero, hero2, hero3, hero4];
  const [currentHero, setCurrentHero] = React.useState(0);

 // This timer changes the gallery hero image every 4 seconds
React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroImages.length);
  }, 4000);

  return () => clearInterval(interval);
}, []);


  return (
    <div className="bg-black w-full text-white font-['Inter',_sans-serif]">
      {/* Top Border */}
      <div className="border-b border-white w-full"></div>  

      {/* HERO SECTION ================================================================================================================== */}
      <div className="max-w-[1427px] mx-auto relative h-[650px] border-l border-r border-white overflow-hidden">
       
        <div className="border-b border-white w-full"></div>  

        {/*  Bg Image ANIMATION-------------------------------------------------------------------------------- */}
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

        {/* Dark overlay to make text easier to read */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>

        {/* The Text in the middle of the Hero */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center text-white px-4 pt-95">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 drop-shadow-lg">
            We're Excited To Meet You
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-2xl leading-relaxed drop-shadow-md">
            Residences and penthouses for the <br className="hidden md:block" /> 
            discerning and curious
          </p>
        </div>

        {/* Line at the bottom of the image area */}
        <div className="border-b border-white w-full"></div>  
      </div>

      <div className="border-b border-white w-full"></div>  

      {/*  (Contact Us) ============================================================================================================== */}
      <div className="w-full border-t border-b border-white mt-15 bg-black">
        <div className="max-w-[1427px] mx-auto border-l border-r border-white relative py-6 flex items-center justify-center bg-[#4D4D4D]">
        
          <img
            src={RightCorner}
            alt="decoration"
            className="absolute top-0 left-0 w-24 h-auto opacity-60"
          />
          <img
            src={LeftCorner}
            alt="decoration"
            className="absolute top-0 right-0 w-24 h-auto opacity-60"
          />
          <h2 className="text-5xl font-bold tracking-tight px-10 text-center">
            Contact us
          </h2>
        </div>
      </div>

      {/* --- MAIN CONTENT =====================================================================================================*/}
      <div className="w-full bg-black">
        <div className="max-w-[1427px] min-h-[650px] mx-auto border-l border-r border-white flex bg-[#4D4D4D]">
          
          {/* Gray sidebar for desktop */}
          <div className="w-[120px] border-r border-white hidden md:block"></div>

          {/* This container holds both the map and the form */}
          <div className="flex-1 flex flex-col lg:flex-row gap-12 p-8 md:p-12">
            
            {/* Left side: Google Map */}
            <div className="lg:w-1/2">
              <div className="border-[2px] border-white shadow-xl overflow-hidden h-full min-h-[500px] lg:min-h-full">
                <iframe
                  title="Location Map"
                  src="https://maps.google.com/maps?q=mumbai&z=11&output=embed"
                  className="w-full h-full block border-0 opacity-80"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="lg:w-1/2 space-y-5">


              {/* Row for First and Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-300 uppercase tracking-widest">First name</label>
                  <input type="text" placeholder="First name" className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none transition-all placeholder:text-gray-500" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] text-gray-300 uppercase tracking-widest">Last name</label>
                  <input type="text" placeholder="Last name" className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none transition-all placeholder:text-gray-500" />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-gray-300 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="you@company.com" className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none transition-all" />
              </div>

              {/* Phone Input with Country Select */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-gray-300 uppercase tracking-widest">Phone number</label>
                <div className="flex">
                  <select className="bg-white/5 border border-white/20 rounded-l-md p-3 border-r-0 outline-none text-sm">
                    <option className="bg-black">US</option>
                  </select>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/20 rounded-r-md p-3 focus:border-white outline-none transition-all" />
                </div>
              </div>

              {/* Message Box */}
              <div className="space-y-1.5">
                <label className="text-[10px] text-gray-300 uppercase tracking-widest">Message</label>
                <textarea rows="5" placeholder="Leave us a message..." className="w-full bg-white/5 border border-white/20 rounded-md p-3 focus:border-white outline-none transition-all"></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-white hover:bg-black hover:text-white text-black py-4 rounded-md border border-white/70 uppercase text-xs font-bold tracking-[0.2em] transition-all duration-300">
                Send message
              </button>
            </div>
          </div>

          {/* Right sidebar for desktop */}
          <div className="w-[120px] border-l border-white hidden md:block"></div>
        </div>
      </div>

      {/* --- CONTACT CARDS SECTION ======================================================================================== */}
      <div className="w-full border-t border-white bg-black">
        <div className="max-w-[1427px] mx-auto border-l border-r border-white flex bg-[#4D4D4D]">
          
          <div className="w-[120px] border-r border-white hidden md:block"></div>
          
          <div className="flex-1 px-8 md:px-12 flex flex-wrap justify-center md:justify-between gap-6 py-8">
            
            {/* Card Address */}
            <div className="bg-white text-black w-[275px] p-4 rounded-[13px] flex justify-between items-center group cursor-pointer hover:shadow-2xl transition-all">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-1 text-gray-500">Reflections</h3>
                <p className="text-sm font-semibold">Address</p>
                <p className="text-sm text-gray-600">Visit our Place</p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>

            {/*  Hours  Card */}
            <div className="bg-white text-black w-[275px] p-4 rounded-[13px] flex justify-between items-center group cursor-pointer hover:shadow-2xl transition-all">
              <div>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-1 text-gray-500">Office Hours</h3>
                <p className="text-sm font-semibold">Monday - Friday</p>
                <p className="text-sm text-gray-600">9:00 AM - 6:00 PM</p>
              </div>
              <ChevronRight className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>

            {/* Agent Card============================ */}
            <div className="bg-white text-black w-[275px] p-1 flex items-center space-x-5 hover:shadow-2xl transition-all">
              <img 
                src={agent}
                alt="Agent Profile" 
                className="w-16 h-16 object-cover"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-sm">Brooklyn Simmons</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Software Engineer II</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-full flex items-center justify-center">
                <img 
                  src={phoneIcon} 
                  alt="phone icon" 
                  className="w-[16px] h-[16px] object-contain"
                />
              </div>
            </div>

          </div>

          <div className="w-[120px] border-l border-white hidden md:block"></div>
        </div>
        <div className="border-b border-white w-full"></div> 
      </div>

      {/* Final Space  */}
      <div className="h-20 bg-black border-b border-white"></div>
    </div>
  );
};

export default ContactUs;