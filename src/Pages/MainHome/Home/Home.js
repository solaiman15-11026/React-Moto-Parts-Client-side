import React from 'react';
import Banner from '../Banner/Banner'
import Gallary from '../Gallary/Gallary';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Gallary></Gallary>
        </div>
    );
};

export default Home;