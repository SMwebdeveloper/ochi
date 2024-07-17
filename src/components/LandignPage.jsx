import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
function LandignPage() {
  const headerWords = ["We create", "Eye Opening", "Presentations"];
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full min-h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-48 px-20">
        {headerWords.map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex items-end">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "8vw" }}
                  transition={{ease: [0.76, 0, 0.24, 1]}}
                  className="w-[8vw] rounded-md h-[5.5vw] relative -top-[0.4vw] bg-red-500"
                ></motion.div>
              )}
              <h1 className="uppercase  text-[7.3vw] leading-[6.6vw] tracking-tighter font-bold">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 text-sm font-light uppercase flex items-center justify-between py-5 px-20">
        {["For public and private companies", "For the first pich to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leaiding-none"
            >
              {item}
            </p>
          )
        )}

        <div className="start flex items-center gap-3">
          <div className="px-4 py-2 border-[1px] border-zinc-400 rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandignPage;
