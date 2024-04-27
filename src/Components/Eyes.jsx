import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
function Eyes() {
const [rotate,Setrotate]=useState(0);
useEffect(()=>{

    let block= document.querySelector(".blocks");
    window.addEventListener("mouseover",(e)=>{
        let X=e.clientX;

        let Y=e.clientY;
    
        let delX=X-(window.innerWidth/2);
        let delY=Y-(window.innerHeight/2);
        

let angle=Math.atan2(delY,delX) * (180/Math.PI);
        Setrotate(angle-180);
    })
},[rotate,Setrotate])



  return (
    
      <motion.div 
      
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ease:[0.74,0,0.24,1], duration:1, delay:0.5}}
      
      
      className='blocks flex justify-center items-center w-[100%] h-[50vh] mt-12 mobile:w-full mobile:h-[50vh]'>
        <div 
        data-scroll data-scroll-section data-scroll-speed="-.2"
        className=' bg-gray-200 w-[30vw] h-[40vh] flex justify-center items-center gap-5 rounded-2xl mobile:w-[60vw] mobile:h-[20vh] mobile:gap-2'>
        <div className='w-40 h-40 rounded-full bg-gray-300 flex justify-center items-center mobile:w-28 mobile:h-28' >
            <div className=' w-28 h-28 rounded-full bg-black flex justify-center items-center mobile:w-20 mobile:h-20' >
            <div style={{transform:`rotate(${rotate}deg)`}} className={`w-full max-h-fit m-2`} >
            <div className=' w-6 h-6 rounded-full bg-white mobile:w-5 mobile:h-5' >

</div>
            </div>
            </div>
      </div>
      <div className='w-40 h-40 rounded-full bg-gray-300 flex justify-center items-center mobile:w-28 mobile:h-28' >
            <div className=' w-28 h-28 rounded-full bg-black flex justify-center items-center mobile:w-20 mobile:h-20' >
            <div style={{transform:`rotate(${rotate}deg)`}} className='w-full max-h-fit m-2' >
            <div className=' w-6 h-6 rounded-full bg-white mobile:w-5 mobile:h-5' >

</div>
            </div>
            </div>
      </div>
      </div>
      
      </motion.div>
  )
}

export default Eyes
