import React from 'react'
import Img from './Img.jpg'
import { SlArrowRightCircle } from "react-icons/sl";

function Lastpage() {
  var allitems=[{
    name:"LinkedIn",
    link:'www.linkedin.com/in/krishnenduroy1'
  },
  {
    name:"GitHub",
    link:'https://github.com/Krishnendu-1'
  },
  {
    name:"Facebook",
    link:'https://www.facebook.com/Roykrishnendu01'
  }]
  return (
    
    <div   data-scroll data-scroll-section data-scroll-speed=".4"
    className='w-full min-h-full bg-[#f5f5dc] mb-0 bottom-0'>
      <div className='flex justify-evenly'>
      <div className='flex justify-evenly items-center w-[20vw] h-fit'>
        <img src={Img} className='w-50 bg-cover rounded-xl shadow-xl p-2' />
        <div className='text-xl flex justify-center items-center gap-1'>
        Start
        <button><SlArrowRightCircle />
</button>
        </div>
      </div>
      
      <div className='flex justify-evenly items-center w-[20vw] h-fit'>
        <img src="https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-50 bg-cover rounded-xl shadow-xl p-2' />
        <div className='text-xl flex justify-center items-center gap-1'>
        Start
        <button><SlArrowRightCircle />
</button>
        </div>
      </div>
      </div>
      <div className='flex w-full h-fit justify-evenly items-center flex-col pt-10 '>
        <h1 className=' text-2xl font-serif leading-tight tracking-tight'>
          EyeKatchy: Make your goodlooking Web App today!
        </h1>
        <div className='flex items-center w-fit h-fit'>
          {allitems.map((items,index)=>{
            return <div key={index} className={`p-3 flex justify-between items-center`}>{items.name} : {items.link}
            
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Lastpage
