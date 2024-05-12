import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../AuthProvider/AuthProvider'

export default function Navbar() {
    const { user, logOut } = useContext(authContext);
   
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/needvolunteer">Need Volunteer</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#01CDD4] rounded-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-[#2F4F4F]">UnityServe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {user ? <div className="dropdown dropdown-end text-[#2F4F4F] z-10">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#2F4F4F]">
                            <li>
                                <Link to="/addvolunteerpost">
                                    Add Post
                                </Link>
                            </li>
                            <li>
                                <Link to="/managepost">
                                    Manage Post
                                </Link>
                            </li>
                            <li>
                                <Link to="/requestedpost">
                                    Requested Post
                                </Link>
                            </li>
                            <li>
                                <button onClick={()=>logOut()} className='btn btn-small'>
                                   Logout
                                </button>
                            </li>
                        </ul>
                    </div> : <Link to='/login' className='btn btn-sm text-[#2F4F4F]'>Login</Link>}
                </div>
            </div>
        </div>
    )
}
