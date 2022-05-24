import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ProductsDetails = (props) => {
    const { img, name, description, minimum, quantity, price } = props.p;
    console.log(props.p)
    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <small className="text-muted">{minimum}</small>
                        <small className="text-muted">{quantity}</small>

                        <Card.Text>
                            ${price}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default ProductsDetails;