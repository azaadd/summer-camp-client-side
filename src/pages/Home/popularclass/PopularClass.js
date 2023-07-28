import React, { useEffect, useState } from 'react';
import PopClasses from './PopClasses';

const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => {
            if(data.length > 6){
                data = data.slice(0, 6)
                setClasses(data)
            }
        })
    }, []);
    
    

    return (

        <div className='mx-16 mb-12 mt-16'>
            <p className='text-4xl font-bold text-gray-600 text-center'>Our Most Popular Classes</p>
            <p className='text-center text-lg font-semibold'>Explore your popular class and join your favorite class</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-3'>
                    {
                        classes.map(PClass => <PopClasses
                            key={PClass._id}
                            PClass={PClass}
                            ></PopClasses>)
                    }
                </div>

        </div>
    );
};

export default PopularClass;