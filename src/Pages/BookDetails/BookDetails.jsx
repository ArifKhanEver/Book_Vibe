import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

const BookDetails = () => {
    const bookContext = useContext(BookContext);
    const {bookIdParams} = useParams();
    const books = useLoaderData();

    const { markedBooks, handleMarkAsRead, handleWishedBooks } = bookContext;

console.log()

    const clickedBook = books.find(book=> book.bookId === Number(bookIdParams));
    const { 
        image, bookName, author, category, review, 
        tags, totalPages, publisher, yearOfPublishing, rating 
    } = clickedBook;
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left side: Image Section */}
                <div className="bg-[#1313130d] rounded-3xl p-12 flex justify-center items-center h-full">
                    <img 
                        src={image} 
                        alt={bookName} 
                        className="rounded-lg shadow-xl max-h-[500px] object-contain"
                    />
                </div>

                {/* Right side: Information Section */}
                <div>
                    <h1 className="text-4xl font-bold text-[#131313] mb-3">{bookName}</h1>
                    <p className="text-xl font-medium text-[#131313CC] mb-4">By : {author}</p>
                    
                    <div className="border-y border-[#13131326] py-3 mb-4">
                        <span className="text-xl font-medium text-[#131313CC]">{category}</span>
                    </div>

                    <p className="text-[#131313B3] leading-relaxed mb-6">
                        <span className="font-bold text-[#131313]">Review : </span>
                        {review}
                    </p>

                    {/* Tags */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-bold text-[#131313]">Tag</span>
                        <div className="flex gap-3">
                            {tags.map((tag, index) => (
                                <span 
                                    key={index} 
                                    className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1 rounded-full text-sm font-medium"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-[#13131326] pt-6 mb-8">
                        <table className="table-auto w-full md:w-2/3 text-[#131313CC]">
                            <tbody>
                                <tr>
                                    <td className="py-2 pr-10">Number of Pages:</td>
                                    <td className="font-bold text-[#131313]">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Publisher:</td>
                                    <td className="font-bold text-[#131313]">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Year of Publishing:</td>
                                    <td className="font-bold text-[#131313]">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Rating:</td>
                                    <td className="font-bold text-[#131313]">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button onClick={()=>handleMarkAsRead(clickedBook)} className="btn btn-outline border-[#1313134D] px-8 text-lg font-semibold hover:bg-black hover:text-white capitalize">
                            Read
                        </button>
                        <button  onClick={()=>handleWishedBooks(clickedBook)}  className="btn bg-[#50B1C9] hover:bg-[#4396ab] text-white px-8 text-lg font-semibold border-none capitalize">
                            Wishlist
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;