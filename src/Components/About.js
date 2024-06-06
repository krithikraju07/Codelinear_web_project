import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";


export const About = () => {
  const aboutRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const element = aboutRef.current;
    const texts = textRefs.current;

    // Define the animation for background and text color change
    const tl = gsap.timeline({ paused: true, defaults: { duration: 1 } });

    tl.to(element, {
      background: "conic-gradient(from 173.6deg at 44.4% 50%, #46200D 0deg, #D4A381 43.31deg, #46200D 360deg)",
      ease: "power2.inOut",
    }).to(
      texts,
      {
        color: "#FFFFFF", // Invert text color
        ease: "power2.inOut",
      },
      0 // Ensures both animations start at the same time
    );

    // Observer options
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          tl.play(); // Play the animation when the element is in view
        } else {
          tl.reverse(); // Reverse the animation when the element is out of view
        }
      });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(element);

    // Cleanup function
    return () => {
      observer.unobserve(element);
    };
  }, []);

  


  return (
    <div ref={aboutRef} className="w-full transition-all duration-1000">
      <div className="w-[860px] h-[200px] pt-[150px] pl-[42px]">
        <div ref={(el) => (textRefs.current[0] = el)} className="font-almarai-bold text-8xl">
          <h1>
            Amet magnis diam
            <br />
            arius viverra at
          </h1>
        </div>
      </div>
      <div className="w-[1600px] pt-[80px] pl-[1141px]">
        <span ref={(el) => (textRefs.current[1] = el)} className="font-almarai text-lg leading-relaxed">
          Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
          varius cum proin. Accumsan volutpat natoque purus pellentesque nec
          ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
        </span>
      </div>
      <div className="w-[1600px] pt-[20px] pl-[1141px]">
        <img src="./imgportfolio/41f.png"  className="filter invert" alt="41f" />
      </div>
      <div className="w-[860px] h-[200px] pt-[115px] pb-[700px] pl-[42px]">
        <img src="./imgportfolio/42f.png" alt="42f" />
      </div>

    </div>
  );
};

export default About;
