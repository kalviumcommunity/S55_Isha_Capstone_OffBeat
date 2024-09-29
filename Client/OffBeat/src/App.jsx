// import { useState } from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutUs from './Components/Aboutus'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Cards from './Components/Cards'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {<Route path="/contact" element={<Contact />} /> }
      {<Route path="/about" element={<AboutUs />} /> }
      {<Route path="/login" element={<Login />} />} 
      { <Route path="/signup" element={<Signup />} /> } 
      { <Route path="/cards" element={<Cards />} /> } 

     

    </Routes>
  </BrowserRouter>
  )
}

export default App