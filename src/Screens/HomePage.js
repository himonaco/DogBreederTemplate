import React from 'react';
import ResponsiveAppBar from '../Components/ResponsiveAppBar';
import MyFooter from '../Components/MyFooter';

function HomePage() {
    return (
        <div>
            <ResponsiveAppBar />
            <h1>Welcome to the Home Page</h1>
            <MyFooter />
        </div>
    );
}

export default HomePage;