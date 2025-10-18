import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            Total {categoryNews.length} news found.
        </div>
    );
};

export default CategoryNews;