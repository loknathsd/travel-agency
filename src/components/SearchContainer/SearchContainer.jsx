import React from 'react';

const SearchContainer = () => {
    return (
        <div className='w-full py-[60px] bg-[#040E27] -mt-16 text-white'>
            <div className='lg:flex container text-center mx-auto gap-x-2 '>
                <h1 className='text-3xl mr-5'>Where you want to go?</h1>
                <input placeholder='Where to go?' type="text" className='max-sm:my-5 rounded w-[220px] h-[50px] bg-transparent border border-[#363E52]' />
                <input placeholder='Date' type="date" className='rounded w-[220px] h-[50px] bg-transparent border border-[#363E52]' />
                <select className='max-sm:my-5 rounded w-[220px] h-[50px] bg-transparent border border-[#363E52]'>
                    <option value="">Travel Type</option>
                </select>
                <input type="submit" value="Search" className='max-sm:my-5 rounded w-[160px] h-[50px] bg-[#FF4A52]' />
            </div>  
        </div>
    );
};

export default SearchContainer;