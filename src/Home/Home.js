import React from 'react';
import './Home.css';
import SideNav from './components/SideNav/SideNav';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-12 min-h-screen bg-rose-100 '>
            <div className='col-span-4 md:col-span-2'>
                <SideNav />
            </div>
            <div className='col-span-8 md:col-span-10 bg-rose-50'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;