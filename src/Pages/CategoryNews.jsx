import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const news = useLoaderData();

    const [categoryNews, setCategoryNews] = useState([]);

    // console.log(news)

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(news);
            return;
        } else if (id == '1') {
            const filteredNewss = news.filter((news_data) => news_data.others.is_today_pick == true)
            setCategoryNews(filteredNewss)
        }
        else {
            const filteredNews = news.filter((news_data) => news_data.category_id == id)
            setCategoryNews(filteredNews)
        }
    }, [id, news])

    return (
        <div>
            <h2 className='font-bold text-center'>Total <span className='text-secondary'>{categoryNews.length}</span> news found.</h2>
            <div className='grid grid-cols-1 gap-4 mt-5'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;