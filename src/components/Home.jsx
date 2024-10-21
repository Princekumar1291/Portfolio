import React from 'react'
import profile from "../assets/profile.jpg"
const Home = () => {
  return (
    <div className='w-full flex justify-between items-center flex-col lg:flex-row h-[60vh] mx-auto '>
      <div className='border w-[500px] h-[300px] gap-y-4 flex flex-col px-12 py-6'>
        <h1 className='text-4xl font-bold'>Prince Kumar</h1>
        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eum corporis deleniti ex qui cupiditate id et laborum, excepturi sunt voluptates totam consequatur.</p>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md w-fit'>Download CV</button>
      </div>
      <div className='border'>
        <img 
          className='w-[300px] rounded-full animate-shadow-pulse'
          src={profile} 
          alt="profile" 
        />
        <style jsx>{`
          @keyframes shadowPulse {
            0% {
              box-shadow: 0 0 0 0px rgba(8, 112, 184, 0.7);
            }
            100% {
              box-shadow: 0 20px 50px 15px rgba(8, 112, 184, 0.7);
            }
          }
          .animate-shadow-pulse {
            animation: shadowPulse 2s ease-in-out infinite alternate;
          }
        `}</style>
      </div>
    </div>
  )
}

export default Home
