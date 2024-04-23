import React from 'react'
import { FaKipSign } from "react-icons/fa6";
import { CgComedyCentral } from "react-icons/cg";

function Navbar() {
  return (
    <div id='navbar-container' className='flex items-center justify-between bg-[#F5E9B9] w-full h-14 fixed top-0 z-50'>
        <div className=' max-w-fit text-3xl rounded-xl border-[#fefae0] border-2 m-1'> 
        <FaKipSign />
        </div>
      <div className=' w-[30vw] flex justify-between items-center mr-2'>{["Home","About us", "Our work", "Contact us"].map((item,index)=>{
      return <div className='flex justify-center items-center'> 
        <a key={index} className={`${index===3 && "ml-[5vw]"} `}>{item}</a>
        {index===3 && (<div className='flex justify-center items-center w-4 h-4 bg-gray-100 mt-1 ml-1 '><CgComedyCentral /></div>)}
      
      </div>
    })}</div>

    </div>
  )
}

export default Navbar
