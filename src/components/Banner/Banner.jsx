import React, { useState } from 'react';
import LogoOne from '../../assets/images/banner.png'
import LogoTwo from '../../assets/images/banner2.png'
import LogoThree from '../../assets/images/banner3.png'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const slides = [
    {
        url: LogoOne,
        title: 'Indonesia'
    },
    {
        url: LogoTwo,
        title: 'Australia'
    },
    {
        url: LogoThree,
        title: 'Switzerland'
    }
];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    return (
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            >
                <div className='w-full text-center absolute top-[30%] '>
                    <h1 className='text-white lg:text-7xl max-sm:text-5xl font-bold font-serif mb-16' >{slides[currentIndex].title} </h1>
                    <button className='px-16 py-2 bg-transparent border-2 text-xl capitalize border-white rounded-md text-white font-bold'>Let's go</button>
                </div>
            </div>

            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
            </div>
        </div>

    );
};

export default Banner;