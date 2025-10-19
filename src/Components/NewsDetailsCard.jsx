import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    return (
        <div className='border border-gray-300 rounded-xl p-4 space-y-6'>
            <img className='w-full rounded-t-xl' src={news.image_url} alt="" />
            <h1 className='font-bold'>{news.title}</h1>
            <p>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;