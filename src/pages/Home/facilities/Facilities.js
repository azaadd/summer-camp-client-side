import React from 'react';
import facilities from '../../../assets/facilities.jpg';
import facilities2 from '../../../assets/online-classes-sp19.jpg';
import facilities3 from '../../../assets/offlineclass.jpg';
import facilities4 from '../../../assets/support.png';
import facilities5 from '../../../assets/experienceteacher.JPG';



const Facilities = () => {
    return (
        <div className='text-center mx-16 items-center md:flex gap-3 mt-16 mb-6'>

            <div className='md:w-1/2'>

                <img className='w-[600px] h-[800px]' src={facilities} alt="" />

            </div>
            <div className='md:w-1/2'>
                <h3 className='block text-4xl font-bold text-gray-500'>We are Providing</h3>
                <p className='text-2xl font-semibold text-gray-500'>Our Best Facilities-</p>

                <div className='flex mt-6 gap-3'>
                    <img className='w-44 h-36 rounded-md' src={facilities2} alt="" />
                    <div className='text-start my-auto'>
                        <p className='text-2xl font-bold'>Online Class</p>
                        <p className='text-xl'>The online catalog has self-paced courses designed for you to learn what you need, when you need it.</p>
                    </div>
                </div>
                <div className='flex mt-6 gap-3'>
                    <img className='w-44 h-36 rounded-md' src={facilities3} alt="" />
                    <div className='text-start my-auto'>
                        <p className='text-2xl font-bold'>Offline Class</p>
                        <p className='text-xl'>Offline education is the original method of learning that allows students to have regular face-to-face interactions with their peers and teachers.</p>
                    </div>
                </div>
                <div className='flex mt-6 gap-3'>
                    <img className='w-44 h-36 rounded-md' src={facilities4} alt="" />
                    <div className='text-start my-auto'>
                        <p className='text-2xl font-bold'>Awesome Support</p>
                        <p className='text-xl'>Training helps learners gain new knowledge and skill. The most effective training also helps learners apply this information to their workplace.</p>
                    </div>
                </div>
                <div className='flex mt-6 gap-3'>
                    <img className='w-44 h-36 rounded-md' src={facilities5} alt="" />
                    <div className='text-start my-auto'>
                        <p className='text-2xl font-bold'>Experience Teachers</p>
                        <p className='text-xl'>Teaching experience is the culmination of skills, exposure or training acquired over time that enables you to perform an existing job better.</p>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Facilities;