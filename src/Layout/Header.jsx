import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar container mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 transition-all">
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/statistics'>Statistics</NavLink>
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/applied-job'>Applied Job</NavLink>
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/blog'>Blog</NavLink>
      </ul>
    </div>
    <NavLink to='/' className=" text-xl lg:text-3xl font-bold">Carrer Hub</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-8 px-1">
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/statistics'>Statistics</NavLink>
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/applied-job'>Applied Job</NavLink>
        <NavLink className='text-lg hover:text-gradient2 transition-all duration-300' to='/blog'>Blog</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/start-applying' className="btn bg-gradient-to-r from-gradient1 from-0% to-gradient2 to-100%">Start Applying</NavLink>
  </div>
</div>
    );
};

export default Header;