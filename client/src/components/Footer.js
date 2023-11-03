import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/asset0.png"
import bg from "../assets/asset7.jpeg"


const Footer = () => {
  return (

<footer 
className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex gap-14 mt-10">
          <div className="mb-6 md:mb-0 md:w-[400px]  flex flex-col md:items-start items-center text-white gap-10 md:border-e-2 border-gray-800">
              <a href="" className="flex items-center">xd
                  <img src={logo} class="h-8 mr-3" alt="FlowBite Logo" />
                
              </a>
              <h1 className='md:w-[300px] md:text-start text-center'> 
                Unlock Your Potential with CodoidHub: Educational Solutions Tailored to You</h1>
          </div>
          <div className=" mb-6 md:mb-0 w-[400px]  flex flex-col md:items-start items-center text-white gap-10 md:border-e-2 border-gray-800">
              <a href="" class="flex items-center">
                  <h1>Contact Us</h1>
                
              </a>
              <h1 className='md:w-[250px] md:text-start text-center '> 
              Head Office:-Flat No. K-401 NTPC Shanti Vihar – Khajpura, Patna – Bihar, India – 800014</h1>
          </div>
          <div className="mb-6 md:mb-0 w-[400px]  flex flex-col md:items-start items-center text-white gap-10 md:border-e-2 border-gray-800">
             <div className='flex flex-col gap-7'>
                <h1>Call For Support</h1>
               <div className=' flex flex-col'>
                    <a src="" className=' text-[#d745c8]'>9138555661</a>
                    <a src="" className=' text-[#d745c8]'>9138555663</a>
               </div>
             </div>
             <div>
                <a  className=' text-[#7d2673]' src="mailto:programmanager@codroidhub.com">programmanager@codroidhub.com</a>
             </div>
              
              
          </div>
         
      </div>
      <br/>
      <br/>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between flex flex-col md:flex-row md:items-start items-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2023  <a href="https://flowbite.com/" class=" text-blue-400  hover:text-blue-500 ">CodroidHub</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-gray-300">
                <NavLink to="" className="text-blue-300  hover:text-blue-300">Home </NavLink>
                <NavLink to="" className=" hover:text-blue-300"> About Us</NavLink>
                <NavLink to="" className=" hover:text-blue-300">Service</NavLink>
                <NavLink to="" className=" hover:text-blue-300">Course</NavLink>
                <NavLink to="" className=" hover:text-blue-300">Contact Us</NavLink>
          </div>
      </div>
    </div>
</footer>

       

   
  
  )
}

export default Footer