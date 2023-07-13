import React from 'react';
import Banner from './components/Banner/Banner';
import './Home.css';
import SideNav from './components/SideNav/SideNav';

const Home = () => {
    return (
        <div className='grid grid-cols-12 h-screen bg-rose-100 '>
            <div className='col-span-4 md:col-span-2'>
                <SideNav />
            </div>
            <div className='col-span-8 md:col-span-10'>
                <Banner />
            </div>
        </div>
    );
};

export default Home;