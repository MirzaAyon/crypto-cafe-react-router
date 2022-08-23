import React from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2>Coin details</h2>
        </div>
    );
};

export default CoinDetails;