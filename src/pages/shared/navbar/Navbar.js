import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import sitelogo from '../../../assets/sitelogo.JPG';
import { AuthContext } from '../../../providers/AuthProvider';


const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme') : 'light');

    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then( () => {})
        .catch(error => {
            console.log(error);
        })
    }


    const handleToggle=(e)=>{
        if(e.target.checked){
            setTheme('dark');    
        }
        else{
            setTheme('light');
        }
    }

    useEffect(()=>{
        localStorage.setItem('theme', theme);
        const  localTheme=localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme',localTheme)
    },[theme]);

    const navItems = <>
        <li className='mr-2 hover:bg-gray-700 hover:rounded hover:bg-opacity-60 border rounded border-gray-500 hover:border-white'><Link className='hover:text-white' to='/'>Home</Link></li>
        <li className='mr-2 hover:bg-gray-700 hover:rounded hover:bg-opacity-60 border rounded border-gray-500 hover:border-white'><Link className='hover:text-white' to='/instructors'>Instructors</Link></li>

        <li className='mr-2 hover:bg-gray-700 hover:rounded hover:bg-opacity-60 border rounded border-gray-500 hover:border-white'><Link className='hover:text-white' to='/classes'>Classes</Link></li>

        {   user?.email ? 
            <li className='hover:bg-gray-700 hover:rounded hover:bg-opacity-60 border rounded border-gray-500 hover:border-white'><Link className='hover:text-white' to='/dashboard/my_cart'>Dashboard</Link></li> :" "
            
        }

    </>


    return (
        <div className=''>
            <div className="px-16 pt-0 navbar fixed z-10 bg-opacity-60 bg-base-300 text-base-content h-28">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl">
                            {navItems}
                        </ul>
                    </div>
                    <Link className='text-center' to='/'>
                        <p className='text-2xl font-semibold'>Summer Camp</p>
                        <img src={sitelogo} alt='' className="btn btn-ghost normal-case w-32 h-14 rounded py-1 px-1 bg-white hover:bg-indigo-400"></img>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-2xl">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    { user && <img className='rounded-full w-14 h-14 bg-slate-300 mr-3 hover:[cursor:pointer]' src={user?.photoURL} title={user?.displayName} alt="" />
                    }


                    { user?.email ? <Link onClick={handleLogout} className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white text-xl normal-case">Log Out</Link> 

                    : <Link to='/login' className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white text-xl normal-case">Login</Link>
                    }

                    <label title='You can toggle light or dark' className="swap swap-rotate ml-3 hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border border-gray-500 hover:text-white px-2 py-1 rounded">

                        
                        <input type="checkbox"  onChange={handleToggle} checked={theme === 'light' ? false :true }/>

                        
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;