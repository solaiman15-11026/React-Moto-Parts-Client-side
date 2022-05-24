import React, { useEffect, useState } from 'react';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products.map(p => <ProductsDetails
                    key={p._id}
                    p={p}


                ></ProductsDetails>)
            }

        </div>
    );
};

export default Products;