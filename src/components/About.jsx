import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 bg-[#cdea68] rounded-t-3xl text-black">
      <h1 className="text-[3vw] leading-[3.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full flex items-start justify-between border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2">
          <h1 className="text-7xl">Our approach:</h1>
          <button className="px-10 py-6 bg-zinc-900 rounded-full flex items-center gap-10 mt-10 text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#b0c859]">

        </div>
      </div>
    </div>
  );
};

export default About;
