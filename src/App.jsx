import React, { useRef } from "react"
import Navbar from "./Components/Navbar"
import Eyes from "./Components/Eyes"
import Aboutsection from "./Components/Aboutsection"
import Lastpage from "./Components/Lastpage"
import LocomotiveScroll from 'locomotive-scroll';
function App() {
 

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-[#f5f5dc]">
      <Navbar />
      <Eyes/> 
      <div 
      data-scroll data-scroll-section data-scroll-speed=".2"
       >
      <Aboutsection/>
      <Lastpage/>
      </div>
    </div>
  )
}

export default App
