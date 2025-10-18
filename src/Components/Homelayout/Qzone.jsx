import React from 'react';
import swiming from '../../assets/swimming.png';
import classroom from '../../assets/class.png';
import playground from '../../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 rounded-xl p-3'>
            <h2 className='font-bold mb-5 '>Q-Zone</h2>
            <div className='space-y-5'>
                <img src={swiming} alt="" />
                <img src={classroom} alt="" />
                <img src={playground} alt="" />
            </div>
        </div>
    );
};

export default Qzone;