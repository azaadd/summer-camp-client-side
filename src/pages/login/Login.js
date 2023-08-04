import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googlelogo from '../../../src/assets/google.png';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
    const [fError, setFError] = useState('');
    const [isShown, setIsSHown] = useState(false);
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

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
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setFError(error.message);
            })

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveduser = { name: loggedUser.displayName, email: loggedUser.email }

                fetch('http://localhost:5000/usersInfo', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveduser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, { replace: true });
                            })
                
            })
            .catch(error => {
                console.log(error);
            })
    }

    const togglePassword = () => {
        setIsSHown((isShown) => !isShown);
    };


    return (
        <div className="hero bg-base-200 w-full pt-28">
            <Helmet>
                <title>Language School | Login</title>
            </Helmet>
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
                                <input type={isShown ? "text" : "password"} name='password' id='myInput' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="checkbox-container mt-3">
                                <input className='w-5 h-5 mr-2'
                                    id="checkbox"
                                    type="checkbox"
                                    checked={isShown}
                                    onChange={togglePassword}
                                />
                                <label className='text-lg'  htmlFor="checkbox">Show password?</label>
                            </div>
                            <p className='text-red-600 text-lg'>{fError}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary font-semibold hover:bg-opacity-75 normal-case text-lg" type="submit" value="Login" />
                            </div>
                            <p className='mt-3'>Don't have any account? <Link className='text-blue-600 font-semibold underline hover:text-gray-600' to='/register'>Register.</Link></p>
                        </form>

                    </div>

                </div>

                <Link onClick={handleGoogleSignIn} className="btn btn-outline border-2 normal-case text-xl text-[#0d6efd] hover:bg-[#0d6efd] w-full mb-6" type="submit"> <img className='w-7 h-7' src={googlelogo} alt="" /> Sign-in With Google</Link>
            </div>

        </div >
    );
};

export default Login;