import React from 'react';
import './Home.css'

// Components
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';

// Data 
import { userData } from '../../DummyData';

const Home = () => {
    console.log(userData);
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytices" grid dataKey="Active User"/>
        </div>
    );
};

export default Home;