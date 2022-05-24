import React from 'react';
import Banner from '../Banner/Banner'
import Gallary from '../Gallary/Gallary';
import Letus from '../Letus/Letus';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <Gallary></Gallary>
            <Letus></Letus>
        </div>
    );
};

export default Home;