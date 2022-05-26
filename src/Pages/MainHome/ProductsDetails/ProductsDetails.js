import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProductsDetails = () => {
    const { id } = useParams();
    const [part, setPart] = useState({})

    const [user] = useAuthState(auth);

    const { _id, name, description, img, minimum, quantity, price } = part;

    useEffect(() => {
        const url = `http://localhost:5000/part/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const handlePlaceOrder = e => {
        e.preventDefault();
        const placeOrder = {
            placeOrderProduct: _id,
            placeOrderProductName: name,
            customerEmail: user.email,
            customerName: user.displayName,
            phone: e.target.phone.value,
            address: e.target.address.value,
            placeOrderQuantity: e.target.quantity.value,
            placeOrderPrice: e.target.quantity.value * price,

        }
        fetch('http://localhost:5000/placeOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(placeOrder)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Your order added successfully')
                console.log(data)
            }

            )

    }



    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div class="lg:m-24 m-5 max-w-xl card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-64' src={img} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p className='text-md text-blue-900 font-bold'>Price {price}$</p>
                    <p>Available Quantity: {quantity}</p>
                    <p className='btn btn-blue-900 w-36 btn-outline btn-xs shadow-xl'>Minimum Order: {minimum}</p>
                </div>
            </div>


            <div class="shadow-xl rounded-xl py-12 m-5">

                <div class="bg-white p-10  mx-auto">

                    <form onSubmit={handlePlaceOrder}>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600">Name</label>
                            <input type="text" id="name" name="name" value={user?.displayName}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Email</label>
                            <input type="text" id="name" name="email"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600" value={user?.email} />
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Product Name</label>
                            <input type="text" id="name" name="name" value={name}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Quantity</label>
                            <input type="number" id="name" name="quantity" min={minimum} defaultValue={minimum} placeholder="Name" max={quantity}
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Phone</label>
                            <input type="text" id="name" name="phone" placeholder="Your Name"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>
                        <div class="flex items-center mb-5">

                            <label for="name" class="inline-block w-20 mr-6 text-right 
                                 font-bold text-gray-600">Address</label>
                            <input type="text" id="name" name="address" placeholder="Your Address"
                                class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"/>
                        </div>



                        <div class="text-right">
                            <button class="btn btn-primary font-bold">Place Order</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;