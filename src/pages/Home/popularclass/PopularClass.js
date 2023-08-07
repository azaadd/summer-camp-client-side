import React, { useEffect, useState } from 'react';




const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lactures')
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    data = data.slice(0, 6)
                    setClasses(data)
                }
            })
    }, []);

    const handleToSelect = () => {
        alert('Please go classes page and select the class')
    }



    return (

        <div className='mx-16 mb-12 mt-20'>
            <p className='text-4xl font-bold text-gray-600 text-center'>Our Most Popular Classes</p>
            <p className='text-center text-lg font-semibold'>Explore your popular class and join your favorite class</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3'>
                {
                    classes.map(PClass => <div key={PClass._id} className="card w-full bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={PClass.image} alt="Shoes" className="rounded-xl w-[372px] h-[248px]" />
                        </figure>
                        <div className="card-body items-center text-center mt-0 pt-2 pb-5">
                            <h2 className="card-title">{PClass.name}</h2>
                            <p>Available Seats: {PClass.availableSeats}</p>
                            <p>Price: $ {PClass.price}.00</p>
                            <p>Total Student: {PClass.totalEnrolled}</p>
                            <div className="card-actions">
                                <button onClick={handleToSelect} className="btn btn-ghost hover:bg-gray-700 hover:border-white hover:bg-opacity-60 border-gray-500 hover:text-white normal-case text-lg md:w-80">Select your Class</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default PopularClass;