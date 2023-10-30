import React from 'react'
import logo from "../assets/logo.png"
import stairlogo from "../assets/stairs.png"
import tree from "../assets/treer.jpg"
import bg2 from "../assets/bg2.png";
import BhawanaSaini from "../assets/BhawanaSaini.jpg"
import Devashish from "../assets/Devashish.jpg"

const Home = () => {
  return (
    <div className=' flex mx-auto flex-col '>
        <section className='w-[1080px]  md:flex  mx-auto   flex-wrap gap-[10rem] h-[400px]'>
            {/* left */}
              <div className=' max-w-[400px] flex flex-col mt-10 gap-20'>
                <div >
                  <p className='text-[1.5rem]'>TRUSt AND CLIENT FOCUS <br /> <span className='text-[5rem]'>CodroidHub</span></p>
                
                  <p className='text-[1rem] '>Get professional & reliable research oriented solution for data Science  and Machine Learning business needs .Enjoy 
                    stress free descision!
                  </p>
                 
                </div>
                <button className=' w-[150px] text-white font-black h-[50px] bg-[#d745c8] rounded-lg px-5 '> Dashboard</button>
            
            </div>
            {/* right */}
            <div  className=' max-w-[400px] mt-[10rem]'>
                <img src={logo} alt="" />
            </div>
      </section>

        {/* our approach */}
        <section className=' w-[1080px]  flex mx-auto  mt-[10rem] h-[200px]'>
          <div className='px-2'>
                
                  <p className='text-[50px] font-semibold '>OUR APPROACH FROM START TO GROWTH</p>
                
                  <p className='text-[1rem] px-5'>Get professional & reliable research oriented solution for data Science  and Machine Learning business needs .Enjoy 
                    stress free descision!
                  </p>
                 
              
              
            </div>
        </section>

        <section className='w-[1080px]  md:flex  mx-auto flex-wrap gap-5 '>
            {/* left */}
            <div  className=' justify-center mt-20'>
                <img src={stairlogo} alt="" className='w-[560px] h-[500px]'/>
            </div>
            
            {/* right */}
            <div className='w-[500px] flex flex-col  gap-8'>
                <div className='w-[500px]' >
                  
                <p className='text-[3.5rem] font-bold'>We do <br /> <span className='text-[#d745c8]'>Success</span> <br /> <span className='text-[#d745c8]'> Probability</span> <br /> <span  className='text-[#d745c8]'> Research</span> <br />before accepting your project</p>
                
                </div>
                <div className='w-full'>
                  <p>Research is a very important part that we start with, even before starting the 
                    project to see the success probability percentage of that venture. For that, we
                     understand the market demand in terms of searches on search engines, competition,
                      conversion percentage in the industry, check trends on both pulls & push media platforms 
                      like Facebook, LinkedIn, Twitter, Google, do a gap analysis. We also go through paid business reports 
                    of Industry trends and forecasts, along with publicly available data through usually government sources.</p>
                </div>
               
            </div>
      </section>

      {/* out experise */}
      <section className=' mt-[5rem] bg-[#ededed] '>
          <div className='w-[1080px] flex flex-col mx-auto'>
              <div className=' flex mx-auto'>
                <h1 className='text-[8rem] font-bold flex mx-auto'>Our Expertise</h1>
              </div>

            {/* card */}
              <div className=' flex gap-7 mt-[8rem] pb-20'>
                  <div className='w-[350px]  p-10 flex flex-col gap-5 bg-white border-b-4 shadow-xl border-[#7985d2] rounded-lg  border-rad
                  transform transition duration-500 hover:scale-110
                  '>
                      <div className='flex  flex-col mx-auto'>
                        <img src={tree} alt="" className='w-[100px] h-[100px] ' />
                          <h1 className=' font-bold'>MentorShip</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-gray-500'> 
                            Data structures are the problem-solving pillars of coding. Learn all the 
                          foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.
                        </h1>
                      </div>
                    </div>
                 
                    <div className='w-[350px]  p-10 flex flex-col gap-5 bg-white border-b-4 shadow-xl border-[#f5d0fe]  border-rad
                    transform transition duration-500 hover:scale-110'>
                        <div className='flex  flex-col mx-auto'>
                          <img src={tree} alt="" className='w-[100px] h-[100px] ' />
                            <h1 className=' font-bold'>Design</h1>
                        </div>
                        <div className='flex  flex-col mx-auto' >
                          <h1 className=' text-center text-gray-500'> 
                              Data structures are the problem-solving pillars of coding. Learn all the 
                            foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.
                          </h1>
                        </div>
                    </div>
                  <div className='w-[350px]  p-10 flex flex-col gap-5 bg-white border-b-4 shadow-xl border-[#1dd1a1]  border-rad
                  transform transition duration-500 hover:scale-110'>
                      <div className='flex  flex-col mx-auto'>
                        <img src={tree} alt="" className='w-[100px] h-[100px] ' />
                          <h1 className=' font-bold'>Consultancy</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-gray-500'> 
                            Data structures are the problem-solving pillars of coding. Learn all the 
                          foundational knowledge about all of the popular data structure that you need, to be well-versed in interviews.
                        </h1>
                      </div>
                   </div>
              </div>
          </div>
      </section>


      {/* our approach */}
      <section className='bg-[#5865f2]'
     >
         <div className='w-[1080px] flex flex-col mx-auto m-10 '>
             

            {/* card */}
              <div className=' flex'>
                  <div className='w-[400px]  flex flex-col border-e-4 border-gray-800  '>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[8rem] text-[#d745c8]'>+50</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-[#1f1d1d] font-semibold'> employees from around  <br />the world</h1>
                      </div>
                  </div> 
                    <div className='w-[400px]  flex flex-col border-e-4 border-gray-800 '>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[8rem] text-[#d745c8]'>+20</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-[#1f1d1d] font-semibold'> happy clients from largest <br />corporations</h1>
                      </div>
                    </div> 
                    <div className='w-[400px]  flex flex-col'>
                      <div className='flex  flex-col mx-auto'>
                          <h1 className=' text-[8rem] text-[#d745c8]'>+2</h1>
                      </div>
                      <div className='flex  flex-col mx-auto' >
                        <h1 className=' text-center text-[#1f1d1d] font-semibold'> offices in 2 countries <br /> worldwide</h1>
                      </div>
                    </div> 
              </div>
          </div>
      </section>


      <section  
    //    style={{
    //     backgroundImage: `url(${bg2})`,
    // }}
      
       className='w-full '>
        <div className=' flex justify-center  p-20 gap-10'>
          <div className=' w-[500px]'>
             <h1 className='text-[2.5rem] font-semibold '>Seamless Integration of Education and Technology Expertise</h1>
          </div>
          <div  className='w-[700px]  flex flex-col gap-10'>
             <h1 className='font-semibold'>At CodroidHub, we believe that every individual and business should have 
             access to the resources and tools needed to succeed in today’s ever-evolving IT landscape. We are committed to
              providing our clients with the best possible service and support,
              and we look forward to helping you achieve your educational goals
             </h1>
             <button className=' w-[150px] text-white font-black h-[50px] bg-[#d745c8] rounded-lg px-5 '> All Services</button>
            
          </div>
        </div>
      </section>


      {/* we make connetion  */}
      <section className='mt-[5rem]'>
           
           <div className='flex flex-col mx-auto'>
              <h1 className=' text-[#d745c8] font-semibold text-center'>WE MAKE CONNECTIONS</h1>
              <h1 className=' text-[2.5rem] font-bold text-center'>
                  Discover Trust Team <br /> and Our Experts
              </h1>
           </div>
           <div className='w-[1080px] flex flex-col mx-auto'>
              

            {/* card */}
              <div className=' flex gap-7 mt-[8rem] pb-20'>
                    <div >
                      <img src={Devashish} alt="imag not loaded "
                       className='w-[350px]  bg-cover  h-[400px] rounded-lg '/>
                         
                     
                      <div>
                         <h1 className='text-[2rem] text-center text-gray-700'>R. P. Gupta</h1>
                         <h1 className='text-center text-gray-500'>CEO / Chairman</h1>
                      </div>
                    </div>
                    <div >
                    <img src={Devashish} alt="imag not loaded "
                       className='w-[350px]  bg-cover  h-[400px] rounded-lg '/>
                         
                      <div>
                         <h1 className='text-[2rem] text-center text-gray-700'>Devashish Kumar</h1>
                         <h1 className='text-center text-gray-500'>Founder</h1>
                      </div>
                    </div>
                    <div >
                    <img src={BhawanaSaini} alt="imag not loaded "
                       className='w-[350px]  bg-cover  h-[400px] rounded-lg '/>
                         
                     
                      <div>
                         <h1 className='text-[2rem] text-center text-gray-700'>Bhawana Saini</h1>
                         <h1 className='text-center text-gray-500'>Program Manager</h1>
                      </div>
                    </div>
                   
              </div>
          </div>
           
           
      </section>
    </div>
  )
}

export default Home