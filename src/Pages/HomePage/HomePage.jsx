import React from 'react';
import Banner from './Banner';
import AllBooks from './AllBooks';

const HomePage = () => {
    return (
        <div className='container mx-auto min-h-lvh'>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage;