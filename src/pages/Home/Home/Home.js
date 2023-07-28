import React from 'react';
import Banner from '../banner/Banner';
import Counter from '../Counter/Counter';
import Facilities from '../facilities/Facilities';
import { Helmet } from 'react-helmet-async';
import PopularClass from '../popularclass/PopularClass';



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Language School | Home</title>
            </Helmet>
            <Banner></Banner>
            <Facilities></Facilities>
            <PopularClass></PopularClass>
            <Counter></Counter>
        </div>
    );
};

export default Home;