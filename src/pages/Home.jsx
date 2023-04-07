import React from 'react';
import Banner from '../components/Banner/Banner';
import Destinations from '../components/Destinations/Destinations';
import Features from '../components/Features/Features';
import Newsletter from '../components/Newsletter/Newsletter';
import Places from '../components/Places/Places';
import SearchContainer from '../components/SearchContainer/SearchContainer';
import Navbar from '../components/Shared/Navbar/Navbar';
import Testmonial from '../components/Testmonial/Testmonial';
import Trips from '../components/Trips/Trips';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <SearchContainer />
            <Destinations />
            <Newsletter />
            <Places />
            <Features />
            <Testmonial /> 
            <Trips />           
        </div>
    );
};

export default Home;