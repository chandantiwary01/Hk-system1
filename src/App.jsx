import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';



import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Home from './pages/Home';


import Gallery from './pages/GalleryPage';
import Contact from './pages/ContactUs';


function App() {

   const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
         <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

         <AnimatePresence>
  {isMenuOpen && <Menu toggleMenu={toggleMenu} key="menu" />}
</AnimatePresence>
        
       
        {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
           
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
           
           
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;