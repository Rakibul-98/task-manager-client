import React from 'react';

const SideNav = () => {
    return (
        <aside>
            <img className='h-20 w-fit mx-auto my-3' src="https://i.ibb.co/LNmSbsM/images-removebg-preview.png" alt="" />
            <ul className='side-nav'>
                <li>Home</li>
                <li>Tasks</li>
                <li>Login</li>
                <li>About</li>
            </ul>
        </aside>
    );
};

export default SideNav;