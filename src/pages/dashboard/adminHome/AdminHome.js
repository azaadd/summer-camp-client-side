import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import gift from '../../../assets/Birds-Saying-Hello.gif';

const AdminHome = () => {

    const {user} = useContext(AuthContext);

    return (
        <div>
            <div className='mt-0 pt-0 top-0'>
                        <div className='ml-32'>
                            <img className='w-[550px] h-[300px]' src={gift} alt="" />
                        </div>
                        <p className='text-4xl text-start font-semibold'>Hi, <em><span className='text-red-500'>{user?.displayName}</span></em> Welcome To Your Dashboard</p>
                        <p className='text-xl text-center'>Hi there, this is your simple dashboard home. Our developer is trying to updating Dashboard</p>
                        <p className='text-xl text-center font-semibold'>You jump any page you want click here or click any aside menu.</p>

                        <div className='mt-4 text-center'>
                            <Link to='/dashboard/add_items' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">Add Classes</Link>
                            <Link to='/dashboard/manage_items' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">Manage Classes</Link>
                            <Link to='/dashboard/manage_booking' className="btn btn-outline btn-secondary mr-3 normal-case text-lg">Manage Booking</Link>
                            <Link to='/dashboard/all_users' className="btn btn-outline btn-secondary normal-case text-lg">All Users</Link>
                        </div>
                    </div>
        </div>
    );
};

export default AdminHome;