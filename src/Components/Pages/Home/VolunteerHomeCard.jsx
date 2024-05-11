import React from 'react'

export default function VolunteerHomeCard({needPurpose2}) {
    const { category, deadline, postTitle, thumbnail } = needPurpose2;
  return (
    <div>
    <div className="card  h-[46vh] bg-base-100 shadow-xl image-full">
        <figure><img className='w-full' src={thumbnail}  /></figure>
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
