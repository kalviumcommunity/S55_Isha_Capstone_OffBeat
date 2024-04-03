// import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>

    </Routes>
  </BrowserRouter>
  )
}

export default App