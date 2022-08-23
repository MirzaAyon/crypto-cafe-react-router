import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ coin }) => {
    return (
        <div className='shadow-lg rounded-2xl w-[250px] bg-white p-4'>
            {/* <p>{coin.id}</p>
            <p>{coin.name}</p> */}
            <Link to='/coins' >
                <div className='gap-4 flex justify-between items-center'>
                    <div className='flex-shrink-0'>
                        {/* shirnk flex er maddhome img chooto boro hy  */}

                        <div>
                            <img
                                alt='profile'
                                src={coin.image}
                                className='mx-auto object-cover rounded-full h-16 w-16 '
                            />
                            {/* object-cover dile full container ta cover hye jabe  */}
                        </div>


                    </div>
                    <div className=' flex flex-col justify-end'>
                        <span className='text-gray-600 font-medium'>{coin.name}</span>
                        <span className='text-gray-400 text-xs'>{coin.symbol}</span>
                    </div>

                </div>
            </Link>


        </div>
    );
};

export default CoinCard;