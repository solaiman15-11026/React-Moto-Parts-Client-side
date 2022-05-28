import { React, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import DeleteUserModal from './DeleteUserModal';
import UserRow from './UserRow';

const Users = () => {
    const [deleteUser, setDeleteUser] = useState(null);
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://mysterious-oasis-33878.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-2xl text-blue-900'>All Users : {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index}

                            ></UserRow>)
                        }
                    </tbody>

                </table>
            </div>
            {/* {deleteUser && (
                <DeleteUserModal
                    key={deleteUser._id}
                    deleteUser={deleteUser}
                    setDeleteUser={setDeleteUser}
                    refetch={refetch}
                ></DeleteUserModal>
            )} */}

        </div>
    );
};

export default Users;