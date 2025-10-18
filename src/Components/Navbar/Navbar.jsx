import React from 'react';
import { NavLink } from 'react-router';
import useImg from '../../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='flex gap-4 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={useImg} alt="" />
                <button className='btn btn-primary px-7'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;