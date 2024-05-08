import React from 'react';

const Landing = () => {
    return (
        <div className='landing mb-sm-5 h-[85vh] bg-hero-image bg-no-repeat bg-cover z-10'>
            <div className='flex flex-col gap-[12px] mt-[40px]'>
                <h2 className='logo text-center mb-md-4 text-3xl font-bold font-mono'>Sri Insurance</h2>
                <h1 className='motto text-center text-xl font-mediums text-gray-00'>We Promise To Keep You Alright</h1>
                <p className='saying text-center mt-md-3 text-gray-500'>
                    Instant everything. Great price. Big heart.
                </p>
            </div>
        </div>
    );
};

export default Landing;
