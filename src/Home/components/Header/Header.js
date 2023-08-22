import React from 'react';

const Header = ({text}) => {
    return (
        <div className='bg-rose-100'>
            <h2 className='text-4xl text-center py-8 font-bold text-red-400'>{text}</h2>
        </div>
    );
};

export default Header;