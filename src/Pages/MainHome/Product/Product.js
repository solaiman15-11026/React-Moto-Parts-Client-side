import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pdetails from '../Pdetails/Pdetails';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])



    return (

        <div className='view' >
            <h1 className='mt-4 text-dark pt-5 mb-3 text-center text-uppercase heabt'>

                <span className='border border-warning px-2 mx-2 hea'>O</span>
                <span className='border border-warning px-2 mx-2 hea'>U</span>
                <span className='border border-warning px-2 mx-2 hea'>R</span>

                <span className='border border-info px-2 mx-2'>P</span>
                <span className='border border-info px-2 mx-2'>R</span>
                <span className='border border-info px-2 mx-2'>O</span>
                <span className='border border-info px-2 mx-2'>D</span>
                <span className='border border-info px-2 mx-2'>U</span>
                <span className='border border-info px-2 mx-2'>C</span>
                <span className='border border-info px-2 mx-2'>T</span>
                <span className='border border-info px-2 mx-2'>S</span>
            </h1>
            <hr style={{ width: '47%', margin: '0  auto' }} className='mb-4 ' />
            <div className='grid'>
                {
                    products.map(p => <Pdetails
                        key={p._id}
                        p={p}


                    ></Pdetails>)

                }

            </div>

        </div>
    );
};

export default Product;