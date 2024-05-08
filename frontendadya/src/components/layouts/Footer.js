import React from 'react';
import InstagramIcon from '../../icons/instagramIcon';
import FacebookIcon from '../../icons/facebookIcon';
import TwitterIcon from '../../icons/twitterIcon';
import YoutubeIcon from '../../icons/youtubeIcon';
import MediumIcon from '../../icons/mediumIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='border-y-[1px] border-gray-300 font-medium'>
            <div className='w-[80%] mx-auto flex flex-col gap-[10px]'>
                <div className="flex flex-row gap-[20px] py-[15px] justify-center">
                    <TwitterIcon/>
                    Nereus
                </div>
                <div className='flex flex-row gap-[30px] py-[15px] justify-center'>
                    <Link to="">Home</Link>
                    <Link to="">Policies</Link>
                    <Link to="">Purcharsed</Link>
                    <Link to="">Contact</Link>
                </div>
                <div className="flex flex-row gap-[30px] py-[15px] justify-center">
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <YoutubeIcon/>
                    <MediumIcon/>
                </div>
                <div className="flex flex-row gap-[30px] py-[15px] justify-center">
                    @ 2024 Adai . All rights reserved
                </div>
            </div>
        </section>
    );
};

export default Footer;