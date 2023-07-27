import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="px-16 footer p-10 bg-base-200 text-base-content">
                <div>
                    <img src="{logo}" alt="" />
                    <p>This is our language teaching school.<br />Learn your favorite language.</p>
                </div>
                <div className=''>
                    <span className="footer-title">Let's  connect</span>
                    <div className='flex gap-2 text-4xl'>
                        <a href=' ' className="
                    "><FaFacebook /></a>
                        <a href=' ' className=""><FaInstagram /></a>
                        <a href=' ' className=" "><FaTwitter /></a>
                        <a href=' ' className=" "><FaLinkedin /></a>
                        <a href=' ' className=" "><FaYoutube /></a>
                    </div>


                </div>
                <div>
                    <span className="footer-title">Explore</span>
                    <Link to='/' className="link link-hover font-semibold">Home</Link>
                    <Link to='/instructors' className="link link-hover font-semibold">Instructors</Link>
                    <Link to='/classes' className="link link-hover font-semibold">Classes</Link>
                    <Link to='/dashboard' className="link link-hover font-semibold">Dashboard</Link>
                </div>
                <div>
                    <span className="footer-title">Contect Us</span>
                    <a href=' ' className=" "><strong>Email:</strong> languageschoolinfo@gmail.com</a>
                    <a href=' ' className=" "><strong>Phone:</strong> 01230055000</a>
                    <a href=' ' className=" "><strong>Address:</strong> 1208-000, Mohakhali I/A, <br /> Dhaka, Bangladesh</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p className='font-semibold'>Copyright © 2023 - All right reserved by Language School.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;