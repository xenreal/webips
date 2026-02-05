import React from 'react'
import logo from '../../assets/logo.svg'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ setIsNavOpen }) => {
  const navGreenRef = useRef(null)

  return (
    <>
      <div className='flex fixed top-0 w-full items-start justify-between z-40 p-4 md:p-2'>
        
        {/* Logo Container: Scaled for mobile */}
        <div className='p-0'>
          <Link 
            to="/"  
            className='w-20 sm:w-24 md:w-30 block cursor-pointer' 
            onClick={() => setIsNavOpen(false)} 
          >
            <img src={logo} className='w-full' alt="Logo" />
          </Link>
        </div>

        {/* Menu Toggle: Width adjusted for mobile (w-[25vw] to w-[14vw]) */}
        <div
          onClick={() => setIsNavOpen(true)}
          onMouseEnter={() => {
            navGreenRef.current.style.height = '100%'
          }}
          onMouseLeave={() => {
            navGreenRef.current.style.height = '0%'
          }}
          className='h-10 md:h-12 bg-black relative w-[25vw] sm:w-[20vw] md:w-[14vw] cursor-pointer overflow-hidden rounded-bl-xl'
        >
          {/* Background Hover Layer */}
          <div
            ref={navGreenRef}
            className='bg-[#D3FD50] transition-all duration-300 absolute top-0 h-0 w-full'
          ></div>

          {/* Hamburger Icon Lines */}
          <div className='relative h-full px-4 sm:px-8 lg:px-12 flex flex-col justify-center items-end gap-1 md:gap-1.5'>
            {/* Top Line */}
            <div className="w-10 sm:w-12 lg:w-18 h-[2px] bg-white group-hover:bg-black transition-colors"></div>
            {/* Bottom Line (Shorter) */}
            <div className="w-6 sm:w-8 lg:w-10 h-[2px] bg-white group-hover:bg-black transition-colors"></div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Navbar