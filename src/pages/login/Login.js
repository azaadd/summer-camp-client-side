import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googlelogo from '../../../src/assets/google.png';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="hero bg-base-200 w-full pt-28">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-600">Please Login</h1>
                </div>
                <div className="card w-full border bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary font-semibold hover:bg-opacity-75 normal-case text-lg" type="submit" value="Login" />
                            </div>
                            <p className='mt-3'>Don't have any account? <Link className='text-blue-600 font-semibold underline hover:text-gray-600' to='/register'>Register.</Link></p>
                        </form>
                        
                    </div>
                    
                </div>
                
                <Link className="btn btn-outline border-2 normal-case text-xl text-[#0d6efd] hover:bg-[#0d6efd] w-full mb-6" type="submit"> <img className='w-7 h-7' src={googlelogo} alt="" /> Sign-in With Google</Link>
            </div>

        </div >
    );
};

export default Login;