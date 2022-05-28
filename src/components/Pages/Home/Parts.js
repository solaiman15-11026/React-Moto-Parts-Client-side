import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='px-8 mt-24'>
        <h1 className='heabt mt-4  text-dark pt-5 mb-3 text-center text-uppercase '>

      

        <span className='border border-info px-2 mx-2'>P</span>
        <span className='border border-info px-2 mx-2'>R</span>
        <span className='border border-info px-2 mx-2'>O</span>
        <span className='border border-info px-2 mx-2'>D</span>
        <span className='border border-info px-2 mx-2'>U</span>
        <span className='border border-info px-2 mx-2'>C</span>
        <span className='border border-info px-2 mx-2'>T</span>
        <span className='border hide border-info px-2 mx-2'>S</span>

    </h1>
    <hr style={{ width: '44%', margin: '0  auto' }} className='mb-4 ' />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;
