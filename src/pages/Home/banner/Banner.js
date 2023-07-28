import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/bangla.jpg';
import img2 from '../../../assets/Hindi.jpg';
import img3 from '../../../assets/chinese-language.png';
import img4 from '../../../assets/english.jpg';
import img5 from '../../../assets/francis.jpg';
import img6 from '../../../assets/korean.jpg';
import img7 from '../../../assets/Arabic-language-teaching.jpg';
import img8 from '../../../assets/japanese.JPG';
import './Banner.css'

const Banner = () => {
    return (
        
           
             <Carousel autoPlay >
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img1} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img4} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img3} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img7} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img5} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img6}  alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full'  src={img2} alt=''/>
                    
                </div>
                <div className='w-full h-[550px]'>
                    <img className='h-full' src={img8} alt=''/>
                    
                </div>
            </Carousel>
          
        
    );
};

export default Banner;