import React from 'react'
import "../App.css"
import logo from "../assets/asset0.png"
import logo2 from "../assets/asset5.jpeg"
import logo3 from "../assets/asset6.jpeg"
import Devashish from "../assets/asset2.jpeg" 
import  BhawanaSaini from "../assets/asset3.jpeg" 




const Home = () => {
  return (
    <div className=' bg-black  w-full  '>

      {/* hero section  */}
       <section
      //   style={{
      //     backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      // }}
      
        className='w-full h-[800px] slider bg-black '>
         <div className='md:w-[1280px] w-[400px] flex mx-auto '>
            <div className=' flex  flex-col gap-[7rem] mt-[8rem] '>
               <div className='md:max-w-[400px] text-white flex flex-col md:item-start '>
                  <h1> <span className=' uppercase text-[1.3rem] font-bold md:items-start '> trust and client focus</span> <br/> <span className='text-[5rem]'>CodroidHub</span></h1>
                  <h1>Get professional & reliable research oriented solution for Data Science and Machine Learning business 
                    needs . Enjoy stress free decesion making!
                  </h1>
               </div>
               <div className='max-w-[400px]  flex items-center'>
                   <button className='w-[180px] font-black h-[55px] rounded-xl px-10 border-none text-white bg-[#5e6fb5] hover:bg-[#4d5ea1]' >Login</button>
               </div>
            </div>
         </div>
       </section>

       {/* second section */}
       <section className=' bg-black  w-full  mb-20'>
           <div className=' md:w-[1080px] flex md:flex-row flex-wrap md:mx-auto gap-[4rem]'>
              <div className=' max-w-[360px] bg-white rounded-xl  md:mt-[-4rem] mt-[2rem] mx-auto'>
                <div className='flex  flex-col gap-3 p-12'>
                    <div className=' flex mx-auto gap-[2rem] pb-10 border-b-2 border-gray-300'>
                       <div>
                         <img src={logo} className=' w-[100px] h-[40px]'></img>
                       </div>
                       <div className=' flex  flex-col gap-5'>
                          <h1 className=' text-black text-[22px]'>Quality  Services</h1>
                          <h1 className='text-gray-500'> We Help clients save time by conducting research into trends</h1>
                       </div>
                    </div>
                    <div className=' flex mx-auto pb-10 gap-[2rem] border-b-2 border-gray-300'>
                       <div>
                         <img src={logo} className=' w-[100px] h-[40px]'></img>
                       </div>
                       <div className=' flex  flex-col gap-5'>
                          <h1 className=' text-black text-[22px]'>Quality  Services</h1>
                          <h1 className='text-gray-500'> We Help clients save time by conducting research into trends</h1>
                       </div>
                    </div>
                    <div className=' flex mx-auto pb-10 gap-[2rem] border-b-2 border-gray-300'>
                       <div>
                         <img src={logo} className=' w-[100px] h-[40px]'></img>
                       </div>
                       <div className=' flex  flex-col gap-5'>
                          <h1 className=' text-black text-[22px]'>Quality  Services</h1>
                          <h1 className='text-gray-500'> We Help clients save time by conducting research into trends</h1>
                       </div>
                    </div>
                </div>
              </div>
              <div className=' translate-y-20 flex  flex-col mx-auto md:gap-[3rem]'>
                <div className='max-w-[550px]  text-white flex flex-col gap-5'>
                   <h1 className=' uppercase text-white text-center md:text-start font-bold'>about us </h1>
                   <h1 className=' text-[3rem] text-center md:text-start'>Empowering Education through Technological Advancements</h1>
                </div>
                <div className='max-w-[520px] mb-10'>
                    <h1 className='text-gray-500 text-center md:text-start'>We are a leading provider of IT services for educational organizations 
                      across the country. Our team of highly trained professionals is dedicated 
                      to helping schools and universities leverage technology to improve their 
                      operations and optimize the learning experience for students.

                    </h1>
                </div>
              </div>
           </div>
       </section>
       

       {/* section professional */}
       <section className='w-full md:h-[550px] h-[400px]'
          style={{
              backgroundImage: `url(${logo2})`,
          }}
       >
          <div className=' max-w-[1080px] md:w-[800px] flex mx-auto translate-y-20 '>
            <h1 className=" md:text-[3rem] text-[2rem] text-white text-center">
            We are <span className=' text-[#d745c8]'>professional</span> team, over 5 years of experience passionate about <span className=' text-[#d745c8]'>our work</span>
            </h1>
          </div>
       </section>


       <section  
       style={{
        backgroundImage:`url('${logo3}')`
       }}
       className='bg-[#5865f2]'
     >
         <div className='md:w-[1080px] flex  mx-auto  '>
             

            {/* card */}
              <div className=' flex  md:translate-y-[8rem] h-[550px] md:flex-row  flex-col mx-auto gap-10'>
                  <div className='md:w-[350px] w-[300px] md:mt-10 flex-wrap items-center'>
                      <div className='flex  flex-col mx-auto '>
                          <h1 className=' md:text-[6rem] text-[3rem] text-[#d745c8] text-center'>+50</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-white font-semibold'> employees from around  <br />the world</h1>
                      </div>
                  </div> 
                    <div className='md:w-[350px] w-[350px]  md:h-[270px]  h-[200px] flex flex-col bg-white rounded-md p-10   mt-2'>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' md:text-[6rem] text-[3rem] text-[#d745c8]'>+20</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-[#777272] font-semibold'> happy clients from largest <br />corporations</h1>
                      </div>
                    </div> 
                    <div className='md:w-[400px] w-[300px]  flex flex-col md:mt-10'>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' md:text-[6rem] text-[3rem] text-[#d745c8]'>+2</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-white font-semibold'> offices in 2 countries <br /> worldwide</h1>
                      </div>
                    </div> 
              </div>
          </div>
      </section>

      <section >
        <div className='md:w-[1150px] flex  mx-auto'>
            <div className=' flex    mt-[6rem] gap-16 md:flex-row flex-col mx-auto '>
                <div className='md:max-w-[500px] w-[400px] text-white flex flex-col gap-2'>
                  <h1 className=' uppercase text-[#5e6fb5] text-center md:text-start'>OUR SERVICE</h1>
                  <h1 className=' text-[3rem] leading-10.1 text-center md:text-start'>Seamless Integration of Education and Technology Expertise</h1>
                </div>
                 <div className='md:max-w-[450px] w-[400px] text-gray-400 flex flex-col gap-7'>
                    <h1 className='leading-7'>At CodroidHub, we believe that every individual and business should have access to the resources 
                    and tools needed to succeed in today’s ever-evolving IT landscape. We are committed to providing our
                    clients with the best possible service and support, and we look forward to helping you achieve your
                      educational goals.</h1>
                    <button className='w-[180px]  h-[55px] rounded-xl px-10 border-none text-white bg-[#5e6fb5] hover:bg-[#4d5ea1]' >All Services</button>
                 </div>
            </div>
            
                        
        </div>

        <div className='max-w-[500px] h-[300px] text-white flex flex-col mx-auto text-center mt-[6rem]'>
              <h1 className=' uppercase text-[#5e6fb5] text-[18px]'>WE MAKE CONNECTIONS</h1>
              <h1 className=' text-[3rem]'>Discover Trust Team and Our Experts</h1>
        </div>
       
         
      </section>
      <section className=' w-full '>
           <div className='md:w-[1080px] w-full flex md:flex-row flex-col mx-auto gap-7  pb-20'>
              <div className=' flex flex-col gap-5 mx-auto' >
                  <img src={Devashish} alt="imag not loaded "
                  className='w-[350px]  bg-cover  h-[350px] rounded-lg '/>
                    
                
                  <div>
                    <h1 className=' text-[25px] text-center text-white'>R. P. Gupta</h1>
                    <h1 className='text-center text-gray-500'>CEO / Chairman</h1>
                  </div>
              </div>
              <div className=' flex flex-col gap-5 mx-auto'>
                <img src={Devashish} alt="imag not loaded "
                  className='w-[350px]  bg-cover  h-[350px] rounded-lg '/>
                    
                  <div>
                    <h1 className='text-[25px] text-center text-white'>Devashish Kumar</h1>
                    <h1 className='text-center text-gray-500'>Founder</h1>
                  </div>
              </div>
              <div  className=' flex flex-col gap-5 mx-auto'>
                <img src={BhawanaSaini} alt="imag not loaded "
                  className='w-[350px]  bg-cover  h-[350px] rounded-lg '/>
                    
                
                  <div>
                    <h1 className='text-[25px] text-center text-white'>Bhawana Saini</h1>
                    <h1 className='text-center text-gray-500'>Program Manager</h1>
                  </div>
              </div>
                   
            </div>
      </section>
    </div>
  )
}

export default Home