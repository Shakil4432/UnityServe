import React from 'react'

export default function NeedVolunteerCard({ needPurpose }) {
    const { category, deadline, postTitle, thumbnail } = needPurpose;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"  /></figure>
                <div className="card-body">
                    <h2 className="card-title">{postTitle}</h2>
                    <p>{category}</p>
                    <p>{deadline}</p>
                    <button className='btn btn-outline text-white font-bold'>See All</button>
                </div>
            </div>
        </div>
    )
}
