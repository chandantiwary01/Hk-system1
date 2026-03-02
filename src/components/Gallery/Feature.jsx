import right from "../../assets/right_corner.png";
import left from "../../assets/left_corner.png";

function Feature() {
  return (
    <section className="w-full border-y border-white my-12 sm:my-16">
      <div className="bg-[#4D4D4D] border border-white mx-4 sm:mx-6 md:mx-5 lg:mx-10">

        <div className="relative bg-[#4a4a4a] ">
                    {/* Top Left Corner PNG */}
                    <img
                      src={right}
                      alt="left-corner"
                      className="absolute top-0 left-0 w-10 md:w-14 lg:w-16 z-20 pointer-events-none"
                    />
        
                    {/* Top Right Corner PNG */}
                    <img
                      src={left}
                      alt="right-corner"
                      className="absolute top-0 right-0 w-10 md:w-14 lg:w-16 z-20 pointer-events-none"
                    />
        
                    
                       <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold text-center p-5  border-white">
          Browse Our Gallery
        </h2>
        
                     
                    </div>

                   
       

        <div className="border-t border-white md:-mx-5 lg:-mx-10"></div>

        <div className="border-r border-white mr-8 md:mr-20 lg:mr-30">
          <div className="border-l border-white ml-8 md:ml-20 lg:ml-30">
            <div className="max-w-3xl mx-auto text-center px-4">
              <p className="text-white pt-10 text-sm md:text-base leading-relaxed max-w-3xl mx-auto px-2 sm:px-4">
                Discover a pet-friendly community designed for those who
                appreciate life’s finer things. From a state-of-the-art fitness
                center and cybercafé to a resort-style pool and soothing
                Jacuzzi, every detail elevates your lifestyle. Stay active on
                pickleball and basketball courts, unwind by cozy fire pits, or
                pamper your furry friends at the dog run and pet wash station.
                Tour our brand-new apartments today and explore an amenity
                package that redefines modern living.
                <span className="block mt-6">
                  {" "}
                  Discover a pet-friendly community designed for those who
                  appreciate life’s finer things. From a state-of-the-art
                  fitness center and cybercafé to a resort-style pool and
                  soothing Jacuzzi, every detail elevates your lifestyle. Stay
                  active on pickleball and basketball courts.
                </span>
              </p>
            </div>

            <div className="border-b border-white -mx-8 md:-mx-25 lg:-mx-40 mt-15"></div>

            <div className="flex flex-col mx-4 md:flex-row justify-center gap-10 lg:gap-50 py-4">
              <button className="md:px-10 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                Apartment Features →
              </button>

              <button className="px-5 py-2 md:px-10 border border-white text-white rounded-full hover:bg-white hover:text-black transition cursor-pointer">
                Community Amenities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;