import React, { useEffect, useState } from 'react'
import CardVolunteer from './CardVolunteer';

export default function Volunteers() {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/volunteers`)
        .then(res=>res.json())
        .then(data=>setVolunteers(data))
    },[])


  return (
    <div className='lg:mt-16'>
        <h1 className='text-2xl lg:text-4xl font-bold mb-4 p-2'>Our Dedicated Volunteers :</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-5'>
            {
                volunteers.map(volunteer=><CardVolunteer key={volunteer._id} volunteer={volunteer}></CardVolunteer>)
            }
        </div>
    </div>
  )
}
