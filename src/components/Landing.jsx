import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import img from "../images/landingimg.jpg";
import About from './About';
import Footer from './Footer';
import useAuth from '../utils/AuthUtils';

const Landing = () => {
  const { signOut } = useAuth();
  let token = localStorage.getItem('token');
  useEffect(()=>{
    token = localStorage.getItem('token');
  })

  return (
    <>
      <div className="relative h-screen"> 
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between p-8">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-goChiHand text-6xl tracking-tight">Turn the page</span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow ml-8">
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                duration={1500}
                className="block mt-4 px-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 text-xl font-bold cursor-pointer"
              >
                About us
              </ScrollLink>
              <ScrollLink
                to="footer"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1800}
                className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white text-xl font-bold cursor-pointer"
              >
                Contact us
              </ScrollLink>
            </div>
            <div>
              {
                !token ? <Link to={'/login'} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 rounded bg-opacity-70 py-3'> Log in </Link> : <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded bg-opacity-70' onClick={signOut}>
                  Log out 
                </button>
              }
            </div>
          </div>
        </nav>
        {/* Image */}
        <div className='absolute z-20 flex justify-center left-0 right-0 bottom-0 top-0 mt-[450px] items-center'>
       <Link to='/home'  className="text-5xl font-bold px-6 py-3 leading-none text-gray-200 rounded-lg focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-gray-900 from-gray-900 to-black font-goChiHand  ">
                  GET STARTED
       </Link>
        </div>
        <img className='absolute top-0 left-0 w-full h-full object-cover opacity-95' src={img} alt="Landing image" />
      </div>
      <About  />
      <Footer  />
    </>
  );
};

export default Landing;
