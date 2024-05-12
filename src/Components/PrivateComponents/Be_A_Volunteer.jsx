import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

export default function Be_A_Volunteer() {
    const { user } = useContext(authContext);
    const item = useLoaderData();
    console.log(item)
    const {
        thumbnail,
        deadline,
        description,
        location,
        postTitle,
        numOfVolunteersNeeded,
        category } = item;


    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const volunteerName = form.volunteername.value;
        const volunteerEmail = form.volunteeremail.value;
        const thumbnail = form.thumbnail.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const location = form.location.value;
        const postTitle = form.postTitle.value;
        const numOfVolunteersNeeded = form.numOfVolunteersNeeded.value;
        const category = form.category.value;

        const item = {
            name,
            email,
            volunteerName,
            volunteerEmail,
            thumbnail,
            deadline,
            description,
            location,
            postTitle,
            numOfVolunteersNeeded,
            category
        }

        fetch('http://localhost:7000/requestedJob', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Request Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })


    }
    return (

        <div className='mt-16'>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Organizer name  </label>
                            <input id="username" defaultValue={user?.displayName || 'Name Not Found'} type="text" name='name' placeholder='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Organizer email </label>
                            <input id="emailAddress" defaultValue={user?.email || "Email Not Found"} type="email" name='email' placeholder='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Thumbnail</label>
                            <input id="thumbnail" type='text' name='thumbnail' defaultValue={thumbnail} placeholder='thumbnail' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />

                        </div>
                        <div className='w-full '>
                            <label className="text-gray-700 dark:text-gray-200" >Deadline</label>
                            <input id="deadline" type='text' name='thumbnail' defaultValue={deadline} placeholder='thumbnail' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Location</label>
                            <input id="location" type="text" name='location' defaultValue={location} placeholder='location' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" > No. of volunteers needed  </label>
                            <input id="numOfVolunteersNeeded" type="text" defaultValue={numOfVolunteersNeeded} name='numOfVolunteersNeeded' placeholder='numOfVolunteersNeeded' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Post Title </label>
                            <input id="postTitle" type="text" defaultValue={postTitle} name='postTitle' placeholder='postTitle' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div >
                            <label className="text-gray-700 dark:text-gray-200" >Category</label>
                            <input id="category" type="text" defaultValue={category} name='postTitle' placeholder='postTitle' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div className='col-span-2'>
                            <label className="text-gray-700 dark:text-gray-200" >Description</label>
                            <input id="descrption" type="text" defaultValue={description} name='description' placeholder='description' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div >
                            <label className="text-gray-700 dark:text-gray-200" >Volunteer Name</label>
                            <input id="category" type="text" defaultValue={user?.displayName} name='volunteername' placeholder='name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div >
                            <label className="text-gray-700 dark:text-gray-200" >Volunteer Email</label>
                            <input id="category" type="text" defaultValue={user?.email} name='volunteeremail' placeholder='email' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
                        </div>
                        <div >
                            <label className="text-gray-700 dark:text-gray-200" >Suggestion</label>
                            <input id="suggestion" type="text" name='Suggestion' placeholder='suggestion' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div >
                            <label className="text-gray-700 dark:text-gray-200" >status</label>
                            <input id="status" type="text" defaultValue="requested" name='status' placeholder='status' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Request</button>
                    </div>
                </form>
            </section>
        </div>
    )
}
