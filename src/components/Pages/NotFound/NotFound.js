import React from 'react';
import notFound from '../../../../src/Image/404/404.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='w-100 mx-auto con'>

            <img className='img-fluid mb-5 w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;