import React from "react";

const Main = () => {
  return (
    <main className="bg-F9F9F9 min-h-screen flex justify-center items-center">
      <div className="bg-F9F9F9 w-[1540px] h-[1220.5px] relative">
        <section className="relative h-full">
          <div
            className="font-almarai-bold text-8xl leading-tight text-left absolute"
            style={{
              width: "953.8px",
              height: "298px",
              top: "128.5px",
              left: "82px",
              zIndex: 10,
            }}
          >
            <h1>
              PROPELLING THE
              <br />
              WORLD, BY DESIGN.
            </h1>
          </div>
          <div class="flex-1 flex justify-end pt-[110px]">
            <div class="text-right fixed top-45 z-10">
              <span class="block text-sm md:text-base text-black font-bold relative">
                introduction
              </span>
              <span class="block text-sm md:text-base text-gray-600 relative before:content-[''] before:absolute before:left-[-30px] before:top-1/2 before:w-12 before:h-px before:bg-black mt-2">
                about us
              </span>
              <span class="block text-sm md:text-base text-gray-600 relative before:content-[''] before:absolute before:left-[-30px] before:top-1/2 before:w-12 before:h-px before:bg-black mt-2">
                services
              </span>
              <span class="block text-sm md:text-base text-gray-600 relative before:content-[''] before:absolute before:left-[-30px] before:top-1/2 before:w-12 before:h-px before:bg-black mt-2">
                works
              </span>
              <span class="block text-sm md:text-base text-gray-600 relative before:content-[''] before:absolute before:left-[-30px] before:top-1/2 before:w-12 before:h-px before:bg-black mt-2">
                industries
              </span>
            </div>
          </div>
          <div className="absolute w-[1408px] h-[598px] top-[422px] left-[56px] bg-white font-almarai-bold z-0"></div>
        </section>
      </div>
    </main>
  );
};

export default Main;
