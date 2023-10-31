import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/asset0.png"

 const NavBar = () => {
    const [isShow,setShow]=useState(false);
  return (
    <div className=' sticky w-full shadow-lg bg-[#222328] text-white'>
        {/* desktop view */}  
        <div className="hidden  md:flex w-[1080px] h-[105px] md:mx-auto md:items-center md:justify-between" >
        
            <div>
                <img src={logo} alt=""  className='w-full h-[40px]'/>
            </div>
            <div className='md:flex md:gap-10 '>
                <NavLink to="" className=" font-bold">Home </NavLink>
                <NavLink to="" className="font-bold"> About Us</NavLink>
                <NavLink to="" className="font-bold">Service</NavLink>
                <NavLink to="" className="font-bold">Course</NavLink>
                <NavLink to="" className="font-bold">Contact Us</NavLink>
            </div>
            <div className='md:flex md:gap-2'>
                <button className='w-[130px] text-white  h-[55px] bg-[#6c696c] shadow-sm border-blue-300 rounded-md hover:bg-[#5972c5] hover:transiction-500'> 
                    Login
                </button>
                 </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex flex-col w-full h-[65px] bg-[#222328] text-white" >
           <div className="flex justify-between bg-[#222328] text-white">
                <div className="flex "><img src={logo} alt="" className=' w-full h-[45px]' /></div>
                <div className="text-5xl px-7" onClick={()=>setShow(!isShow)}> 
                  {isShow?( <div>X</div> ):( <div>&#8801;</div> )}
                </div>
           </div>
           {
            isShow&&
             <div className="w-full bg-[#222328] text-white shadow-xl rounded-lg flex flex-col absolute top-16 right-0 jus">
               <div className='flex mx-auto flex-col gap-2 p-7 bg-[#222328] text-white'>

                <NavLink to="" className=" text-[1.5rem]">Home </NavLink>
                <NavLink to="" className="text-[1.5rem]"> About Us</NavLink>
                <NavLink to="" className="text-[1.5rem]">Service</NavLink>
                <NavLink to="" className="text-[1.5rem]">Course</NavLink>
                <NavLink to="" className="text-[1.5rem]">Contact Us</NavLink>
               </div>
                <div className='flex gap-4 flex-col mx-auto pb-10 bg-[#222328] text-white'>
                    <button className='w-[200px] text-white font-black h-[50px] bg-[#63656f] rounded-md px-10 '> Login</button>
                </div>
            
              </div>
              
           }
         
            
        </div>

    </div>
  )
}
export default NavBar