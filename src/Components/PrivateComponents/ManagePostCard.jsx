import React from 'react'
import { Link } from 'react-router-dom';

export default function ManagePostCard({ filterItem, handleDelete }) {
    const { _id, location, email, category, deadline } = filterItem;

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
                            <Link to={`/updatepost/${_id}`}> <button className='btn btn-sm btn-accent'>Update</button></Link>
                            <button onClick={()=>handleDelete(_id)} className='btn btn-sm btn-error'>Delete</button>
                            </div>
                           </td>
                        </tr>
                        
                       
                    </tbody>
                </table>
            </div>








        </div>
    )
}
