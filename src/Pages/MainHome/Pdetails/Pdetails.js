import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
const Pdetails = (props) => {

    const { img, name, description, minimum, quantity, price } = props.p;

    return (
        <div id=''>
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
                            <h6>Price: ${price}</h6>
                            <Link to='order'  > <button className='bg-info p-2 w-100 text-light rounded'>Order</button></Link>
                        </Card.Body>


                    </Card>
                </CardGroup>
            </div >
        </div>
    );
};

export default Pdetails;
