import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Part.css'

const Part = ({ part }) => {
    const { _id, name, img, description, minimum, quantity, price } = part;
    const navigate = useNavigate()

    const handleParts = id => {
        navigate(`/part/${id}`)
    }
    return (


        <div className='m-3'>
            <CardGroup>
                <Card className='gap-4'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-primary'>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>

                        <small className="text-muted mb-2"> Minimum:

                            {minimum} &&  Quantity: {quantity}</small>
                        <h6 ><b className='text-danger'>Price:</b> <span className='text-dark'>${price} </span>  </h6>

                        <button onClick={() => handleParts(_id)} className='bg-info p-2 w-100 text-light rounded'>Order</button>
                    </Card.Body>


                </Card>
            </CardGroup>
        </div >
    );

};

export default Part;