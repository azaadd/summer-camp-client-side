import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageClass from './PageClass';

const Classes = () => {
    const [pageClass, setPageClass] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lactures')
        .then(res => res.json())
        .then(data => setPageClass(data))
    },[]);


    return (
        <div className='pt-36 mb-12'>
            <Helmet>
                <title>Language School | Classes</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    pageClass.map(p_class => <PageClass
                    key={p_class._id}
                    p_class={p_class}
                    ></PageClass>)
                }
            </div>
        </div>
    );
};

export default Classes;