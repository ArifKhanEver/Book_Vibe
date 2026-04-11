import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    // Custom active style for NavLinks
    const navLinkStyles = ({ isActive }) => 
        isActive 
            ? "btn btn-outline border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white px-5 min-h-0 h-10" 
            : "btn btn-ghost text-gray-600 px-5 min-h-0 h-10";

    const links = (
        <>
            <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
            <li><NavLink to="/books" className={navLinkStyles}>Listed Books</NavLink></li>
            <li><NavLink to="/pages-to-read" className={navLinkStyles}>Pages to Read</NavLink></li>
        </>
    );

    return (
        <div className='shadow-sm sticky top-0 z-50 bg-white'>
            <div className="container mx-auto navbar py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="text-2xl font-extrabold text-[#131313]">Book Vibe</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        {links}
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    <button className="btn bg-[#23BE0A] hover:bg-[#1fa808] text-white px-6 border-none">
                        Sign In
                    </button>
                    <button className="btn bg-[#59C6D2] hover:bg-[#4eb1bc] text-white px-6 border-none">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;