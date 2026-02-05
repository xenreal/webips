import React from 'react'
import DomCon from '../comps/Domains/DomCon'

const Domain = () => {
  return (
    <div>
       <div className='p-4 md:p-8'>
      <div className='pt-[15vh] md:pt-[25vh] mb-10 md:mb-16 relative'>
         <h2 className='font-[font1] uppercase font-bold text-black text-[12vw] md:text-[8.5vw] leading-none'>
           Domains
         </h2>
      </div>

      {/* Projects Section
          REMOVED -mt-20 to prevent overlap.
          Added pb-20 to ensure there is space at the bottom of the page.
      */}
      <div className='relative pb-20'>
       <DomCon/>
      </div>
      </div>
    </div>
  )
}

export default Domain
