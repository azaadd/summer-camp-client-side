import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import gift from '../../../assets/Beautiful-Hello-Glitter.gif';

const UserHome = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className='mt-0 pt-0 top-0'>
                        <div className='ml-32'>
                            <img className='w-[550px] h-[300px]' src={gift} alt="" />
                        </div>
                        <p className='text-4xl text-start font-semibold mt-4'>Hi, <em><span className='text-red-500'>{user?.displayName}</span></em> Welcome To Your Dashboard</p>
                        <p className='text-xl text-center'>Hi there, this is your simple dashboard home. Our developer is trying to updating Dashboard</p>
                        <p className='text-xl text-center font-semibold'>You jump any page you want click here or click any aside menu.</p>

                        <div className='mt-4 text-center'>
                            <Link to='/dashboard/reservation' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">Reservations</Link>
                            <Link to='/dashboard/pay_history' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">Payment history</Link>
                            <Link to='/dashboard/my_cart' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">My Cart</Link>
                            
                        </div>
                    </div>
        </div>
    );
};

export default UserHome;