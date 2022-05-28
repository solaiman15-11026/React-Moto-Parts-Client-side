import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ a, index }) => {

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{a.placeOrderProductName}</td>
            <td>{a.placeOrderPrice}</td>
            <td>{a.placeOrderQuantity}</td>
            <td>
                {a.placeOrderPrice && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-secondary lg:px-5">
                            Pay
                        </button>
                    </Link>
                )}
                {a.paid && <span class="btn text-seccess">Paid</span>}
            </td>
            <td>
                <button class="btn bg-red-500 btn-xs">Delete</button>
            </td>

        </tr>
    );
};

export default Order;