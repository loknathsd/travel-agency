import React from 'react';
import Trip1 from '../../assets/images/trip1.png'
import Trip2 from '../../assets/images/trip2.png'
import Trip3 from '../../assets/images/trip3.png'


const data =[
    {img:Trip1,date:'Oct 12,2019', review:'Journeys Are Best Measured In New Friends'},
    {img:Trip2,date:'Nov 8,2018', review:'Journeys Are Best Measured In New Friends'},
    {img:Trip3,date:'Oct 12,2020', review:'Journeys Are Best Measured In New Friends'},
]

const Trips = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center text-4xl font-serif mt-32 mb-16'>Recent Trips</h1>

            <div className='grid grid-cols-3 gap-7 mx-6'>
                {
                    data.map(trip=> <div className='w-96'>
                        <img className='rounded' src={trip.img} alt="" />
                        <small className='font-serif text-gray-500'>{trip.date}</small>
                        <h1 className='text-xl font-serif'>{trip.review}</h1>
                    </div> )
                }
            </div>
            
        </div>
    );
};

export default Trips;