import React from 'react';
import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    return (
        <div className='sticky top-0  bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <CustomLink className='font-sans font-bold text-xl text-gray-600' to='/'>
                    Crypto Cafe <span className='text-xl'>☕</span>
                </CustomLink>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink className="hover:bg-orange-400" to='/'>Home</CustomLink>
                <CustomLink className="hover:bg-orange-400" to='/coins'>Coins</CustomLink>
                <CustomLink className="hover:bg-orange-400" to='/contact'>Contact</CustomLink>
                <CustomLink className="hover:bg-orange-400" to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;