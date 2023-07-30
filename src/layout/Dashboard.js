import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaChalkboardTeacher, FaBookOpen } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';


const Dashboard = () => {
    return (
        <div className=''>
            <Helmet>
                <title>Language School | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}

                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full ">
                        {/* Sidebar content here */}
                        <li><Link to='/dashboard/user_dash'><FaHome className='text-xl'></FaHome>User Home</Link></li>
                        
                        <li><Link to='/dashboard/reservation'><FaCalendarAlt className='text-xl'></FaCalendarAlt>Reservations</Link></li>

                        <li><Link to='/dashboard/pay_history'><FaWallet className='text-xl'></FaWallet>Payment history</Link></li>

                        <li><Link to='/dashboard/my_cart'><FaShoppingCart className='text-xl'></FaShoppingCart>My Cart</Link></li>

                        <div className="divider"></div>
                        <li><Link to='/'><FaHome className='text-xl'></FaHome>Home</Link></li>
                        <li><Link to='/instructors'><FaChalkboardTeacher className='text-xl'></FaChalkboardTeacher>Instructors</Link></li>
                        <li><Link to='/classes'><FaBookOpen
                         className='text-xl'></FaBookOpen>Classes</Link></li>
                        
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;