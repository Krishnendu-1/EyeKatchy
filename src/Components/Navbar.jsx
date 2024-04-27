import React from 'react'
import { FaKipSign } from "react-icons/fa6";
import { CgComedyCentral } from "react-icons/cg";

function Navbar() {
  return (
    <div id='navbar-container' className='flex items-center justify-between bg-[#F5E9B9] w-[100%] h-14 fixed top-0 z-50 mobile:flex mobile:bg-blue-200 mobile:text-slate-900 mobile:justify-between mobile:flex-wrap mobile:w-full mobile:h-16'>
        <div className=' w-fit text-3xl m-1 mobile:w-screen mobile:flex mobile:justify-center mobile:items-center'> 
        <FaKipSign />
        </div>
      <div className=' w-[30vw] flex justify-between items-center pr-2 mobile:w-full'>{["Home","About us", "Our work", "Contact us"].map((item,index)=>{
      return <div className='flex justify-center items-center'> 
        <a key={index} className={`${index===3 && "ml-[5vw]"} `}>{item}</a>
        {index===3 && (<div className='flex justify-center items-center w-4 h-4 bg-gray-100 mt-1 ml-1 '><CgComedyCentral /></div>)}
      
      </div>
    })}</div>

    </div>
  )
}

export default Navbar
