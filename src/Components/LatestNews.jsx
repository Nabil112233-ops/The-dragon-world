import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-2.5'>
            <p className='text-white bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex gap-5' pauseOnHover={true} speed={70}>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic commodi optio quas magnam, ipsa no.</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic commodi optio quas magnam, ipsa no.</p>
            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis hic commodi optio quas magnam, ipsa no.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;