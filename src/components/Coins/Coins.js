import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';

const Coins = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCoins(data)
            })

        //data take console log kore dekhbo
        //50 ta data load hbe 
        //perpage =50 ke 100 banae dbo tokhn 100 ta data load hbe 
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            {/* <h2>Coins are here </h2>
            <h3>Coins : {coins.length}</h3> */}
            <p className='text-center text-3xl font-bold text-gray'>Available Crypto Currencies</p>
            {
                coins.map(coin =>
                    // <p> {coin.name} </p>
                    <CoinCard key={coin.id} coin={coin}></CoinCard>
                    // atr er maddhome pathae dilam okhane props diye dhorbo
                )
            }
        </div>
    );
};

export default Coins;