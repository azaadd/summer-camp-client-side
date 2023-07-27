import React from 'react';
import Banner from '../banner/Banner';
import Counter from '../Counter/Counter';
import Facilities from '../facilities/Facilities';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facilities></Facilities>
            <Counter></Counter>
        </div>
    );
};

export default Home;