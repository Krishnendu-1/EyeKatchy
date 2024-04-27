import React from 'react'
import Img from './Img.jpg'
import { SlArrowRightCircle } from "react-icons/sl";

function Lastpage() {
  var allitems=[{
    name:"LinkedIn",
    link:'linkedin.com/in/krishnenduroy1'
  },
  {
    name:"GitHub",
    link:'github.com/Krishnendu-1'
  },
  {
    name:"Facebook",
    link:'facebook.com/Roykrishnendu01'
  }]
  return (
    
    <div   data-scroll data-scroll-section data-scroll-speed=".4"
    className='w-[100%] h-[100%] bg-[#f5f5dc] mb-0 bottom-0 mobile:h-[100%] mobile:w-[100%] mobile:pt-[10vh] mobile:pb-0 mobile:mb-0'>
      <div className='flex justify-evenly w-screen mobile:flex mobile:flex-col mobile:gap-10 mobile:justify-center mobile:items-center'>
      <div className='flex justify-evenly items-center w-[20vw] h-fit mobile:w-[13rem]'>
        <img src={Img} className='w-50 bg-cover rounded-xl shadow-xl p-2 ' />
        <div className='text-xl flex justify-center items-center gap-1'>
        Start
        <button><SlArrowRightCircle />
</button>
        </div>
      </div>
      
      <div className='flex justify-evenly items-center w-[20vw] h-fit mobile:w-[12rem]'>
        <img src={Img} className='w-50 bg-cover rounded-xl shadow-xl p-2' />
        <div className='text-xl flex justify-center items-center gap-1 w-fit'>
        Start
        <button><SlArrowRightCircle />
</button>
        </div>
      </div>
      </div>
      <div className='flex w-[100%] h-[100%] justify-evenly items-center flex-col pt-10 mr-0 flex-wrap'>
        <h1 className=' text-2xl font-serif leading-tight tracking-tight mobile:pr-[4vw]'>
          EyeKatchy: Make your goodlooking Web App today!
        </h1>
        <div className='flex items-center w-fit flex-wrap'>
          {allitems.map((items,index)=>{
            return <div key={index} className={`flex justify-between items-center w-[16rem] `}>{items.name} : {items.link}
            
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Lastpage
