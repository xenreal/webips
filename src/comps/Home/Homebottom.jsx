import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    /* flex-wrap allows them to stack on mobile. 
       gap-4 provides breathing room between buttons. */
    <div className='font-[font2] flex flex-wrap items-center justify-center gap-4 p-4'>
      
      {/* Projects */}
      <div className='border-3 h-16 md:h-20 hover:border-green-400 hover:text-green-400 flex items-center px-8 md:px-10 pb-4 border-white rounded-full uppercase transition-all'>
        <Link className='text-[4vw] md:text-[1.5rem] lg:text-[1.75rem] mt-6 whitespace-nowrap' to='/projects'> Projects </Link>
      </div>

      {/* Innovations */}
      <div className='border-3 h-16 md:h-20 hover:border-green-400 hover:text-green-400 flex items-center px-8 md:px-10 pb-4 border-white rounded-full uppercase transition-all'>
        <Link className='text-[4vw] md:text-[1.5rem] lg:text-[1.75rem] mt-6 whitespace-nowrap' to='/innovations'> Innovations </Link>
      </div>

      {/* Hackathons */}
      <div className='border-3 h-16 md:h-20 hover:border-green-400 hover:text-green-400 flex items-center px-8 md:px-10 pb-4 border-white rounded-full uppercase transition-all'>
        <Link className='text-[4vw] md:text-[1.5rem] lg:text-[1.75rem] mt-6 whitespace-nowrap' to='/hackathons'> Hackathons </Link>
      </div>

      {/* Workshops */}
      <div className='border-3 h-16 md:h-20 hover:border-green-400 hover:text-green-400 flex items-center px-8 md:px-10 pb-4 border-white rounded-full uppercase transition-all'>
        <Link className='text-[4vw] md:text-[1.5rem] lg:text-[1.75rem] mt-6 whitespace-nowrap' to='/workshops'> Workshops </Link>
      </div>

    </div>
  )
}

export default Homebottom