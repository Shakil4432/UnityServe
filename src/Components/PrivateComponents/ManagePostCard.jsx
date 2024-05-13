import React from 'react'

export default function ManagePostCard({ filterItem }) {
    const { postTitle, location, email, thumbnail, category, deadline } = filterItem;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-start">
                    {/* head */}
                   
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className=' w-72 text-center ' >{email}</td>
                            <td className=' w-72 text-center'>{location}</td>
                            <td className=' w-72 text-center'>{category}</td>
                            <td className=' w-72 text-center'>{deadline}</td>
                           <td className=' w-72 text-center'>
                            <div className='flex gap-3 justify-center items-center'>
                            <button className='btn btn-sm btn-accent'>Update</button>
                            <button className='btn btn-sm btn-error'>Delete</button>
                            </div>
                           </td>
                        </tr>
                        
                       
                    </tbody>
                </table>
            </div>








        </div>
    )
}
