import React from 'react'

export default function ArchieveMentCard({ item }) {
    const {description, image, title} = item;
    return (
        <div>
            <div className="overflow-hidden bg-white border rounded-lg shadow-lg dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p title={description} className="mt-1 text-sm text-gray-600 dark:text-gray-400">{description.substring(0, 80)}</p>
                </div>
                <img className="object-cover w-full h-48 mt-2" src={image} alt="NIKE AIR" />
                <div className="flex items-center justify-between px-4 py-2 bg-blue-900">
                    <h1 className="text-lg font-bold text-white"></h1>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">See Details</button>
                </div>
            </div>
        </div>
    )
}
