import React from 'react'
import { Link } from 'react-router-dom';

export default function VolunteerHomeCard({ needPurpose2 }) {
  const { _id, category, deadline, postTitle, thumbnail } = needPurpose2;
  return (
    <div>
      <div className="w-full border  relative  h-[60vh] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img className="object-cover w-full h-48" src={thumbnail} alt="avatar" />
        <div className="py-2 text-center">
          <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" tabindex="0" role="link"> {postTitle}</a>
          <div className='flex flex-col justify-center items-center '>
            <span className="text-sm text-gray-700 dark:text-gray-200"><span className='font-bold text-lg'>Category :</span> {category}</span>
            <span className="text-sm text-gray-700 dark:text-gray-200"><span className='font-bold text-lg'>Deadline :</span> {deadline}</span>
          </div>
        </div>
            <Link to={`/needvolunteer/${_id}`} ><button className='btn absolute right-0 bottom-0 font-bold w-full text-center'>View Details</button></Link>
         
      </div>
    </div>
  )
}
