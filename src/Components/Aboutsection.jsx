import { motion } from 'framer-motion'
import React from 'react'

function Aboutsection() {
  
  return (
    <div 
    
    
    className='w-full min-h-[50vh] bg-[#BFE274] rounded-t-3xl flex justify-between items-center mobile:min-h-[40vh]'>
      <div 
      
      className=' border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden mobile:border-stone-100 mobile:border-b-4 mobile:border-t-4 '>
        {["We are best website maker","We are best website maker"].map((items,index)=>{
return <motion.h1 
initial={{x:"0%"}}
animate={{x:"-100%"}}
transition={{repeat:Infinity, ease:"linear", duration:15}}
key={index} className=' leading-none text-[13rem] capitalize pr-5 mobile:text-[7rem] mobile:pt-3 mobile:pb-3' >{items}</motion.h1>
        })}
      </div>
    </div>
  )
}

export default Aboutsection
