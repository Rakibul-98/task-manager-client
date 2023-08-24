import React from 'react';
import SideNav from './components/SideNav/SideNav';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div>
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
            <div className='lg:grid grid-cols-6 min-h-screen'>
                <SideNav />
                <div className='col-span-5 bg-rose-50 pb-10'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;