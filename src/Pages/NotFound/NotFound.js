import React from 'react';
import notFound from '../../../src/Image/404/404.jpg'

const NotFound = () => {
    return (
        <div className='w-50 mx-auto'>
            <h2 className='mt-5 text-danger mx-auto text-center'>Opps!! 404 Not Found</h2> <br />
            <img className='img-fluid mb-5 w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;