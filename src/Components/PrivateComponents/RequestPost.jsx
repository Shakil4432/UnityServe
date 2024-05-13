import React, { useState } from 'react'
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom'
import RequestPostCard from './RequestPostCard';
import Swal from 'sweetalert2';

export default function RequestPost() {
  const allItems = useLoaderData();
  const [items, setItems] = useState(allItems);
  const navigate = useNavigate();

  if (items.length === 0) {
    Swal.fire({
      title: 'Success!',
      text: 'There is no request here',
      icon: 'error',
      confirmButtonText: 'OK'
    }).then(result => {
      if (result.isConfirmed) {
        navigate('/');
      }
    })
  }

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
        fetch(`${import.meta.env.VITE_API_URL}/requestedJob/${id}`, {
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
    <div className='grid grid-cols-2 gap-4 mt-16'>

      {
        items.map(item => <RequestPostCard key={item._id} item={item} handleDelete={handleDelete}></RequestPostCard>)
      }
    </div>
  )
}
