import React from 'react';

const Destination = ({des}) => {
    const {img,name,places} = des ;
    return (
        <div className='relative transition ease-in-out delay-150  hover:scale-110  duration-300 overflow-hidden'>
            <div></div>
            <img className='' src={img} alt="" />
            <div style={{position:'absolute',
              background: 'rgba(0, 0, 0, 0.5)', 
             color: "#f1f1f1",
             padding: '10px 15px'
        }} className='absolute left-[30px] bottom-[30px] z-10 flex items-center text-white gap-x-3 '>
                <p className='text-4xl'>{name}</p>
                <p className='text-lg mt-3 font-serif'>{places} places</p>
            </div>
        </div>
    );
};

export default Destination;