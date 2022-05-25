import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import profile from '../../Image/formal pic.png'

import './Portfolio.css'

const Portfolio = () => {
    return (
        <Container>
            <div className=' mt-4'>
                <div className='port'>
                    <div>
                        <img src={profile} alt="" srcset="" className='' />
                    </div>
                    <div className='' >
                        <div className='rty'>
                            <h1 class="text-4xl font-bold text-red-500 mb-2"> Md.Solaiman Sheik</h1>
                            <p class="py-6 reviwe">My name is Solaiman, and I'm a professional web developer. I enjoy coding and consider it a hobby. I'm here to assist you and to develop your website.
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
                </div> <br />   <br /> <br />












            </div>

        </Container>
    );
};

export default Portfolio;