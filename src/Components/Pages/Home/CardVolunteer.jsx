import React from 'react'

export default function CardVolunteer({volunteer}) {
    console.log(volunteer)
   const {name, photoUrl, biography, title, yearsOfService} = volunteer;
  return (
    <div>
        <div className="w-full  px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="flex justify-center -mt-16 md:justify-end">
        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={photoUrl}/>
    </div>

    <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">{title}</h2>

    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">{biography}</p>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-200"><span className='font-bold'>Year Of Service : </span>{yearsOfService} Year</p>

    <div className="flex justify-end mt-4">
        <a href="#" className="text-lg font-medium text-blue-600 dark:text-blue-300" tabindex="0" role="link">{name}</a>
    </div>
</div>
    </div>
  )
}
