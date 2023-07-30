import React from 'react';
import CountUp from 'react-countup';
import { useCountUp } from 'react-countup';
// import CountUp from 'react-countup/build/CountUp';
// import { useCountUp } from 'react-countup';


const Counter = () => {

    useCountUp({
        ref: 'counter',
        end: 1234567,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });

    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-24 text-center justify-center py-8 bg-neutral-200 text-gray-700'>

            <div className=''>
                <CountUp
                    className='text-5xl font-bold'
                    start={350} 
                    end={17}
                    duration={3}
                    enableScrollSpy
                />
                <span className='text-5xl font-bold'>M+</span>
                <p className='text-lg font-semibold'>Total Visitors</p>
            </div>
            <div className=''>
                <CountUp
                    className='text-5xl font-bold'
                    start={4520}
                    end={81}
                    duration={3}
                    enableScrollSpy
                />
                <span className='text-5xl font-bold'>k+</span>
                <p className='text-lg font-semibold'>Our Students</p>
            </div>
            <div className=''>
                <CountUp
                className='text-5xl font-bold'
                    start={5020}
                    end={305}
                    duration={3}
                    enableScrollSpy
                />
                <span className='text-5xl font-bold'>k+</span>
                <p className='text-lg font-semibold'>Total Subscribers</p>
            </div>
            <div>
                <CountUp
                className='text-5xl font-bold'
                    start={5550}
                    end={558}
                    duration={3}
                    enableScrollSpy
                />
                <span className='text-5xl font-bold'>k+</span>
                <p className='text-lg font-semibold'>Total Likes</p>
            </div>
        </div>
    );
};

export default Counter;