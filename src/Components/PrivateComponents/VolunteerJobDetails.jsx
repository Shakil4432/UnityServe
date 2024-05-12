import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function VolunteerJobDetails() {
    const volunteerData = useLoaderData();
    const {
        thumbnail,
        deadline,
        description,
        location,
        postTitle,
        numOfVolunteersNeeded,
        _id,
        category } = volunteerData;

    return (
        <div className='flex justify-center items-center mt-16'>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={thumbnail} alt="Article" />

                <div className="p-6">
                    <div className='px-2'>
                        <span className="text-xs font-medium text-sky-600 uppercase dark:text-blue-400">{postTitle}</span>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400"> <span className='text-sky-500 font-semibold'>Description : </span> {description}</p>
                    </div>

                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link"><span className='text-sky-500 font-semibold'>Category : </span>{category},</a>
                            </div>
                            <span className=" text-xs text-gray-600 dark:text-gray-300"><span className='text-sky-500 font-semibold'>Deadline : </span>{deadline}</span>
                        </div>
                        <div className="flex  items-center">
                            <div className="flex items-center">
                                <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link"><span className='text-sky-500 font-semibold'>Location : </span>{location}</a>
                            </div>
                           
                        </div>
                        <div class="flex justify-between mt-3 item-center px-2">
                        <span className=" text-xs text-gray-600 dark:text-gray-300"><span className='text-sky-500 font-semibold text-lg'>Need : </span>{numOfVolunteersNeeded}</span>
                          <Link to={`/beavolunteer/${_id}`} > <button class="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Be a Volunteer</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
