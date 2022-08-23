import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-xl text-gray-600' to='/'>
                    Crypto Cafe <span className='text-xl'>☕</span>
                </Link>
            </div>
            <div></div>
        </div>
    );
};

export default Header;