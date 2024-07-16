import React from "react";

const Featured = () => {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardcontainer w-1/2 h-[75vh] relative">
            <h1 className="absolute text-[#cdea68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight  text-7xl">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
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
          <div className="cardcontainer relative w-1/2 h-[75vh] ">
          <h1 className="absolute text-[#cdea68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-10 leading-none tracking-tight  text-7xl">
              {"VISE".split("").map((item, index) => (
                <span key={index}>{item}</span>
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
