import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider';
import ManagePostCard from './ManagePostCard';

export default function ManagePost() {
  // const [cards, setCards] = useState([]);
  const { user } = useContext(authContext);
  const items = useLoaderData();
  const filterItems = items.filter(item => item.email === user.email);

  return (
    <div className='border p-4 mt-16'>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead className='text-center '>
            <tr>
             
              <th className=' w-72 text-center'>Email</th>
              <th className=' w-72 text-center'>Location</th>
              <th className=' w-72 text-center'>Category</th>
              <th className=' w-72 text-center'>Deadline</th>
              <th className=' w-72 text-center'>Update And Delete</th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        {
          filterItems.map(filterItem => <ManagePostCard key={filterItem._id} filterItem={filterItem}></ManagePostCard>)
        }
      </div>
    </div>
  )
}
