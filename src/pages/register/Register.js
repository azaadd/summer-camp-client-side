import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [fError, setFError] = useState('');
    const {createUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/login';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const rePassword = form.rePassword.value;
        
        console.log(name, photo, email, password, rePassword)

        // validate
        if(!/(?=.*[A-Z])/.test(password)){
            setFError('Please enter your password at least one capital latter');
            return;
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
            setFError('Please enter your password at least one special character')
            return;
        }
        else if(password.length < 6) {
            setFError('Please enter your password at least 6 characters')
            return;
        }
        else if(password !== rePassword){
            setFError('Confirm password is not matched!')
            return;
        }


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setFError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error.message);
            setFError(error.message);
        })

    }

    return (
        <div className="hero bg-base-200 w-full pt-28">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-600">Please Register</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Confirm Password</span>
                                </label>
                                <input type="password" name='rePassword' placeholder="confirm password" className="input input-bordered" required />
                                
                            </div>
                            <p className='text-red-600 text-lg'>{fError}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary font-semibold hover:bg-opacity-75 normal-case text-lg" type="submit" value="Register" />
                            </div>
                            <p className='mt-3'>You have already an account? <Link className='text-blue-600 font-semibold underline hover:text-gray-600' to='/login'>Login.</Link></p>
                            
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;