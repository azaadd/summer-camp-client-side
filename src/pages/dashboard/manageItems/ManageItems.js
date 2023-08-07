import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import useManageClass from '../../../hooks/useManageClass';
import Swal from 'sweetalert2';

const ManageItems = () => {

    const [lecture, refetch] = useManageClass();

    console.log(lecture)
    const handleDelete = item => {
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
                fetch(`http://localhost:5000/lactures/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className='w-full mt-0 mb-16 pt-4'>

            <Helmet>
                <title>Language School | Manage Classes</title>
            </Helmet>



            <div className="overflow-x-auto top-12 left-1/4">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg bg-gray-300 px-2 rounded'>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Actions</th>

                        </tr>
                    </thead>



                    <tbody className='font-medium text-lg'>
                        {
                            lecture.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">

                                        <div className="mask mask-squircle w-20 h-20">
                                            <img className='w-20 h-20' src={item.image} alt=" " />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <h5>{item.name}</h5>
                                    </div>
                                </td>
                                <td>$ {item.price}.00</td>
                                <td>{item.availableSeats}</td>
                                <th>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm normal-case bg-gray-300"> <FaTrashAlt className='text-lg' /> Delete</button>
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

export default ManageItems;