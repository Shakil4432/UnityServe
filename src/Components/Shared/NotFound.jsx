import React from 'react'
import img from '../../assets/images/404page.jpg'

export default function NotFound() {
  return (
    <div className='max-w-5xl pt-10 mx-auto'>
        <div className='w-full bg-red-500 h-[80vh]'>
          <img className='w-full h-[100vh]' src={img} alt="" />
        </div>
    </div>
  )
}
