import React from 'react';
import Logo from '../assets/images/trip2.png'
import Logo1 from '../assets/images/trip1.png'
import Logo2 from '../assets/images/trip3.png'
import CountUp from 'react-countup';
const About = () => {
    return (
        <div className='relative '>
            <img className='w-full h-[300px] mt-16' src={Logo} alt="" />
            <h1  className='absolute top-28 bg-gray-800 font-serif px-6 py-3 text-white left-[45%]' >About Us</h1>
            <div className='w-[70%] mx-auto my-12 font-serif'>
                <h1 className='text-4xl mb-5'>Our Story</h1>
                <p className='text-gray-500'>Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes. <br />Consulting represents success at realizing the company is going in the wrong direction. The only time the company fails is when it is not possible to do a turnaround anymore. We help companies pivot into more profitable directions where they can expand and grow. It is inevitable that companies will end up making a few mistakes; we help them correct these mistakes.</p>
                <div className='lg:flex mx-16 my-12'>
                    <img className='mr-10 max-sm:mb-10' src={Logo1} alt="" />
                    <img src={Logo2} alt="" />
                </div>
                <div className='lg:flex justify-between text-center mt-32 '>
                    <div>
                        <span className='text-6xl text-red-600'><CountUp start={200}  end={378} duration={5} /></span>
                        <h1 className='text-2xl mt-5'>Tour has done successfully</h1>
                    </div>
                    <div className='max-sm:my-10'>
                        <span className='text-6xl text-red-600'><CountUp start={5}  end={30} duration={5} /></span>
                        <h1 className='text-2xl mt-5'>Yearly tour arrange</h1>
                    </div>
                    <div>
                        <span className='text-6xl text-red-600'><CountUp start={2200}  end={2263} duration={5} /></span>
                        <h1 className='text-2xl mt-5'>Happy Clients</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;