import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet, FaChalkboardTeacher, FaBookOpen, FaAddressCard, FaUsers, FaMarkdown, FaBook } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';




const Dashboard = () => {

    const [cart] = useCart();
    

    const [isAdmin] = useAdmin();

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
                    <ul className="menu p-4 w-64 h-full ">

                        {
                            isAdmin ? <>
                                <li><Link to='/dashboard/admin_home'><FaHome className='text-xl'></FaHome>Admin Home</Link></li>

                                <li><Link to='/dashboard/add_items'><FaAddressCard className='text-xl'></FaAddressCard>Add Classes</Link></li>

                                <li><Link to='/dashboard/manage_items'><FaMarkdown
                                    className='text-xl'></FaMarkdown>Manage Classes</Link></li>
                                <li><Link to='/dashboard/manage_booking'><FaBook className='text-xl'></FaBook>Manage Bookings</Link></li>
                                <li><Link to='/dashboard/all_users'><FaUsers className='text-xl'></FaUsers>All Users</Link></li>


                            </>
                                : <>
                                    <li><Link to='/dashboard/user_home'><FaHome className='text-xl'></FaHome>User Home</Link></li>

                                    <li><Link to='/dashboard/pay_history'><FaWallet className='text-xl'></FaWallet>Payment history</Link></li>

                                    <li>
                                        <Link className='mr-14' to='/dashboard/my_cart'><FaShoppingCart className='text-xl'></FaShoppingCart>My Cart
                                            <span className='badge badge-secondary'>+{cart?.length || 0}</span>
                                        </Link>
                                    </li>
                                </>
                        }

                        {/* Sidebar content here */}


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