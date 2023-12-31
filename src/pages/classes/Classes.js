import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAdmin from '../../hooks/useAdmin';


const Classes = () => {
    const [pageClass, setPageClass] = useState([]);
    const [isAdmin] = useAdmin();

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-beta.vercel.app/lactures')
            .then(res => res.json())
            .then(data => setPageClass(data))
    }, []);

    const handleAddToSelect = p_class => {
        console.log(p_class);

        if (user && user.email) {
            const cartItem = { name: p_class.name, image: p_class.image, price: p_class.price, selectedId: p_class._id, email: user.email }

            console.log(cartItem);
            fetch('https://b7a12-summer-camp-server-side-beta.vercel.app/selectItems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Your class has been selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire('You have already selected this class!!')
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login first for selecting the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }

    }


    return (
        <div className='pt-36 mb-12'>
            <Helmet>
                <title>Language School | Classes</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    pageClass.map(p_class => <div key={p_class._id} className={`card w-full bg-base-100 shadow-xl ${p_class.availableSeats === 0 ? 'bg-red-500' : ' '}`}>
                        <figure className="px-3 pt-3">
                            <img src={p_class.image} alt="Shoes" className="rounded-xl w-[372px] h-[248px]" />
                        </figure>
                        <div className="card-body items-center text-center mt-0 pt-2 pb-5">
                            <h2 className="card-title">{p_class.name}</h2>
                            <p>Available Seats: {p_class.availableSeats}</p>
                            <p>Price: $ {p_class.price}.00</p>
                            <p>Total Student: {p_class.totalEnrolled}</p>
                            <div className="card-actions">
                                { user ? <button onClick={() => handleAddToSelect(p_class)} disabled={p_class.availableSeats === 0 || isAdmin} className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white normal-case text-lg md:w-80">Select your Class</button>

                                :<button onClick={() => handleAddToSelect(p_class)} className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white normal-case text-lg md:w-80">Select your Class</button>}

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;