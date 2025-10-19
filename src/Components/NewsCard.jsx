import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        author,
        image_url,
        thumbnail_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    // format date
    const formattedDate = new Date(author.published_date).toLocaleDateString();

    // short details
    const excerpt = details.length > 200 ? details.slice(0, 200) + "..." : details;

    return (
        <div className="card bg-base-100 shadow-md border-gray-400 mx-3.5 rounded-lg overflow-hidden hover:shadow-lg transition">
            {/* top author info */}
            <div className="flex items-center justify-between px-4 pt-3 bg-gray-200">
                <div className="flex items-center gap-2">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-sm">{author.name}</h3>
                        <p className="text-xs text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-ghost btn-xl text-gray-500">
                        <CiBookmark></CiBookmark>
                    </button>
                    <button className="btn btn-ghost btn-xl text-gray-500">
                        <CiShare2></CiShare2>
                    </button>
                </div>
            </div>

            {/* title */}
            <h2 className="px-4 pt-3 font-bold text-lg leading-snug text-gray-800">
                {title}
            </h2>

            {/* image */}
            <figure className="px-4 pt-3">
                <img
                    src={image_url || thumbnail_url}
                    alt={title}
                    className="rounded-md w-full h-52 object-cover"
                />
            </figure>

            {/* description */}
            <div className="px-4 py-3 text-sm text-gray-600">
                <p className="text-xs mb-2 text-gray-400">
                    {tags && tags.map((t, i) => (
                        <span key={i} className="mr-1">#{t}</span>
                    ))}
                </p>
                <p>{excerpt}</p>
                <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold text-sm mt-1 hover:underline">
                    Read More
                </Link>
            </div>

            {/* footer */}
            <div className="flex justify-between items-center border-t px-4 py-3 text-sm">
                <div className="flex items-center text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className={`${i < rating.number ? "" : "text-gray-300"}`}></FaStar>
                    ))}
                    <span className="ml-1 text-gray-700 font-medium">{rating.number}</span>
                </div>
                <div className="flex items-center text-gray-500 gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;