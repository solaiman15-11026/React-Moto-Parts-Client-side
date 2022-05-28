import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import Loading from "../Shared/Loading/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";


const stripePromise = loadStripe(
    "pk_test_51L4NX7IpR4eYUvvZRB9OEQFJUVF3zBe22YCKLqOSX14RU2t3hl1CmRMyKtB9wt6ZRcIt8OputCJZbNl4SyemKQV500IWFYaFHy"
);

const Payment = () => {
    const [user] = useAuthState(auth);
    const { paymentId } = useParams();
    const url = `https://mysterious-oasis-33878.herokuapp.com/placeorder/${paymentId}`;
    const { data: order, isLoading } = useQuery(["order", paymentId], () =>
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="px-6 lg:px-12">
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-xl text-secondary">Hello, {user.displayName} ☺</p>
                    <h2 class="card-title">
                        Please pay for{" "}
                        <span className="font-bold">"{order.placeOrderProductName}"</span>
                    </h2>
                    <p>
                        Please Pay:{" "}
                        <span className="text-orange-500">${order.placeOrderPrice}</span>
                    </p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckOutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;