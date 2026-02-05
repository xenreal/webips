import React from "react";
import Video from "./Video";

const Hometxt = () => {
  return (
    <>
      <div className="font-[Font1] pt-10 md:pt-5 text-center">
        <div className="text-[12vw] md:text-[9.5vw] justify-center flex items-center uppercase leading-[10vw] md:leading-[8vw]">
          Ideate.
        </div>

        <div className="text-[12vw] md:text-[9.5vw] uppercase justify-center flex flex-wrap items-center leading-[10vw] md:leading-[8vw] gap-x-2 md:gap-x-0">
          <span>Iterate</span>

          
          <div className="h-[10vw] md:h-[8vw] w-[18vw] md:w-[15vw] rounded-full mx-2 md:-mt-1 overflow-hidden inline-block">
            <Video />
          </div>

          <span>Impact</span>

        </div>

          {/* Description */}
<div className="mt-8 md:mt-10 flex justify-center">
  <div className="max-w-2xl px-6 py-5 border border-white border-4 rounded-xl text-sm md:text-base leading-relaxed">
    <span className="font-semibold uppercase tracking-wide">
      IPS IES Academy Tech Club
    </span>
    <p className="mt-2 text-white/80">
      A community of curious minds building the future through code,
      creativity, and collaboration. From late-night debugging to
      breakthrough ideas, we turn passion into innovation.
    </p>
  </div>
</div>

      </div>
    </>
  );
};

export default Hometxt;
