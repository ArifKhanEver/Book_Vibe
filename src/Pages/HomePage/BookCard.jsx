import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
    const { bookId, bookName, author,image,  tags, category, rating } = book;

    return (
        <Link to={`/bookDetails/${bookId}`} className="card w-full bg-base-100 border border-[#13131326] p-6 rounded-2xl">
            {/* Image Section */}
            <figure className="bg-[#F3F3F3] rounded-2xl py-8">
                <img
                    src={image}
                    alt={bookName}
                    className="h-[166px] object-contain shadow-md"
                />
            </figure>

            {/* Content Section */}
            <div className="mt-6">
                {/* Tags */}
                <div className="flex gap-3 mb-4">
                    {tags.map((tag, index) => (
                        <span 
                            key={index} 
                            className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Title and Author */}
                <h2 className="text-2xl font-bold text-[#131313] mb-2 font-playfair">
                    {bookName}
                </h2>
                <p className="text-[#131313CC] font-medium mb-5">
                    By : {author}
                </p>

                {/* Divider Line (Dashed) */}
                <div className="border-t border-dashed border-[#13131326] mb-5"></div>

                {/* Footer Info */}
                <div className="flex justify-between items-center text-[#131313CC] font-medium">
                    <span>{category}</span>
                    <div className="flex items-center gap-2">
                        <span>{rating}</span>
                        <FaRegStar className="text-xl" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;