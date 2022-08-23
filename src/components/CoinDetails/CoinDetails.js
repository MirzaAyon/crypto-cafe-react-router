import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams();
    const [coin, setCoin] = useState({});
    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data); //eta just dekhar  jnno click korle showing
            })
        //id ta change hole code ta abr run hbe tai dependancy dbo
        //ekhn id joto bar change hbe uporer code toto bar call hbe 
    }, [id])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            {/* <h2>Coin details</h2> */}
            <div className='h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 md:justify-items-around content-center'>
                {/* info div  */}
                <div></div>
                {/* img div  */}
                <div></div>
            </div>
        </div>
    );
};

export default CoinDetails;