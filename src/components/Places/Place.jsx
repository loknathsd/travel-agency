import React from 'react';
import { BiTimeFive } from 'react-icons/bi';

const Place = ({ place }) => {
    const { img, name, state, price, day } = place
    return (
        <div className='shadow bg-white w-full p-5'>
            <div className='relative'>
                <img className=' w-full rounded' src={img} alt="" />
                <p className='absolute top-6 text-white left-5 bg-red-600 px-4 py-1 rounded-2xl'>${price}</p>
            </div>
            <div className='flex justify-between my-8'>
                <div>
                    <h1 className='text-2xl'>{name}</h1>
                    <p className='text-gray-400 mt-2'>{state}</p>
                </div>
                <p className='flex gap-x-2 '> <span className='mt-1'><BiTimeFive/></span> {day} days</p>
            </div>


        </div>
    );
};

export default Place;