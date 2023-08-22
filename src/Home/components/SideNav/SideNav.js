import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <aside>
            <img className='h-20 w-fit mx-auto my-3' src="https://i.ibb.co/LNmSbsM/images-removebg-preview.png" alt="" />
            <ul className='side-nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tasks">Tasks</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </aside>
    );
};

export default SideNav;