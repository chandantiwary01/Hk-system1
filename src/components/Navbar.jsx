import React from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion"; // ⭐ ADD THIS
import Logo from "../assets/LOGO.png";
import Menu from "./Menu";

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black font-['Inter',_sans-serif] text-white relative overflow-x-hidden"
    >
      {/* 1. Top Spacing  */}
      <div className="h-12 sm:h-16 md:h-[99px] w-full bg-black"></div>

      {/* 2. Horizontal Line  */}
      <motion.div
        className="relative w-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ originX: 0 }}
      >
        <div
          style={{ backgroundColor: "#F3F3F3" }}
          className="h-[1px] w-full opacity-20"
        ></div>
      </motion.div>

      {/* 3. Main Navigation Bar */}
      <div className="max-w-[1743px] mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 flex justify-between items-center relative">
        
        {/* Left Side Links - Visible  on larger screens */}
        <motion.div
          className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1 min-w-0"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Link
            to="/about"
            className="text-[11px] xl:text-[12px] uppercase tracking-[0.25em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            About Us
          </Link>
          <Link
            to="/properties"
            className="text-[11px] xl:text-[12px] uppercase tracking-[0.25em] font-medium hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            Properties
          </Link>
        </motion.div>

        {/* Center Logo */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-auto"
          
        >
          <Link to="/" className="flex items-center justify-center">
            
              <img
                src={Logo}
                alt="KDR GROUP"
                className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto object-contain brightness-0 invert opacity-90"
              />
          
          </Link>
        </motion.div>

        {/* Book a Tour button and the Hamburger menu */}
        <motion.div
          className="flex items-center justify-end space-x-2 sm:space-x-4 md:space-x-6 flex-1 min-w-0"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
         
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{ borderColor: "#F3F3F3" }}
            className="hidden sm:block border px-4 sm:px-6 md:px-8 
            py-2 md:py-2.5 
            rounded-full 
            text-[9px] sm:text-[10px] md:text-[12px] uppercase 
            font-medium hover:bg-white hover:text-black 
            transition-all duration-300 shadow-md"
          >
            Book a Tour
          </motion.button>

          {/* Animated Hamburger Menu Button ================================================================================================= */}
          <motion.button
            onClick={toggleMenu}
            className="p-2 sm:p-2.5 md:p-3 border rounded-full hover:bg-white/10 transition-colors flex items-center
             justify-center z-[60] shrink-0 relative w-10 h-10"
            style={{ borderColor: "#F3F3F3" }}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {/* Animated Top Line */}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 0 : -6,
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-[2px] bg-white rounded"
              />

              {/* Animated Middle Line----------------------------------------------------------------------------------------------- */}
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="absolute w-5 h-[2px] bg-white rounded"
              />

              {/* Animated Bottom Line -----------------------------------------------------------------------------------*/}
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? 0 : 6,
                }}
                transition={{ duration: 0.3 }}
                className="absolute w-5 h-[2px] bg-white rounded"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>

   
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Menu toggleMenu={toggleMenu} />
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;