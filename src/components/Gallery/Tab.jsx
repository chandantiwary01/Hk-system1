function Tab() {
  const tabs = [
    "Corner Unit",
    "Courtyard View",
    "Large Balcony",
    "Pool View",
    "Washer & Dryer",
    "Tile Backsplash",
  ];

  return (
    <section className="w-full my-12 sm:my-16 lg:my-20">
      
      
      <div className="px-4 sm:px-6 md:px-0">
        
        
        <div className="max-w-[1440px] mx-auto border border-white bg-[#4D4D4D] 
                        py-4 sm:py-5 lg:py-6 
                        px-3 sm:px-5 lg:px-8">
          
          {/* Tabs Wrapper */}
         <div className="flex md:flex-wrap 
                overflow-x-auto md:overflow-visible 
                justify-start md:justify-center 
                gap-2 sm:gap-3 md:gap-6 
                text-white text-xs sm:text-sm md:text-base
                no-scrollbar">
            
            {tabs.map((tab, index) => (
             <button
  key={index}
  className="
    whitespace-nowrap
    px-3 sm:px-4 md:px-5
    py-1.5 sm:py-2
    rounded-md
    border border-transparent
    hover:border-white
    hover:bg-white hover:text-black
    transition-all duration-300
    flex-shrink-0
  "
>
  {tab}
</button>
                
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Tab;