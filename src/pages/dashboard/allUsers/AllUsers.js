import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/usersInfo')
        return res.data;
    });

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/usersInfo/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is an admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/usersInfo/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your user has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className='relative w-full mt-0 mb-16 pt-4'>
            <Helmet>
                <title>Language School | All Users</title>
            </Helmet>

            <div className="overflow-x-auto fixed top-12 left-1/4">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg bg-gray-300 rounded px-2'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>

                        </tr>
                    </thead>



                    <tbody className='font-medium text-lg'>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <p>{user.name}</p>
                                </td>
                                <td>
                                    <div>
                                        <h5>{user.email}</h5>
                                    </div>
                                </td>
                                <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-sm normal-case bg-green-400"> <FaUserShield className='text-lg' /></button>}</td>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-sm normal-case bg-gray-300"> <FaTrashAlt className='text-lg' /> Delete</button>
                                </th>
                            </tr>)
                        }


                        {/* row 3 */}


                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default AllUsers;