import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { datas } from "./Data";
import { Mousewheel, Keyboard } from "swiper/modules";

const Services = () => {
  return (
    <>
      <div className="w-full h-[198.5px] px-42 py-57.75 flex items-center gap-[295px]">
        <div className="w-[491px] h-[1262px] flex items-center justify-start pl-8">
          <span className="font-almarai text-8xl font-normal leading-96.45 text-left">
            SERVICES
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
      <div className="min-h-screen flex justify-center items-center">
        <div className="relative w-[1500px] h-[573px] p-[42px]">
          {/* Title and Description */}

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="w-full h-full"
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            modules={[Mousewheel, Keyboard]}
          >
            {datas.map((category, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <div className="text-left w-full flex flex-col items-center relative h-full">
                  <div className="text-[13rem] font-almarai-bold text-gray-800 leading-none">
                    {category.title.split(" ")[0]} <br />{" "}
                    {category.title.split(" ")[1]}
                  </div>
                  <div className="font-almarai-bold absolute top-0 right-10 text-l text-gray-600">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="py-1">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
