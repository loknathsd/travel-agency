import React from 'react';
import Icon1 from '../../assets/images/1.svg'
import Icon2 from '../../assets/images/2.svg'
import Icon3 from '../../assets/images/3.svg'
const data = [
    { icon: Icon1, title: 'Comfortable Journey', des: 'A wonderful serenity has taken to the possession of my entire soul.' },
    { icon: Icon2, title: 'Luxuries Hotel', des: 'A wonderful serenity has taken to the possession of my entire soul.' },
    { icon: Icon3, title: 'Travel Guide', des: 'A wonderful serenity has taken to the possession of my entire soul.' }
]

const Features = () => {
    return (
        <div className='container mx-auto mb-40 mt-32'>
            <h1 className='text-4xl text-center mb-16 uppercase font-bold text-gray-500'>Facilities</h1>
            <div className='lg:grid lg:grid-cols-3 gap-6 '>
                {
                    data.map(dt => <div key={dt.title} className='w-96 text-center border border-gray-400 rounded px-6 py-12 mx-3 max-sm:my-3'>
                        <img className='w-20 mx-auto' src={dt.icon} alt="" />
                        <h1 className='text-2xl my-5 font-serif'>{dt.title}</h1>
                        <p className='font-serif '>{dt.des}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Features;