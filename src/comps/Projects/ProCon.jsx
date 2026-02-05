import React from 'react'

const ProCon = () => {
  return (
    <div>
      {/* grid-cols-1: Single column on mobile 
  md:grid-cols-2: Two columns on medium screens (768px+)
  h-auto: Mobile needs auto height so stacked images don't overlap 
  md:h-[400px]: Fixed height on desktop
*/}
<div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>

  {/* PROJECT 1 */}
  <div className='hero group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full'>
    <img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/sleeping-red-panda-funny-cute-animal-image-ailurus-fulgens-asleep-afternoon-siesta-90417307.jpg" alt="" />
    <div className='opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/10'>
      <h2 className='uppercase text-2xl md:text-3xl font-bold text-white pt-2 px-3 font-[font1] border-4 rounded-full'>Project 1</h2>
    </div>
  </div>

  {/* PROJECT 2 */}
  <div className='group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full'>
    <img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/sleeping-red-panda-funny-cute-animal-image-ailurus-fulgens-asleep-afternoon-siesta-90417307.jpg" alt="" />
    <div className='opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/10'>
      <h2 className='uppercase text-2xl md:text-3xl font-bold text-white pt-2 px-3 font-[font1] border-4 rounded-full'>Project 2</h2>
    </div>
  </div>
  {/* PROJECT 1 */}
  <div className='group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full'>
    <img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/sleeping-red-panda-funny-cute-animal-image-ailurus-fulgens-asleep-afternoon-siesta-90417307.jpg" alt="" />
    <div className='opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/10'>
      <h2 className='uppercase text-2xl md:text-3xl font-bold text-white pt-2 px-3 font-[font1] border-4 rounded-full'>Project 3</h2>
    </div>
  </div>

  {/* PROJECT 2 */}
  <div className='group relative overflow-hidden transition-all hover:rounded-[70px] h-[300px] md:h-full'>
    <img className='h-full w-full object-cover' src="https://thumbs.dreamstime.com/b/sleeping-red-panda-funny-cute-animal-image-ailurus-fulgens-asleep-afternoon-siesta-90417307.jpg" alt="" />
    <div className='opacity-0 transition-all group-hover:opacity-100 absolute inset-0 flex items-center justify-center bg-black/10'>
      <h2 className='uppercase text-2xl md:text-3xl font-bold text-white pt-2 px-3 font-[font1] border-4 rounded-full'>Project 4</h2>
    </div>
  </div>

</div>
    </div>
  )
}

export default ProCon
