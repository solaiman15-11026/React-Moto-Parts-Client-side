import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Service from './Service/Service';
import Letus from './Letus/Letus';
import Parts from './Parts';
import Review from './Review/Review';
import Gallary from './Gallary/Gallary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Service></Service>
            <Gallary></Gallary>
            <Review></Review>
            <Letus></Letus>
           
        </div>
    );
};

export default Home;