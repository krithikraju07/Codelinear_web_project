import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { data } from "./imgData";
import { Mousewheel, Keyboard } from "swiper/modules";

export const Portfolio = () => {
  return (
    <>
      <div className="w-full h-[198.5px] px-42 py-57.75 flex items-center gap-[295px]">
        <div className="w-[491px] h-[1262px] flex items-center justify-start pl-8">
          <span className="font-almarai text-8xl font-normal leading-96.45 text-left">
            PORTFOLIO
          </span>
        </div>
        <div className="w-[690px] h-[100px] px-8">
          <span className="font-almarai text-xl leading-relaxed text-right">
            Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
            varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </span>
        </div>
      </div>

      <div className="min-h-screen flex flex-col justify-center items-center">
        <Swiper
          spaceBetween={5} // Adjust the gap between slides
          slidesPerView={2.5} // Show 2 slides per view
          className="w-full"
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Mousewheel, Keyboard]}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <div className="text-center w-full flex flex-col items-center">
                <div className="relative">
                  <img
                    className="w-220 inline-block p-1 cursor-pointer hover:scale-105 ease-in-out duration-300"
                    src={item.img}
                    alt={item.name}
                  />
                  <p className="absolute bottom-0 left-0 bg-black text-white opacity-75 p-2">
                    {item.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-[252px] flex justify-center items-center">
        <img className="w-[980px] h-[180px] pt-[5px] pl-[120px] pb-[60px] pr-[70px]" src="./imgportfolio/20ff.jpg" alt="20f"/>
      </div>
    </>
  );
};

export default Portfolio;

