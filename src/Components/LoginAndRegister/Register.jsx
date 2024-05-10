import React, { useContext } from 'react'
import { authContext } from '../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

export default function Register() {
    const { createUser } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;

        const user = { name, email, password, photoURL };
        if (password.length < 6) {
            return toast.error('Password Should be 6 chartacters or longer');
        }
        else if (!/[A-Z]/.test(password)) {
            return toast.error('Password should have at least one uppercase chartacter')
        }
        else if (!/[a-z]/.test(password)) {
            return toast.error('Password should have at least one lowercase character')
        }

        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                .then(()=>{
                    navigate(from)
                })
                return toast.success("User Created Successfully")
            })
            .catch(error => {
               return toast.error(error.code)
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="email" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="photoURL" name="photoURL" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                Already have an account?
                                <Link to="/login" className='text-blue-400'>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
