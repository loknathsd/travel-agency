import React from 'react';
import Place from '../assets/images/place2.png'

const Booking = () => {
    return (
        <div className="w-[70%] mx-auto mt-24">
            <h1 className='text-center text-4xl font-serif my-8'>Booking Information</h1>
            <div className='lg:flex justify-center'>
                <div className="travel-detail w-full font-serif mt-5">
                    <img src={Place} alt="" />
                    <h1 className='my-3 text-2xl '>Package Name: Korola Megna</h1>
                    <h1 className='text-xl mb-3'>Price: $500</h1>
                    <h1 className='text-xl'>Days : 5</h1>

                </div>
                <div className='w-full'>
                    <form className='w-full max-sm:mt-10'>
                        <input className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded'  type="text"  placeholder='Name' /><br />
                        <input className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded' type="email" placeholder='Email' /><br />
                        <input className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded' type="number" placeholder='Phone' /><br />
                        <input className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded' type="date" placeholder='' /><br />
                        <input className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded' type="number" placeholder='Number of tickets' /><br />
                        <textarea className='w-full px-8 py-3 mt-5 bg-transparent border border-gray-500 rounded' placeholder='Message'></textarea><br />
                        <input className='w-full px-8 py-3 mt-5 text-center bg-red-500 rounded text-white border border-red-500' type="text" value="Book Now" /><br />

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Booking;