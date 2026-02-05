import React from 'react'
import Video from '../comps/Home/Video'
import Hometxt from '../comps/Home/Hometxt'
import Homebottom from '../comps/Home/Homebottom'
import Stair from '../comps/Common/Stair'

const Home = () => {
  return (
    <div >
      <div className='h-screen w-screen fixed'> <Video/> </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <Hometxt/>
        <Homebottom/>
      </div>
    </div>
  )
}

export default Home
