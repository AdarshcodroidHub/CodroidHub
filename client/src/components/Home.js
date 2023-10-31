import React from 'react'
import "../App.css"
import logo from "../assets/asset0.png"
import logo2 from "../assets/asset5.jpeg"
import logo3 from "../assets/asset6.jpeg"


const Home = () => {
  return (
    <div className=' bg-black  w-full'>
      {/* hero section  */}
       <section
      //   style={{
      //     backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      // }}
      
        className='w-full h-[800px] slider bg-black mt-[4rem]'>
         <div className='w-[1280px] flex mx-auto translate-y-[12rem]'>
            <div className=' flex  flex-col gap-[7rem]'>
               <div className='max-w-[400px] text-white '>
                  <h1> <span className=' uppercase text-[1.3rem] font-bold'> trust and client focus</span> <br/> <span className='text-[5rem]'>CodroidHub</span></h1>
                  <h1>Get professional & reliable research oriented solution for Data Science and Machine Learning business 
                    needs . Enjoy stress free decesion making!
                  </h1>
               </div>
               <div className='max-w-[400px]'>
                   <button className='w-[180px] font-black h-[55px] rounded-xl px-10 border-none text-white bg-[#5e6fb5] hover:bg-[#4d5ea1]' >Login</button>
               </div>
            </div>
         </div>
       </section>

       {/* second section */}
       <section className=' bg-black  w-full h-[630px] mb-20'>
           <div className=' w-[1080px] flex mx-auto gap-[5rem]'>
              <div className=' max-w-[360px] bg-white rounded-xl  mt-[-4rem]'>
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
              <div className=' translate-y-20 flex  flex-col gap-[3rem]'>
                <div className='max-w-[600px]  text-white flex flex-col gap-5'>
                   <h1 className=' uppercase text-white text-blue-500 font-bold'>about us </h1>
                   <h1 className=' text-[3rem]'>Empowering Education through Technological Advancements</h1>
                </div>
                <div className='max-w-[600px]'>
                    <h1 className='text-gray-500'>We are a leading provider of IT services for educational organizations 
                      across the country. Our team of highly trained professionals is dedicated 
                      to helping schools and universities leverage technology to improve their 
                      operations and optimize the learning experience for students.

                    </h1>
                </div>
              </div>
           </div>
       </section>
       

       {/* section professional */}
       <section className='w-full h-[550px]'
          style={{
              backgroundImage: `url(${logo2})`,
          }}
       >
          <div className=' max-w-[1080px] w-[800px] flex mx-auto translate-y-20 '>
            <h1 className=" text-[3rem] text-white text-center">
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
         <div className='w-[1280px] flex flex-col mx-auto  '>
             

            {/* card */}
              <div className=' flex  translate-y-[8rem] h-[520px]'>
                  <div className='w-[400px]  flex flex-col mt-10 '>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[6rem] text-[#d745c8]'>+50</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-white font-semibold'> employees from around  <br />the world</h1>
                      </div>
                  </div> 
                    <div className='w-[420px]  h-[270px] flex flex-col bg-white rounded-md p-10'>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[6rem] text-[#d745c8]'>+20</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-[#777272] font-semibold'> happy clients from largest <br />corporations</h1>
                      </div>
                    </div> 
                    <div className='w-[400px]  flex flex-col mt-10'>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[6rem] text-[#d745c8]'>+2</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-white font-semibold'> offices in 2 countries <br /> worldwide</h1>
                      </div>
                    </div> 
              </div>
          </div>
      </section>

    </div>
  )
}

export default Home