import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer  drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl font-bold uppercase mb-4 text-red-600 text-center'>
                    <span className='border border-warning px-2 mx-2 hea'>O</span>
                    <span className='border border-warning px-2 mx-2 hea'>U</span>
                    <span className='border border-warning px-2 mx-2 hea'>R</span> -
                    <span className='border border-info px-2 mx-2'>d</span>
                    <span className='border border-info px-2 mx-2'>a</span>
                    <span className='border border-info px-2 mx-2'>s</span>
                    <span className='border border-info px-2 mx-2'>h</span>
                    <span className='border border-info px-2 mx-2'>b</span>
                    <span className='border border-info px-2 mx-2'>o</span>
                    <span className='border border-info px-2 mx-2'>a</span>
                    <span className='border border-info px-2 mx-2'>r</span>
                    <span className='border border-info px-2 mx-2'>d</span>
                </h2>

                <Outlet></Outlet>

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {user && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard">My Orders</Link></button></li>}
                    {user && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/addreview">Add a Review</Link></button></li>}
                    {user && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/myprofile">My Profile</Link></button></li>}
                    {admin && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/users">Make Admin</Link></button></li>}
                    {admin && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/manageproduct">Manage Product</Link></button></li>}
                    {admin && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/manageorder">Manage Order</Link></button></li>}
                    {admin && <li><button className='btn bg-blue-900 mb-3 text-white'><Link to="/dashboard/addproduct">Add a Product</Link></button></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;