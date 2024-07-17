import React from "react";
import { motion } from "framer-motion";
const Marque = () => {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className="w-full py-10 rounded-t-3xl bg-[#004d43]">
      <div className="text border-y-2 border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-extrabold uppercase -mt-5 -mb-3 pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-extrabold uppercase -mt-5 -mb-3 pr-20"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[17vw] leading-none font-extrabold uppercase -mt-5 -mb-3 pr-20"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marque;
