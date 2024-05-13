import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login.jpg'

export default function Login() {
    const { googleSignIn, userSignIn } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleUserSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userSignIn(email, password)
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleSignIn = handleProvider => {
        handleProvider()
            .then(result => {
                if (result.user) {
                    navigate(from);
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='mt-16'>
            <div className="hero min-h-screen bg-base-200 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center flex items-center  max-w-lg rounded-2xl  justify-center w-full  h-[60vh] lg:text-left">
                       <img className='h-[83vh] rounded-2xl' src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm  bg-base-100">
                        <form onSubmit={handleUserSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-[#00DFC0] border-none font-bold">Login</button>
                            </div>
                            <div className="form-control mt-6 flex items-center justify-center">
                               <span> don't have an Account Please</span>
                                <Link to='/register' className="text-[#00DFC0] p-3 ">Register</Link>
                            </div>
                            <div className="form-control mt-6 bg-[#00DFC0] p-2 rounded-2xl justify-center items-center flex">
                                <button onClick={() => handleSignIn(googleSignIn)} className="btn btn-circle btn-sm text-lg bg-blue-300 border-none"><FcGoogle></FcGoogle></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
