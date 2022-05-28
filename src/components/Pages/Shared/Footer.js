import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../../../src/Image/Social pic/facebook.png'
import instagram from '../../../../src/Image/Social pic/instgram.jpg'
import whatapp from '../../../../src/Image/Social pic/whatsapp.png'
import logo from '../../../Image/Logo/b2.jpg'
import './Footer.css'
import { faFileText, faLocation, faPhone, faSquarePlus, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div class="footer bg-dark p-7  text-base-content">
                <div className='text-white company'>
                    <img className='mb-2' width='35px' height='40px' src={logo} alt="" srcset="" />
                    <p ><h4> Auto Motors Ltd.</h4><span className='text'> Formerly All  Motors Parts is the world's largest manufacturer of two wheelers, based in Bangladesh.
                    </span>  </p>

                </div>
                <div className='text-white'>
                    <h4 className='rt mb-2'>SERVICES</h4>
                    <p> <span className=''> <FontAwesomeIcon className='icon' icon={faSquarePlus} /> </span>
                        <span>  <Link to='/' className='textt mt-3'>Branding</Link> <br /></span></p>

                    <p>
                        <span className=''> <FontAwesomeIcon className='icon' icon={faSquarePlus} /> </span>
                        <span>  <Link to='/' className='textt mt-2'>Design</Link> <br /></span>
                    </p>

                    <p>
                        <span className=''> <FontAwesomeIcon className='icon' icon={faSquarePlus} /> </span>
                        <span>    <Link to='/' className='textt mt-2'>Fast moving spare parts </Link> <br /></span>
                    </p>
                    <p>
                        <span className=''> <FontAwesomeIcon className='icon' icon={faSquarePlus} /> </span>
                        <span>  <Link to='/' className='textt mt-2'>Marketing</Link> <br /></span>
                    </p>
                    <p>
                        <span className=''> <FontAwesomeIcon className='icon' icon={faSquarePlus} /> </span>
                        <span>      <Link to='/' className='textt mt-2'>Advertisement</Link> <br /></span>
                    </p>

                </div>

                <div className='text-white'>
                    <h6 className='rttt mb-2'>CONTACT INFO</h6>

                    <p>
                        <span className='mb-2'> <FontAwesomeIcon className='icons' icon={faPhone} /> </span>
                        <span> <Link to='/' className='textt'> 880 1305-272861</Link> <br /></span>
                    </p>

                    <p>
                        <span className=''> <FontAwesomeIcon className='iconss' icon={faFileText} /> </span>
                        <span> <Link to='/' className='textt'>info@automotors.com</Link> <br /></span>
                    </p>

                    <p>
                        <span className=''> <FontAwesomeIcon className='iconsss' icon={faLocation} /> </span>
                        <span>  <Link to='/' className='textt'>Solaiman Tower,
                            69, Nikunja,C/A,
                            Dhaka-1229 Bangladesh</Link> <br /></span>

                    </p>


                </div>
                <div> <h6 className='rtt mb-3'>FOLLOW US</h6>
                    <div className="socialside gap-4">
                        <Link to='/'><img src={facebook} alt={facebook} srcset="" /></Link>
                        <Link to='/'><img src={instagram} alt={instagram} srcset="" /></Link>
                        <Link to='/'><img src={whatapp} alt={whatapp} srcset="" /></Link>
                    </div>
                </div>
                <br />
            </div>

            <div className=' pb-2 bg-dark text-white text-center'>
                <p><small className='copy'>Copyright © 2022 - All right reserved by Auto Motors Parts</small></p>
            </div>
        </div>
    );
};

export default Footer;