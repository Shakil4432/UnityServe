import React, { useEffect, useState } from 'react'
import NeedVolunteerCard from './NeedVolunteerCard';

export default function Need_Volunteer() {
    const [needPurposes, setNeedPurposes] = useState([]);
    const [search, setSearch] = useState(null);
    const handleSearch =(e)=>{
        e.preventDefault();
        const form= e.target;
        const searchField = form.searchField.value;
        console.log(searchField)
        setSearch(searchField);
    }
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/volunteerneed`)
            .then(res => res.json())
            .then(data => setNeedPurposes(data))
    }, [])
    return (
        <div>
            
            <div className='max-w-3xl mx-auto mb-8'>
                <h1 className='text-2xl lg:text-4xl font-bold text-center p-2'>Immediate Volunteer Openings </h1>
                <p className='text-center text-gray-400'>We have immediate volunteer opportunities available! Whether you have a few hours a week or can dedicate more time, your help is needed in various areas such as food distribution, tutoring, animal care, and event support. Join us and be part of a dedicated team committed to making a positive impact.</p>
            </div>
            <form onSubmit={handleSearch}>
                <input type="text" name='searchField' />
                <input type="submit" value="Search" />
            </form>
            <div className='grid grid-cols-3 justify-between items-center gap-6 flex-wrap'>
                {
                    needPurposes.map(needPurpose => <NeedVolunteerCard key={needPurpose._id} needPurpose={needPurpose}></NeedVolunteerCard>)
                }
            </div>
        </div>
    )
}
