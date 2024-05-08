import React from 'react';

const Landing = () => {
    return (
        <div className='mb-sm-5 h-[85vh] bg-hero-image bg-no-repeat bg-cover z-10' rel="preload">
            <div className='flex flex-col gap-[16px] mt-[40px]'>
                <h2 className='logo text-center mb-md-4 text-[40px] font-bold text-green-500'>SKC Insurance</h2>
                <h1 className='motto text-center text-[32px] font-mediums text-gray-00'>We Promise To Keep You Alright</h1>
                <p className='text-center text-[24px] mt-md-3 text-gray-500'>
                    Instant everything. Great price. Big heart.
                </p>
            </div>
        </div>
    );
};

export default Landing;
