import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../Image/Logo/b2.jpg'
import auth from '../../../firebase.init';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        localStorage.removeItem('acessToken')
        signOut(auth);

    };
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/review'>Review</Link></li>
        <li><Link to='/myprotfolio'>My Protfolio</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{user ? <button onClick={logout} class="btnbtn-ghost text-lg">Sign Out </button> : <Link to='/login'>Login</Link>}</li>
    </>
    return (
        <div className="navbar  rox  px-8">
            <div className="navbar-start mb-2">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 text-lg p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                    <Link className='btn rr btn-ghost' to='/'><img src={logo} alt={logo} srcset="" />
                    <a className="btn btn-ghost normal-case text-xl uppercase text-blue-900">Auto motors</a>
                </Link>
                </div>
               
            </div>
            <div className="navbar-end w-full   hidden lg:flex ">
                <ul className="menu menu-horizontal text-lg p-0">
                    {navItem}

                </ul>
            </div>

        </div>
    );
};

export default Navbar;