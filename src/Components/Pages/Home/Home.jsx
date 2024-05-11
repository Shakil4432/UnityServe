import React from 'react'
import VolunteerHome from './VolunteerHome'
import Banner from './Banner'


export default function Home() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner></Banner>
       <VolunteerHome></VolunteerHome>
    </div>
  )
}
