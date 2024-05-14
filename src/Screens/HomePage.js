import React from 'react';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';
import TechnologyCarousel from '../Components/TechnologyCarousel';

function HomePage() {
    return (
        <div>

                <ResponsiveAppBar />
            
            <div className='carousel'>
                <TechnologyCarousel />
            </div>
                <MyFooter />
            
        </div>
    );
}

export default HomePage;