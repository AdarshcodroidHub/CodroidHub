import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/logo.png"

 const NavBar = () => {
    const [isShow,setShow]=useState(false);
  return (
    <div className=' sticky w-full shadow-lg bg-[#f7f8fc] '>
        {/* desktop view */}

        <div className="hidden  md:flex w-[1080px] h-[85px] md:mx-auto md:items-center md:justify-between " >
        
            <div>
                <img src={logo} alt=""  className='w-full h-[40px]'/>
            </div>
            <div className='md:flex md:gap-10'>
                <NavLink to="" className=" ">Home </NavLink>
                <NavLink to="" className=""> About Us</NavLink>
                <NavLink to="" className="">Service</NavLink>
                <NavLink to="" className="">Course</NavLink>
                <NavLink to="" className="">Contact Us</NavLink>
            </div>
            <div className='md:flex md:gap-2'>
                <button className='w-full text-white font-black h-[50px] bg-[#d745c8] rounded-md px-10 '> Dashboard</button>
                <button className='w-full font-black h-[50px]  rounded-md px-10 border border-sky-500' >Login</button>
            </div>
        </div>

        {/* mobile view */}
        <div className="md:hidden flex flex-col w-full h-[65px]" >
           <div className="flex justify-between">
                <div className="flex "><img src={logo} alt="" className=' w-full h-[45px]' /></div>
                <div className="text-5xl px-7" onClick={()=>setShow(!isShow)}> 
                  {isShow?( <div>X</div> ):( <div>&#8801;</div> )}
                </div>
           </div>
           {
            isShow&&
             <div className="w-full bg-[#f0f1f4] shadow-xl rounded-lg flex flex-col absolute top-16 right-0 jus">
               <div className='flex mx-auto flex-col gap-2 p-7'>

                <NavLink to="" className=" text-[1.5rem]">Home </NavLink>
                <NavLink to="" className="text-[1.5rem]"> About Us</NavLink>
                <NavLink to="" className="text-[1.5rem]">Service</NavLink>
                <NavLink to="" className="text-[1.5rem]">Course</NavLink>
                <NavLink to="" className="text-[1.5rem]">Contact Us</NavLink>
               </div>
                <div className='flex gap-4 flex-col mx-auto pb-10'>
                    <button className='w-[200px] text-white font-black h-[50px] bg-[#4e5dc0] rounded-md px-10 '> Dashboard</button>
                    <button className='w-[200px] font-black h-[50px]  rounded-md px-10 border border-sky-500' >Login</button>
                </div>
            
              </div>
              
           }
         
            
        </div>

    </div>
  )
}
export default NavBar