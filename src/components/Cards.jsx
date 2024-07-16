import React from 'react'
// import Clutch from '../assets/images/clutch.svg'
// import Ochi1 from '../assets/images/ochi-1.svg'
// import Binasa from "../assets/images/binasa/png"
const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 px-32 flex items-center gap-5'>
       <div className="cardcontainer h-[50vh] w-1/2">
         <div className="card rounded-xl w-full h-full bg-[#004d43]">
            <img src="../assets/images/ochi-1.svg" alt="" />
         </div>
       </div>
       <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
        <div className="card rounded-xl w-1/2 h-full bg-[#192826]"></div>
        <div className="card rounded-xl w-1/2 h-full bg-[#192826]"></div>
       </div>
    </div>
  )
}

export default Cards