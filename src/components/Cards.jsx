import React from "react";
import Ochi1 from "../assets/images/ochi-1.svg";
import Clutch from "../assets/images/clutch.svg";
import Binasa from "../assets/images/binasa.png";
const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-100 px-32 flex items-center gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card rounded-xl relative w-full h-full flex items-center justify-center bg-[#004d43]">
          <img src={Ochi1} alt="ochi svg icon" className="w-30"/>
          <button className="absolute px-5 py-1 border-2 rounded-full left-10 bottom-10">
            &copy;2019
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh] relative">
        <div className="card rounded-xl flex items-center justify-center w-1/2 h-full bg-[#212121]">
          <img src={Clutch} alt="clutch svg icon" className="w-30"/>
          <button className="absolute px-5 py-1 uppercase border-2 rounded-full left-5 bottom-10">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="card rounded-xl w-1/2 h-full flex items-center justify-center relative bg-[#212121]">
          <img src={Binasa} alt="Business butcamp alumini icon" className="w-28"/>
          <button className="absolute uppercase px-5 py-1 border-2 rounded-full left-10 bottom-10 ">
            Business butcamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
