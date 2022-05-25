import React from 'react';
import bg from '../../../Image/BG.jpg'
import './Letuse.css'

const Letus = () => {
    return (
        <div className='BG-image '>
            <img className='imagee' src={bg} alt="" srcset="" />
            <div className='inpt'>
                <h1 className='headd'>LET US CALL YOU BACK</h1>
            </div>
            <div className='input-res'>
                <form className='from' >
                    <input className='field ' type="text" placeholder='Name' />
                    <input className='field' type="number" placeholder='Mobile' />
                    <input className='field' type="email" name="" id="" placeholder='EMAIL ID' />
                    <select className='cla' id="" name="Division">
                        <option value="">--Select District--</option>
                        <option value="">Dhaka </option>
                        <option value=""> Manikgonj</option>
                        <option value="">Shariatpur </option>
                        <option value="">Narsingdi </option>
                        <option value=""> Faridpur</option>
                        <option value=""> Rajbari</option>
                        <option value=""> Tangail</option>
                        <option value="">Comilla </option>
                        <option value="">Bandarban </option>
                        <option value=""> Meherpur</option>
                    </select>
                </form> <br />
                <div className='rex mt-3'>
                    <textarea className='fextAr' name="" id="" cols="147" rows="6" placeholder='REMARKS'></textarea>
                </div>
                <div className='bt mt-4'>
                    <button className='togol bg-warning   '>
                        SUBMIT
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Letus;