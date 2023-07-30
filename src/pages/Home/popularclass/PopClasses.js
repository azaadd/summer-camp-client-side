import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const PopClasses = ({ PClass }) => {
    const { name, image, availableSeats, price, totalEnrolled, _id } = PClass;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
   
    const handleAddToSelect = PClass => {
        console.log(PClass);
        if(user && user.email){
            const cartItem = {selectItemId: name, image, price, _id, email: user.email }
            fetch('http://localhost:5000/selectItems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); // refetch the cart number of item
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your class has been saved in cart',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login first for selecting the class?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from:location}});
                }
              })
        }
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={image} alt="Shoes" className="rounded-xl w-[372px] h-[248px]" />
            </figure>
            <div className="card-body items-center text-center mt-0 pt-2 pb-5">
                <h2 className="card-title">{name}</h2>
                <p>Available Seats: {availableSeats}</p>
                <p>Price: $ {price}.00</p>
                <p>Total Student: {totalEnrolled}</p>
                <div className="card-actions">
                    <button onClick={() => handleAddToSelect(PClass)} className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white normal-case text-lg md:w-80">Select your Class</button>
                </div>
            </div>
        </div>
    );
};

export default PopClasses;