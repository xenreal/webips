import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Link } from 'react-router-dom'

const FullNav = ({ isOpen, setIsNavOpen }) => {
  const navParent = useRef(null)

  useGSAP(
    () => {
      const tl = gsap.timeline()

      if (isOpen) {
        // 1. Initial State: Make sure nav is visible and bars are up
        gsap.set(navParent.current, { autoAlpha: 1 })
        gsap.set(".nav-stair", { y: "-100%" })
        gsap.set(".nav-content", { opacity: 0 })

        // 2. Bars drop DOWN to cover screen
        tl.to(".nav-stair", {
          y: "0%",
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: "start",
          },
          ease: "expo.inOut",
        })

        // 3. Reveal links while bars are covering
        tl.to(".nav-content", {
          opacity: 1,
          duration: 0.3,
        })

        // 4. Bars move down and disappear to reveal the menu
        tl.to(".nav-stair", {
          y: "100%",
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: "start",
          },
          ease: "expo.inOut",
        })
      } else {
        // Simple fade out when closing
        gsap.to(navParent.current, { 
          autoAlpha: 0, 
          duration: 0.5,
          ease: "power2.inOut" 
        })
      }
    },
    { scope: navParent, dependencies: [isOpen] }
  )

  return (
    <div
      ref={navParent}
      className="fixed top-0 left-0 h-screen w-full z-[9998] invisible pointer-events-auto bg-black"
    >
      {/* STAIR LAYER (Inside FullNav) */}
      <div className="absolute top-0 left-0 h-full w-full flex z-[100] pointer-events-none overflow-hidden">
        <div className="nav-stair h-full w-1/5 bg-white" />
        <div className="nav-stair h-full w-1/5 bg-white" />
        <div className="nav-stair h-full w-1/5 bg-white" />
        <div className="nav-stair h-full w-1/5 bg-white" />
        <div className="nav-stair h-full w-1/5 bg-white" />
      </div>

      {/* MENU CONTENT */}
      <div className="nav-content relative z-10 h-full w-full flex flex-col items-center justify-center overflow-y-auto">
        
        <button 
          onClick={() => setIsNavOpen(false)}
          className="absolute top-2 left-2 text-white font-[font1] font-bold border-2 uppercase text-[2vw] px-5 cursor-pointer
                  transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black mb-5"
        >
          X
        </button>

        <div className='w-full flex flex-col items-center pt-20 pb-6'>
          <Link to="/projects" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            Projects
          
          </Link>

          <Link to="/about" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            About Us
          
          </Link>

          <Link to="/domains" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            Domain
          
          </Link>

          <Link to="/events" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            Events
          
          </Link>

          <Link to="/team" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            Team
          
          </Link>


         
          <Link to="/contacts" className='font-[font1] font-bold border-y-2 border-white text-[4vw] p-2 uppercase text-white w-full text-center
                  cursor-pointer transition-colors duration-500 ease-in-out
                  hover:bg-[#D3FD50] hover:text-black' onClick={() => setIsNavOpen(false)}>
          
            Contact
          
          </Link>

        </div>
      </div>
    </div>
  )
}

export default FullNav