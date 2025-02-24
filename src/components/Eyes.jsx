import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0)
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const deltaX = mouseX - window.innerWidth/2
      const deltaY = mouseY - window.innerHeight/2

      const angle = Math.atan2(deltaY, deltaX) * (180/Math.PI) - 180

      setRotate(angle)
    })
  }, [])
  return (
    <div  className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex items-center gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
              <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
