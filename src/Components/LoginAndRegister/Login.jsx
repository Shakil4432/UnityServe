import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider'
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Login() {
    const {googleSignIn, userSignIn} = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from  = location?.state || '/';

    const handleUserSignIn = (e)=>{
        e.preventDefault();

        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;

        userSignIn(email,password)
        .then(result=>{
            if(result.user){
                navigate(from);
            }
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    const handleSignIn = handleProvider =>{
        handleProvider()
        .then(result=>{
            if(result.user){
                navigate(from);
            }
        })
        .catch(error=>{
            console.log(error.message)
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <button   className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6">
                                don't have an Account Please
                                <Link to='/register'  className="text-blue-500 p-3 ">Register</Link>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={()=>handleSignIn(googleSignIn)} className="btn btn-circle text-xl"><FcGoogle></FcGoogle></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
