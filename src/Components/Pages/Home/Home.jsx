import React from 'react'
import VolunteerHome from './VolunteerHome'
import Banner from './Banner'
import Archivements from './Archivements'
import Volunteers from './Volunteers'


export default function Home() {
  return (
    <div className='max-w-6xl mx-auto'>
      <Banner></Banner>
       <VolunteerHome></VolunteerHome>
       <Archivements></Archivements>
       <Volunteers></Volunteers>
    </div>
  )
}
