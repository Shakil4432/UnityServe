import React, { useEffect, useState } from 'react'
import VolunteerHomeCard from './VolunteerHomeCard';

export default function VolunteerHome() {
    const [needPurposes2, setNeedPurposes2] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/volunteerneed')
            .then(res => res.json())
            .then(data => setNeedPurposes2(data))
    }, [])
  return (
    <div className='mt-16'>
    <h1 className='text-4xl font-bold text-center my-6'>Immediate Volunteer Openings </h1>
    <div className='grid grid-cols-1 lg:grid-cols-3 justify-between items-center gap-6 flex-wrap'>
        {
            needPurposes2.slice(0,6).map(needPurpose2 => <VolunteerHomeCard key={needPurpose2._id} needPurpose2={needPurpose2}></VolunteerHomeCard>)
        }
    </div>
</div>
  )
}
