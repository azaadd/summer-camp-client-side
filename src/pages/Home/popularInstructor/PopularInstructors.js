import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';


const PopularInstructors = () => {

    const [popularInstructor, setPopularInstructor] = useState([]);

    useEffect(() => {
        fetch('https://b7a12-summer-camp-server-side-beta.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                if (data.length > 6) {
                    data = data.slice(0, 6)
                    setPopularInstructor(data)
                }
            })
            
    }, []);

    return (
        <div className='mx-16 mb-16 mt-20'>
            <p className='text-4xl font-bold text-gray-600 text-center'>Our Talented Instructors</p>
            <p className='text-center text-lg font-semibold'>Explore your popular class and join your favorite class</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3'>
                {
                    popularInstructor.map(instructor => <Instructors
                    key={instructor._id}
                    instructor={instructor}
                    ></Instructors>)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;