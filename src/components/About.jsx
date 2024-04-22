import React from 'react'
import about from '../images/about1.avif'

const About = () => {
  return (
    <>
      <div id="about" className='relative max-h-screen'>
        <img className='h-screen object-cover opacity-50 w-screen' src={about} alt="" /> 

        <div className='absolute top-0 left-0 w-full'>
          <h1 className='font-great text-9xl text-black text-center pt-8 mb-10 underline'>About us</h1>  
          <div className="mission absolute top-20 pt-20 left-16 text-black">
            <h1 className='font-great text-6xl font-bold'>Our Mission</h1>
            <p className=' text-3xl font-mono text-justify pr-20 pt-3'>Welcome to Turn the Page, the AI-powered storytelling platform that transforms your ideas into captivating narratives. Our mission is to empower you to unleash your creativity while providing expert guidance and support every step of the way.</p>
            <h1 className='font-great text-6xl pt-10 font-bold'>What is Turn the Page?</h1>
            <p className=' text-3xl font-mono text-justify pr-20 pt-3'>Turn the Page is your AI-driven storytelling companion, empowering writers of all levels. Whether you're new to storytelling or a seasoned pro, our platform guides you through crafting captivating narratives. From brainstorming to polishing, our intuitive suggestions enhance your storytelling experience. With Turn the Page, your creativity leads the way. Join us on the journey where imagination knows no bounds.</p>
          </div>
        </div>   
      </div>
    </>
  )
}

export default About
