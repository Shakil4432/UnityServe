import React from 'react'
import { Link } from 'react-router-dom';

export default function NeedVolunteerCard({ needPurpose }) {
    const { category, deadline, postTitle, thumbnail, _id } = needPurpose;
    return (
        <div >
            <div className="card h-[46vh] bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src={thumbnail}  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{postTitle}</h2>
                    <p>{category}</p>
                    <p>{deadline}</p>
                    <Link to={`/needvolunteer/${_id}`} className='btn btn-outline text-white font-bold' >View Details</Link>
                </div>
            </div>
        </div>
    )
}
