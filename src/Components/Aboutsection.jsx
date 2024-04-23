import { motion } from 'framer-motion'
import React from 'react'

function Aboutsection() {
  
  return (
    <div 
    
    
    className='w-full min-h-[50vh] bg-[#BFE274] rounded-t-3xl flex justify-between items-center'>
      <div 
      
      className=' border-t-2 border-b-2 border-zinc-100 flex whitespace-nowrap overflow-hidden '>
        {["We are best website maker","We are best website maker"].map((items,index)=>{
return <motion.h1 
initial={{x:"0%"}}
animate={{x:"-100%"}}
transition={{repeat:Infinity, ease:"linear", duration:15}}
key={index} className=' leading-none text-[13rem] capitalize pr-5' >{items}</motion.h1>
        })}
      </div>
    </div>
  )
}

export default Aboutsection
