import { faArrowRight, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import profile from '../../Image/formal pic.png'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <div className='cover-body '>
            <Container className=''>
                <div className='port '>
                    <div className='mt-4 '>
                        <img className='rounded' src={profile} alt="" srcset="" className='' />
                    </div>
                    <div className='' >
                        <div className='rty'>
                            <h1 class="text-4xl font-bold text-pink-500 mb-2"> Md.Solaiman Sheik</h1>
                            <p class="py-6 review">My name is Solaiman, and I'm a professional web developer. I enjoy coding and consider it a hobby. I'm here to assist you and to develop your website.
                                I can assist you in best describing yourself. Regardless of how complicated your web page is, I'll find a simple solution and accomplish your work. Keep in touch with me.</p>
                            <button class="btn btn-primary mt-2">More About Me <FontAwesomeIcon className='text-white text-2xl pl-2' icon={faArrowRight}></FontAwesomeIcon></button>
                        </div>

                    </div>
                </div> <br />




                <div className='skill shadow rounded-3 '>
                    <h1 className='text-center   mb-12  uppercase font-skill'>

                        <span className='border border-warning px-2 mx-2'>m</span>
                        <span className='border border-warning px-2 mx-2'>y</span>
                        <span className='border border-info px-2 mx-2'>s</span>
                        <span className='border border-info px-2 mx-2'>k</span>
                        <span className='border border-info px-2 mx-2'>i</span>
                        <span className='border border-info px-2 mx-2'>l</span>
                        <span className='border border-info px-2 mx-2'>l</span>
                        <span className='border border-info px-2 mx-2'>S</span>
                    </h1>

                    <div className=''>
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-blue-500 h-1 text-xl " style={{ width: '90%' }} >HTML</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-danger h-1 text-xl " style={{ width: '80%' }} >CSS</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-pink-600 h-1 text-xl" style={{ width: '65%' }} >Bootstrap</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-blue-800 h-1 text-xl" style={{ width: '60%' }} >JavaScript</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-secondary h-1 text-xl" style={{ width: '50%' }}>Node js</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-success h-1 text-xl" style={{ width: '75%' }}>React JS</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-warning h-1 text-xl" style={{ width: '55%' }}>Firebase</div>
                        </div>
                        <br />
                        <div class="w-full bg-gray-200 mb-3 h-1">
                            <div class="bg-primary h-1 text-xl" style={{ width: '60%' }}>Mongo DB</div>
                        </div>
                        <br />

                    </div>
                </div> <br />   <br /> <br /> <br />

                <div className='w-100 mx-auto mb-24 '>
                    <h1 className='text-center  mb-3 text-4xl uppercase'> <span className='text-pink-700'>EDUCATION Qualification</span></h1>
                    <hr style={{ width: '43%', margin: '0  auto' }} className='mb-4 ' />
                    <div >
                        <div className='bg-blue-900 text-white p-5 mr-5 mb-5 rounded-3 shadow-1xl'>
                            <h2 className='text-2xl pl-10'><FontAwesomeIcon className='text-warning text-2xl pl-2 mr-2' icon={faGraduationCap}></FontAwesomeIcon><span className='font-bold'>Bechelor Degree-</span> <span>Daffodil International University</span></h2>
                            <p className='pl-10 py-3 '>I have completed my Bechelor Degree from Daffodil International University
                                in Computer Science & Engineering. I got CGPA 3.25 out of 4.00
                            </p>
                            <p className='pl-10'>Session: 2018-2021</p>
                        </div>
                    </div>

                </div> <br /> <br />









            </Container >
        </div >


    );
};

export default Portfolio;