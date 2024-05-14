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
        <h1 className='text-4xl font-bold text-center p-6 rounded-md mb-4'>Our Achievements</h1>
        <div className='grid grid-cols-3  justify-between gap-4'>
            {
                items.map(item=><ArchieveMentCard key={item._id} item={item}></ArchieveMentCard>)
            }
        </div>
    </div>
  )
}
