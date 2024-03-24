import React from 'react'
import "./App.css"
import Navbar from "./components/Navbar"
import {HeroSection}  from './components/HeroSection'
import Features from './components/Features'
import Workflox from './components/Workflox'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <Features id="features"/>
    <Workflox />
    <Footer/>
  </div>
  )
}

export default App