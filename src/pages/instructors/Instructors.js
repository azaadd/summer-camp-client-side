import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TalentInstructor from './TalentInstructor';

const Instructors = () => {
    const [pageInstructor, setPageInstructor] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
        .then(res => res.json())
        .then(data => setPageInstructor(data))
    },[]);


    return (
        <div className='pt-36 mb-12'>
            <Helmet>
                <title>Language School | Instructors</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    pageInstructor.map(instructor => <TalentInstructor
                    key={instructor._id}
                    instructor={instructor}
                    ></TalentInstructor>)
                }
            </div>
            
        </div>
    );
};

export default Instructors;