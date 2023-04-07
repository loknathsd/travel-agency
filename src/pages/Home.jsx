import React from 'react';
import Banner from '../components/Banner/Banner';
import Destinations from '../components/Destinations/Destinations';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <SearchContainer />
            <Destinations />            
        </div>
    );
};

export default Home;