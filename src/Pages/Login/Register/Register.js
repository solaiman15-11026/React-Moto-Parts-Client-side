import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../../Shared/Loading/Loading';


const Register = () => {
    // Register Page
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

    }

    return (
        <div className='register-form box-2'>
            <h2 style={{ textAlign: 'center' }}> Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name...' />

                <input type="email" name="email" id="" placeholder='Email Address...' required />

                <input type="password" name="password" id="" placeholder='Password...' required />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-success'}`} htmlFor="terms">Accept Terms and Conditions</label>

                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit" value="Create an account" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}> Login</Link></p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Register;