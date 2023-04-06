import React from 'react';
import Banner from '../components/Banner/Banner';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <SearchContainer />            
        </div>
    );
};

export default Home;