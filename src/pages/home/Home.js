import React from 'react';
import './Home.css'

// Components
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';

// Data 
import { userData } from '../../DummyData';

const Home = () => {
    console.log(userData);
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytices" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
                </div>
        </div>
    );
};

export default Home;