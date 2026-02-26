import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Images for the menu
import Logo from '../assets/LOGO.png';
import MessageIcon from '../assets/message_img.png';
import PrinterIcon from '../assets/glass_img.png';
import PhoneIcon from '../assets/whatsapp_img.png';

const Menu = ({ toggleMenu }) => {
  
  // Animation settings for the main menu background
  const containerVariants = {
    hidden: { 
      clipPath: "circle(0% at 95% 5%)", 
      opacity: 0 
    },
    visible: { 
      clipPath: "circle(150% at 95% 5%)",
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1], 
        when: "beforeChildren",
        staggerChildren: 0.08 
      }
    },
    exit: { 
      clipPath: "circle(0% at 95% 5%)",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    }
  };

  // Animation settings for each link/item inside the menu
  const itemVariants = {
    hidden: { y: 30, opacity: 0, skewY: 4 },
    visible: { 
      y: 0, 
      opacity: 1, 
      skewY: 0,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-[100] bg-black/5 backdrop-blur-sm flex items-start justify-end p-2 sm:p-4 md:p-8 lg:p-10 overflow-y-auto overflow-x-hidden"
    >
      
      {/* This is the black box container for the menu */}
      <div className="relative w-full max-w-[1427px] h-auto min-h-[520px] sm:min-h-[600px] md:h-[698px] bg-black border border-white mt-[50px] sm:mt-[60px] md:mt-[70px] rounded-[16px] sm:rounded-[20px] rounded-bl-[80px] sm:rounded-bl-[140px] md:rounded-bl-[400px] p-4 sm:p-6 md:p-12 lg:p-16 flex flex-col overflow-hidden">
        
        {/* The X button to close the menu */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-3 sm:top-5 md:top-8 right-3 sm:right-5 md:right-8 p-2 text-[#FFFFFF] border border-white/40 rounded-full hover:bg-white hover:text-black transition-all group"
        >
          <X size={20} className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]" strokeWidth={1.5} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 mt-4 sm:mt-6 md:mt-10 w-full">
          
          {/* --- LEFT SIDE --- */}
          <div className="flex flex-col space-y-5 sm:space-y-6 md:space-y-8">
            
            {/* Top Logo */}
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start">
              <img 
                src={Logo} 
                alt="Logo"
                className="w-[90px] sm:w-[110px] md:w-[120px] h-auto object-contain brightness-0 invert opacity-90"
              />
            </motion.div>

            {/* Description Text */}
            <motion.p 
              variants={itemVariants} 
              className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm text-center md:text-left mx-auto md:mx-0"
            >
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 
              "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
              by Cicero, written in 45 BC.
            </motion.p>

            {/* Left side Links */}
            <div className="flex flex-col space-y-3 md:space-y-4 pt-1 md:pt-4 w-full">
              <motion.div variants={itemVariants}>
                <Link 
                  to="/" 
                  onClick={toggleMenu}
                  className="block w-full border text-[#FFFFFF] border-white/20 rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link 
                  to="/amenities" 
                  onClick={toggleMenu}
                  className="block w-full border text-[#FFFFFF] border-white/20 rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
                >
                  Amenities
                </Link>
              </motion.div>
            </div>
          </div>

          {/* --- RIGHT SIDE --- */}
          <div className="flex flex-col space-y-3 md:space-y-4 w-full">
            <motion.div variants={itemVariants}>
              <Link 
                to="/gallery" 
                onClick={toggleMenu}
                className="block w-full border text-[#FFFFFF] border-white/20 rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
              >
                Gallery
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link 
                to="/neighborhood" 
                onClick={toggleMenu}
                className="block w-full border text-[#FFFFFF] border-white/20 rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
              >
                Neighborhood
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link 
                to="/residents" 
                onClick={toggleMenu}
                className="block w-full border border-white/20 text-[#FFFFFF] rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
              >
                Residents
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link 
                to="/floor-plans" 
                onClick={toggleMenu}
                className="block w-full border text-[#FFFFFF] border-white/20 rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
              >
                Floor plans
              </Link>
            </motion.div>

            {/* Contact button and the three icon buttons at the bottom */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-3 md:gap-4 pt-2 md:pt-4 w-full items-center sm:items-stretch"
            >
              <Link 
                to="/contact" 
                onClick={toggleMenu}
                className="w-full sm:flex-[2] border border-white/20 text-[#FFFFFF] rounded-md py-3 sm:py-4 md:py-5 text-center text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium hover:bg-white hover:text-black transition-all"
              >
                contact us
              </Link>

              <div className="flex justify-center sm:justify-start gap-3 md:gap-4">
                <button className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[64px] border border-white/20 rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-all">
                  <img src={MessageIcon} alt="Message" className="w-[22px] sm:w-[24px] md:w-[30px] h-auto object-contain" />
                </button>

                <button className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[64px] border border-white/20 rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-all">
                  <img src={PrinterIcon} alt="Printer" className="w-[22px] sm:w-[24px] md:w-[30px] h-auto object-contain" />
                </button>

                <button className="w-[50px] h-[50px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[64px] border border-white/20 rounded-[8px] flex items-center justify-center hover:bg-white/10 transition-all">
                  <img src={PhoneIcon} alt="Phone" className="w-[22px] sm:w-[24px] md:w-[30px] h-auto object-contain" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;