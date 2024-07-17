import React, { useState } from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";
const Featured = () => {
  const [isHovering, setIsHovering] = useState("");
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div
            onMouseEnter={() => setIsHovering("fyde")}
            onMouseLeave={() => setIsHovering("")}
            className="cardcontainer w-1/2 h-[75vh] relative"
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight  text-7xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering === "fyde" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
            onMouseEnter={() => setIsHovering("vise")}
            onMouseLeave={() => setIsHovering("")}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <h1 className="absolute flex overflow-hidden text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight  text-7xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering === "vise" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
