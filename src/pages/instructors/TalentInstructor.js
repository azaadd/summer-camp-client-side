import React from 'react';

const TalentInstructor = ({instructor}) => {
    const {photoUrl, name, Lecturer, totalEnrolled, email} = instructor;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={photoUrl} alt="Shoes" className="rounded-xl w-[372px] h-[248px]" />
            </figure>
            <div className="card-body items-center text-center mt-0 pt-2 pb-5">
                <h2 className="card-title text-2xl">{name}</h2>
                <p>Lecturer: {Lecturer}</p>
                <p>Total Student: {totalEnrolled}</p>
                <p className='font-semibold'>Email: {email}</p>
                <div className="card-actions">
                    <button className="btn btn-primary hover:bg-opacity-75 normal-case text-lg md:w-80">Book your appointment</button>
                </div>
            </div>
        </div>
    );
};

export default TalentInstructor;