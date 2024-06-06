import React from "react";

export const Hidden = () => {
  return (
    <div className="w-full h-[400px] relative">
      <div className="w-full h-[108px] pt-[10px] pl-[680px]">
        <span className="font-almarai text-3xl">Wanna know a secret?</span>
      </div>
      <div className="group w-full h-[155px] pt-[5px] pl-[540px] relative">
        <span className="hover-text font-almarai-bold text-9xl text-white opacity-0 absolute transition-opacity group-hover:opacity-100 text-shadow-custom">LET'S TALK.</span>
      </div>
    </div>
  );
};

export default Hidden;
