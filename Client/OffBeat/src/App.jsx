// import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/Aboutus'
// import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/about" element={<About />} />
      {/*<Route path="/login" element={<Login />} />*/}
      <Route path="/signup" element={<Signup />} />
     

    </Routes>
  </BrowserRouter>
  )
}

export default App