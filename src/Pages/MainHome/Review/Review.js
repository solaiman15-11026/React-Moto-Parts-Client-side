import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'

const Review = () => {
    return (
        < div className='my-5  pb-4 bg-color ' >
            <h1 className='mt-4 text-primary pt-5 mb-2 text-center text-uppercase '>

                <span className='border border-info px-2 mx-2'>R</span>
                <span className='border border-info px-2 mx-2'>E</span>
                <span className='border border-info px-2 mx-2'>V</span>
                <span className='border border-info px-2 mx-2'>I</span>
                <span className='border border-info px-2 mx-2'>E</span>
                <span className='border border-info px-2 mx-2'>W</span>
                <span className='border border-info px-2 mx-2'>S</span>
            </h1>
            <hr style={{ width: '35%', margin: '0  auto' }} className='mb-4 ' />
            <div className="card-group container-reviw text-center">
                <div className="card m-3 border-0 shadow rounded">
                    <img className="card-img-top mx-auto w-100 " src="https://i.ibb.co/W28mHy2/istockphoto-1296158947-612x612.jpg" alt="" />
                    <div className="card-body">
                        <h3 className="card-title tt">David Rio</h3>
                        <p className='reviwe'>
                            Simple free app. Works well. Would be nice to have some extra features like linking to emails asking customers for a review. So customers could leave a review upon purchasing an item on the site. But simple enough and effective enough.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img className="card-img-top mx-auto w-100 " src="https://i.ibb.co/MnpPZ57/istockphoto-1007763808-612x612.jpg" alt="" />
                    <div className="card-body">
                        <h3 className="card-title tt">Will Jodan</h3>
                        <p className='reviwe'>
                            Yikes. All seems ok until it comes to importing reviews. Seems like there has been success within the Shopify community that I've attempted to mock but every time I try to upload there is a new issue that didn't exist before.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-secondary' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
                <div className="card m-3 border-0 shadow rounded">
                    <img className="card-img-top mx-auto w-100 " src="https://i.ibb.co/sKBdJg6/photo-1438761681033-6461ffad8d80.jpg" alt="" />
                    <div className="card-body">
                        <h3 className="card-title tt">Ema Jahan</h3>
                        <p className='reviwe'>
                            Works great on my new website, gocrossbow.com. Just added it a few weeks ago and already seeing the number of reviews on my products listed in google search. Great for seo and driving organic traffic.
                        </p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-warning' icon={faStar}></FontAwesomeIcon>
                        </small>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Review;