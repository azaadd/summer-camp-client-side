import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';
import { Link } from 'react-router-dom';



const MyCart = () => {

    const [isAdmin] = useAdmin();

    const [cart, refetch] = useCart();

    const total = cart.reduce((sum, item) => item.price + sum, 0)

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
                fetch(`http://localhost:5000/selectItems/${item._id}`, {
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


        <div className='relative w-full md:flex mt-0 mb-16 pt-4 mr-8'>

            <Helmet>
                <title>Language School | My Cart</title>
            </Helmet>



            {
                isAdmin ? <></>
                    : <>
                        <div className="w-2/3 overflow-x-auto ">
                            <table className="table">
                                {/* head */}
                                <thead className='text-lg bg-gray-300 px-2 rounded'>
                                    <tr>
                                        <th>#</th>
                                        <th>Class</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Actions</th>

                                    </tr>
                                </thead>



                                <tbody className='font-medium text-lg'>
                                    {
                                        cart.map((item, index) => <tr
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
                                            <th>
                                                <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-sm normal-case bg-gray-300"> <FaTrashAlt className='text-lg' /> Delete</button>
                                            </th>
                                        </tr>)
                                    }


                                    {/* row 3 */}


                                </tbody>

                            </table>
                        </div>

                        <div className="divider lg:divider-horizontal"></div>

                        <div className="fixed top-4 right-0 card w-80 h-80 bg-base-100 shadow-xl">

                            <div className="card-body items-start text-start px-3 py-4">
                                <h2 className="card-title">Cart Summary</h2>
                                <div className='flex gap-24 text-lg'>
                                    <p>Total item</p>
                                    <p>{cart.length}</p>
                                </div>
                                <div className='flex gap-24 text-lg'>
                                    <p>Sub-total</p>
                                    <p>$ {total}.00</p>
                                </div>
                                <div className='flex gap-24 text-lg'>
                                    <p>Others fee</p>
                                    <p>$ 0.00</p>
                                </div>

                                <div className="divider mb-0"></div>

                                <div className='flex gap-24 text-lg'>
                                    <p>Total price</p>
                                    <p>$ {total}.00</p>
                                </div>
                                <div className="card-actions justify-center mt-3 w-full">
                                    <Link to='/dashboard/pay_history' className="btn bg-gray-500 w-full normal-case text-white hover:text-black text-lg ">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </>
            }


        </div>


    );
};

export default MyCart;
