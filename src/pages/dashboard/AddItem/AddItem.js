import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddItem = () => {

    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        
        
        const {image, name, availableSeats, price, totalEnrolled} = data;
        const newItem = {image, name, availableSeats, price: parseFloat(price), totalEnrolled};
        console.log(newItem)

        axiosSecure.post('/lactures', newItem)
        .then(data => {
            console.log('new add class', data.data)
            if(data.data.insertedId){
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your class has been added successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    };
    console.log(errors);

    return (
        <div className='w-3/4 mt-0 mb-16 pt-4'>
            <h2 className='text-3xl font-bold text-center text-gray-600'>Add Classes</h2>
            <div className="divider"></div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full">
                    <div className='flex w-full gap-4 mb-5'>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL*</span>

                            </label>
                            <input type="text" placeholder="photo URL"
                            {...register("image", {required: true})}
                            className="input input-bordered w-full" />
                        </div>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Class Name*</span>

                            </label>
                            <input type="text" placeholder="class name"
                            {...register("name", {required: true, maxLength: 120})}
                            className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className='flex w-full gap-4 mb-5'>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats*</span>

                            </label>
                            <input type="text" placeholder="available seats"
                            {...register("availableSeats", {required: true})}
                            className="input input-bordered w-full" />
                        </div>
                        <div className='w-1/2'>
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>

                            </label>
                            <input type="text" placeholder="price" 
                            {...register("price", {required: true})}
                            className="input input-bordered w-full" />
                        </div>
                    </div>

                    <div className='mb-5'>
                        <label className="label">
                            <span className="label-text font-semibold">Total Students*</span>

                        </label>
                        <input type="text" placeholder="total students"
                        {...register("totalEnrolled", {required: true})}
                        className="input input-bordered w-full" />
                    </div>

                    <input className='btn btn-block normal-case bg-gray-300 text-lg' type="submit" value="Add Class" />

                </div>
            </form>

        </div>
    );
};

export default AddItem;