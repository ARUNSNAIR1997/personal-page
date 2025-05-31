import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SideBar from './components/sidebar'
import HomePage from './components/home'
import AboutPage from './components/about'
import Education from './components/skills'
import Experience from './components/experience'
import Projects from './components/project'
import Contact from './components/contact'
import Footer from './components/footer'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/side" element={<SideBar/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/project' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
