import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => {
            alert('Your log out succesfully')
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='flex gap-4 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='career'>Career</NavLink>
            </div>
            <div className='login-btn flex items-center gap-2'>
                <img src={userimg} alt="" />
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary px-7'>Logout</button>) : (<Link to='/auth/login' className='btn btn-primary px-7'>Login</Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;