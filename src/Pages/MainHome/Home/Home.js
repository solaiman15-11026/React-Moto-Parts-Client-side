import React from 'react';
import Banner from '../Banner/Banner'
import Gallary from '../Gallary/Gallary';
import Letus from '../Letus/Letus';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Service></Service>
            <Gallary></Gallary>
            <Review></Review>
            <Letus></Letus>
        </div>
    );
};

export default Home;