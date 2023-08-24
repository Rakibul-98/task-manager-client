import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import { BiMenu } from "react-icons/bi";

const SideNav = () => {


    const navLinks = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Tasks", path: "/tasks" },
        { id: 3, name: "Login", path: "/login" },
        { id: 4, name: "About", path: "/about" },
    ]

    const handleMenu = () => {
        const sNav = document.getElementById("small-nav");
        const menu = document.getElementById("menu");
        const cross = document.getElementById("cross");
        if (sNav.style.display === "none") {
            sNav.style.display = "block";
            cross.style.display = "block";
            menu.style.display = "none";

        }
        else {
            sNav.style.display = "none";
            cross.style.display = "none";
            menu.style.display = "block";
        }
    }

    return (
        <div className='relative'>
            <aside className='hidden lg:block bg-rose-100 min-h-full w-full mx-auto'>
                <img className='h-24 w-fit mx-auto p-2' src="https://i.ibb.co/LNmSbsM/images-removebg-preview.png" alt="" />
                <ul className='text-center'>
                    {
                        navLinks.map(link =>
                            <li key={link.id} className='hover:bg-rose-500 hover:text-white font-bold text-xl'>
                                <NavLink  to={link.path} className={({ isActive }) =>
                                    isActive ? 'bg-rose-500 block py-3 text-white' : 'bg-transparent block py-3'}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
            </aside>
            <div className="absolute lg:hidden right-3 top-2 text-right">
                <button onClick={handleMenu} className='text-3xl rounded-full bg-white p-1'>
                    <span id='menu'><BiMenu /></span>
                    <span id='cross' style={{ display: "none" }}><RxCross2 /></span>
                </button>
                <ul id='small-nav' style={{ display: "none" }} className=' bg-rose-200'>
                    {
                        navLinks.map(link =>
                            <li key={link.id} className='hover:bg-rose-400 hover:text-white font-semibold'>
                                <NavLink to={link.path} className={({ isActive }) =>
                                    isActive ? 'bg-rose-400 block text-white px-12 py-2' : 'bg-transparent block px-12 py-2'}>
                                    {link.name}
                                </NavLink>
                            </li>

                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default SideNav;