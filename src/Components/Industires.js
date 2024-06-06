import React, { useEffect, useRef } from "react";
import { gsap,Linear } from "gsap";

export const Industries = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const element = aboutRef.current;
    const texts = textRefs.current;

    const tl = gsap.timeline({ paused: true, defaults: { duration: 1 } });

    tl.to(element, {
      background:
        "conic-gradient(from 193.23deg at 35.28% 47.29%, #386128 0deg, #BCC66F 50.44deg, #386128 360deg)",

      ease: "power2.inOut",
    }).to(
      texts,
      {
        color: "#FFFFFF", 
        ease: "power2.inOut",
      },
      0 
    );

    
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.reverse(); 
        }
      });
    };

   
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);

    
    return () => {
      observer.unobserve(element);
    };
  }, []);

  const serv = useRef(null);
  const menuhead = useRef(null);
  const menupara = useRef(null);
  const menulist = useRef(null);
  const menuitems = useRef(null);
  const menuhead1 = useRef(null);
  const menupara1 = useRef(null);
  const menulist1 = useRef(null);
  const menuitems1 = useRef(null);
  const menuhead2 = useRef(null);
  const menupara2 = useRef(null);
  const menulist2 = useRef(null);
  const menuitems2 = useRef(null);
  const menuhead3 = useRef(null);
  const menupara3 = useRef(null);
  const menulist3 = useRef(null);
  const menuitems3 = useRef(null);
  const menuhead4 = useRef(null);
  const menupara4 = useRef(null);
  const menulist4 = useRef(null);
  const menuitems4 = useRef(null);
  const menuhead5 = useRef(null);
  const menupara5 = useRef(null);
  const menulist5 = useRef(null);
  const menuitems5 = useRef(null);
  const menuhead6 = useRef(null);
  const menupara6 = useRef(null);
  const menulist6 = useRef(null);
  const menuitems6 = useRef(null);
  const menuhead7 = useRef(null);
  const menupara7 = useRef(null);
  const menulist7 = useRef(null);
  const menuitems7 = useRef(null);

  const vanish = () => {
    gsap.to(serv.current,0.3, { opacity: 0 });
  };
  const appear = () => {
    gsap.to(serv.current,0.3, { opacity: 1 });
  };

  const hover = () => {
    gsap.to(menuhead.current,0.3, { y: -85, ease:Linear.easeNone });
    gsap.to(menupara.current,0.3, {
      opacity: 0, ease:Linear.easeNone,
    });
    gsap.to(menulist.current,0.3, { opacity: 1,ease:Linear.easeNone });
    gsap.to(menuitems.current,0.3, { background: "#D3DAA7",ease:Linear.easeNone });
  };
  const unhover = () => {
    gsap.to(menuhead.current,0.3, { y: 0,ease:Linear.easeNone });
    gsap.to(menupara.current,0.3, {
      opacity: 1,ease:Linear.easeNone
    });
    gsap.to(menulist.current,0.3, { opacity: 0,ease:Linear.easeNone });
    gsap.to(menuitems.current,0.3, { background: "transparent",ease:Linear.easeNone });
  };
  const hover1 = () => {
    gsap.to(menuhead1.current, { y: -85 });
    gsap.to(menupara1.current, {
      opacity: 0,
    });
    gsap.to(menulist1.current, { opacity: 1 });
    gsap.to(menuitems1.current, { background: "#D3DAA7" });
  };
  const unhover1 = () => {
    gsap.to(menuhead1.current, { y: 0 });
    gsap.to(menupara1.current, {
      opacity: 1,
    });
    gsap.to(menulist1.current, { opacity: 0 });
    gsap.to(menuitems1.current, { background: "transparent" });
  };
  const hover2 = () => {
    gsap.to(menuhead2.current, { y: -85 });
    gsap.to(menupara2.current, {
      opacity: 0,
    });
    gsap.to(menulist2.current, { opacity: 1 });
    gsap.to(menuitems2.current, { background: "#D3DAA7" });
  };
  const unhover2 = () => {
    gsap.to(menuhead2.current, { y: 0 });
    gsap.to(menupara2.current, {
      opacity: 1,
    });
    gsap.to(menulist2.current, { opacity: 0 });
    gsap.to(menuitems2.current, { background: "transparent" });
  };
  const hover3 = () => {
    gsap.to(menuhead3.current, { y: -85 });
    gsap.to(menupara3.current, {
      opacity: 0,
    });
    gsap.to(menulist3.current, { opacity: 1 });
    gsap.to(menuitems3.current, { background: "#D3DAA7" });
  };
  const unhover3 = () => {
    gsap.to(menuhead3.current, { y: 0 });
    gsap.to(menupara3.current, {
      opacity: 1,
    });
    gsap.to(menulist3.current, { opacity: 0 });
    gsap.to(menuitems3.current, { background: "transparent" });
  };
  const hover4 = () => {
    gsap.to(menuhead4.current, { y: -85 });
    gsap.to(menupara4.current, {
      opacity: 0,
    });
    gsap.to(menulist4.current, { opacity: 1 });
    gsap.to(menuitems4.current, { background: "#D3DAA7" });
  };
  const unhover4 = () => {
    gsap.to(menuhead4.current, { y: 0 });
    gsap.to(menupara4.current, {
      opacity: 1,
    });
    gsap.to(menulist4.current, { opacity: 0 });
    gsap.to(menuitems4.current, { background: "transparent" });
  };
  const hover5 = () => {
    gsap.to(menuhead5.current, { y: -85 });
    gsap.to(menupara5.current, {
      opacity: 0,
    });
    gsap.to(menulist5.current, { opacity: 1 });
    gsap.to(menuitems5.current, { background: "#D3DAA7" });
  };
  const unhover5 = () => {
    gsap.to(menuhead5.current, { y: 0 });
    gsap.to(menupara5.current, {
      opacity: 1,
    });
    gsap.to(menulist5.current, { opacity: 0 });
    gsap.to(menuitems5.current, { background: "transparent" });
  };
  const hover6 = () => {
    gsap.to(menuhead6.current, { y: -85 });
    gsap.to(menupara6.current, {
      opacity: 0,
    });
    gsap.to(menulist6.current, { opacity: 1 });
    gsap.to(menuitems6.current, { background: "#D3DAA7" });
  };
  const unhover6 = () => {
    gsap.to(menuhead6.current, { y: 0 });
    gsap.to(menupara6.current, {
      opacity: 1,
    });
    gsap.to(menulist6.current, { opacity: 0 });
    gsap.to(menuitems6.current, { background: "transparent" });
  };
  const hover7 = () => {
    gsap.to(menuhead7.current, { y: -85 });
    gsap.to(menupara7.current, {
      opacity: 0,
    });
    gsap.to(menulist7.current, { opacity: 1 });
    gsap.to(menuitems7.current, { background: "#D3DAA7" });
  };
  const unhover7 = () => {
    gsap.to(menuhead7.current, { y: 0 });
    gsap.to(menupara7.current, {
      opacity: 1,
    });
    gsap.to(menulist7.current, { opacity: 0 });
    gsap.to(menuitems7.current, { background: "transparent" });
  };

  return (
    <div ref={aboutRef} className="w-full transition-all duration-1000">
      <div className="w-[860px] h-[200px] pt-[150px] pl-[42px]">
        <div
          ref={(el) => (textRefs.current[0] = el)}
          className="font-almarai-bold text-8xl"
        >
          <h1>
            Amet magnis diam
            <br />
            arius viverra at Industires
          </h1>
        </div>
      </div>
      <div className="w-[1600px] pt-[80px] pl-[1141px]">
        <span
          ref={(el) => (textRefs.current[1] = el)}
          className="font-almarai text-lg leading-relaxed"
        >
          Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
          varius cum proin. Accumsan volutpat natoque purus pellentesque nec ac
          nulla turpis consectetur. Fermentum ut non commodo lacus enim.
        </span>
      </div>
      <div className="w-[1600px] pt-[20px] pl-[1141px]">
        <img
          src="./imgportfolio/4242f.png"
          className="filter invert"
          alt="4242f"
        />
      </div>
      <div className="w-[860px] h-[200px] pt-[115px] pb-[700px] pl-[42px]">
        <img src="./imgportfolio/212ff.png" alt="212ff" />
      </div>
      <div
        class="absolute top-[5450.97px] left-0 w-full h-[684px] services-menu"
        onMouseEnter={vanish}
        onMouseLeave={appear}
      >
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover}
          onMouseLeave={unhover}
          ref={menuitems}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead}
          >
            FINTECH
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara}
          >
            FINTECH
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              KLUB
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              |
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              MIDDLE
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              |
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              KERNEL WEALTH
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover1}
          onMouseLeave={unhover1}
          ref={menuitems1}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead1}
          >
            TECHNOLOGY
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara1}
          >
            TECHNOLOGY
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist1}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              DEEL
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              |
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              BOOKING FACTORY
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover2}
          onMouseLeave={unhover2}
          ref={menuitems2}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead2}
          >
            ECOMMERCE
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara2}
          >
            ECOMMERCE
          </p>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover3}
          onMouseLeave={unhover3}
          ref={menuitems3}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead3}
          >
            SUPPLY CHAIN
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara3}
          >
            SUPPLY CHAIN AND LOGISTICS
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist3}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              CONVOY
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover4}
          onMouseLeave={unhover4}
          ref={menuitems4}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead4}
          >
            HEALTHCARE
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara4}
          >
            HEALTHCARE
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist4}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              LYRA HEALTH
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              |
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              HINGE HEALTH
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover5}
          onMouseLeave={unhover5}
          ref={menuitems5}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead5}
          >
            FOOD & BEVERAGES
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara5}
          >
            FOOD AND BEVERAGES
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist5}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              BRITANNIA
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              |
            </p>
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              BEE AND HIVE
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50 menuitems"
          onMouseEnter={hover6}
          onMouseLeave={unhover6}
          ref={menuitems6}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead6}
          >
            BIOPHARM
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara6}
          >
            BIOPHARMACEUTICAL
          </p>
          <div
            class="w-[414px] flex gap-[19px] opacity-0 transition-opacity duration-50 menu-list"
            ref={menulist6}
          >
            <p class="text-[#577f3e] text-[15px] font-bold font-['Almarai']">
              IMAPAC
            </p>
          </div>
        </div>
        <div
          class="w-full h-[85.5px] flex items-center overflow-hidden transition-all duration-50  menuitems"
          onMouseEnter={hover7}
          onMouseLeave={unhover7}
          ref={menuitems7}
        >
          <h1
            class="text-[85.66px] ml-[42px] w-[760px] text-[#577f3e] whitespace-nowrap mt-[170px] overflow-hidden transition-transform duration-50 menu-head"
            ref={menuhead7}
          >
            MANUFACTURING
          </h1>
          <p
            class="w-[260px] text-[21px] whitespace-nowrap relative transition-opacity duration-50 menu-para"
            ref={menupara7}
          >
            MANUFACTURING
          </p>
        </div>
      </div>
    </div>
  );
};

export default Industries;
