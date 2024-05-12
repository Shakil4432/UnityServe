import React from 'react'

export default function RequestPostCard({ item, handleDelete }) {
    const { _id, description, postTitle, location, deadline, status } = item;
    console.log(item)
    return (
        <div>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-600 dark:text-gray-400"> <span className='text-sky-400 p-1 font-bold rounded-xl'>Deadline : </span> {deadline}</span>

                </div>

                <div className="mt-2">
                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">{postTitle}</a>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{description}</p>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <a href="#" className="text-sky-400 dark:text-blue-400 hover:underline" tabindex="0" role="link">{location}</a>
                    <button className='btn btn-sm bg-sky-400 text-white font-bold'>{status}</button>
                    <button onClick={() => handleDelete(_id)} className="px-3 btn btn-sm py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-red-400 rounded cursor-pointer hover:bg-red-600" tabindex="0" role="button">Cancel</button>
                </div>
            </div>
        </div>
    )
}
