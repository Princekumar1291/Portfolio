import React from 'react'
import profile from "../assets/profile.jpg"
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  return (
    <div className='w-full flex justify-between items-center flex-col lg:flex-row h-[60vh] mx-auto'>
      <div className='w-full lg:w-[500px] h-[300px] gap-y-4 flex flex-col px-12 py-6 my-6 lg:my-0'>
        {/* <h1 className='text-4xl font-bold'>Prince Kumar</h1> */}
        <TypeAnimation
          sequence={[
            'I am Prince Kumar',
            1000,
            'I am Full Stack Developer',
            1000,
            'I am App Developer',
            1000,
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            fontSize: '2em',
            fontWeight: 'bold',
            display: 'inline-block',
            background: 'linear-gradient(45deg, #ff00ff, #00ffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        />
        <p className='md:text-lg'>
          {'->'} Passionate full-stack developer specializing in creating dynamic web applications and mobile apps. <br />
          {'->'} Currently pursuing a B.Tech in Computer Science, I bring ideas to life through code, crafting seamless user experiences and robust backend solutions. <br />
          {'->'} Always eager to learn and innovate in the ever-evolving world of technology.
        </p>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md w-fit'
          onClick={() => {
            window.open('https://drive.google.com/file/d/1GLXA93qLzExGVIh-QKW5jZFwMeqRpCbN/view?usp=sharing', '_blank');
          }}
        >
          Open CV
        </button>
      </div>
      <div className='hidden lg:block'>
        <img
          className='w-[300px] rounded-full animate-shadow-pulse'
          src={profile}
          alt="profile"
          style={{
            transform: 'perspective(1000px) rotateY(20deg)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            transition: 'transform 0.5s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateY(20deg)';
          }}
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
