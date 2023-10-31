import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"

import {  Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className=" bg-black w-full h-full">
        <NavBar/>
      <section className="">
        <Routes>
          <Route exact  path="/" element={<Home/>}/>
        </Routes>
      </section>
      {/* <Footer/>  */}
    </div>
  )
}

export default App
