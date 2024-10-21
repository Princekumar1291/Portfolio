import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThreeScene from './components/Canvas'
import Home from './components/Home'
import "./App.css"

const App = () => {
  return (
    <div className='main w-full'>
      <Navbar />
      <div className="w-full h-screen overflow-hidden relative">
        <div className="absolute h-full mt-[77px] mx-8 z-50 w-[90%]">
          <Home />
        </div>
        <ThreeScene />
      </div>
      <Footer />
    </div>
  )
}

export default App
