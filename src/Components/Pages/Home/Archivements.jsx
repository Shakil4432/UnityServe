import React, { useEffect, useState } from 'react'
import ArchieveMentCard from './ArchieveMentCard';

export default function Archivements() {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch(`${import.meta.env.VITE_API_URL}/archievements`)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
  return (
    <div className='mt-16'>
       <div className='max-w-3xl mx-auto mb-8'>
       <h1 className='text-2xl lg:text-4xl font-bold text-center p-2'>Our Achievements</h1>
        <p className='text-center text-gray-400'>Over the past year, we have made remarkable strides in our mission to serve the community. We successfully provided over 10,000 meals to those in need, facilitated educational programs for 500 children, and organized multiple community clean-up events. Our dedicated volunteers and supporters have been the backbone of these accomplishments, and together, we continue to create lasting positive change. Join us as we celebrate these milestones and look forward to achieving even more!</p>
       </div>
        <div className='grid grid-cols-1 lg:grid-cols-3  justify-between gap-4'>
            {
                items.map(item=><ArchieveMentCard key={item._id} item={item}></ArchieveMentCard>)
            }
        </div>
    </div>
  )
}
