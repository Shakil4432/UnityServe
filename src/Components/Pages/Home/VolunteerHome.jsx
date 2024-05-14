import React, { useEffect, useState } from 'react'
import VolunteerHomeCard from './VolunteerHomeCard';
import { Link } from 'react-router-dom';

export default function VolunteerHome() {
  const [needPurposes2, setNeedPurposes2] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/volunteerneed`)
      .then(res => res.json())
      .then(data => setNeedPurposes2(data))
  }, [])
  return (
    <div className='mt-16'>
      <div className='max-w-3xl mx-auto mb-8'>
        <h1 className='text-2xl lg:text-4xl font-bold text-center p-2'>Immediate Volunteer Openings </h1>
        <p className='text-center text-gray-400'>We have immediate volunteer opportunities available! Whether you have a few hours a week or can dedicate more time, your help is needed in various areas such as food distribution, tutoring, animal care, and event support. Join us and be part of a dedicated team committed to making a positive impact.</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-6 flex-wrap'>
        {
          needPurposes2.slice(0, 6).map(needPurpose2 => <VolunteerHomeCard key={needPurpose2._id} needPurpose2={needPurpose2}></VolunteerHomeCard>)
        }
      </div>

      <div className='flex items-center justify-center'>
        <Link to='/needvolunteer' className='mt-6 text-center'> <button className='btn'>See All</button> </Link>
      </div>
    </div>
  )
}
