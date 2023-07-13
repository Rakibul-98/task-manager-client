import React from 'react';
import Header from '../Header/Header';

const Banner = () => {
    return (
        <div className='bg-rose-50 h-screen'>
            <Header />
            <div className='w-fit mx-auto mt-10'>
                <img src="https://i.ibb.co/42pvcGJ/banner-removebg-preview.png" alt="" />
            </div>
            <div className='w-fit mx-auto'>
                <button className="btn px-12 bg-red-500 text-white mt-3 hover:bg-transparent hover:border-red-500 hover:text-red-500">Let's start</button>
            </div>
        </div>
    );
};

export default Banner;