import { useState, useEffect } from "react";
import img1 from "../../assets/right_G.png";
import img2 from "../../assets/center_G.png";
import img3 from "../../assets/left_G.png";
import right from "../../assets/right_corner.png";
import left from "../../assets/left_corner.png";

function Corner() {
  const cards = [img1, img2, img3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    /* The section provides the full-screen horizontal border-y */
  <section className="w-full border-y border-white my-12 sm:my-16">
      
      {/* 1427px Constraint Wrapper starts here */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 md:px-0">
        <div className="border-r border-white md:mr-5 lg:mr-10">
          <div className="border-l border-white md:ml-5 lg:ml-10 ">
            <div className="relative bg-[#4a4a4a] py-4">
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

              {/* Header Horizontal Line - Negative margins ensure it touches the 1427px vertical borders */}
              <div className="flex items-center justify-between border-b border-white pb-3 md:pb-4 md:-mx-5 lg:-mx-10 mt-4">
                <h2 className="text-white text-lg md:text-2xl lg:text-3xl font-bold pl-4 md:pl-10 lg:pl-20">
                  Gallery Corner Unit
                </h2>

              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-10 mt-10 px-4 sm:px-6 md:px-6 lg:px-16 mb-10">
                {[0, 1, 2].map((pos) => {
                  const card = cards[(index + pos) % cards.length];
                  const isActive = pos === 1;

                  return isActive ? (
                    <div
                      key={pos}
                      className="relative border border-white h-60 md:h-70 lg:h-85 md:scale-105 lg:scale-110 z-10 transition-all duration-700"
                    >
                      <div className="hidden md:block absolute left-0 lg:-top-5.5 md:-top-8 md:-bottom-8 lg:-bottom-5.5 w-[1.5px] bg-white"></div>
                      <div className="hidden md:block absolute right-0 md:-top-8 md:-bottom-8 lg:-top-5.5 lg:-bottom-5.5 w-[1.5px] bg-white"></div>

                      <img
                        src={card}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      key={pos}
                      className="relative border border-white h-50 mx-4 sm:mx-6 md:m-0 md:h-60 lg:h-75 md:scale-90 opacity-90 md:opacity-80 md:translate-y-6 transition-all duration-700"
                    >
                      <div className="hidden md:block absolute left-0 md:-top-21.5 md:-bottom-15 lg:-top-22 lg:-bottom-20 w-[1.5px] bg-white"></div>
                      <div className="hidden md:block absolute right-0 md:-top-21.5 md:-bottom-15 lg:-top-22 lg:-bottom-20 w-[1.5px] bg-white"></div>

                      <img
                        src={card}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  );
                })}

                <div className="absolute left-1/2 -translate-x-1/2 bottom-53.5 lg:-bottom-7 md:-bottom-4.5 z-10">
                  <div className="bg-white px-3 py-1.5 rounded-full flex gap-1.5 shadow">
                    {cards.map((_, i) => (
                      <div
                        key={i}
                        onClick={() =>
                          setIndex((i - 1 + cards.length) % cards.length)
                        }
                        className={`w-2 h-2 rounded-full cursor-pointer transition ${
                          i === (index + 1) % cards.length
                            ? "bg-black scale-110"
                            : "bg-black/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Horizontal Line - Touches the 1427px borders */}
              <div className="border-b border-white md:-mx-5 lg:-mx-10 mb-11"></div>
            </div>
          </div>
        </div>
      </div> 
      {/* End of 1427px Wrapper */}

    </section>
  );
}

export default Corner;