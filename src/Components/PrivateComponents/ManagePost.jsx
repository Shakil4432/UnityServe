import React, { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider';
import ManagePostCard from './ManagePostCard';
import Swal from 'sweetalert2';

export default function ManagePost() {
  // const [cards, setCards] = useState([]);
  const { user } = useContext(authContext);
  const allItems = useLoaderData();
  const filterItems = allItems.filter(item => item.email === user.email);
  const [items, setItems] = useState(filterItems);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/volunteerneed/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remainingItems = items.filter(item => item._id !== id)
              setItems(remainingItems)
            }
          })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });

  }

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
          items.map(filterItem => <ManagePostCard handleDelete={handleDelete} key={filterItem._id} filterItem={filterItem}></ManagePostCard>)
        }
      </div>
    </div>
  )
}
