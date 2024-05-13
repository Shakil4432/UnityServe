import React, { useContext, useState } from 'react'
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router-dom';

export default function UpdateMyPost() {
    const {user} = useContext(authContext)
    const [startDate, setStartDate] = useState(new Date());
    const item = useLoaderData();
    const {name,
        email,
        thumbnail,
        _id,
        deadline,
        description,
        location,
        postTitle,
        numOfVolunteersNeeded,
        category
      } = item;
  
  
    const handleUpdate = e =>{
      e.preventDefault()
  
      const form = e.target;
      const name= form.name.value;
      const email= form.email.value;
      const thumbnail = form.thumbnail.value;
      const deadline= form.deadline.value;
      const description = form.description.value;
      const location = form.location.value;
      const postTitle = form.postTitle.value;
      const numOfVolunteersNeeded = form.numOfVolunteersNeeded.value;
      const category = form.category.value;
  
      const UpdateItem= {name,
        email,
        thumbnail,
        deadline,
        description,
        location,
        postTitle,
        numOfVolunteersNeeded,
        category
      }
  
      fetch(`${import.meta.env.VITE_API_URL}/volunteerneed/${_id}`,{
        method:"PUT",
        headers:{
          "content-type":"application/json",
        },
        body: JSON.stringify(UpdateItem)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Updated Successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
        }
      })
  
  
    }
  return (
    <div className='mt-16'>
      
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Organizer name  </label>
              <input id="username" defaultValue={user?.displayName || 'Name Not Found'} type="text" name='name' placeholder='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"  />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Organizer email </label>
              <input id="emailAddress" defaultValue={user?.email || "Email Not Found"} type="email" name='email' placeholder='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"  />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Thumbnail</label>
              <input id="password" type='text' defaultValue={thumbnail} name='thumbnail' placeholder='thumbnail' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />

            </div>
            <div className='w-full '>
              <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
              <br />
             
              <DatePicker
            
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                customInput={<input className="block w-[192%] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />} // Custom input field
                placeholderText="Select a date"
                name='deadline'
                className='w-full'
                defaultValue={startDate}
              />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Location</label>
              <input id="password" type="text" defaultValue={location} name='location' placeholder='location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" > No. of volunteers needed  </label>
              <input id="numOfVolunteersNeeded" defaultValue={numOfVolunteersNeeded} type="text" name='numOfVolunteersNeeded' placeholder='numOfVolunteersNeeded' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div>
              <label className="text-gray-700 dark:text-gray-200" >Post Title </label>
              <input id="password" type="text" defaultValue={postTitle} name='postTitle' placeholder='postTitle' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
            <div >
              <label className="text-gray-700 dark:text-gray-200" >Category</label>
              <select
                name="category"
                id="brand"
                className="w-full p-2 mt-2 border rounded-md "
                type="text"
                defaultValue={category}
                

              >
                <option value="healthcare" selected>
                  healthcare
                </option>
                <option value="education" selected>
                  education
                </option>
                <option value="social service" selected>
                  social service
                </option>
                <option value="animal welfare" selected>
                  animal welfare
                </option>

              </select>
            </div>
            <div className='col-span-2'>
              <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Description</label>
              <input id="passwordConfirmation" defaultValue={description} type="text" name='description' placeholder='description' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button  className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
          </div>
        </form>
      </section>
    </div>
  )
}
