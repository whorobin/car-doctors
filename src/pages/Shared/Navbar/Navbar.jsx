// import React from 'react';
import logo from '../../../assets/logo.svg'
import shop from '../../../assets/icons/shopping-bag.png'
import search from '../../../assets/icons/search.png'

import { Link } from "react-router-dom";

const Navbar = () => {

    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='services'>Services</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 h-24">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-bold ">
                        {navItem}
                    </ul>
                </div>
                <Link to='/' className="w-16">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <img className='w-6 mr-5' src={shop} alt="" />
                <img className='w-6 mr-5' src={search} alt="" />
                <button className="btn btn-outline btn-error font-bold">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;