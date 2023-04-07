import React from 'react';
import des1 from '../../assets/images/1.png'
import des2 from '../../assets/images/2.png'
import des3 from '../../assets/images/3.png'
import des4 from '../../assets/images/4.png'
import des5 from '../../assets/images/5.png'
import des6 from '../../assets/images/6.png'
import Destination from './Destination';


const destinations =[
    {img:des1,name:'Italy',places:7},
    {img:des2,name:'Brazil',places:3},
    {img:des3,name:'America',places:10},
    {img:des4,name:'Nepal',places:2},
    {img:des5,name:'Maldives',places:2},
    {img:des6,name:'Indonesia',places:5},
]

const Destinations = () => {
    return (
        <div className='text-center mt-24 container mx-auto'>
            <h1 className='text-5xl'>Popular Destination</h1>
            <p className='mt-6 text-gray-600 text-lg font-serif'>Suffered alteration in some form, by injected humour or good day <br /> randomised booth anim 8-bit hella wolf moon beard words.</p>
            <div className='container mx-8 grid grid-cols-3 gap-y-8  mt-16'>
                {destinations.map(des=><Destination des={des} />)}
            </div>
        </div>
    );
};

export default Destinations;