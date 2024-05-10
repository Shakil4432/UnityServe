import React, { useEffect, useState } from 'react'
import NeedVolunteerCard from './NeedVolunteerCard';

export default function Need_Volunteer() {
    const [needPurposes, setNeedPurposes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/volunteerneed')
            .then(res => res.json())
            .then(data => setNeedPurposes(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-6'>Immediate Volunteer Openings </h1>
            <div className='grid grid-cols-3 justify-between items-center gap-6 flex-wrap'>
                {
                    needPurposes.map(needPurpose => <NeedVolunteerCard key={needPurpose._id} needPurpose={needPurpose}></NeedVolunteerCard>)
                }
            </div>
        </div>
    )
}
