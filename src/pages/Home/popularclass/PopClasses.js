import React from 'react';

const PopClasses = ({ PClass }) => {
    const { name, image, availableSeats, price, totalEnrolled } = PClass;
   

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
                    <button className="btn btn-primary normal-case text-lg md:w-80">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default PopClasses;