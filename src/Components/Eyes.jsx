import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
function Eyes() {
const [rotate,Setrotate]=useState(0);
useEffect(()=>{

    let block= document.querySelector(".blocks");
    window.addEventListener("mouseover",(e)=>{
        let X=e.clientX;

        let Y=e.clientY;
    
        let delX=(window.innerWidth/2)-X;
        let delY=(window.innerHeight/2)-Y;
        

let angle=Math.atan2(delY,delX) * (180/Math.PI);
        Setrotate(angle);
    })
},[rotate,Setrotate])



  return (
    
      <motion.div 
      
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ease:[0.74,0,0.24,1], duration:1, delay:0.5}}
      
      
      className='blocks flex justify-center items-center w-full h-[50vh] mt-12 '>
        <div 
        data-scroll data-scroll-section data-scroll-speed="-.2"
        className=' bg-gray-200 w-[30vw] h-[40vh] flex justify-center items-center gap-5 rounded-2xl'>
        <div className='w-40 h-40 rounded-full bg-gray-300 flex justify-center items-center' >
            <div className=' w-28 h-28 rounded-full bg-black flex justify-center items-center' >
            <div style={{transform:` rotate(${rotate}deg)`}} className=' w-full max-h-fit m-2'>
            <div className=' w-6 h-6 rounded-full bg-white  ' >

</div>
            </div>
            </div>
      </div>
      <div className='w-40 h-40 rounded-full bg-gray-300 flex justify-center items-center' >
            <div className=' w-28 h-28 rounded-full bg-black flex justify-center items-center ' >
            <div style={{transform:` rotate(${rotate}deg)`}} className=' w-full max-h-fit m-2'>
            <div className=' w-6 h-6 rounded-full bg-white  ' >

</div>
            </div>
            </div>
      </div>
      </div>
      
      </motion.div>
  )
}

export default Eyes
