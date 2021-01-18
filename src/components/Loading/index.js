import React from 'react';
import loader from '../../assets/loader.svg';

export const Loading = () => {
    return (
        <div className="loading__wrapper">
            <img src={loader} alt="Loading...." />
        </div>
    )
}
