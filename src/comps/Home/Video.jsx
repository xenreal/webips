import React from 'react'
import Vid from '../../assets/vid.mp4'


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay loop muted className='h-full w-full object-cover'src={Vid} ></video>
    </div>
    
  )
}

export default Video
