import React from 'react';
import { AiOutlineHome,AiOutlineMail } from 'react-icons/ai';
import { FaMobileAlt } from 'react-icons/fa';


const Contact = () => {
    return (
        <div className='w-[80%] mx-auto mt-24'>
            <h1 className='text-4xl font-serif mb-5'>Get in Touch</h1>
            <div className='lg:flex justify-between'>
                <div className='max-sm:mb-12 lg:w-[60%]'>
                    <form action="">
                        <textarea placeholder='Your Message' className='bg-transparent border border-[#e5e6e9] w-full px-5 py-5' ></textarea> <br />
                        <div className='flex mt-5'>
                            <input className='px-5 py-3 rounded bg-transparent border border-[#e5e6e9] w-full' type="text" placeholder='Enter your Name' />
                            <input className='px-5 py-3 rounded ml-5 bg-transparent border border-[#e5e6e9] w-full' type="email" placeholder='Your Name' />
                        </div><br />
                        <input className='px-5 py-3 rounded bg-transparent border border-[#e5e6e9] w-full' type="text" placeholder='Subject' /><br />
                        <input className='px-12 py-2 rounded mt-5 bg-red-400 text-white ' type="submit" value="Send" />
                    </form>
                </div>
                <div className=' font-serif '>
                    <div className='flex'>
                        <AiOutlineHome className='text-4xl mr-5 mt-2'  />
                        <div>
                        <h1 className='text-xl '>Buttonwood, California.</h1>
                        <p className='text-gray-500'>Rosemead, CA 91770</p>
                        </div>
                    </div>
                    <div className='flex my-5'>
                        <FaMobileAlt className='text-4xl mr-5 mt-2'  />
                        <div>
                        <h1 className='text-xl '>+1 253 565 2365 </h1>
                        <p className='text-gray-500'>Mon to Fri 9am to 6pm</p>
                        </div>
                    </div>
                    <div className='flex'>
                       <AiOutlineMail  className='text-4xl mr-5 mt-2' />
                       <div>
                       <h1 className='text-xl '>support@colorlib.com</h1>
                        <p className='text-gray-500'>Send us your query anytime!</p>
                       </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;