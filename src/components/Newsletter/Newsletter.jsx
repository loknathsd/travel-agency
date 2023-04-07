import React from 'react';
import './Newsletter.css'

const Newsletter = () => {
    return (
        <div className=' newsletter-area my-24 '>
            <div  className="overlay" > 
                <div className=' mx-[15%] text-center flex gap-x-16 '>
                    <div className='font-serif'>
                        <h1 className='text-2xl'>Subscribe Our Newsletter</h1>
                        <p >Subscribe newsletter to get offers and about new places to discover.</p>
                    </div>
                    <div>
                    <input className='px-10 py-3 rounded ' type="text" placeholder='Email' />
                    <input type="submit" value="Subscribe" className='px-6 py-3 bg-red-500 rounded font-semibold' />
                    </div>
                </div>
                </div> 
        </div>
    );
};

export default Newsletter;