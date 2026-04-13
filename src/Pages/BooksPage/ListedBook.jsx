import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { RiFilePaperLine } from "react-icons/ri";


const ListedBook = ({book}) => {

const { bookName, image, author, tags, publisher, totalPages, category, rating, yearOfPublishing} = book;
    return (
        <div>

            <div className="card lg:card-side bg-base-100 border border-[#13131326] p-6 gap-8 rounded-2xl">
                {/* Book Image */}
                <figure className="bg-[#1313130d] rounded-2xl p-8 lg:w-60">
                    <img src={image} alt="Book" className="h-44 object-contain" />
                </figure>

                {/* Content Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-[#131313] mb-3">{bookName}</h2>
                    <p className="font-medium text-[#131313CC] mb-5">By : {author}</p>

                    <div className="flex flex-wrap items-center gap-6 mb-5">
                        <div className="flex items-center gap-3">
                            <span className="font-bold text-[#131313]">Tag</span>
                            {
                                tags.map((tag,index) => <span key={index} className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium">#{tag}</span>)
                            }
                            
                        </div>
                        <div className="flex items-center gap-2 text-[#131313CC]">
                            <IoLocationOutline className="text-xl" />
                            <span>Year of Publishing: {yearOfPublishing}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 text-[#13131399] mb-5 border-b border-[#13131326] pb-5">
                        <div className="flex items-center gap-2">
                            <LuUsers className="text-xl" />
                            <span>Publisher: {publisher}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <RiFilePaperLine className="text-xl" />
                            <span>Page {totalPages}</span>
                        </div>
                    </div>

                    {/* Action Badges/Buttons */}
                    <div className="flex flex-wrap gap-4 items-center">
                        <span className="px-5 py-2 rounded-full bg-[#328EFF26] text-[#328EFF]">Category: {category}</span>
                        <span className="px-5 py-2 rounded-full bg-[#FFAC3326] text-[#FFAC33]">Rating: {rating}</span>
                        <button className="btn bg-[#23BE0A] hover:bg-[#1fa808] text-white rounded-full border-none px-6">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;